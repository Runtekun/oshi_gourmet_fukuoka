import { Search, Home, Heart, Map, MessageSquare, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {
  const navigate = useNavigate();
  const { user } = useAuth();

  // 未ログインなら非表示
  if (!user) {
    return null;
  } 

  return (
    <header className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">

        {/* ロゴ */}
        <button onClick={() => navigate("/home")}>
          <h1 className="text-xl text-orange-600 font-bold">
            推しグルメ福岡
          </h1>
        </button>

        {/* 検索 */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              className="w-full h-11 pl-10 pr-4 rounded-md border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="お店を検索..."
           />
          </div>
        </div>

        {/* ナビゲーション */}
        <nav className="flex items-center gap-4">
          <button onClick={() => navigate("/home")} className="flex gap-1">
            <Home size={20} />
            ホーム
          </button>

          <button className="flex gap-1">
            <Map size={20} />
            マップ
          </button>

          <button className="flex gap-1">
            <MessageSquare size={20} />
            グループ
          </button>

          <button className="flex gap-1">
            <Heart size={20} />
            お気に入り
          </button>
        </nav>

        {/* ユーザー情報とログアウト */}
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/profile")}>
            <User size={30} />
          </button>
        </div>
      </div>
    </header>
  );
}