<!-- ELUCENIA technical documentation · criterios-de-ranson · pt-BR · no clinical/professional/rights approval -->

# Critérios de Ranson

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/criterios-de-ranson)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Admissão: idade \> 55 anos (biliar: \> 70)

`idade`

### Admissão: leucócitos \> 16.000/mm³ (biliar: \> 18.000)

`leuco`

### Admissão: glicemia \> 200 mg/dL (biliar: \> 220)

`glic`

### Admissão: LDH \> 350 U/L (biliar: \> 400)

`ldh`

### Admissão: AST \> 250 U/L

`ast`

### 48 h: queda do hematócrito \> 10 pontos percentuais

`ht`

### 48 h: aumento do BUN \> 5 mg/dL, ureia \> 10,7 mg/dL (biliar: BUN \> 2, ureia \> 4,3)

`bun`

### 48 h: cálcio \< 8 mg/dL

`ca`

### 48 h: PaO₂ \< 60 mmHg (não se aplica à biliar)

`pao2`

### 48 h: déficit de bases \> 4 mEq/L (biliar: \> 5)

`be`

### 48 h: sequestro de líquidos \> 6 L (biliar: \> 4 L)

`seq`

## Edição do método

Ranson 1974 não-biliar e Ranson 1982 biliar; admissão+48 h; limiares por etiologia

## Fórmula documentada

Um ponto por critério: 5 na admissão e 6 ao longo das primeiras 48 horas. Total de 0 a 11 (0 a 10 na pancreatite biliar, que não usa a PaO₂).

Os valores entre parênteses são os cortes para pancreatite biliar (Ranson 1982).

## Limites e população

Os critérios de Ranson combinam dados da admissão com dados de 48 horas; os critérios e limiares diferem entre pancreatite biliar e não biliar. Não trate itens ainda não observados como ausentes nem um total parcial como a avaliação completa. A diretriz ACG 2024 ressalta que sistemas como Ranson não predizem com precisão a evolução grave nas primeiras 24–48 horas e não substituem reavaliação de falência orgânica e sinais clínicos. O acompanhamento e o suporte inicial não devem aguardar o fechamento do escore.

## Referências

- [Ranson JH et al. Prognostic signs and the role of operative management in acute pancreatitis. Surg Gynecol Obstet, 1974. (PubMed)](https://pubmed.ncbi.nlm.nih.gov/4834279/)

- [Ranson JH. Etiological and prognostic factors in human acute pancreatitis: a review. Am J Gastroenterol, 1982. (PubMed)](https://pubmed.ncbi.nlm.nih.gov/7051819/)

- [Tenner S et al. American College of Gastroenterology guideline: management of acute pancreatitis. Am J Gastroenterol, 2013.](https://doi.org/10.1038/ajg.2013.218)

- [ACG2024,original guideline hosted by review-course mirror](https://www.giboardreview.com/wp-content/uploads/2024/04/ACG-guideline-acute-pancreatitis-Mch-2024.pdf)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
