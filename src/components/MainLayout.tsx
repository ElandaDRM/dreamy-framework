
import { ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, Settings, Gamepad2, Minus, X } from "lucide-react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleMinimize = () => {
    // In a real electron app, this would minimize the window
    console.log("Minimize window");
  };

  const handleClose = () => {
    // In a real electron app, this would close the window
    console.log("Close window");
  };

  return (
    <div 
      className="min-h-screen w-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-6"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(37, 38, 43, 0.7) 0%, rgba(37, 38, 43, 0.4) 100%)`,
      }}
    >
      {/* Title Bar */}
      <div className="mb-6 rounded-lg p-3 flex items-center justify-between bg-black/30 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/f4cc83c8-6d3d-4174-aa56-562cc5bc775a.png" 
            alt="Logo" 
            className="h-10 w-10"
          />
          <h1 className="text-lg font-medium">Rhythmic Tool Launcher</h1>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleMinimize}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Minus size={18} />
          </button>
          <button 
            onClick={handleClose}
            className="p-2 hover:bg-red-500/80 rounded-lg transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="glass-panel rounded-2xl min-h-[calc(100vh-9rem)] p-6 flex gap-6">
        {/* Sidebar Navigation */}
        <nav className="w-16 flex flex-col items-center gap-4">
          <Link to="/" className={`nav-item ${isActive("/") ? "active" : ""}`}>
            <Home size={24} />
          </Link>
          <Link to="/play" className={`nav-item ${isActive("/play") ? "active" : ""}`}>
            <Gamepad2 size={24} />
          </Link>
          <Link to="/settings" className={`nav-item ${isActive("/settings") ? "active" : ""}`}>
            <Settings size={24} />
          </Link>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 page-transition">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
