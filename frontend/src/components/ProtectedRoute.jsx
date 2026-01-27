import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, isLoading } = useAuth();

  //　将来spinnerに置き換え予定
  if (isLoading) return null;

  // ユーザーが認証されていない場合、ホームページにリダイレクト
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}
