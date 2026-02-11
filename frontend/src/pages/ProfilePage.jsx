import { useEffect, useState } from "react";
import { Settings, Heart, Users, FileText } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";


export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [tab, setTab] = useState("reviews");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/user", {
      headers: {
        "access-token": localStorage.getItem("access-token"),
        client: localStorage.getItem("client"),
        uid: localStorage.getItem("uid"),
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">読み込み中...</p>;
  if (!user) return null;

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
        {/* Profile Header */}
      <div className="px-4 md:px-6 md:max-w-7xl md:mx-auto py-6 border-b border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4 flex-1">
            <img
              src={user.avatar || "/avatar-placeholder.png"}
              alt={user.name}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <h1 className="text-xl md:text-2xl mb-1">{user.name}</h1>
              <p className="text-sm text-gray-500 mb-2">
                @{user.name || user.email}
              </p>

              <div className="flex gap-4 text-sm">
                <button className="hover:underline">
                  <span>0</span>{" "}
                  <span className="text-gray-500">フォロワー</span>
                </button>
                <button className="hover:underline">
                  <span>0</span>{" "}
                  <span className="text-gray-500">フォロー中</span>
                </button>
              </div>
            </div>
          </div>

          <button className="p-2 md:hidden">
            <Settings className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          {user.introduction || "自己紹介はまだありません"}
        </p>

        <div className="flex gap-2">
          <button
            className="
              flex-1 md:flex-initial
              inline-flex items-center justify-center
              rounded-md border px-4 py-2 text-sm font-medium
              hover:bg-gray-100
            "
          >
            プロフィール編集
          </button>

          <button
            className="
              flex-1 md:hidden
              inline-flex items-center justify-center gap-2
              rounded-md border px-4 py-2 text-sm font-medium
              hover:bg-gray-100
            "
          >
            <Heart className="w-4 h-4" />
            お気に入り
          </button>
        </div>
      </div>

      {/*  Tabs */}
      <div className="px-4 md:px-6 md:max-w-7xl md:mx-auto pt-4">
        {/* Tabs List */}
        <div className="inline-flex h-9 w-full md:w-80 items-center justify-center rounded-xl bg-gray-100 p-[3px] mb-6">
          <button
            onClick={() => setTab("reviews")}
            className={`
              inline-flex flex-1 items-center justify-center gap-1.5
              rounded-xl px-2 py-1 text-sm font-medium transition
              ${
                tab === "reviews"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-800"
              }
            `}
          >
            <FileText className="w-4 h-4" />
            レビュー
          </button>

          <button
            onClick={() => setTab("activity")}
            className={`
              inline-flex flex-1 items-center justify-center gap-1.5
              rounded-xl px-2 py-1 text-sm font-medium transition
              ${
                tab === "activity"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-800"
              }
            `}
          >
            アクティビティ
          </button>
        </div>

        {/* Tabs Content */}
        {tab === "reviews" && (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">まだレビューがありません</p>
          </div>
        )}

        {tab === "activity" && (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">アクティビティ履歴</p>
            <p className="text-sm text-gray-400 mt-2">
              フォローやコメントなどの活動が表示されます
            </p>
          </div>
        )}
      </div>
    </div>
  );
}