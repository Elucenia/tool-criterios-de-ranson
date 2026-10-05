<!-- ELUCENIA technical documentation · criterios-de-ranson · ja · no clinical/professional/rights approval -->

# Ranson基準

[条件・出典・許諾](https://elucenia.org/ja/tools/criterios-de-ranson)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 入院時：年齢 \> 55歳（胆石性：\> 70）

`idade`

### 入院時：白血球数 \> 16000/mm³（胆石性：\> 18000）

`leuco`

### 入院時：血糖値 \> 200 mg/dL（胆石性：\> 220）

`glic`

### 入院時：LDH \> 350 U/L（胆石性：\> 400）

`ldh`

### 入院時：AST \> 250 U/L

`ast`

### 48 h：ヘマトクリット値が \> 10パーセントポイント低下

`ht`

### 48 h：BUN上昇 \> 5 mg/dL、尿素上昇 \> 10.7 mg/dL（胆石性：BUN \> 2、尿素 \> 4.3）

`bun`

### 48 h：カルシウム \< 8 mg/dL

`ca`

### 48 h：PaO₂ \< 60 mmHg（胆石性には適用しない）

`pao2`

### 48 h：塩基欠乏 \> 4 mEq/L（胆石性：\> 5）

`be`

### 48 h：体液の隔離 \> 6 L（胆石性：\> 4 L）

`seq`

## 方法の版

Ranson 1974非胆石性とRanson 1982胆石性；入院+48 h；病因別閾値

## 記載された計算式

各基準1点：入院時5、最初の48時間に6。合計0～11（胆石性はPaO₂を除く0～10）。

括弧内は胆石性膵炎の閾値（Ranson 1982）。

## 限界・対象集団

Ranson基準は入院時と48時間後のデータを組み合わせ、胆道性と非胆道性膵炎で基準・閾値が異なります。まだ観察していない項目を「なし」と扱ったり、部分的な合計を完全な評価と扱ったりしないでください。ACG2024ガイドラインは、Ransonなどのシステムが最初の24–48時間の重症化を正確に予測せず、臓器不全や臨床所見の再評価に代わらないと指摘しています。経過観察と初期サポートは、スコアの完成を待つべきではありません。

## 参考文献

- [Ranson JH et al. Prognostic signs and the role of operative management in acute pancreatitis. Surg Gynecol Obstet, 1974. (PubMed)](https://pubmed.ncbi.nlm.nih.gov/4834279/)

- [Ranson JH. Etiological and prognostic factors in human acute pancreatitis: a review. Am J Gastroenterol, 1982. (PubMed)](https://pubmed.ncbi.nlm.nih.gov/7051819/)

- [Tenner S et al. American College of Gastroenterology guideline: management of acute pancreatitis. Am J Gastroenterol, 2013.](https://doi.org/10.1038/ajg.2013.218)

- [ACG2024,original guideline hosted by review-course mirror](https://www.giboardreview.com/wp-content/uploads/2024/04/ACG-guideline-acute-pancreatitis-Mch-2024.pdf)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
