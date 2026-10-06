<!-- ELUCENIA technical documentation · criterios-de-ranson · fr · no clinical/professional/rights approval -->

# Critères de Ranson

[conditions, sources et autorisations](https://elucenia.org/fr/outils/criterios-de-ranson)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Admission : âge \> 55 ans (biliaire : \> 70)

`idade`

### Admission : leucocytes \> 16 000/mm³ (biliaire : \> 18 000)

`leuco`

### Admission : glycémie \> 200 mg/dL (biliaire : \> 220)

`glic`

### Admission : LDH \> 350 U/L (biliaire : \> 400)

`ldh`

### Admission : ASAT \> 250 U/L

`ast`

### 48 h : baisse de l’hématocrite \> 10 points de pourcentage

`ht`

### 48 h : hausse du BUN \> 5 mg/dL, urée \> 10,7 mg/dL (biliaire : BUN \> 2, urée \> 4,3)

`bun`

### 48 h : calcium \< 8 mg/dL

`ca`

### 48 h : PaO₂ \< 60 mmHg (non applicable à l’étiologie biliaire)

`pao2`

### 48 h : déficit de bases \> 4 mEq/L (biliaire : \> 5)

`be`

### 48 h : séquestration liquidienne \> 6 L (biliaire : \> 4 L)

`seq`

## Édition de la méthode

Ranson 1974 non biliaire et Ranson 1982 biliaire ; admission+48 h ; seuils par étiologie

## Formule documentée

Un point par critère : 5 à l’admission et 6 dans les premières 48 heures. Total 0–11 (0–10 en pancréatite biliaire, sans PaO₂).

Les valeurs entre parenthèses sont les seuils biliaires (Ranson 1982).

## Limites et population

Les critères de Ranson associent les données à l’admission et à 48 heures ; les critères et seuils diffèrent entre pancréatite biliaire et non biliaire. Ne considérez pas les éléments non encore observés comme absents, ni un total partiel comme une évaluation complète. La recommandation ACG 2024 souligne que les systèmes tels que Ranson ne prédisent pas avec précision l’évolution grave dans les premières 24–48 heures et ne remplacent pas la réévaluation de la défaillance d’organes et des signes cliniques. Le suivi et le soutien initial ne doivent pas attendre que le score soit complet.

## Références

- [Ranson JH et al. Prognostic signs and the role of operative management in acute pancreatitis. Surg Gynecol Obstet, 1974. (PubMed)](https://pubmed.ncbi.nlm.nih.gov/4834279/)

- [Ranson JH. Etiological and prognostic factors in human acute pancreatitis: a review. Am J Gastroenterol, 1982. (PubMed)](https://pubmed.ncbi.nlm.nih.gov/7051819/)

- [Tenner S et al. American College of Gastroenterology guideline: management of acute pancreatitis. Am J Gastroenterol, 2013.](https://doi.org/10.1038/ajg.2013.218)

- [ACG2024,original guideline hosted by review-course mirror](https://www.giboardreview.com/wp-content/uploads/2024/04/ACG-guideline-acute-pancreatitis-Mch-2024.pdf)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Ranson 0 à 2 : pancréatite légère probable

Mortalité d’environ 1 % dans la série originale.


### 2

Ranson 3 à 4 : pancréatite sévère

Mortalité d’environ 15 % ; surveillance intensive.


### 3

Ranson ≥ 7 : pancréatite très sévère

Mortalité proche de 100 % dans la série originale ; soins intensifs.

