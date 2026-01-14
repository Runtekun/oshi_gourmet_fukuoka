import { useState } from 'react';
import { useAuth } from "@/contexts/auth-context"

export default function SignUp() {
    const { signUp, isLoading } = useAuth();
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!username || !email || !password) {
            setError("全てのフィールドを入力してください");
            return;
        }

        if (username.length < 3) {
            setError("ユーザー名は3文字以上である必要があります");
            return;
        }

        if (password.length < 6) {
            setError("パスワードは6文字以上である必要があります");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("有効なメールアドレスを入力してください");
            return;
        } 

        try {
            await signUp({ username, email, password });
            alert("登録に成功しました！");
        } catch (err) {
            setError("登録に失敗しました");
        }
    };

    return (
    <div>
      <h1>新規登録</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>ユーザー名</label>
          <input
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

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
          {isLoading ? "登録中..." : "登録"}
        </button>
      </form>
    </div>
  )
} 





                        



