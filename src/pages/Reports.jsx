export default function Reports() {
  return (
    <div className="p-8 flex flex-col relative">
      {/* Page Header & Filters */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 shrink-0">
        <div>
          <h1 className="font-page-title text-[24px] leading-[32px] font-bold text-on-surface mb-4">Reports & Analytics</h1>
          {/* Sub-nav Tabs */}
          <div className="flex gap-6 border-b border-outline-variant">
            <button className="pb-2 text-[#855300] font-bold border-b-2 border-[#855300]">Overview</button>
            <button className="pb-2 text-on-surface-variant font-medium hover:text-[#855300] transition-colors">Stall-wise</button>
            <button className="pb-2 text-on-surface-variant font-medium hover:text-[#855300] transition-colors">Payment-wise</button>
            <button className="pb-2 text-on-surface-variant font-medium hover:text-[#855300] transition-colors">Comparative</button>
          </div>
        </div>
        
        {/* Global Filters */}
        <div className="flex flex-wrap items-center gap-4 bg-white p-3 rounded-lg border border-outline-variant shadow-sm self-start">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-on-surface-variant text-[18px]">calendar_month</span>
            <input className="border-none bg-transparent text-sm text-on-surface focus:ring-0 p-0" type="date" defaultValue="2024-05-01"/>
            <span className="text-on-surface-variant px-1">-</span>
            <input className="border-none bg-transparent text-sm text-on-surface focus:ring-0 p-0" type="date" defaultValue="2024-05-30"/>
          </div>
          <div className="w-px h-6 bg-outline-variant mx-1"></div>
          <select className="border-none bg-transparent text-sm text-on-surface font-medium focus:ring-0 cursor-pointer pr-8 py-1 outline-none">
            <option>All Stalls</option>
            <option>Burger Haven</option>
            <option>Spice Route</option>
            <option>Pizza Express</option>
          </select>
          <div className="w-px h-6 bg-outline-variant mx-1"></div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 px-3 py-1.5 bg-[#f8f9fb] text-on-surface border border-outline-variant rounded hover:bg-[#e1e2e4] transition-colors text-sm">
              <span className="material-symbols-outlined text-[16px]">download</span>
              Export PDF
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-[#f8f9fb] text-on-surface border border-outline-variant rounded hover:bg-[#e1e2e4] transition-colors text-sm">
              <span className="material-symbols-outlined text-[16px]">download</span>
              Excel
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="pb-8">
        <div className="flex flex-col gap-6">
          
          {/* Revenue Trend Chart (Full Width) */}
          <div className="bg-white border border-outline-variant rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-section-title text-[18px] leading-[24px] font-medium text-on-surface">Revenue Trend</h3>
                <p className="text-sm text-on-surface-variant">Last 30 Days (Total: ₹1,245,000)</p>
              </div>
              {/* Time Chips */}
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm rounded-full border border-outline-variant text-on-surface-variant hover:bg-[#e1e2e4]">Today</button>
                <button className="px-3 py-1 text-sm rounded-full border border-outline-variant text-on-surface-variant hover:bg-[#e1e2e4]">Week</button>
                <button className="px-3 py-1 text-sm rounded-full bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b] font-medium">Month</button>
                <button className="px-3 py-1 text-sm rounded-full border border-outline-variant text-on-surface-variant hover:bg-[#e1e2e4]">Last Month</button>
              </div>
            </div>
            
            <div className="h-72 w-full relative">
              {/* SVG Area Chart Placeholder */}
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 250">
                <defs>
                  <linearGradient id="amber-gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3"></stop>
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0"></stop>
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                <path d="M0,50 L1000,50 M0,100 L1000,100 M0,150 L1000,150 M0,200 L1000,200" fill="none" stroke="#e5e7eb" strokeDasharray="4,4" strokeWidth="1"></path>
                {/* Area */}
                <path fill="url(#amber-gradient)" d="M0,200 L50,180 L100,190 L150,160 L200,170 L250,140 L300,150 L350,120 L400,130 L450,90 L500,110 L550,80 L600,100 L650,70 L700,80 L750,50 L800,60 L850,30 L900,40 L950,20 L1000,30 L1000,250 L0,250 Z"></path>
                {/* Line */}
                <path fill="none" stroke="#f59e0b" strokeWidth="2" d="M0,200 L50,180 L100,190 L150,160 L200,170 L250,140 L300,150 L350,120 L400,130 L450,90 L500,110 L550,80 L600,100 L650,70 L700,80 L750,50 L800,60 L850,30 L900,40 L950,20 L1000,30"></path>
              </svg>
              {/* Y Axis Labels */}
              <div className="absolute top-0 left-0 h-full flex flex-col justify-between text-xs text-on-surface-variant font-data-mono py-[10px] -ml-12 w-10 text-right">
                <span>₹50k</span>
                <span>₹40k</span>
                <span>₹30k</span>
                <span>₹20k</span>
                <span>₹10k</span>
                <span>₹0</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Table (55%) & Bar Chart (45%) */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            
            {/* Stall Performance Table (55%) */}
            <div className="xl:col-span-7 bg-white border border-outline-variant rounded-xl overflow-hidden flex flex-col">
              <div className="p-5 border-b border-outline-variant flex justify-between items-center bg-[#f8f9fb]/50">
                <h3 className="font-section-title text-[18px] leading-[24px] font-medium text-on-surface">Stall Performance</h3>
                <button className="text-[#855300] text-sm font-medium hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto flex-1">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant bg-[#f8f9fb] text-on-surface-variant text-[13px] leading-[16px] uppercase font-medium">
                      <th className="py-3 px-4 w-16 text-center">Rank</th>
                      <th className="py-3 px-4">Stall Name</th>
                      <th className="py-3 px-4 text-right">Revenue (₹)</th>
                      <th className="py-3 px-4 text-right">Transactions</th>
                      <th className="py-3 px-4 text-right">Avg Order</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-body">
                    <tr className="border-b border-outline-variant hover:bg-[#e1e2e4]/50 transition-colors">
                      <td className="py-3 px-4 text-center text-[#f59e0b]">
                        <span className="material-symbols-outlined text-[20px]">emoji_events</span>
                      </td>
                      <td className="py-3 px-4 font-medium text-on-surface">Burger Haven</td>
                      <td className="py-3 px-4 text-right font-data-mono">₹450,200</td>
                      <td className="py-3 px-4 text-right font-data-mono">3,210</td>
                      <td className="py-3 px-4 text-right font-data-mono">₹140</td>
                    </tr>
                    <tr className="border-b border-outline-variant hover:bg-[#e1e2e4]/50 transition-colors">
                      <td className="py-3 px-4 text-center font-bold text-on-surface-variant">2</td>
                      <td className="py-3 px-4 font-medium text-on-surface">Spice Route</td>
                      <td className="py-3 px-4 text-right font-data-mono">₹380,500</td>
                      <td className="py-3 px-4 text-right font-data-mono">2,850</td>
                      <td className="py-3 px-4 text-right font-data-mono">₹133</td>
                    </tr>
                    <tr className="border-b border-outline-variant hover:bg-[#e1e2e4]/50 transition-colors">
                      <td className="py-3 px-4 text-center font-bold text-on-surface-variant">3</td>
                      <td className="py-3 px-4 font-medium text-on-surface">Pizza Express</td>
                      <td className="py-3 px-4 text-right font-data-mono">₹290,800</td>
                      <td className="py-3 px-4 text-right font-data-mono">1,950</td>
                      <td className="py-3 px-4 text-right font-data-mono">₹149</td>
                    </tr>
                    <tr className="border-b border-outline-variant hover:bg-[#e1e2e4]/50 transition-colors">
                      <td className="py-3 px-4 text-center font-bold text-on-surface-variant">4</td>
                      <td className="py-3 px-4 font-medium text-on-surface">Wok This Way</td>
                      <td className="py-3 px-4 text-right font-data-mono">₹123,500</td>
                      <td className="py-3 px-4 text-right font-data-mono">1,120</td>
                      <td className="py-3 px-4 text-right font-data-mono">₹110</td>
                    </tr>
                    <tr className="hover:bg-[#e1e2e4]/50 transition-colors">
                      <td className="py-3 px-4 text-center font-bold text-on-surface-variant">5</td>
                      <td className="py-3 px-4 font-medium text-on-surface">Sweet Treats</td>
                      <td className="py-3 px-4 text-right font-data-mono">₹85,000</td>
                      <td className="py-3 px-4 text-right font-data-mono">1,500</td>
                      <td className="py-3 px-4 text-right font-data-mono">₹56</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Payment Method Performance (45%) */}
            <div className="xl:col-span-5 bg-white border border-outline-variant rounded-xl p-5 flex flex-col">
              <h3 className="font-section-title text-[18px] leading-[24px] font-medium text-on-surface mb-6 border-b border-outline-variant pb-4">Payment Method Performance</h3>
              <div className="flex-1 flex flex-col justify-center gap-6">
                
                {/* UPI */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#855300]">qr_code_scanner</span>
                      UPI
                    </span>
                    <span className="font-data-mono font-medium">65% (₹809,250)</span>
                  </div>
                  <div className="w-full bg-[#e1e2e4] rounded-full h-2.5">
                    <div className="bg-[#f59e0b] h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>

                {/* Credit/Debit Card */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#006c49]">credit_card</span>
                      Card
                    </span>
                    <span className="font-data-mono font-medium">25% (₹311,250)</span>
                  </div>
                  <div className="w-full bg-[#e1e2e4] rounded-full h-2.5">
                    <div className="bg-[#006c49] h-2.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>

                {/* Cash */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#5d5c71]">payments</span>
                      Cash
                    </span>
                    <span className="font-data-mono font-medium">8% (₹99,600)</span>
                  </div>
                  <div className="w-full bg-[#e1e2e4] rounded-full h-2.5">
                    <div className="bg-[#5d5c71] h-2.5 rounded-full" style={{ width: '8%' }}></div>
                  </div>
                </div>

                {/* Wallets */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#867461]">account_balance_wallet</span>
                      Wallets
                    </span>
                    <span className="font-data-mono font-medium">2% (₹24,900)</span>
                  </div>
                  <div className="w-full bg-[#e1e2e4] rounded-full h-2.5">
                    <div className="bg-[#867461] h-2.5 rounded-full" style={{ width: '2%' }}></div>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
