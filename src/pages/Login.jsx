import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-surface-container-low font-sans">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-outline-variant">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary">Stall Ops</h1>
          <p className="text-on-surface-variant mt-2">Sign in to your account</p>
        </div>
        
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
          <div>
            <label className="block text-sm font-medium text-on-surface mb-1">Employee ID / Email</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none" 
              defaultValue="admin@stall"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-on-surface mb-1">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none" 
              defaultValue="password123"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-primary text-on-primary font-medium py-2 rounded-lg hover:bg-primary/90 transition-colors mt-6"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-on-surface-variant">
          <p>Mock login. Click Sign In to enter Admin view.</p>
          <button 
            onClick={() => navigate('/pos')}
            className="text-primary hover:underline mt-2 font-medium"
          >
            Enter POS (Employee Mode)
          </button>
        </div>
      </div>
    </div>
  );
}
