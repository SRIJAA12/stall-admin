import { Outlet, NavLink } from 'react-router-dom';

export default function Layout() {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 transition-colors active:scale-95 duration-150 ${
      isActive
        ? 'text-[#ffb95f] bg-white/10 border-l-4 border-[#855300]'
        : 'text-[#c6c4dc] hover:bg-white/5 hover:text-white'
    }`;

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="bg-[#1a1a2c] fixed left-0 top-0 h-full w-[240px] border-r border-outline-variant flex flex-col z-50">
        <div className="p-6 border-b border-outline-variant/30 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden shrink-0 border border-outline-variant">
            <img alt="Spice Garden Logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHqoyyE51RLBKys2KPZsokip9DaMIFt8VZsAHkvVtU9g7BTIHS9Lu94H9dEvnfc45ZgVvzz6rSI9TkyNIdWoFqKTCGYJzYr7ZoGufeNAgGSPUuXAxRMH5QemsGMRKlvH1h0uQw0huuCgVvxmTynItFpTprzT1A4OLYO5fmz2qFCQYw6InaqcPyqOqeUv3IKx7F5bRaLN6sJGvXfW5r5ibiY_EY29mgkgxacY1k4SQkhskqNSFUb9sAYKGDjKZKOYPOuZReaLDB" />
          </div>
          <div>
            <h1 className="font-page-title text-[24px] leading-[32px] font-bold text-[#ffddb8]">Spice Garden</h1>
            <p className="font-label-sm text-[12px] leading-[16px] text-[#c6c4dc] mt-1">Stall Management</p>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto px-2 py-4 flex flex-col gap-1">
          <NavLink to="/dashboard" className={navLinkClass}>
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </NavLink>
          <NavLink to="/menu" className={navLinkClass}>
            <span className="material-symbols-outlined">restaurant_menu</span>
            Menu
          </NavLink>
          <NavLink to="/employees" className={navLinkClass}>
            <span className="material-symbols-outlined">group</span>
            Employees
          </NavLink>
          <NavLink to="/reports" className={navLinkClass}>
            <span className="material-symbols-outlined">analytics</span>
            Reports
          </NavLink>
          <NavLink to="/shifts" className={navLinkClass}>
            <span className="material-symbols-outlined">schedule</span>
            Shift Management
          </NavLink>
          <NavLink to="/settings" className={navLinkClass}>
            <span className="material-symbols-outlined">settings</span>
            Settings
          </NavLink>
        </nav>
        <div className="mt-auto border-t border-outline-variant/30 p-2">
          <a className="flex items-center gap-3 px-4 py-3 text-[#c6c4dc] hover:bg-white/5 hover:text-white transition-colors active:scale-95 duration-150" href="#">
            <span className="material-symbols-outlined">help</span>
            Support
          </a>
          <NavLink to="/" className="flex items-center gap-3 px-4 py-3 text-[#c6c4dc] hover:bg-white/5 hover:text-white transition-colors active:scale-95 duration-150">
            <span className="material-symbols-outlined">logout</span>
            Logout
          </NavLink>
        </div>
      </aside>
      
      {/* Main Content Area */}
      <main className="ml-[240px] flex-1 flex flex-col h-screen overflow-y-auto bg-[#f4f5f7]">
        {/* Top Nav Header */}
        <header className="bg-[#f8f9fb] border-b border-[#d8c3ad] flex justify-between items-center h-16 px-8 shrink-0">
          <div>
            <h2 className="font-section-title text-[18px] leading-[24px] font-bold text-[#191c1e]">Good morning, Ravi</h2>
            <p className="font-body text-[14px] leading-[20px] text-[#534434] text-sm mt-0.5">October 24, 2023</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full border border-[#d8c3ad] flex items-center justify-center text-[#534434] hover:text-[#855300] transition-colors cursor-pointer active:opacity-80">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="w-10 h-10 rounded-full bg-[#e1e2e4] overflow-hidden border border-[#d8c3ad] cursor-pointer active:opacity-80">
              <img alt="Admin User Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-fwxdMzLsZuYEMc-0qpbbjYrSaBrfaIea9r5FRSTqLiAXqhOLmgk-Mm9yUsefs3x7sxCxFZL900CQ_vapme-9xSQS7rBJfHSiUR373tbAFK16m-y1sAzMzYInUIOifCHzc0UB9EzhRBCy5QgWjIyrZ5eRM_y24PlpA66ZlT5K2TI8BxfPiNY-CposrlfHdna08rpEwo9AfiU4-M0oaLuXDqZVoZyc6TBM0ihHg6IS2VS8VlqBpwsHGAP2zLkwUMzDFYT4VwE_" />
            </div>
          </div>
        </header>

        {/* Dashboard Canvas (Outlet renders pages) */}
        <div className="flex-1 flex flex-col">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
