export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* ZONE 1: KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#f8f9fb] rounded-lg border border-[#d8c3ad] p-5 flex flex-col justify-between h-[120px]">
            <div className="flex justify-between items-start">
              <span className="font-label-sm text-[12px] leading-[16px] text-[#534434] uppercase tracking-wider">Today's Sales</span>
              <span className="material-symbols-outlined text-[#f59e0b] text-[20px]">payments</span>
            </div>
            <div className="font-page-title text-[28px] leading-tight font-bold text-[#191c1e]">₹18,420</div>
          </div>
          <div className="bg-[#f8f9fb] rounded-lg border border-[#d8c3ad] p-5 flex flex-col justify-between h-[120px]">
            <div className="flex justify-between items-start">
              <span className="font-label-sm text-[12px] leading-[16px] text-[#534434] uppercase tracking-wider">Total Number of Bills</span>
              <span className="material-symbols-outlined text-[#5d5c71] text-[20px]">receipt_long</span>
            </div>
            <div className="font-page-title text-[28px] leading-tight font-bold text-[#191c1e]">94</div>
          </div>
          <div className="bg-[#f8f9fb] rounded-lg border border-[#d8c3ad] p-5 flex flex-col justify-between h-[120px]">
            <div className="flex justify-between items-start">
              <span className="font-label-sm text-[12px] leading-[16px] text-[#534434] uppercase tracking-wider">Active Employees</span>
              <span className="material-symbols-outlined text-[#30c88f] text-[20px]">badge</span>
            </div>
            <div className="font-page-title text-[28px] leading-tight font-bold text-[#191c1e]">3</div>
          </div>
          <div className="bg-[#f8f9fb] rounded-lg border border-[#d8c3ad] p-5 flex flex-col gap-2 min-h-[120px]">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="font-label-sm text-[12px] leading-[16px] text-[#534434] uppercase tracking-wider">MTD Performance</span>
                <span className="text-[10px] text-[#534434]">vs last month</span>
              </div>
              <span className="material-symbols-outlined text-[#006c49] text-[20px]">trending_up</span>
            </div>
            <div className="flex flex-col">
              <div className="font-page-title text-[20px] font-bold text-[#191c1e]">₹4,85,000</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-medium text-[#10B981]">+15.48%</span>
                <span className="text-xs text-[#534434]">+₹65,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* ZONE 2: Charts and Lists */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Line Chart (65%) */}
          <div className="lg:w-[65%] bg-[#f8f9fb] rounded-lg border border-[#d8c3ad] p-6 flex flex-col min-h-[360px]">
            <div className="flex bg-[#f3f4f6] rounded p-1 gap-1 w-fit mb-4">
              <button className="px-3 py-1 text-xs font-medium rounded bg-[#f59e0b] text-[#613b00]">Daily</button>
              <button className="px-3 py-1 text-xs font-medium rounded hover:bg-[#e1e2e4] text-[#534434]">Weekly</button>
              <button className="px-3 py-1 text-xs font-medium rounded hover:bg-[#e1e2e4] text-[#534434]">Monthly</button>
            </div>
            <div className="flex justify-between items-center border-b border-[#d8c3ad] pb-4 mb-4">
              <h3 className="font-section-title text-[18px] leading-[24px] font-medium text-[#191c1e]">Sales Trend — Last 7 Days</h3>
              <button className="text-[#534434] hover:text-[#855300] transition-colors">
                <span className="material-symbols-outlined text-[20px]">more_vert</span>
              </button>
            </div>
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 flex items-end justify-between px-2 pt-8 pb-6">
                <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-xs text-[#534434] font-data-mono">
                  <span>20k</span><span>15k</span><span>10k</span><span>5k</span><span>0</span>
                </div>
                <div className="absolute left-12 right-0 top-0 bottom-8 flex flex-col justify-between">
                  <div className="w-full border-t border-outline-variant/30 h-0"></div>
                  <div className="w-full border-t border-outline-variant/30 h-0"></div>
                  <div className="w-full border-t border-outline-variant/30 h-0"></div>
                  <div className="w-full border-t border-outline-variant/30 h-0"></div>
                  <div className="w-full border-t border-outline-variant/30 h-0"></div>
                </div>
                <svg className="absolute left-12 right-0 top-0 bottom-8 w-[calc(100%-3rem)] h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,80 L15,60 L30,65 L45,40 L60,50 L75,20 L90,30 L100,10" fill="none" stroke="#F59E0B" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                  <path d="M0,80 L15,60 L30,65 L45,40 L60,50 L75,20 L90,30 L100,10 L100,100 L0,100 Z" fill="url(#amber-grad)" opacity="0.1"></path>
                  <defs>
                    <linearGradient id="amber-grad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#F59E0B" stopOpacity="1"></stop>
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute left-12 right-0 bottom-0 flex justify-between text-xs text-[#534434] font-data-mono pr-4">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Top Selling List (35%) */}
          <div className="lg:w-[35%] flex flex-col gap-6">
            <div className="bg-[#f8f9fb] rounded-lg border border-[#d8c3ad] flex flex-col">
              <div className="p-6 border-b border-[#d8c3ad]">
                <h3 className="font-section-title text-[18px] leading-[24px] font-medium text-[#191c1e]">5 Worst Selling Items</h3>
              </div>
              <div className="p-2 flex flex-col gap-1">
                {[
                  { name: 'Plain Curd', orders: 2 },
                  { name: 'Boiled Egg', orders: 4 },
                  { name: 'Butter Milk', orders: 5 },
                  { name: 'Ragi Mudde', orders: 7 },
                  { name: 'Lemon Rice', orders: 8 }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded hover:bg-[#f3f4f6] transition-colors">
                    <span className="font-data-mono text-xs text-[#534434] w-4">{idx + 1}.</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-body text-[14px] leading-[20px] font-medium text-[#191c1e] truncate">{item.name}</h4>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-body text-[14px] leading-[20px] font-bold text-[#191c1e]">{item.orders}</div>
                      <div className="font-label-sm text-[12px] leading-[16px] text-[#534434]">orders</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ZONE 3: Category Sales */}
        <div className="bg-[#f8f9fb] rounded-lg border border-[#d8c3ad] p-6 mb-8">
          <h3 className="font-section-title text-[18px] leading-[24px] font-medium text-[#191c1e] mb-6">Category-wise Sales (Today)</h3>
          <div className="flex flex-col md:flex-row items-center justify-around gap-8">
            <div className="relative w-48 h-48 rounded-full border-[16px] border-[#f59e0b] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[16px] border-[#5d5c71] border-t-transparent border-r-transparent rotate-45"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">₹18,420</div>
                <div className="text-xs text-[#534434]">Total</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div><span className="text-sm">Main Course (65%)</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#5d5c71]"></div><span className="text-sm">Starters (20%)</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#30c88f]"></div><span className="text-sm">Beverages (10%)</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#867461]"></div><span className="text-sm">Desserts (5%)</span></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
