export default function ShiftManagement() {
  return (
    <div className="p-8 flex flex-col h-full relative">
      {/* Header Section */}
      <header className="mb-6 shrink-0">
        <h2 className="font-page-title text-[24px] leading-[32px] text-on-surface font-bold">Shift Management</h2>
        <p className="font-body text-[14px] leading-[20px] text-on-surface-variant max-w-2xl">Track shift activity, collections, billing performance, and shift closures for employees working at the stall.</p>
      </header>

      {/* Bento Grid: Analytics & Performance */}
      <div className="grid grid-cols-12 gap-6 mb-6 shrink-0">
        {/* Summary Stats (Top Row) */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#ffffff] border border-outline-variant rounded-xl p-6 transition-all hover:border-[#855300] cursor-default group">
            <div className="flex justify-between items-start mb-2">
              <span className="material-symbols-outlined text-[#855300]">groups</span>
              <span className="text-xs font-medium text-[#004e34] bg-[#30c88f]/10 px-2 py-1 rounded-full">+2 Active</span>
            </div>
            <p className="text-on-surface-variant text-sm font-medium">Active Employees</p>
            <h3 className="text-2xl font-bold text-on-surface">2</h3>
          </div>
          <div className="bg-[#ffffff] border border-outline-variant rounded-xl p-6 transition-all hover:border-[#855300] cursor-default group">
            <div className="flex justify-between items-start mb-2">
              <span className="material-symbols-outlined text-[#855300]">payments</span>
            </div>
            <p className="text-on-surface-variant text-sm font-medium">Collections Today</p>
            <h3 className="text-2xl font-bold text-on-surface">₹36,840</h3>
          </div>
          <div className="bg-[#ffffff] border border-outline-variant rounded-xl p-6 transition-all hover:border-[#855300] cursor-default group">
            <div className="flex justify-between items-start mb-2">
              <span className="material-symbols-outlined text-[#855300]">receipt_long</span>
            </div>
            <p className="text-on-surface-variant text-sm font-medium">Total Bills</p>
            <h3 className="text-2xl font-bold text-on-surface">188</h3>
          </div>
        </div>

        {/* MTD Comparison (Right Side Sidebar of Bento) */}
        <div className="col-span-12 lg:col-span-4 bg-[#1a1a2c] border border-outline-variant rounded-xl p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-white/60 text-sm font-medium mb-1">MTD Performance</p>
            <h3 className="text-3xl font-bold mb-4">₹4,85,000</h3>
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center text-[#4edea3] text-sm font-bold">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                15.48%
              </span>
              <span className="text-white/40 text-xs">vs. Previous MTD</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#855300] w-[75%]"></div>
              </div>
              <p className="text-xs text-white/60">Target: ₹6,50,000</p>
            </div>
          </div>
          <div className="absolute -right-12 -bottom-12 opacity-10">
            <span className="material-symbols-outlined text-[160px]">bar_chart</span>
          </div>
        </div>
      </div>

      <div className="pb-20">
        {/* Active Shifts Section */}
        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h3 className="font-section-title text-[18px] leading-[24px] text-on-surface">Active Shifts</h3>
              <span className="bg-[#30c88f]/10 text-[#004e34] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">2 running</span>
            </div>
            <button className="text-[#855300] text-sm font-medium hover:underline flex items-center gap-1">
              Refresh Feed <span className="material-symbols-outlined text-sm">refresh</span>
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Employee Card 1 */}
            <div className="bg-[#ffffff] border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col">
              <div className="p-6 border-b border-outline-variant bg-[#f3f4f6]/30">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#f59e0b]/20 flex items-center justify-center text-[#f59e0b] font-bold text-lg">AR</div>
                    <div>
                      <h4 className="font-section-title text-[18px] leading-[24px] text-on-surface">Anand R.</h4>
                      <p className="text-on-surface-variant text-xs">Started 09:00 AM • 03 Jul 2024</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 px-2 py-1 bg-[#30c88f]/10 text-[#004e34] text-xs font-medium rounded-full">
                    <span className="w-1.5 h-1.5 bg-[#30c88f] rounded-full animate-pulse"></span>
                    Active
                  </span>
                </div>
              </div>
              <div className="p-6 grid grid-cols-3 gap-4">
                <div className="p-3 bg-surface-container rounded-lg">
                  <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-wider mb-1">Bills</p>
                  <p className="text-lg font-bold text-on-surface">94</p>
                </div>
                <div className="p-3 bg-surface-container rounded-lg">
                  <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-wider mb-1">Total</p>
                  <p className="text-lg font-bold text-on-surface">₹18,420</p>
                </div>
                <div className="p-3 bg-surface-container rounded-lg">
                  <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-wider mb-1">Cash</p>
                  <p className="text-lg font-bold text-[#006c49]">₹7,200</p>
                </div>
                <div className="p-3 bg-surface-container rounded-lg">
                  <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-wider mb-1">UPI</p>
                  <p className="text-lg font-bold text-[#5d5c71]">₹6,800</p>
                </div>
                <div className="p-3 bg-surface-container rounded-lg">
                  <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-wider mb-1">Card</p>
                  <p className="text-lg font-bold text-on-surface">₹2,420</p>
                </div>
                <div className="p-3 bg-surface-container rounded-lg">
                  <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-wider mb-1">Wallet</p>
                  <p className="text-lg font-bold text-on-surface">₹2,000</p>
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <button className="w-full bg-[#1a1a2c] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-black transition-colors active:scale-95 duration-150">
                  <span className="material-symbols-outlined text-sm">cancel</span>
                  Close Shift
                </button>
              </div>
            </div>

            {/* Employee Card 2 */}
            <div className="bg-[#ffffff] border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col">
              <div className="p-6 border-b border-outline-variant bg-[#f3f4f6]/30">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#e0ddf6]/20 flex items-center justify-center text-[#5d5c71] font-bold text-lg">KM</div>
                    <div>
                      <h4 className="font-section-title text-[18px] leading-[24px] text-on-surface">Kavitha M.</h4>
                      <p className="text-on-surface-variant text-xs">Started 09:00 AM • 03 Jul 2024</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 px-2 py-1 bg-[#30c88f]/10 text-[#004e34] text-xs font-medium rounded-full">
                    <span className="w-1.5 h-1.5 bg-[#30c88f] rounded-full animate-pulse"></span>
                    Active
                  </span>
                </div>
              </div>
              <div className="p-6 grid grid-cols-3 gap-4">
                <div className="p-3 bg-surface-container rounded-lg">
                  <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-wider mb-1">Bills</p>
                  <p className="text-lg font-bold text-on-surface">0</p>
                </div>
                <div className="p-3 bg-surface-container rounded-lg">
                  <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-wider mb-1">Total</p>
                  <p className="text-lg font-bold text-on-surface">₹0</p>
                </div>
                <div className="p-3 bg-surface-container rounded-lg">
                  <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-wider mb-1">Cash</p>
                  <p className="text-lg font-bold text-on-surface">₹0</p>
                </div>
                <div className="p-3 bg-surface-container rounded-lg">
                  <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-wider mb-1">UPI</p>
                  <p className="text-lg font-bold text-on-surface">₹0</p>
                </div>
                <div className="p-3 bg-surface-container rounded-lg">
                  <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-wider mb-1">Card</p>
                  <p className="text-lg font-bold text-on-surface">₹0</p>
                </div>
                <div className="p-3 bg-surface-container rounded-lg">
                  <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-wider mb-1">Wallet</p>
                  <p className="text-lg font-bold text-on-surface">₹0</p>
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <button className="w-full bg-[#1a1a2c] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-black transition-colors active:scale-95 duration-150">
                  <span className="material-symbols-outlined text-sm">cancel</span>
                  Close Shift
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Performance Summary Secondary Layer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-[#ffffff] border border-outline-variant rounded-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-on-surface-variant text-sm font-medium">Avg Bill Value</p>
              <h3 className="text-2xl font-bold text-on-surface">₹196</h3>
            </div>
            <div className="p-4 bg-[#855300]/10 rounded-full">
              <span className="material-symbols-outlined text-[#855300] text-2xl">calculate</span>
            </div>
          </div>
          <div className="bg-[#ffffff] border border-outline-variant rounded-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-on-surface-variant text-sm font-medium">Highest Performing</p>
              <h3 className="text-2xl font-bold text-on-surface">Anand R.</h3>
            </div>
            <div className="p-4 bg-[#006c49]/10 rounded-full">
              <span className="material-symbols-outlined text-[#006c49] text-2xl">trophy</span>
            </div>
          </div>
        </div>

        {/* Shift History Table Section */}
        <section className="bg-[#ffffff] border border-outline-variant rounded-xl overflow-hidden mb-6">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center">
            <h3 className="font-section-title text-[18px] leading-[24px] text-on-surface">Shift History</h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm border border-outline-variant rounded-lg font-medium hover:bg-[#f3f4f6] transition-colors">
                Filter by Date
              </button>
              <button className="px-4 py-2 text-sm border border-outline-variant rounded-lg font-medium hover:bg-[#f3f4f6] transition-colors">
                Export Report
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#f3f4f6]">
                <tr>
                  <th className="px-6 py-4 font-table-header text-[13px] leading-[16px] font-medium text-on-surface-variant uppercase tracking-wider">Shift ID</th>
                  <th className="px-6 py-4 font-table-header text-[13px] leading-[16px] font-medium text-on-surface-variant uppercase tracking-wider">Employee</th>
                  <th className="px-6 py-4 font-table-header text-[13px] leading-[16px] font-medium text-on-surface-variant uppercase tracking-wider">Date/Timing</th>
                  <th className="px-6 py-4 font-table-header text-[13px] leading-[16px] font-medium text-on-surface-variant uppercase tracking-wider text-right">Bills</th>
                  <th className="px-6 py-4 font-table-header text-[13px] leading-[16px] font-medium text-on-surface-variant uppercase tracking-wider text-right">Cash</th>
                  <th className="px-6 py-4 font-table-header text-[13px] leading-[16px] font-medium text-on-surface-variant uppercase tracking-wider text-right">Digital</th>
                  <th className="px-6 py-4 font-table-header text-[13px] leading-[16px] font-medium text-on-surface-variant uppercase tracking-wider text-right">Total</th>
                  <th className="px-6 py-4 font-table-header text-[13px] leading-[16px] font-medium text-on-surface-variant uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 font-table-header text-[13px] leading-[16px] font-medium text-on-surface-variant uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant font-body text-[14px] leading-[20px]">
                <tr className="hover:bg-[#f3f4f6] transition-colors group">
                  <td className="px-6 py-4 font-data-mono text-[13px] leading-[18px]">SFT-003</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#006c49]/10 text-[#006c49] flex items-center justify-center font-bold text-xs">DS</div>
                      <span className="font-medium">Deepak S.</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium">02 Jul 2024</p>
                    <p className="text-xs text-on-surface-variant">03:00 PM - 11:00 PM</p>
                  </td>
                  <td className="px-6 py-4 text-right font-medium">112</td>
                  <td className="px-6 py-4 text-right text-[#006c49] font-medium">₹9,400</td>
                  <td className="px-6 py-4 text-right">₹14,100</td>
                  <td className="px-6 py-4 text-right font-bold">₹23,500</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-surface-container text-on-surface-variant text-xs font-medium rounded-full">Closed</span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-1 hover:text-[#855300] transition-colors">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-[#f3f4f6] transition-colors group">
                  <td className="px-6 py-4 font-data-mono text-[13px] leading-[18px]">SFT-004</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#855300]/10 text-[#855300] flex items-center justify-center font-bold text-xs">AR</div>
                      <span className="font-medium">Anand R.</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium">02 Jul 2024</p>
                    <p className="text-xs text-on-surface-variant">09:00 AM - 03:00 PM</p>
                  </td>
                  <td className="px-6 py-4 text-right font-medium">88</td>
                  <td className="px-6 py-4 text-right text-[#006c49] font-medium">₹6,800</td>
                  <td className="px-6 py-4 text-right">₹9,300</td>
                  <td className="px-6 py-4 text-right font-bold">₹16,100</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-surface-container text-on-surface-variant text-xs font-medium rounded-full">Closed</span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-1 hover:text-[#855300] transition-colors">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-[#f3f4f6] border-t border-outline-variant flex justify-between items-center">
            <p className="text-sm text-on-surface-variant">Showing 2 of 48 shifts</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm border border-outline-variant rounded-md hover:bg-white transition-colors disabled:opacity-50" disabled>Previous</button>
              <button className="px-3 py-1 text-sm border border-outline-variant rounded-md hover:bg-white transition-colors">Next</button>
            </div>
          </div>
        </section>
      </div>

      {/* Floating Action Button: Contextual */}
      <button className="absolute bottom-8 right-8 w-14 h-14 bg-[#855300] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
        <span className="material-symbols-outlined text-2xl">add</span>
        <span className="absolute right-full mr-4 bg-[#1a1a2c] text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">Assign New Shift</span>
      </button>
    </div>
  );
}
