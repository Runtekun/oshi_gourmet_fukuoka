import { useAuth } from "../contexts/AuthContext";

export default function HomePage() {
  const { user, logout, isLoading } = useAuth();

  return (
    <div>
      <h1>ホーム</h1>

      {user && (
        <p>
          ようこそ、{user.name || user.email} さん
        </p>
      )}

      <button onClick={logout} disabled={isLoading}>
        {isLoading ? "ログアウト中..." : "ログアウト"}
      </button>
    </div>
  );
}
