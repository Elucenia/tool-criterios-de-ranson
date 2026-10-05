<!-- ELUCENIA technical documentation · criterios-de-ranson · es · no clinical/professional/rights approval -->

# Criterios de Ranson

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/criterios-de-ranson)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Ingreso: edad \> 55 años (biliar: \> 70)

`idade`

### Ingreso: leucocitos \> 16.000/mm³ (biliar: \> 18.000)

`leuco`

### Ingreso: glucemia \> 200 mg/dL (biliar: \> 220)

`glic`

### Ingreso: LDH \> 350 U/L (biliar: \> 400)

`ldh`

### Ingreso: AST \> 250 U/L

`ast`

### 48 h: descenso del hematocrito \> 10 puntos porcentuales

`ht`

### 48 h: aumento del BUN \> 5 mg/dL, urea \> 10,7 mg/dL (biliar: BUN \> 2, urea \> 4,3)

`bun`

### 48 h: calcio \< 8 mg/dL

`ca`

### 48 h: PaO₂ \< 60 mmHg (no se aplica a la etiología biliar)

`pao2`

### 48 h: déficit de bases \> 4 mEq/L (biliar: \> 5)

`be`

### 48 h: secuestro de líquidos \> 6 L (biliar: \> 4 L)

`seq`

## Edición del método

Ranson 1974 no biliar y Ranson 1982 biliar; ingreso+48 h; umbrales por etiología

## Fórmula documentada

Un punto por criterio: 5 al ingreso y 6 en las primeras 48 horas. Total 0–11 (0–10 en pancreatitis biliar, sin PaO₂).

Los valores entre paréntesis son los cortes biliares (Ranson 1982).

## Límites y población

Los criterios de Ranson combinan datos del ingreso con datos de 48 horas; los criterios y umbrales difieren entre pancreatitis biliar y no biliar. No trate los elementos aún no observados como ausentes ni un total parcial como la evaluación completa. La guía ACG 2024 señala que sistemas como Ranson no predicen con precisión la evolución grave en las primeras 24–48 horas ni sustituyen la reevaluación de insuficiencia orgánica y signos clínicos. El seguimiento y el soporte inicial no deben esperar a completar la puntuación.

## Referencias

- [Ranson JH et al. Prognostic signs and the role of operative management in acute pancreatitis. Surg Gynecol Obstet, 1974. (PubMed)](https://pubmed.ncbi.nlm.nih.gov/4834279/)

- [Ranson JH. Etiological and prognostic factors in human acute pancreatitis: a review. Am J Gastroenterol, 1982. (PubMed)](https://pubmed.ncbi.nlm.nih.gov/7051819/)

- [Tenner S et al. American College of Gastroenterology guideline: management of acute pancreatitis. Am J Gastroenterol, 2013.](https://doi.org/10.1038/ajg.2013.218)

- [ACG2024,original guideline hosted by review-course mirror](https://www.giboardreview.com/wp-content/uploads/2024/04/ACG-guideline-acute-pancreatitis-Mch-2024.pdf)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
