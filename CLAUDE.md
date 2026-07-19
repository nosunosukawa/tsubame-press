# TSUBAME PRESS & CO. — プロジェクト規約

## これは何か

会社の受託制作実績（作品集）づくりの新作。Starbucks Japan（https://www.starbucks.co.jp/ ）の
サイト構造・UIパターン（メガメニュー、カード型カルーセル、編集コンテンツハブ、店舗検索導線）を
参考に、燕三条の金属加工産業（プレス加工・鏡面研磨）を背景にした架空の食器メーカー
「TSUBAME PRESS & CO.」のコーポレート/ECサイトを制作するデモ。実案件はなく、実在企業
（本物の燕三条メーカー・問屋・Starbucks等）とは無関係の完全架空クライアント。

## ブランド設定

- 1958年創業、燕三条で金型・プレス加工の下請けを営んできた問屋系金属加工会社という設定。
  3代目でプレス製品（スプーン・フォーク・タンブラー等）を自社ブランドとして直販するD2Cへ
  転換した、という架空のストーリー
- コンセプト: 「プレスが、かたちをつくる。研磨が、心を宿す。」— 大量生産(プレス加工)と
  職人の手仕事(鏡面研磨)の両立という、実在の燕三条産業の特徴に即したブランドストーリー
- 製品カテゴリ: カトラリー(スプーン・フォーク) / 包丁・キッチンナイフ / 鍋・調理器具 / 食器・うつわ /
  タンブラー・ドリンクウェア / ギフト
- 看板商品はスプーン・フォーク、プレス成形のシンプルな鍋、切れ味の鋭い包丁の3系統
  （燕三条の実際の知名度に即したユーザー指定）。加えて名前入れ・用途別の**カスタムオーダー**
  サービスを持つ（ユーザー指定の追加要件）

### カスタムオーダーの技術的制約（重要）

プレス加工は金型を使う量産方式のため、**成形後の後加工（型に触れない範囲）のみ個人客に
販売可能**、形状そのものの変更（鍋のサイズ・持ち手の形状変更）は新規金型が必要になり
数十万円規模の初期費用がかかるため個人向けには売れない、という制約をユーザーから明確に
指摘され、実際の名入れ・IH対応加工（かちこみ鍋の底面プレート圧着）の実例を調査した上で
`custom-order.html` を「型はそのままで承れるオーダー（名入れ・仕上げ選択・IH対応加工・
持ち手の素材選択・刃付け方向）」と「金型が必要なオーダー（まとまった数量からのB2B相談）」
の2層構成に修正した。**How to apply:** この種の製造業向けサイトでは、業態の生産方式
（プレス/鋳造/縫製等）に応じて「個人向けに売れるカスタム範囲」と「売れない範囲」を
区別して設計すること。

## 技術スタック

- 素のHTML/CSS/JS。ビルドツール・フレームワークなし
- フォント: Google Fonts（`Barlow Condensed` 欧文ロゴ/数字 + `Zen Kaku Gothic New` 和文見出し +
  `Noto Sans JP` 本文）
- 全ページ共通の `styles.css` / `script.js` を読み込む構成（テンプレートエンジンなしのため、
  グローバルナビ/フッターのHTMLは各ページにコピーする）

## デザイントークン

- 基調色: スチールネイビー `#24313F`、銅色アクセント `#B87333`、生成りホワイト `#F4F3F0`、
  シルバーグレー `#B8BEC4`
- UI: メガメニュー式グローバルナビ、カード型商品カルーセル、編集コンテンツ（ストーリー）ハブ、
  店舗検索（Google Maps埋め込み）— Starbucksのサイト構造を参考にしつつ配色・語彙は独自

## サイト構成（横展開型、33ページ）

全商品タイルが商品詳細ページへリンクする（未実装の詳細ページへの仮リンク・非リンク静的
タイルは商品には存在しない。`custom-order.html`のオーダー種別カードと`recruit.html`の
職種カードのみ、商品ではないため非リンクの静的カードのまま）。

| ファイル | 内容 |
|---|---|
| `index.html` | トップページ |
| `products-cutlery.html` | カトラリー（スプーン・フォーク）一覧 |
| `products-knives.html` | 包丁・キッチンナイフ一覧 |
| `products-cookware.html` | 鍋・調理器具一覧 |
| `products-tableware.html` | 食器・うつわ一覧 |
| `products-drinkware.html` | タンブラー・ドリンクウェア一覧 |
| `product-detail-cutlery.html` | 鏡面ディナースプーン&フォーク セット詳細（看板） |
| `product-detail-teaspoon.html` | 鏡面ティースプーン詳細 |
| `product-detail-table-knife.html` | 鏡面テーブルナイフ詳細 |
| `product-detail-knife.html` | 鏡面三徳包丁詳細（看板） |
| `product-detail-gyuto.html` | 牛刀 240mm詳細 |
| `product-detail-petty.html` | ペティナイフ 120mm詳細 |
| `product-detail-cookware.html` | プレス一体成型 両手鍋詳細（看板） |
| `product-detail-frypan.html` | プレスフライパン 26cm詳細 |
| `product-detail-steamer.html` | 蒸し器プレート詳細 |
| `product-detail-tableware.html` | 鏡面ボウル&漆器ボウル セット詳細 |
| `product-detail-plate.html` | 鏡面プレート 大皿詳細 |
| `product-detail-cup-saucer.html` | カップ&ソーサー詳細 |
| `product-detail-drinkware.html` | 鏡面二重タンブラー詳細（看板） |
| `product-detail-bottle.html` | 保温ボトル 500ml詳細 |
| `product-detail-mug.html` | マグカップ詳細 |
| `custom-order.html` | カスタムオーダー（名前入れ・用途別オーダーメイド） |
| `gift.html` | ギフト特集 |
| `stores.html` | 直売所・取扱店検索（Google Maps埋め込み） |
| `stories.html` | ストーリー一覧 |
| `story-press.html` | プレス職人インタビュー |
| `story-polish.html` | 研磨職人インタビュー |
| `story-factory.html` | 工場開放イベント記事 |
| `company.html` | 会社案内 |
| `recruit.html` | 採用情報 |
| `faq.html` | よくあるご質問 |
| `sitemap.html` | サイトマップ |
| `policy.html` | 利用規約・プライバシーポリシー |

ナビ/フッターに載せるリンクは必ず上記いずれかの実ページに解決させる（未実装ページへの
プレースホルダーリンクは作らない — NAGI Audioでの反省点）。

## 画像について

段階7でgemini-imageスキルによりオリジナル生成予定。実在ブランドのロゴ・シルエットに
似ないよう明示的に回避し、生成後は必ず人間目視で確認する。それまでは placeholder
（CSSグラデーション＋アイコン）で代替する。

## ローカル確認

```sh
python3 -m http.server 8091
# http://localhost:8091/index.html
```
