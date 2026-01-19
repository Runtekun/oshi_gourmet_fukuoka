import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <div className="mx-auto max-w-4xl">

        {/* ヘッダー */}
        <header className="mb-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            推しグルメ福岡
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            ユーザーの「推し」で探す、福岡グルメアプリ
          </p>
        </header>

        {/* サービスの概要 */}
        <section className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            このサービスでできること
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>・福岡県内の飲食店を地図から探せる</li>
            <li>・実際に行った人の「推しコメント」を見られる</li>
            <li>・数値評価に頼らない、リアルな声で選べる</li>
          </ul>
        </section>

        {/* 想定するユーザー層 */}
        <section className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            こんな人におすすめ
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>・福岡旅行でお店選びに迷っている人</li>
            <li>・地元の人おすすめのお店を知りたい人</li>
            <li>・自分の推しグルメを共有したい人</li>
          </ul>
        </section>

        {/* アクションボタン */}
        <section className="mt-16 text-center">
          <p className="mb-6 text-gray-700">
            まずは無料で始めてみましょう
          </p>

          <div className="flex justify-center gap-4">
            <Link to="/signup">
              <button className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
                新規登録
              </button>
            </Link>
            <button className="rounded-md bg-orange-600 px-6 py-2 text-white hover:bg-orange-700">
              ログイン
            </button>
          </div>
        </section>

      </div>
    </div>
  )
}