
import { ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, Settings, Gamepad2 } from "lucide-react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div 
      className="min-h-screen w-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-6"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(37, 38, 43, 0.7) 0%, rgba(37, 38, 43, 0.4) 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto glass-panel rounded-2xl min-h-[calc(100vh-3rem)] p-6 flex gap-6">
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
