
import MainLayout from "../components/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <span className="bg-white/10 text-sm px-3 py-1 rounded-full">欢迎</span>
          <h1 className="text-4xl font-bold mt-2">Minecraft 启动器</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-semibold">最近游戏</h2>
            <p className="text-zinc-400">没有最近的游戏记录</p>
          </div>
          
          <div className="glass-panel rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-semibold">游戏新闻</h2>
            <p className="text-zinc-400">正在加载新闻...</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
