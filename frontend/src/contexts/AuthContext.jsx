import { createContext, useContext, useState } from "react";


  // 認証用のContextを作成（初期値はnull）
  const AuthContext = createContext(null);

 // Contextプロバイダーコンポーネント
 export function AuthProvider({ children }) {
  // ログイン中のユーザー情報
  const [user, setUser] = useState(null);
  // 読み込み状態
  const [isLoading, setIsLoading] = useState(false);
  // エラーメッセージ
  const [error, setError] = useState(null);

  // 新規登録処理
  const signUp = async ({ username, email, password }) => {
    setIsLoading(true);
    setError(null);

    // APIエンドポイントにPOSTリクエストを送信
    try {
      const res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // クッキーを含める
        body: JSON.stringify({
          user: {
            name: username,
            email,
            password,
          },
        }),
      });

      // ステータスが200番台以外ならエラー
      if (!res.ok) {
        throw new Error("登録に失敗しました もう一度お試しください。");
      }

      // レスポンスをJSONで受け取る
      const data = await res.json();

      // ユーザー情報を状態に保存
      setUser(data.user);

      return data;

    } catch (err) {
      setError("登録に失敗しました もう一度お試しください。");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Contextの値を提供
  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// AuthContextを利用するためのカスタムフック
export function useAuth() {
  return useContext(AuthContext);
}