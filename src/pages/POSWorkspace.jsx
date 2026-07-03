export default function POSWorkspace() {
  return (
    <div className="h-screen flex bg-surface-container-lowest font-sans">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">Billing & POS</h1>
          <p className="text-on-surface-variant mb-6">Employee Kiosk Workspace</p>
          <button className="bg-primary text-on-primary font-medium px-6 py-2 rounded-lg">
            New Order
          </button>
        </div>
      </div>
      <div className="w-[320px] bg-surface-container-low border-l border-outline-variant p-6">
        <h2 className="font-semibold text-lg border-b border-outline-variant pb-4 mb-4">Current Cart</h2>
        <p className="text-sm text-on-surface-variant text-center mt-12">Cart is empty</p>
      </div>
    </div>
  );
}
