import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function SingIn() {
  const { SignIn, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("メールアドレスとパスワードを入力してください");
      return;
    }

    try {
      await login({ email, password });
      alert("ログイン成功！");
    } catch {
      setError("ログインに失敗しました");
    }
  };

  return (
    <div>
      <h1>ログイン</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>パスワード</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p>{error}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "ログイン中..." : "ログイン"}
        </button>
      </form>
    </div>
  );
}