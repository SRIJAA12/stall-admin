import { useState } from 'react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('stall-profile');

  const tabClass = (id) => 
    `flex items-center px-4 py-3 rounded-lg transition-all ${
      activeTab === id 
        ? 'bg-[#f59e0b]/10 border border-[#855300] text-[#855300] font-bold' 
        : 'text-on-surface-variant hover:bg-[#e7e8ea]'
    }`;

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto flex flex-col h-full">
        <div className="flex flex-col md:flex-row gap-8 flex-1">
          {/* Settings Tabs Navigation */}
          <nav className="md:w-64 flex flex-col space-y-1 shrink-0">
            <button className={tabClass('stall-profile')} onClick={() => setActiveTab('stall-profile')}>
              <span className="material-symbols-outlined mr-3">badge</span> Stall Profile
            </button>
            <button className={tabClass('operations')} onClick={() => setActiveTab('operations')}>
              <span className="material-symbols-outlined mr-3">nest_clock_farsight_analog</span> Operations
            </button>
            <button className={tabClass('tax-billing')} onClick={() => setActiveTab('tax-billing')}>
              <span className="material-symbols-outlined mr-3">payments</span> Tax & Billing
            </button>
            <button className={tabClass('notifications')} onClick={() => setActiveTab('notifications')}>
              <span className="material-symbols-outlined mr-3">mail</span> Notifications
            </button>
            <button className={tabClass('security')} onClick={() => setActiveTab('security')}>
              <span className="material-symbols-outlined mr-3">security</span> Security
            </button>
          </nav>

          {/* Content Area */}
          <div className="flex-1 flex flex-col space-y-6">
            
            {/* Stall Profile Section */}
            {activeTab === 'stall-profile' && (
              <section className="bg-[#ffffff] border border-outline-variant rounded-xl p-8 flex-1 transition-opacity duration-300">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="font-page-title text-[24px] leading-[32px] text-on-surface font-bold">Stall Profile</h2>
                    <p className="text-[14px] leading-[20px] text-on-surface-variant mt-1">Manage your public presence and brand identity.</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-[#30c88f]/20 text-[#004e34] px-3 py-1 rounded-full text-[12px] font-medium flex items-center">
                      <span className="w-2 h-2 bg-[#006c49] rounded-full mr-2"></span> Active
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[12px] font-medium text-on-surface-variant mb-2">Stall Name</label>
                      <input className="w-full rounded-lg border-outline-variant focus:border-[#855300] focus:ring-[#855300] text-[14px]" type="text" defaultValue="Spice Garden"/>
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-on-surface-variant mb-2">Category</label>
                      <select className="w-full rounded-lg border-outline-variant focus:border-[#855300] focus:ring-[#855300] text-[14px]">
                        <option>Indian / Mughlai</option>
                        <option>Continental</option>
                        <option>Pan Asian</option>
                        <option>Desserts</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-on-surface-variant mb-2">Location</label>
                      <input className="w-full rounded-lg border-outline-variant focus:border-[#855300] focus:ring-[#855300] text-[14px]" type="text" defaultValue="Floor 2, Stall 4"/>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <label className="block text-[12px] font-medium text-on-surface-variant mb-2">Stall Logo</label>
                    <div className="flex items-center space-x-6">
                      <div className="relative w-32 h-32 bg-[#edeef0] border-2 border-dashed border-[#867461] rounded-xl flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJR6SR9fotP2LCG8_JpUye2QIyFhGEGRZenfAObqPZLXpljRA2CzrzbByz4bTyuOgzdU44MZRrJDv3fFZJAysaU28q35pJotOALJGAFwY4ZF3mIzsxOLUEG-wkQ65-aSfaAC-ocO7Oio2TJRmlVtY9xNN1CRM2s-tR_zRdbvz3sL2Ks9X8SVfn5vga_m-kxEl2V19tqbZeBut252WY2ipeCJvSU8ZLKA3B8Nbc-MYjsizBjVNmWVCQ_DsOpw0h2wt7Q_rYW5v1Ub7K')" }}></div>
                        <button className="z-10 bg-white/90 p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                          <span className="material-symbols-outlined text-[#855300]">edit</span>
                        </button>
                      </div>
                      <div className="text-on-surface-variant">
                        <p className="text-[12px] leading-[16px]">JPG, PNG or SVG. Max size 2MB.</p>
                        <button className="mt-2 text-[#855300] font-bold text-[14px] hover:underline">Upload New Logo</button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-outline-variant grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[12px] font-medium text-on-surface-variant mb-2">Contact Email</label>
                    <input className="w-full rounded-lg border-outline-variant focus:border-[#855300] focus:ring-[#855300] text-[14px]" type="email" defaultValue="admin@spicegarden.com"/>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-on-surface-variant mb-2">Phone Number</label>
                    <input className="w-full rounded-lg border-outline-variant focus:border-[#855300] focus:ring-[#855300] text-[14px]" type="tel" defaultValue="+91 98765 43210"/>
                  </div>
                </div>
              </section>
            )}

            {/* Operations Section */}
            {activeTab === 'operations' && (
              <section className="bg-[#ffffff] border border-outline-variant rounded-xl p-8 flex-1 transition-opacity duration-300">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="font-page-title text-[24px] leading-[32px] text-on-surface font-bold">Operations</h2>
                    <p className="text-[14px] leading-[20px] text-on-surface-variant mt-1">Control your stall's availability and working hours.</p>
                  </div>
                  <div className="flex items-center bg-[#edeef0] p-1 rounded-full border border-outline-variant">
                    <button className="px-4 py-1.5 rounded-full text-[12px] font-bold bg-[#855300] text-white shadow-sm">Online</button>
                    <button className="px-4 py-1.5 rounded-full text-[12px] text-on-surface-variant hover:text-on-surface transition-colors">Offline</button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-section-title text-[18px] leading-[24px] font-bold text-on-surface mb-4">Operational Hours</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-[#f3f4f6] rounded-lg border border-outline-variant">
                        <span className="font-bold w-24">{day}</span>
                        <div className="flex items-center space-x-4">
                          <input className="rounded border-outline-variant text-[14px] focus:ring-[#855300]" type="time" defaultValue="10:00"/>
                          <span className="text-on-surface-variant">to</span>
                          <input className="rounded border-outline-variant text-[14px] focus:ring-[#855300]" type="time" defaultValue="22:00"/>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input defaultChecked className="sr-only peer" type="checkbox"/>
                          <div className="w-11 h-6 bg-[#e1e2e4] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#855300]"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Tax & Billing Section */}
            {activeTab === 'tax-billing' && (
              <section className="bg-[#ffffff] border border-outline-variant rounded-xl p-8 flex-1 transition-opacity duration-300">
                <div className="mb-8">
                  <h2 className="font-page-title text-[24px] leading-[32px] text-on-surface font-bold">Tax & Billing</h2>
                  <p className="text-[14px] leading-[20px] text-on-surface-variant mt-1">Configure financial settings, taxes, and currency.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-[12px] font-medium text-on-surface-variant mb-2">Tax Registration Number (GST/VAT)</label>
                    <input className="w-full rounded-lg border-outline-variant focus:border-[#855300] focus:ring-[#855300] font-data-mono uppercase" type="text" defaultValue="27AAACG0000Z1Z5"/>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-on-surface-variant mb-2">Currency Settings</label>
                    <div className="relative">
                      <select className="w-full rounded-lg border-outline-variant focus:border-[#855300] focus:ring-[#855300] text-[14px] appearance-none">
                        <option>INR ₹ - Indian Rupee</option>
                        <option>USD $ - US Dollar</option>
                        <option>EUR € - Euro</option>
                      </select>
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined pointer-events-none">expand_more</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="font-section-title text-[18px] leading-[24px] font-bold text-on-surface">Tax Slabs Configuration</h3>
                  <div className="overflow-hidden border border-outline-variant rounded-lg">
                    <table className="w-full text-left">
                      <thead className="bg-[#f3f4f6] border-b border-outline-variant">
                        <tr>
                          <th className="px-6 py-3 font-table-header text-[13px] leading-[16px] text-on-surface-variant font-medium">Tax Category</th>
                          <th className="px-6 py-3 font-table-header text-[13px] leading-[16px] text-on-surface-variant font-medium">Rate (%)</th>
                          <th className="px-6 py-3 font-table-header text-[13px] leading-[16px] text-on-surface-variant font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant">
                        <tr className="hover:bg-[#e1e2e4]/50">
                          <td className="px-6 py-4 text-[14px]">Food Services (GST)</td>
                          <td className="px-6 py-4 font-data-mono">5.0%</td>
                          <td className="px-6 py-4">
                            <button className="text-[#855300] hover:opacity-80"><span className="material-symbols-outlined">edit</span></button>
                          </td>
                        </tr>
                        <tr className="hover:bg-[#e1e2e4]/50">
                          <td className="px-6 py-4 text-[14px]">Alcoholic Beverages (VAT)</td>
                          <td className="px-6 py-4 font-data-mono">18.0%</td>
                          <td className="px-6 py-4">
                            <button className="text-[#855300] hover:opacity-80"><span className="material-symbols-outlined">edit</span></button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="mt-8">
                  <label className="block text-[12px] font-medium text-on-surface-variant mb-2">Service Charge (%)</label>
                  <div className="flex items-center space-x-4">
                    <input className="w-32 rounded-lg border-outline-variant focus:border-[#855300] focus:ring-[#855300] text-[14px]" step="0.5" type="number" defaultValue="5.0"/>
                    <span className="text-[14px] leading-[20px] text-on-surface-variant">Applicable on all dine-in orders.</span>
                  </div>
                </div>
              </section>
            )}

            {/* Notifications Section */}
            {activeTab === 'notifications' && (
              <section className="bg-[#ffffff] border border-outline-variant rounded-xl p-8 flex-1 transition-opacity duration-300">
                <div className="mb-8">
                  <h2 className="font-page-title text-[24px] leading-[32px] text-on-surface font-bold">Notifications</h2>
                  <p className="text-[14px] leading-[20px] text-on-surface-variant mt-1">Stay updated with system alerts and reporting.</p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#f3f4f6] border border-outline-variant">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#e0ddf6] flex items-center justify-center text-[#5d5c71] mr-4">
                        <span className="material-symbols-outlined">inventory_2</span>
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">Low Inventory Alerts</p>
                        <p className="text-[12px] leading-[16px] text-on-surface-variant">Notify when stock levels fall below thresholds.</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <input defaultChecked className="rounded border-outline-variant text-[#855300] focus:ring-[#855300] w-5 h-5" type="checkbox"/>
                        <span className="text-[12px]">Email</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input className="rounded border-outline-variant text-[#855300] focus:ring-[#855300] w-5 h-5" type="checkbox"/>
                        <span className="text-[12px]">SMS</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#f3f4f6] border border-outline-variant">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#ffddb8] flex items-center justify-center text-[#855300] mr-4">
                        <span className="material-symbols-outlined">analytics</span>
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">Daily Sales Summary</p>
                        <p className="text-[12px] leading-[16px] text-on-surface-variant">Emailed every day at 11:30 PM.</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="sr-only peer" type="checkbox"/>
                      <div className="w-11 h-6 bg-[#e1e2e4] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#855300]"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#f3f4f6] border border-outline-variant">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#6ffbbe] flex items-center justify-center text-[#006c49] mr-4">
                        <span className="material-symbols-outlined">report_gmailerrorred</span>
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">System Urgent Messages</p>
                        <p className="text-[12px] leading-[16px] text-on-surface-variant">Critical alerts regarding server and downtime.</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <input defaultChecked className="rounded border-outline-variant text-[#855300] focus:ring-[#855300] w-5 h-5" type="checkbox"/>
                        <span className="text-[12px]">Email</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input defaultChecked className="rounded border-outline-variant text-[#855300] focus:ring-[#855300] w-5 h-5" type="checkbox"/>
                        <span className="text-[12px]">Push</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Security Section */}
            {activeTab === 'security' && (
              <section className="bg-[#ffffff] border border-outline-variant rounded-xl p-8 flex-1 transition-opacity duration-300">
                <div className="mb-8">
                  <h2 className="font-page-title text-[24px] leading-[32px] text-on-surface font-bold">Security</h2>
                  <p className="text-[14px] leading-[20px] text-on-surface-variant mt-1">Manage passwords and review account permissions.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="font-section-title text-[18px] leading-[24px] font-bold text-on-surface mb-4">Change Password</h3>
                    <div>
                      <label className="block text-[12px] font-medium text-on-surface-variant mb-2">Current Password</label>
                      <input className="w-full rounded-lg border-outline-variant focus:border-[#855300] focus:ring-[#855300] text-[14px]" placeholder="••••••••" type="password"/>
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-on-surface-variant mb-2">New Password</label>
                      <input className="w-full rounded-lg border-outline-variant focus:border-[#855300] focus:ring-[#855300] text-[14px]" placeholder="••••••••" type="password"/>
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-on-surface-variant mb-2">Confirm New Password</label>
                      <input className="w-full rounded-lg border-outline-variant focus:border-[#855300] focus:ring-[#855300] text-[14px]" placeholder="••••••••" type="password"/>
                    </div>
                    <button className="bg-[#855300] text-white px-6 py-2.5 rounded-lg font-bold hover:opacity-90 transition-opacity">Update Password</button>
                  </div>
                  <div className="bg-[#f3f4f6] p-6 rounded-xl border border-outline-variant">
                    <h3 className="font-section-title text-[18px] leading-[24px] font-bold text-on-surface mb-4 flex items-center">
                      <span className="material-symbols-outlined mr-2">admin_panel_settings</span>
                      Your Permissions
                    </h3>
                    <p className="text-[12px] leading-[16px] text-on-surface-variant mb-4">Your account is assigned the <span className="font-bold text-on-surface">Stall Admin</span> role. You have full control over this stall's operations.</p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-[14px] text-on-surface">
                        <span className="material-symbols-outlined text-[#30c88f] mr-2 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        Edit Menu & Pricing
                      </li>
                      <li className="flex items-center text-[14px] text-on-surface">
                        <span className="material-symbols-outlined text-[#30c88f] mr-2 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        Manage Inventory Levels
                      </li>
                      <li className="flex items-center text-[14px] text-on-surface">
                        <span className="material-symbols-outlined text-[#30c88f] mr-2 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        Access Transaction History
                      </li>
                      <li className="flex items-center text-[14px] text-on-surface opacity-50">
                        <span className="material-symbols-outlined text-on-surface-variant mr-2 text-xl">cancel</span>
                        Global Food Court Analytics
                      </li>
                    </ul>
                    <button className="mt-6 text-[#855300] text-[12px] font-bold border-b border-[#855300] border-dashed">Request Higher Access</button>
                  </div>
                </div>
              </section>
            )}

            {/* Sticky Footer Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-outline-variant mt-auto">
              <div className="flex items-center text-on-surface-variant">
                <span className="material-symbols-outlined mr-2">info</span>
                <span className="text-[12px]">Last updated: Oct 24, 2023 at 04:15 PM</span>
              </div>
              <div className="flex space-x-4">
                <button className="px-6 py-2.5 rounded-lg border border-outline-variant bg-[#ffffff] font-bold text-on-surface-variant hover:bg-[#e7e8ea] transition-colors">Discard</button>
                <button className="px-8 py-2.5 rounded-lg bg-[#855300] text-white font-bold shadow-lg hover:shadow-xl active:scale-95 transition-all">Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
