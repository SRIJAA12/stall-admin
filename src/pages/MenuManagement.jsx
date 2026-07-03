import { useState } from 'react';

export default function MenuManagement() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-8 flex flex-col relative">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <header className="flex flex-col gap-2">
          <h2 className="font-page-title text-[24px] leading-[32px] font-bold text-on-surface">Menu Management</h2>
          <p className="text-on-surface-variant text-sm">Manage items, pricing, and availability for your stall.</p>
        </header>
        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
            <input className="pl-10 pr-4 py-2 bg-white border border-surface-variant rounded-lg text-sm focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container w-64 transition-colors" placeholder="Search menu items..." type="text"/>
          </div>
          <button className="flex items-center gap-2 border border-surface-variant text-on-surface px-4 py-2 rounded-lg font-medium hover:bg-surface-container-low transition-colors shadow-sm bg-white">
            <span className="material-symbols-outlined text-sm">settings_suggest</span>
            Manage Categories
          </button>
          <button 
            className="flex items-center gap-2 bg-[#f59e0b] text-[#613b00] px-4 py-2 rounded-lg font-medium hover:bg-[#855300] hover:text-white transition-colors shadow-sm"
            onClick={() => setIsDrawerOpen(true)}
          >
            <span className="material-symbols-outlined text-sm">add</span>
            Add Item
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-surface-variant flex gap-6 overflow-x-auto pb-1 mt-6">
        <button className="text-on-surface-variant font-medium hover:text-primary-container transition-colors pb-2 whitespace-nowrap">All (62)</button>
        <button className="text-on-surface-variant font-medium hover:text-primary-container transition-colors pb-2 whitespace-nowrap">Starters (12)</button>
        <button className="text-[#f59e0b] font-bold border-b-2 border-[#f59e0b] pb-2 whitespace-nowrap">Main Course (18)</button>
        <button className="text-on-surface-variant font-medium hover:text-primary-container transition-colors pb-2 whitespace-nowrap">Beverages (14)</button>
        <button className="text-on-surface-variant font-medium hover:text-primary-container transition-colors pb-2 whitespace-nowrap">Desserts (8)</button>
        <div className="ml-auto flex items-center gap-2 pb-2">
          <span className="text-xs font-medium text-on-surface-variant uppercase tracking-wider mr-2">Dietary:</span>
          <div className="flex bg-surface-container rounded-lg p-1">
            <button className="px-3 py-1 text-xs font-bold bg-white rounded shadow-sm text-[#f59e0b]">All</button>
            <button className="px-3 py-1 text-xs font-medium text-on-surface-variant hover:text-on-surface transition-colors">Veg</button>
            <button className="px-3 py-1 text-xs font-medium text-on-surface-variant hover:text-on-surface transition-colors">Non-Veg</button>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-8 mt-6">
        
        {/* Card 1 */}
        <div className="bg-white rounded-lg border border-surface-variant flex flex-col hover:border-primary-container transition-colors group">
          <div className="relative h-40 bg-surface-container w-full rounded-t-lg overflow-hidden">
            <img alt="Item Image" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx0AkUGXLaEUt2DDtW1Gsc1LT2yClKT0aa-LCF1TlCHgCHokcu9huQG5_dLlKIYNZx5okOItsF-WdJwAg1dXczJXctXOnd6Mx34Je6zGfFakZDWiMCmHCPTyry8prVWONxaAlic3Cc0FiL52H8AJWGDZwOnaRA-9t_CrdRUWacgwWR8fNVNAJDTemqXjJoWBnOHdFy96G4cwjoJ3khrgRmIQ6k3C32KU9I98XzduGoMNCrdGzNSTb3Bwvr08ta9ilj-7RBsdJq"/>
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium border border-surface-variant text-on-surface">Main Course</div>
          </div>
          <div className="p-4 flex flex-col flex-1 gap-3">
            <div className="flex justify-between items-start">
              <h3 className="font-section-title text-[18px] leading-[24px] font-bold text-on-surface leading-tight">Hyderabadi Chicken Biryani</h3>
              <div className="w-4 h-4 rounded-sm border border-red-500 flex items-center justify-center p-0.5 shrink-0" title="Non-Vegetarian">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-auto">
              <div className="flex justify-between items-end">
                <span className="font-data-mono text-lg font-bold text-on-surface">₹320</span>
                <span className="text-xs text-on-surface-variant font-data-mono">CGST/SGST 2.5%</span>
              </div>
            </div>
            <div className="pt-3 mt-1 border-t border-surface-variant flex justify-between items-center">
              <span className="text-sm font-medium text-[#006c49]">Available</span>
              <div className="relative inline-block w-8 h-4 align-middle select-none">
                <input defaultChecked className="absolute block w-4 h-4 rounded-full bg-white border border-[#d8c3ad] appearance-none cursor-pointer right-0 border-[#f59e0b] z-10 transition-all duration-300" type="checkbox"/>
                <label className="block overflow-hidden h-4 rounded-full bg-[#f59e0b] cursor-pointer w-8 transition-all duration-300"></label>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg border border-surface-variant flex flex-col hover:border-primary-container transition-colors group">
          <div className="relative h-40 bg-surface-container w-full rounded-t-lg overflow-hidden">
            <img alt="Item Image" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEZwsIXsP35x-016dY1RP0LF0SqKVs7Ks0ZkVqQ1Q6SRQ6M7dBA54brw5TG9qNue_yKUtv7TC6C8RqTLNZf7aAY2x3mj3zWJvgKI6SGxh0fuqhZjzGukB9NfDHi0yBCmgCYwUE2y8ASuWVjuUMHC6-6R75TdFVh9kXtL5HECwqrrstTpZMP7-YbJ7NHvCDMXE-tPvUB0DFEDAjFFNVmoSML9UA3nlSsHkGNHXcJjchod3K1sPjFN74eqBlNJLVawfjJNImWidA"/>
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium border border-surface-variant text-on-surface">Main Course</div>
          </div>
          <div className="p-4 flex flex-col flex-1 gap-3">
            <div className="flex justify-between items-start">
              <h3 className="font-section-title text-[18px] leading-[24px] font-bold text-on-surface leading-tight">Paneer Butter Masala</h3>
              <div className="w-4 h-4 rounded-sm border border-green-500 flex items-center justify-center p-0.5 shrink-0" title="Vegetarian">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-auto">
              <div className="flex justify-between items-end">
                <span className="font-data-mono text-lg font-bold text-on-surface">₹280</span>
                <span className="text-xs text-on-surface-variant font-data-mono">CGST/SGST 2.5%</span>
              </div>
            </div>
            <div className="pt-3 mt-1 border-t border-surface-variant flex justify-between items-center">
              <span className="text-sm font-medium text-[#006c49]">Available</span>
              <div className="relative inline-block w-8 h-4 align-middle select-none">
                <input defaultChecked className="absolute block w-4 h-4 rounded-full bg-white border border-[#d8c3ad] appearance-none cursor-pointer right-0 border-[#f59e0b] z-10 transition-all duration-300" type="checkbox"/>
                <label className="block overflow-hidden h-4 rounded-full bg-[#f59e0b] cursor-pointer w-8 transition-all duration-300"></label>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 (Out of Stock) */}
        <div className="bg-white rounded-lg border border-surface-variant flex flex-col hover:border-primary-container transition-colors group opacity-60">
          <div className="relative h-40 bg-surface-container w-full rounded-t-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/10 z-10"></div>
            <img alt="Item Image" className="w-full h-full object-cover grayscale-[50%]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA7vy_6A_eJZ2Sp7LpZ15ZkyeUH2NSSM32xJwTowRE0LiXpFfbEZy1O_5Rexi1O4IPAmSF0UUryR2b58I0oIT7NQFKz2zhvQhKX0nVjS794iphKw2tXO6hgUc5ZaWuKyMvNoi91nqT4QdJjZu_uPLMhir89xBNs7nXBVJzewE0eTT4PNt91kKFHc3EgkiaDBhRzcicYza6hcsko7CVfVlm5eG_j8O4b2pNCMlkq6wClQTpKHUX4mk2SDGJyrDxvj5dyDUeNzhE"/>
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium border border-surface-variant text-on-surface z-20">Main Course</div>
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <span className="bg-[#2e3132] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Out of Stock</span>
            </div>
          </div>
          <div className="p-4 flex flex-col flex-1 gap-3">
            <div className="flex justify-between items-start">
              <h3 className="font-section-title text-[18px] leading-[24px] font-bold text-on-surface leading-tight">Dal Makhani Combo</h3>
              <div className="w-4 h-4 rounded-sm border border-green-500 flex items-center justify-center p-0.5 shrink-0" title="Vegetarian">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-auto">
              <div className="flex justify-between items-end">
                <span className="font-data-mono text-lg font-bold text-on-surface">₹240</span>
                <span className="text-xs text-on-surface-variant font-data-mono">CGST/SGST 2.5%</span>
              </div>
            </div>
            <div className="pt-3 mt-1 border-t border-surface-variant flex justify-between items-center">
              <span className="text-sm font-medium text-on-surface-variant">Unavailable</span>
              <div className="relative inline-block w-8 h-4 align-middle select-none">
                <input className="absolute block w-4 h-4 rounded-full bg-white border border-[#e1e2e4] appearance-none cursor-pointer left-0 z-10 transition-all duration-300" type="checkbox"/>
                <label className="block overflow-hidden h-4 rounded-full bg-[#e1e2e4] cursor-pointer w-8 transition-all duration-300"></label>
              </div>
            </div>
          </div>
        </div>

        {/* Add New Placeholder Card */}
        <button 
          className="bg-white rounded-lg border border-dashed border-[#d8c3ad] hover:border-[#f59e0b] transition-colors flex flex-col items-center justify-center min-h-[300px] text-on-surface-variant hover:text-[#f59e0b] group"
          onClick={() => setIsDrawerOpen(true)}
        >
          <div className="w-12 h-12 rounded-full bg-[#f3f4f6] flex items-center justify-center mb-4 group-hover:bg-[#f59e0b]/10 transition-colors">
            <span className="material-symbols-outlined text-2xl">add</span>
          </div>
          <span className="font-section-title font-medium text-[16px] leading-[24px]">Add New Item</span>
        </button>

      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity"
            onClick={() => setIsDrawerOpen(false)}
          ></div>
          <div className="fixed top-0 right-0 h-full w-[400px] bg-white shadow-[-4px_0_15px_rgba(0,0,0,0.05)] z-[60] flex flex-col border-l border-surface-variant">
            <div className="p-6 border-b border-surface-variant flex justify-between items-center bg-[#f8f9fb]">
              <h3 className="font-section-title text-[18px] leading-[24px] font-bold text-on-surface">Add New Item</h3>
              <button 
                className="text-on-surface-variant hover:text-on-surface transition-colors"
                onClick={() => setIsDrawerOpen(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="p-6 flex-1 overflow-y-auto flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-[12px] leading-[16px] text-on-surface-variant uppercase tracking-wider">Item Image</label>
                <div className="border-2 border-dashed border-[#d8c3ad] rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#f59e0b] hover:bg-[#ffffff] transition-colors bg-[#f3f4f6] group">
                  <span className="material-symbols-outlined text-4xl text-[#c6c4dc] group-hover:text-[#f59e0b] mb-2 transition-colors">cloud_upload</span>
                  <p className="text-sm font-medium text-on-surface mb-1">Click to upload or drag & drop</p>
                  <p className="text-xs text-on-surface-variant">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-[12px] leading-[16px] text-on-surface-variant uppercase tracking-wider">Item Name *</label>
                  <input className="w-full px-4 py-2 border border-surface-variant rounded-lg focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] text-sm" placeholder="e.g. Tandoori Chicken" type="text"/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-[12px] leading-[16px] text-on-surface-variant uppercase tracking-wider">Category *</label>
                    <select className="w-full px-4 py-2 border border-surface-variant rounded-lg focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] text-sm bg-white appearance-none">
                      <option value="">Select...</option>
                      <option value="starters">Starters</option>
                      <option value="main">Main Course</option>
                      <option value="beverages">Beverages</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-[12px] leading-[16px] text-on-surface-variant uppercase tracking-wider">Dietary</label>
                    <select className="w-full px-4 py-2 border border-surface-variant rounded-lg focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] text-sm bg-white appearance-none">
                      <option value="veg">Vegetarian</option>
                      <option value="non-veg">Non-Vegetarian</option>
                      <option value="vegan">Vegan</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 border-t border-surface-variant pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-[12px] leading-[16px] text-on-surface-variant uppercase tracking-wider">Price (₹) *</label>
                    <input className="w-full px-4 py-2 border border-surface-variant rounded-lg focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] text-sm font-data-mono" placeholder="0.00" type="number"/>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-[12px] leading-[16px] text-on-surface-variant uppercase tracking-wider">Tax Slab</label>
                    <select className="w-full px-4 py-2 border border-surface-variant rounded-lg focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] text-sm bg-white appearance-none">
                      <option value="5">5% (CGST 2.5% + SGST 2.5%)</option>
                      <option value="12">12%</option>
                      <option value="18">18%</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5 border-t border-surface-variant pt-4">
                <label className="font-label-sm text-[12px] leading-[16px] text-on-surface-variant uppercase tracking-wider">Description</label>
                <textarea className="w-full px-4 py-2 border border-surface-variant rounded-lg focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] text-sm resize-none" placeholder="Brief description of the item..." rows="3"></textarea>
              </div>
              
              <div className="flex items-center justify-between border-t border-surface-variant pt-4 pb-2">
                <div>
                  <h4 className="text-[14px] leading-[20px] font-bold text-on-surface">Available for Order</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">Toggle off if the item is out of stock</p>
                </div>
                <div className="relative inline-block w-10 h-5 align-middle select-none">
                  <input defaultChecked className="absolute block w-5 h-5 rounded-full bg-white border border-[#d8c3ad] appearance-none cursor-pointer right-0 border-[#f59e0b] z-10" type="checkbox"/>
                  <label className="block overflow-hidden h-5 w-10 rounded-full bg-[#f59e0b] cursor-pointer"></label>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-surface-variant bg-[#f8f9fb] flex justify-end gap-3">
              <button 
                className="px-4 py-2 rounded-lg border border-surface-variant bg-white text-on-surface text-sm font-medium hover:bg-[#f3f4f6] transition-colors"
                onClick={() => setIsDrawerOpen(false)}
              >
                Cancel
              </button>
              <button className="px-6 py-2 rounded-lg bg-[#f59e0b] text-white text-sm font-medium hover:bg-[#855300] transition-colors shadow-sm">
                Save Item
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
