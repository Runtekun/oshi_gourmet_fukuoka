import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="hidden md:block bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-lg text-orange-600 mb-2">推しグルメ福岡</h2>
            <p className="text-sm text-gray-600">
              福岡のグルメを、
              <br />
              リアルな声で見つけよう
            </p>
          </div>

          <div>
            <h3 className="text-sm mb-3">情報</h3>

            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-orange-600">
                  推しグルメ福岡について
                </Link>
              </li>

              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-orange-600">
                  利用規約
                </Link>
              </li>

              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-orange-600">
                  プライバシーポリシー
                </Link>
              </li>

              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-orange-600">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm mb-3">データ提供</h3>
            <p className="text-sm text-gray-600">
              Powered by ホットペッパーグルメ
              <br />
              Webサービス
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} 推しグルメ福岡
          </p>
        </div>

      </div>
    </footer>
  );
};