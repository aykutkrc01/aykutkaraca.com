export function SoftwareMockupVisual() {
  return (
    <svg viewBox="0 0 340 220" className="h-full w-full">
      <rect width="340" height="220" fill="#FFFFFF" />
      <rect x="0.5" y="0.5" width="339" height="219" rx="19" fill="none" stroke="#E5E5E2" />

      <rect x="0" y="0" width="340" height="34" rx="0" fill="#F7F7F5" />
      <path d="M0 17 a19 19 0 0 1 19 -17 h302 a19 19 0 0 1 19 17 Z" fill="#F7F7F5" />
      <circle cx="20" cy="17" r="4" fill="#FFB4A1" />
      <circle cx="34" cy="17" r="4" fill="#FFD79A" />
      <circle cx="48" cy="17" r="4" fill="#B7D8A8" />
      <rect x="120" y="11" width="100" height="12" rx="6" fill="#E5E5E2" />

      <rect x="16" y="50" width="82" height="154" rx="12" fill="#F7F7F5" />
      <rect x="28" y="66" width="58" height="8" rx="4" fill="#0B0B0B" />
      <rect x="28" y="90" width="46" height="7" rx="3.5" fill="#A1A1A6" />
      <rect x="28" y="108" width="52" height="7" rx="3.5" fill="#A1A1A6" />
      <rect x="28" y="126" width="40" height="7" rx="3.5" fill="#A1A1A6" />
      <rect x="20" y="150" width="70" height="34" rx="10" fill="#FFE0CF" />
      <rect x="28" y="160" width="36" height="6" rx="3" fill="#B86A4F" />
      <rect x="28" y="172" width="50" height="6" rx="3" fill="rgba(184,106,79,0.55)" />

      <rect x="112" y="50" width="212" height="72" rx="14" fill="#FFFFFF" stroke="#E5E5E2" />
      <rect x="126" y="64" width="90" height="9" rx="4.5" fill="#0B0B0B" />
      <rect x="126" y="82" width="130" height="7" rx="3.5" fill="#A1A1A6" />
      <polyline
        points="126,108 150,96 174,102 198,84 222,92 246,72 270,80 294,66 310,70"
        fill="none"
        stroke="#B86A4F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <rect x="112" y="132" width="100" height="72" rx="14" fill="#FFFFFF" stroke="#E5E5E2" />
      <rect x="124" y="144" width="60" height="8" rx="4" fill="#0B0B0B" />
      <rect x="124" y="166" width="76" height="26" rx="8" fill="#F5F5F7" />
      <rect x="132" y="172" width="8" height="14" rx="2" fill="#B8861E" />
      <rect x="144" y="176" width="8" height="10" rx="2" fill="#B8861E" />
      <rect x="156" y="168" width="8" height="18" rx="2" fill="#B8861E" />
      <rect x="168" y="174" width="8" height="12" rx="2" fill="#B8861E" />

      <rect x="224" y="132" width="100" height="72" rx="14" fill="#FFFFFF" stroke="#E5E5E2" />
      <rect x="236" y="144" width="50" height="8" rx="4" fill="#0B0B0B" />
      <circle cx="274" cy="176" r="20" fill="none" stroke="#EEF1F5" strokeWidth="9" />
      <circle
        cx="274"
        cy="176"
        r="20"
        fill="none"
        stroke="#6E8055"
        strokeWidth="9"
        strokeDasharray="86 126"
        strokeLinecap="round"
        transform="rotate(-90 274 176)"
      />
    </svg>
  );
}

export function SystemMockupVisual() {
  return (
    <svg viewBox="0 0 340 220" className="h-full w-full">
      <rect width="340" height="220" fill="#EEF1F5" />
      <rect x="0.5" y="0.5" width="339" height="219" rx="19" fill="none" stroke="#E1E6EC" />

      <line x1="170" y1="66" x2="94" y2="110" stroke="#C7D0DB" strokeWidth="2" />
      <line x1="170" y1="66" x2="246" y2="110" stroke="#C7D0DB" strokeWidth="2" />
      <line x1="94" y1="110" x2="170" y2="154" stroke="#C7D0DB" strokeWidth="2" />
      <line x1="246" y1="110" x2="170" y2="154" stroke="#C7D0DB" strokeWidth="2" />
      <line x1="94" y1="110" x2="246" y2="110" stroke="#C7D0DB" strokeWidth="2" />
      <circle cx="170" cy="110" r="4" fill="#2A3B5F" />

      <g>
        <rect x="122" y="42" width="96" height="34" rx="17" fill="#FFFFFF" stroke="#2A3B5F" strokeWidth="1.5" />
        <text x="170" y="63" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#2A3B5F">
          Rol
        </text>
      </g>
      <g>
        <rect x="30" y="94" width="96" height="34" rx="17" fill="#FFFFFF" stroke="#B86A4F" strokeWidth="1.5" />
        <text x="78" y="115" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#B86A4F">
          KPI
        </text>
      </g>
      <g>
        <rect x="198" y="94" width="96" height="34" rx="17" fill="#FFFFFF" stroke="#B8861E" strokeWidth="1.5" />
        <text x="246" y="115" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#B8861E">
          Süreç
        </text>
      </g>
      <g>
        <rect x="122" y="146" width="96" height="34" rx="17" fill="#FFFFFF" stroke="#6E8055" strokeWidth="1.5" />
        <text x="170" y="167" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#6E8055">
          Ritim
        </text>
      </g>

      <rect x="30" y="190" width="280" height="14" rx="7" fill="#FFFFFF" />
      <rect x="30" y="190" width="210" height="14" rx="7" fill="#2A3B5F" opacity="0.85" />
    </svg>
  );
}

export function DashboardMockupVisual() {
  return (
    <svg viewBox="0 0 340 220" className="h-full w-full">
      <rect width="340" height="220" fill="#FFEBCB" />
      <rect x="0.5" y="0.5" width="339" height="219" rx="19" fill="none" stroke="#F0D9AC" />

      <rect x="18" y="18" width="94" height="52" rx="12" fill="#FFFFFF" />
      <text x="30" y="38" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="500" fill="#6E6E73">
        Karar hızı
      </text>
      <text x="30" y="58" fontFamily="Inter, sans-serif" fontSize="17" fontWeight="700" fill="#0B0B0B">
        4,2 gün
      </text>

      <rect x="123" y="18" width="94" height="52" rx="12" fill="#FFFFFF" />
      <text x="135" y="38" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="500" fill="#6E6E73">
        KPI uyumu
      </text>
      <text x="135" y="58" fontFamily="Inter, sans-serif" fontSize="17" fontWeight="700" fill="#B86A4F">
        %86
      </text>

      <rect x="228" y="18" width="94" height="52" rx="12" fill="#FFFFFF" />
      <text x="240" y="38" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="500" fill="#6E6E73">
        Ritim skoru
      </text>
      <text x="240" y="58" fontFamily="Inter, sans-serif" fontSize="17" fontWeight="700" fill="#6E8055">
        7,8 / 10
      </text>

      <rect x="18" y="82" width="146" height="120" rx="12" fill="#FFFFFF" />
      <text x="30" y="100" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#0B0B0B">
        Aylık karar hacmi
      </text>
      <rect x="30" y="140" width="14" height="46" rx="3" fill="#B8861E" />
      <rect x="52" y="126" width="14" height="60" rx="3" fill="#B8861E" />
      <rect x="74" y="150" width="14" height="36" rx="3" fill="#B8861E" />
      <rect x="96" y="114" width="14" height="72" rx="3" fill="#B86A4F" />
      <rect x="118" y="132" width="14" height="54" rx="3" fill="#B8861E" />
      <rect x="140" y="104" width="14" height="82" rx="3" fill="#B86A4F" />

      <rect x="174" y="82" width="148" height="120" rx="12" fill="#FFFFFF" />
      <text x="186" y="100" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#0B0B0B">
        Süreç sağlığı
      </text>
      <circle cx="222" cy="150" r="34" fill="none" stroke="#F5F5F7" strokeWidth="12" />
      <circle
        cx="222"
        cy="150"
        r="34"
        fill="none"
        stroke="#6E8055"
        strokeWidth="12"
        strokeDasharray="145 214"
        strokeLinecap="round"
        transform="rotate(-90 222 150)"
      />
      <text x="222" y="155" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill="#0B0B0B">
        %68
      </text>
      <rect x="268" y="126" width="10" height="10" rx="2" fill="#6E8055" />
      <text x="282" y="135" fontFamily="Inter, sans-serif" fontSize="8" fill="#6E6E73">
        Hedefte
      </text>
      <rect x="268" y="144" width="10" height="10" rx="2" fill="#F5F5F7" />
      <text x="282" y="153" fontFamily="Inter, sans-serif" fontSize="8" fill="#6E6E73">
        Riskte
      </text>
    </svg>
  );
}
