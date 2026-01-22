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
      const res = await fetch("http://localhost:3000/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email, 
          password,
          password_confirmation: password,
          name: username,
        }),
      });

      // ステータスが200番台以外ならエラー
      if (!res.ok) {
        throw new Error("登録に失敗しました もう一度お試しください。");
      }

      // レスポンスヘッダーから認証情報を取得
      const accessToken = res.headers.get("access-token");
      const client = res.headers.get("client");
      const uid = res.headers.get("uid");

      // 認証情報をローカルストレージに保存
      if (accessToken && client && uid) {
      localStorage.setItem("access-token", accessToken);
      localStorage.setItem("client", client);
      localStorage.setItem("uid", uid);
      }

      // レスポンスボディからユーザー情報を取得
      const responseBody = await res.json();

      // ユーザーデータを取得
      const userData = responseBody.data;

      // ユーザー情報を状態に保存
      setUser(userData);

      return userData;

    } catch (err) {
      setError("登録に失敗しました もう一度お試しください。");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // ログイン処理
  const login = async ({ email, password }) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:3000/auth/sign_in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      if (!res.ok) {
        throw new Error("ログインに失敗しました  もう一度お試しください。");
      }
  
      const accessToken = res.headers.get("access-token");
      const client = res.headers.get("client");
      const uid = res.headers.get("uid");
  
      if (accessToken && client && uid) {
        localStorage.setItem("access-token", accessToken);
        localStorage.setItem("client", client);
        localStorage.setItem("uid", uid);
      }
  
      const responseBody = await res.json();

      const userData = responseBody.data;

      setUser(userData);
  
      return userData;

    } catch (err) {
      setError("ログインに失敗しました");
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
        login,
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