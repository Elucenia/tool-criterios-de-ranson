<!-- ELUCENIA technical documentation · criterios-de-ranson · zh · no clinical/professional/rights approval -->

# Ranson 标准

[条件、来源与许可](https://elucenia.org/zh/tools/criterios-de-ranson)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 入院时：年龄 \> 55 岁（胆源性：\> 70）

`idade`

### 入院时：白细胞 \> 16000/mm³（胆源性：\> 18000）

`leuco`

### 入院时：血糖 \> 200 mg/dL（胆源性：\> 220）

`glic`

### 入院时：LDH \> 350 U/L（胆源性：\> 400）

`ldh`

### 入院时：AST \> 250 U/L

`ast`

### 48 h：血细胞比容下降 \> 10 个百分点

`ht`

### 48 h：BUN 增加 \> 5 mg/dL，尿素增加 \> 10.7 mg/dL（胆源性：BUN \> 2，尿素 \> 4.3）

`bun`

### 48 h：钙 \< 8 mg/dL

`ca`

### 48 h：PaO₂ \< 60 mmHg（不适用于胆源性）

`pao2`

### 48 h：碱缺失 \> 4 mEq/L（胆源性：\> 5）

`be`

### 48 h：液体潴留 \> 6 L（胆源性：\> 4 L）

`seq`

## 方法版本

Ranson 1974非胆源性与Ranson 1982胆源性；入院+48 h；按病因选阈值

## 已记录的公式

每项标准1分：入院5项，最初48小时6项。总分0–11（胆源性0–10，不含PaO₂）。

括号内数值为胆源性胰腺炎阈值（Ranson 1982）。

## 限制与适用人群

Ranson标准结合入院时与48小时的数据；胆源性和非胆源性胰腺炎的标准及阈值不同。尚未观察到的项目不能视为不存在，部分总分也不能当作完整评估。ACG2024指南指出，Ranson等系统不能准确预测最初24–48小时内的重症进展，也不能替代对器官衰竭和临床体征的重新评估。随访监测和初始支持不能等待评分完成。

## 参考文献

- [Ranson JH et al. Prognostic signs and the role of operative management in acute pancreatitis. Surg Gynecol Obstet, 1974. (PubMed)](https://pubmed.ncbi.nlm.nih.gov/4834279/)

- [Ranson JH. Etiological and prognostic factors in human acute pancreatitis: a review. Am J Gastroenterol, 1982. (PubMed)](https://pubmed.ncbi.nlm.nih.gov/7051819/)

- [Tenner S et al. American College of Gastroenterology guideline: management of acute pancreatitis. Am J Gastroenterol, 2013.](https://doi.org/10.1038/ajg.2013.218)

- [ACG2024,original guideline hosted by review-course mirror](https://www.giboardreview.com/wp-content/uploads/2024/04/ACG-guideline-acute-pancreatitis-Mch-2024.pdf)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
