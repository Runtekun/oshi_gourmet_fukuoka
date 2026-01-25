import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const { user, logout, isLoading } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>ホーム</h1>

      {user && (
        <p>
          ようこそ、{user.name || user.email} さん
        </p>
      )}

      <button
        onClick={ async () => {
            await logout();
            navigate("/");
        }}
        disabled={isLoading}
       >
        {isLoading ? "ログアウト中..." : "ログアウト"}
       </button>
    </div>
  );
}
