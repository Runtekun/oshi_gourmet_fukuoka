# Copilot Instructions for oshi_gourmet_fukuoka

## プロジェクト全体像
- 本リポジトリは「推しグルメ福岡」アプリのモノレポ構成です。
- **backend/**: Ruby on Rails（APIサーバー）。飲食店情報やユーザー体験談を管理。
- **frontend/**: React（Create React Appベース）。地図や検索UIを提供。
- `docker-compose.yml`で全体を統合し、開発・本番環境を管理。

## 主要な開発ワークフロー
- **バックエンド起動**: `docker-compose up backend` または `cd backend && ./bin/rails s`
- **フロントエンド起動**: `docker-compose up frontend` または `cd frontend && npm start`
- **テスト**:
  - バックエンド: `cd backend && ./bin/rails test`
  - フロントエンド: `cd frontend && npm test`
- **DBマイグレーション**: `cd backend && ./bin/rails db:migrate`

## 重要な設計・実装パターン
- Rails標準のMVC構成。API専用設計（`app/controllers`以下はAPIエンドポイント）。
- ReactはSPA構成。API通信は`/backend`のRailsサーバーと連携。
- 店舗情報は外部APIから取得し、ユーザー体験談や推薦コメントは独自DBで管理。
- 数値評価より「誰が推薦したか」を重視したデータ設計。

## プロジェクト固有の注意点
- **日本語対応**: UI・DBともに日本語を前提。i18n対応は`backend/config/locales/`参照。
- **Docker利用**: ローカル開発はDocker推奨。`entrypoint.sh`や`Dockerfile`の独自処理に注意。
- **CI/CDやデプロイ**: 現状READMEに記載なし。必要に応じて`docker-compose`やRails標準コマンドを利用。

## 参考ファイル
- サービス概要: [README.md](../README.md)
- バックエンド構成: [backend/README.md](../backend/README.md)
- フロントエンド構成: [frontend/README.md](../frontend/README.md)
- ルーティング: [backend/config/routes.rb](../backend/config/routes.rb)

---

**AIエージェント向けTips**
- Rails/Reactの一般的なベストプラクティスを踏襲しつつ、プロジェクト固有の「推薦者重視」設計や日本語対応に留意。
- 既存のコマンドやDocker構成を優先的に利用し、独自スクリプトや設定ファイル（`entrypoint.sh`等）も参照すること。
- 仕様や設計意図が不明な場合は、READMEや主要設定ファイルを横断的に確認すること。
