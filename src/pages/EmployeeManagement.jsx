import { useState } from 'react';

export default function EmployeeManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8 flex flex-col relative">
      {/* Page Header & Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 shrink-0">
        <div>
          <div className="flex items-center gap-2 text-on-surface-variant mb-1">
            <span className="text-sm">Spice Garden</span>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-sm font-medium text-on-surface">Employees</span>
          </div>
          <h1 className="font-page-title text-[24px] leading-[32px] font-bold text-on-surface">Manage Employees</h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">filter_list</span>
            <select className="pl-9 pr-8 py-2.5 bg-surface border border-outline-variant rounded-lg text-body text-on-surface focus:border-primary-container focus:ring-0 appearance-none min-w-[140px] cursor-pointer hover:bg-surface-container-low transition-colors">
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm pointer-events-none">expand_more</span>
          </div>
          <button 
            className="bg-[#f59e0b] hover:bg-[#ffb95f] text-white font-medium py-2.5 px-5 rounded-lg flex items-center justify-center gap-2 transition-colors duration-150 active:scale-95 shadow-sm"
            onClick={() => setIsModalOpen(true)}
          >
            <span className="material-symbols-outlined text-sm">add</span>
            Add Employee
          </button>
        </div>
      </div>

      {/* Employee Roster (Grid view) */}
      <div className="pb-20 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-8">
          
          {/* Employee Card 1 */}
          <div className="bg-white rounded-xl border border-outline-variant p-5 hover:border-[#f59e0b]/50 transition-colors group relative">
            <div className="absolute top-4 right-4 flex gap-1">
              <button className="p-1.5 text-on-surface-variant hover:text-[#855300] hover:bg-[#e1e2e4] rounded-full transition-colors" title="Edit">
                <span className="material-symbols-outlined text-[20px]">edit</span>
              </button>
            </div>
            <div className="flex flex-col items-center text-center mb-4 mt-2">
              <div className="w-16 h-16 rounded-full bg-[#e1e2e4] border border-outline-variant flex items-center justify-center mb-3 relative">
                <span className="font-page-title font-bold text-on-surface text-xl">JD</span>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#10B981] border-2 border-white rounded-full" title="Active"></span>
              </div>
              <h3 className="font-section-title text-[18px] leading-[24px] font-bold text-on-surface">John Doe</h3>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#e2e0f9]/50 text-[#454559] font-label-sm text-[12px] leading-[16px] mt-1.5">
                <span className="material-symbols-outlined text-[14px]">point_of_sale</span>
                Cashier
              </span>
            </div>
            <div className="border-t border-outline-variant pt-4 mt-2 flex flex-col gap-2">
              <div className="flex items-center gap-3 text-on-surface-variant font-body text-[14px]">
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant font-body text-[14px]">
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span className="truncate">john.doe@spicegarden.com</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant font-body text-[14px] mt-2">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <span className="text-xs">Last login: Today, 08:30 AM</span>
              </div>
            </div>
          </div>

          {/* Employee Card 2 */}
          <div className="bg-white rounded-xl border border-outline-variant p-5 hover:border-[#f59e0b]/50 transition-colors group relative">
            <div className="absolute top-4 right-4 flex gap-1">
              <button className="p-1.5 text-on-surface-variant hover:text-[#855300] hover:bg-[#e1e2e4] rounded-full transition-colors" title="Edit">
                <span className="material-symbols-outlined text-[20px]">edit</span>
              </button>
            </div>
            <div className="flex flex-col items-center text-center mb-4 mt-2">
              <div className="w-16 h-16 rounded-full bg-[#e1e2e4] border border-outline-variant flex items-center justify-center mb-3 relative">
                <span className="font-page-title font-bold text-on-surface text-xl">MS</span>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#10B981] border-2 border-white rounded-full" title="Active"></span>
              </div>
              <h3 className="font-section-title text-[18px] leading-[24px] font-bold text-on-surface">Maria Silva</h3>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#ffddb8]/30 text-[#653e00] font-label-sm text-[12px] leading-[16px] mt-1.5">
                <span className="material-symbols-outlined text-[14px]">local_dining</span>
                Chef
              </span>
            </div>
            <div className="border-t border-outline-variant pt-4 mt-2 flex flex-col gap-2">
              <div className="flex items-center gap-3 text-on-surface-variant font-body text-[14px]">
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>+1 (555) 987-6543</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant font-body text-[14px]">
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span className="truncate">maria.s@spicegarden.com</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant font-body text-[14px] mt-2">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <span className="text-xs">Last login: Yesterday, 14:15 PM</span>
              </div>
            </div>
          </div>

          {/* Employee Card 3 (Inactive) */}
          <div className="bg-white rounded-xl border border-outline-variant p-5 hover:border-[#f59e0b]/50 transition-colors group relative opacity-80">
            <div className="absolute top-4 right-4 flex gap-1">
              <button className="p-1.5 text-on-surface-variant hover:text-[#855300] hover:bg-[#e1e2e4] rounded-full transition-colors" title="Edit">
                <span className="material-symbols-outlined text-[20px]">edit</span>
              </button>
            </div>
            <div className="flex flex-col items-center text-center mb-4 mt-2">
              <div className="w-16 h-16 rounded-full bg-[#e1e2e4] border border-outline-variant flex items-center justify-center mb-3 relative">
                <span className="font-page-title font-bold text-on-surface text-xl text-on-surface-variant">AK</span>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#ba1a1a] border-2 border-white rounded-full" title="Inactive"></span>
              </div>
              <h3 className="font-section-title text-[18px] leading-[24px] font-bold text-on-surface">Alex Kumar</h3>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#e1e2e4] text-[#534434] font-label-sm text-[12px] leading-[16px] mt-1.5">
                <span className="material-symbols-outlined text-[14px]">cleaning_services</span>
                Support Staff
              </span>
            </div>
            <div className="border-t border-outline-variant pt-4 mt-2 flex flex-col gap-2">
              <div className="flex items-center gap-3 text-on-surface-variant font-body text-[14px]">
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>+1 (555) 222-3333</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant font-body text-[14px]">
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span className="truncate">a.kumar@spicegarden.com</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant font-body text-[14px] mt-2">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <span className="text-xs">Last login: Oct 12, 2023</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Overlay Modal: Add Employee */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] bg-[#191c1e]/50 backdrop-blur-[2px] flex items-center justify-center p-4 transition-opacity duration-200">
          <div className="bg-[#f8f9fb] rounded-xl shadow-lg border border-outline-variant w-full max-w-md transform transition-transform duration-200 flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-5 border-b border-outline-variant shrink-0">
              <h3 className="font-section-title text-[18px] leading-[24px] font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-[#f59e0b]">person_add</span>
                Add New Employee
              </h3>
              <button 
                className="text-on-surface-variant hover:text-on-surface p-1 rounded-full hover:bg-[#e1e2e4] transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="p-5 overflow-y-auto">
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-[12px] leading-[16px] text-on-surface-variant uppercase tracking-wider">Full Name *</label>
                  <input className="w-full px-3 py-2 bg-white border border-outline-variant rounded-lg text-body text-on-surface focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] outline-none transition-colors" placeholder="e.g. Jane Smith" type="text"/>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-[12px] leading-[16px] text-on-surface-variant uppercase tracking-wider">Role *</label>
                  <div className="relative">
                    <select className="w-full px-3 py-2 bg-white border border-outline-variant rounded-lg text-body text-on-surface focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] outline-none appearance-none cursor-pointer" defaultValue="">
                      <option disabled value="">Select a role...</option>
                      <option value="cashier">Cashier</option>
                      <option value="chef">Chef / Kitchen Staff</option>
                      <option value="support">Support Staff</option>
                      <option value="manager">Stall Manager</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-sm">expand_more</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-[12px] leading-[16px] text-on-surface-variant uppercase tracking-wider">Phone</label>
                    <input className="w-full px-3 py-2 bg-white border border-outline-variant rounded-lg text-body text-on-surface focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] outline-none transition-colors" placeholder="+1..." type="tel"/>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-[12px] leading-[16px] text-on-surface-variant uppercase tracking-wider">Email (Optional)</label>
                    <input className="w-full px-3 py-2 bg-white border border-outline-variant rounded-lg text-body text-on-surface focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] outline-none transition-colors" placeholder="@" type="email"/>
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-[12px] leading-[16px] text-on-surface-variant uppercase tracking-wider flex justify-between">
                    Temporary PIN/Password *
                    <button className="text-[#855300] hover:underline lowercase normal-case text-[10px]" type="button">Generate</button>
                  </label>
                  <div className="relative">
                    <input className="font-data-mono text-[13px] leading-[18px] w-full px-3 py-2 bg-[#e1e2e4] border border-outline-variant rounded-lg text-on-surface focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] outline-none transition-colors" readOnly type="text" value="8421"/>
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-[#855300] transition-colors" type="button">
                      <span className="material-symbols-outlined text-[18px]">content_copy</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-on-surface-variant mt-1">Employee will be prompted to change this on first login.</p>
                </div>
                
                <div className="flex items-center justify-between p-3 border border-outline-variant rounded-lg bg-[#ffffff] mt-2">
                  <div className="flex flex-col">
                    <span className="font-body text-[14px] leading-[20px] font-medium text-on-surface">Account Status</span>
                    <span className="text-xs text-on-surface-variant">Active accounts can log in</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" value=""/>
                    <div className="w-11 h-6 bg-[#e1e2e4] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10B981]"></div>
                  </label>
                </div>
              </form>
            </div>
            
            <div className="p-4 border-t border-outline-variant shrink-0 flex justify-end gap-3 bg-[#ffffff] rounded-b-xl">
              <button 
                className="px-4 py-2 rounded-lg border border-outline-variant bg-white text-on-surface font-medium hover:bg-[#e1e2e4] transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button className="px-5 py-2 rounded-lg bg-[#f59e0b] text-white font-medium hover:bg-[#ffb95f] transition-colors shadow-sm">
                Save Employee
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
