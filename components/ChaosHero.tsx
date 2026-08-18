'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

/* ============================================================
   ChaosHero — "Chaos to System Engine"
   Kaos halindeki sinyal alanı, kendiliğinden bir organizasyon
   şemasına oturur; yetkinlik çipleri de aynı koreografiyle
   alt raya dizilir. İmleç "netlik merceği" olarak çalışır.
   Tüm hareket tek bir skalerden (order 0→1) türetilir.
   ============================================================ */

const TOMORROWHR_URL = 'https://tomorrowhr.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/aykutkaraca/';

/* Geliştirilen ürünler — hero altındaki ürün rayı */
const PRODUCTS = [
  { name: 'Confluro', role: 'CRM, proje ve finans', href: 'https://www.confluro.com/tr' },
  { name: 'GURU', role: 'tarif ve üretim', href: 'https://guru.confluro.com/giris' },
  { name: 'xPer', role: 'performans yönetimi', href: 'https://tomorrowhr-performans.vercel.app/login' },
  { name: 'HR Platform', role: 'dijital İK süreçleri', href: 'https://tomorrowhr-hr.vercel.app/' },
];

/* Canvas, CSS değişkenlerini okuyamadığı için sahne renkleri burada sabitlenir */
const SCENE = {
  teal: '14,158,144',
  ink: '11,11,11',
  muted: '110,110,115',
  tealDeep: '11,125,114',
};

const PHASE_LABELS: [number, string][] = [
  [0.35, 'karmaşa okunuyor'],
  [0.72, 'yapı kuruluyor'],
  [0.98, 'sistem oturuyor'],
  [Infinity, 'ürünleşti — tomorrowHR'],
];

type Node = {
  cx: number; cy: number; ox: number; oy: number;
  tx: number; ty: number; lvl: number;
  x: number; y: number; lens: number; lo: number;
};

type Chip = {
  el: HTMLSpanElement;
  cx: number; cy: number; ox: number; oy: number;
  tx: number; ty: number; w: number; row: number;
};

function ease(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

/* Otomatik döngü: 0→1 ramp (8s), üründe bekleme (5s), yumuşak sıfırlanış */
const CYCLE = 17;
function autoOrder(time: number) {
  const p = time % CYCLE;
  if (p < 8) return ease(p / 8);
  if (p < 13) return 1;
  if (p < 15.5) return 1 - ease((p - 13) / 2.5) * 0.95;
  return 0.05;
}

const CHIP_DEFS = [
  {
    label: 'Power BI',
    icon: (
      <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
        <rect x="2.6" y="10.2" width="3.6" height="7.2" rx="1" fill="#E8A812" />
        <rect x="8.2" y="6" width="3.6" height="11.4" rx="1" fill="#F2C811" />
        <rect x="13.8" y="2.4" width="3.6" height="15" rx="1" fill="#F6D65C" />
      </svg>
    ),
  },
  {
    label: 'Microsoft',
    icon: (
      <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
        <rect x="2.4" y="2.4" width="7.2" height="7.2" fill="#F25022" />
        <rect x="10.4" y="2.4" width="7.2" height="7.2" fill="#7FBA00" />
        <rect x="2.4" y="10.4" width="7.2" height="7.2" fill="#00A4EF" />
        <rect x="10.4" y="10.4" width="7.2" height="7.2" fill="#FFB900" />
      </svg>
    ),
  },
  {
    label: 'AI Yazılımı',
    icon: (
      <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
        <path d="M8.2 2.6l1.6 4.1 4.1 1.6-4.1 1.6-1.6 4.1-1.6-4.1-4.1-1.6 4.1-1.6z" fill="#0E9E90" />
        <path d="M15 11.4l.95 2.45 2.45.95-2.45.95L15 18.2l-.95-2.45-2.45-.95 2.45-.95z" fill="#5CC6BB" />
      </svg>
    ),
  },
  {
    label: 'İK Mentörlüğü',
    icon: (
      <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
        <circle cx="7" cy="6.4" r="2.9" fill="#4A5563" />
        <path d="M1.8 16.6c0-2.9 2.3-5.2 5.2-5.2s5.2 2.3 5.2 5.2v.8H1.8z" fill="#4A5563" />
        <circle cx="14.2" cy="7.2" r="2.3" fill="#8B93A1" />
        <path d="M11.9 12.9a4.2 4.2 0 0 1 6.5 3.5v1h-4.6a6.3 6.3 0 0 0-1.9-4.5z" fill="#8B93A1" />
      </svg>
    ),
  },
];

/* TomorrowHR logo işareti: iki turuncu damla + lacivert nokta */
function TomorrowHRMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="7.2" cy="10.5" rx="3.9" ry="8" fill="var(--color-thr-orange)" />
      <ellipse cx="16.4" cy="15.2" rx="3.1" ry="6.4" fill="var(--color-thr-orange)" />
      <circle cx="16.9" cy="4.1" r="2.5" fill="var(--color-thr-navy)" />
    </svg>
  );
}

export default function ChaosHero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  const chipRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!stage || !canvas || !ctx) return;

    /* hold=1 test amaçlı: sahneyi ürün halinde sabitler.
       Animasyon her cihazda sürekli çalışır (bilinçli tercih). */
    const hold = /[?&]hold=1/.test(window.location.search);

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;
    let TW = 0;
    const mouse = { x: -9999, y: -9999 };
    let nodes: Node[] = [];
    let edges: [number, number][] = [];

    const chips: Chip[] = [];
    chipRefs.current.forEach((el) => {
      if (el) {
        chips.push({
          el, cx: 0, cy: 0,
          ox: Math.random() * 1000, oy: Math.random() * 1000,
          tx: 0, ty: 0, w: 0, row: 0,
        });
      }
    });

    function layoutChips() {
      /* hedef ray: portreye değmeden, alttan yukarı satırlara akıt */
      const pw = (window.innerWidth > 860 ? 280 : 160) + 16;
      const gap = 10;
      const availW = Math.max(150, W - pw) - 14;
      let x = 14;
      let row = 0;
      const rowCounts = [0];
      chips.forEach((c) => {
        c.w = c.el.offsetWidth;
        if (x + c.w > availW && rowCounts[row] > 0) {
          row++;
          rowCounts.push(0);
          x = 14;
        }
        c.tx = x;
        c.row = row;
        x += c.w + gap;
        rowCounts[row]++;
        c.cx = 20 + Math.random() * Math.max(60, availW - c.w - 40);
        c.cy = 40 + Math.random() * Math.max(80, H - 160);
      });
      const chipH = chips[0]?.el.offsetHeight ?? 30;
      const totalRows = rowCounts.length;
      chips.forEach((c) => {
        c.ty = H - 14 - chipH - (totalRows - 1 - c.row) * (chipH + 8);
      });
    }

    /* Organigram formasyonu: kök → birimler → ekipler → üyeler + serbest sinyaller */
    function build() {
      nodes = [];
      edges = [];
      const mx = Math.max(26, TW * 0.06);
      const top = 50;
      const bottom = H - 70;
      const add = (tx: number, ty: number, lvl: number) => {
        nodes.push({
          cx: mx + Math.random() * (TW - 2 * mx),
          cy: 34 + Math.random() * (H - 68),
          ox: Math.random() * 1000, oy: Math.random() * 1000,
          tx, ty, lvl, x: 0, y: 0, lens: 0, lo: 0,
        });
        return nodes.length - 1;
      };
      const rowY = [top, top + (bottom - top) * 0.3, top + (bottom - top) * 0.62, bottom];
      const root = add(TW / 2, rowY[0], 0);
      const UN = 4;
      const TE = 3;
      const ME = 4;
      for (let u = 0; u < UN; u++) {
        const ux = TW * (0.13 + 0.74 * (u / (UN - 1)));
        const un = add(ux, rowY[1], 1);
        edges.push([root, un]);
        for (let t = 0; t < TE; t++) {
          const tw = (TW * 0.74) / UN;
          const txx = ux - tw / 2 + tw * (0.2 + 0.6 * (t / (TE - 1)));
          const tn = add(txx, rowY[2], 2);
          edges.push([un, tn]);
          for (let m = 0; m < ME; m++) {
            const mw = (tw / TE) * 1.15;
            const mxx = txx - mw / 2 + mw * (m / (ME - 1));
            const mn = add(mxx, rowY[3] - (m % 2) * 14, 3);
            edges.push([tn, mn]);
          }
        }
      }
      for (let i = 0; i < 55; i++) {
        const host = nodes[1 + Math.floor(Math.random() * (nodes.length - 1))];
        add(host.tx + (Math.random() - 0.5) * 24, host.ty + (Math.random() - 0.5) * 16, 4);
      }
    }

    function resize() {
      const r = canvas!.getBoundingClientRect();
      W = r.width;
      H = r.height;
      TW = Math.max(220, W - 130); // ağaç hafifçe portrenin arkasına taşabilir (derinlik)
      canvas!.width = W * DPR;
      canvas!.height = H * DPR;
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
      build();
      layoutChips();
    }

    function render(o: number, T: number) {
      ctx!.clearRect(0, 0, W, H);

      for (const n of nodes) {
        const wob = (1 - o) * 26;
        const cx = n.cx + Math.sin(T * 0.8 + n.ox) * wob * 1.6 + Math.cos(T * 0.56 + n.oy) * wob;
        const cy = n.cy + Math.cos(T * 0.72 + n.oy) * wob * 1.4 + Math.sin(T * 0.48 + n.ox) * wob * 0.6;
        const dx = n.tx - mouse.x;
        const dy = n.ty - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        const lens = Math.max(0, 1 - d / 150);
        const lo = Math.min(1, o + lens * 0.75 * (0.25 + o));
        n.x = cx + (n.tx - cx) * lo;
        n.y = cy + (n.ty - cy) * lo;
        n.lens = lens;
        n.lo = lo;
      }

      for (const [ai, bi] of edges) {
        const a = nodes[ai];
        const b = nodes[bi];
        const vis = Math.max(0, (a.lo + b.lo) / 2 - 0.15) / 0.85;
        if (vis <= 0.01) continue;
        const glow = Math.max(a.lens, b.lens);
        const alpha = 0.06 + vis * vis * 0.45 + glow * 0.3;
        ctx!.strokeStyle =
          glow > 0.05 || vis > 0.6
            ? `rgba(${SCENE.teal},${alpha})`
            : `rgba(${SCENE.muted},${alpha * 0.55})`;
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(b.x, b.y);
        ctx!.stroke();
      }

      for (const p of nodes) {
        const r = p.lvl === 0 ? 4.4 : p.lvl === 1 ? 3.2 : p.lvl === 4 ? 1.2 : 2.1;
        const act = Math.min(1, p.lo * p.lo + p.lens);
        let col: string;
        if (p.lvl === 0 && o > 0.9) col = `rgba(${SCENE.tealDeep},${0.6 + 0.4 * o})`;
        else if (act > 0.55) col = `rgba(${SCENE.teal},${0.4 + act * 0.55})`;
        else col = `rgba(${SCENE.ink},${0.2 + act * 0.35})`;
        ctx!.fillStyle = col;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, r + p.lens * 1.3, 0, 6.2832);
        ctx!.fill();
      }

      /* çipler: kaos konumundan alt raya */
      const co = ease(Math.max(0, Math.min(1, (o - 0.15) / 0.75)));
      for (const c of chips) {
        const wob = (1 - co) * 18;
        const fx = c.cx + Math.sin(T * 0.5 + c.ox) * wob * 1.5;
        const fy = c.cy + Math.cos(T * 0.42 + c.oy) * wob;
        const x = fx + (c.tx - fx) * co;
        const y = fy + (c.ty - fy) * co;
        c.el.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
        c.el.style.opacity = (0.45 + 0.55 * co).toFixed(2);
        c.el.dataset.docked = co > 0.92 ? 'true' : 'false';
      }

      if (statusRef.current) {
        const label = PHASE_LABELS.find(([limit]) => o < limit)?.[1] ?? '';
        statusRef.current.textContent = label;
      }
    }

    let rafId = 0;
    let T0: number | null = null;
    let running = false;

    function frame(ts: number) {
      if (T0 === null) T0 = ts;
      const T = (ts - T0) / 1000;
      render(hold ? 1 : autoOrder(T), T);
      if (running) rafId = requestAnimationFrame(frame);
    }

    function start() {
      if (running) return;
      running = true;
      rafId = requestAnimationFrame(frame);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(rafId);
    }

    const onPointerMove = (ev: PointerEvent) => {
      const r = canvas!.getBoundingClientRect();
      mouse.x = ev.clientX - r.left;
      mouse.y = ev.clientY - r.top;
    };
    const onPointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerleave', onPointerLeave);

    const ro = new ResizeObserver(() => {
      resize();
    });
    ro.observe(stage);

    /* Sahne görünür değilken hiç çizme */
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    io.observe(stage);

    resize();
    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return (
    <section className="grid items-center gap-[var(--space-lg)] pb-[var(--space-xl)] pt-[var(--space-2xl)] md:min-h-[92vh] md:grid-cols-[minmax(360px,44%)_1fr] md:gap-[var(--space-xl)] md:pb-[var(--space-2xl)] md:pt-[var(--space-3xl)]">
      <div className="max-w-[480px]">
        <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-[var(--color-teal)]">
          Organizasyonel Ürünleştirilmiş Danışmanlık
        </p>
        <h1 className="mt-[var(--space-lg)] text-[clamp(34px,4.6vw,52px)] font-semibold leading-[1.06] tracking-[-0.028em] [text-wrap:balance]">
          Karmaşadan, çalışan akıllı sistemlere.
        </h1>
        <p className="mt-[var(--space-lg)] max-w-[42ch] font-sans text-[17.5px] leading-[1.6] text-[var(--color-warm-gray)]">
          Büyüyen her organizasyonda karmaşa birikir. Doğru okunduğunda karmaşa
          yapıya, yapı sisteme; sistem de{' '}
          <strong className="font-semibold text-[var(--color-thr-navy)]">
            TomorrowHR
          </strong>{' '}
          ile AI destekli ürünlere dönüşür.
        </p>

        <div className="mt-[var(--space-2xl)] flex max-w-[420px] flex-col gap-[10px]">
          <a
            href={TOMORROWHR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="lift-link flex items-center gap-[14px] rounded-[12px] border border-[var(--color-border)] bg-white px-[18px] py-[14px] shadow-[var(--shadow-soft)]"
          >
            <span className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[10px] bg-[var(--color-surface)]">
              <TomorrowHRMark />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-sans text-[15px] font-semibold tracking-[-0.01em] text-[var(--color-thr-navy)]">
                TomorrowHR
              </span>
              <span className="block font-sans text-[13px] text-[var(--color-warm-gray)]">
                Danışmanlık, know-how ve geliştirilen ürünler
              </span>
            </span>
            <span className="flex-none text-[var(--color-light-gray)]">→</span>
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="lift-link flex items-center gap-[14px] rounded-[12px] border border-[var(--color-border)] bg-white px-[18px] py-[14px] shadow-[var(--shadow-soft)]"
          >
            <span className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[10px] bg-[var(--color-linkedin)] text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-sans text-[15px] font-semibold tracking-[-0.01em]">
                LinkedIn
              </span>
              <span className="block font-sans text-[13px] text-[var(--color-warm-gray)]">
                Profil, deneyim ve paylaşımlar
              </span>
            </span>
            <span className="flex-none text-[var(--color-light-gray)]">→</span>
          </a>
        </div>

        {/* Ürün rayı: danışmanlığın ürünleştiğinin kanıtı */}
        <div className="mt-[var(--space-2xl)]">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-light-gray)]">
            Geliştirilen Ürünler
          </p>
          <div className="mt-[var(--space-md)] flex flex-wrap gap-[8px]">
            {PRODUCTS.map((product) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-baseline gap-[6px] rounded-full border border-[var(--color-border)] bg-white px-[13px] py-[7px] shadow-[0_2px_8px_rgba(11,11,11,0.04)] transition-colors hover:border-[rgba(14,158,144,0.45)]"
              >
                <span className="font-sans text-[13px] font-semibold tracking-[-0.01em] text-[var(--color-charcoal)]">
                  {product.name}
                </span>
                <span className="font-sans text-[12px] text-[var(--color-warm-gray)]">
                  {product.role}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={stageRef}
        className="relative order-first min-h-[360px] self-stretch md:order-none md:min-h-[520px]"
      >
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full cursor-crosshair [touch-action:pan-y]"
        />
        <p
          className="pointer-events-none absolute left-[6px] top-[6px] font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-light-gray)]"
          aria-hidden="true"
        >
          <span className="text-[var(--color-teal)]">· </span>
          <span ref={statusRef}>karmaşa okunuyor</span>
        </p>

        {CHIP_DEFS.map((d, i) => (
          <span
            key={d.label}
            ref={(el) => {
              chipRefs.current[i] = el;
            }}
            className="chaos-chip"
            aria-hidden="true"
          >
            <span className="flex h-[20px] w-[20px] flex-none items-center justify-center">
              {d.icon}
            </span>
            {d.label}
          </span>
        ))}

        {/* Portre: kart değil, sayfaya gömülü gravür — renksiz, kenarsız,
            multiply karışım + zemine eriyen degrade katman */}
        <Image
          src="/images/portraits/aykut-karaca-portrait-01.jpg"
          alt="Aykut Karaca"
          width={300}
          height={450}
          priority
          className="chaos-portrait pointer-events-none absolute bottom-[-4px] right-[-10px] z-[3] w-[195px] md:w-[300px]"
        />
        <div
          aria-hidden="true"
          className="chaos-portrait-fade pointer-events-none absolute bottom-[-4px] right-[-10px] z-[4] h-[293px] w-[195px] md:h-[451px] md:w-[300px]"
        />
      </div>
    </section>
  );
}
