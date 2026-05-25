---
title: Rédiger du contenu
linkTitle: Rédiger du contenu
description: >
  Comment rédiger du contenu
weight: 5
toc: true
---

## Titres

Utilisés de préférence pour les en-têtes de section.

```text
## Titres
```

### Sous-titres

```text
### Sous-titres
```

## Mise en forme du texte

Gras : utilisez `**` autour du texte. `**gras**` s'affichera comme **gras**.

Italique : utilisez `_` autour du texte. `_italique_` s'affichera comme _italique_.

Texte barré : utilisez `~` autour du texte. `~barré~` s'affichera comme ~barré~.

## Liens

Exemple : `[exemple](https://example.com)` affichera le lien [exemple](https://example.com).

## Citations

### Ligne unique

**Entrée**

```text
> Ceci est une citation sur une seule ligne
```

**Résultat**

> Ceci est une citation sur une seule ligne

### Multiligne

**Entrée**

```text
> Ce texte s'affichera sur plusieurs lignes.
>
> Fin.
```

**Résultat**

> Ce texte s'affichera sur plusieurs lignes.
>
> Fin.

## Listes

### Liste ordonnée

**Entrée**

```text
1. Premier élément
2. Deuxième élément
3. Troisième élément
4. Quatrième élément
```

**Résultat**

1. Premier élément
2. Deuxième élément
3. Troisième élément
4. Quatrième élément

### Liste non ordonnée

**Entrée**

```text
- Premier élément
- Deuxième élément
- Troisième élément
- Quatrième élément
```

**Résultat**

- Premier élément
- Deuxième élément
- Troisième élément
- Quatrième élément

### Liste imbriquée

**Entrée**

```text
- Premier élément
- Deuxième élément
  - Élément supplémentaire
  - Élément supplémentaire
- Troisième élément
```

**Résultat**

- Premier élément
- Deuxième élément
  - Élément supplémentaire
  - Élément supplémentaire
- Troisième élément

### Tableaux

**Entrée**

```text
| Colonne n°1 | Colonne n°2 | Colonne n°3 |
| ----------- | :---------: | ----------: |
| Élément n°1 | Propriété 1 |      1 600 € |
| Élément n°2 | Propriété 2 |         12 € |
| Élément n°3 | Propriété 3 |          1 € |
```

**Résultat**

| Colonne n°1 | Colonne n°2 | Colonne n°3 |
| ----------- | :---------: | ----------: |
| Élément n°1 | Propriété 1 |       1 600 € |
| Élément n°2 | Propriété 2 |          12 € |
| Élément n°3 | Propriété 3 |           1 € |

## Code

Utilisez des blocs délimités par des backticks avec un identifiant de langage pour obtenir la coloration syntaxique. Le code en ligne utilise des backticks simples : `comme ceci`.

### YAML

```yaml
baseURL: https://example.com/
title: Mon portail OSPO

params:
  accessibility:
    help_url: docs/accessibility/
```

### Bash

```bash
hugo mod get
hugo server --environment development
```

### Go

```go
package main

import "fmt"

func main() {
    fmt.Println("Bonjour, OSPO !")
}
```

## En-têtes

Hugo convertit les en-têtes Markdown `#` en balises HTML `<h1>`–`<h6>`. Les niveaux `h2`–`h4` apparaissent dans la table des matières lorsque `toc: true` est défini dans le frontmatter.

```text
## En-tête h2
### En-tête h3
#### En-tête h4
##### En-tête h5
```

Le hook render-heading ajoute automatiquement des liens d'ancrage.

## Règle horizontale

```text
---
```

---

## Listes de tâches

```text
- [x] Rédiger la déclaration d'accessibilité
- [x] Ajouter des exemples de coloration syntaxique
- [ ] Publier la version 1.0
```

- [x] Rédiger la déclaration d'accessibilité
- [x] Ajouter des exemples de coloration syntaxique
- [ ] Publier la version 1.0

## Images

```text
![Texte alternatif](https://via.placeholder.com/400x200 "Titre optionnel")
```

Pour inclure une image locale, placez-la dans `static/images/` et référencez-la avec un chemin relatif à la racine :

```text
![Logo](/images/logo.svg)
```

## Admonitions / Blocs d'alerte

**Entrée**

```text
> [!NOTE]
> Informations utiles que les utilisateurs doivent connaître, même en parcourant rapidement le contenu.

> [!TIP]
> Conseils pour mieux faire les choses ou plus facilement.

> [!IMPORTANT]
> Informations clés que les utilisateurs doivent connaître pour atteindre leur objectif.

> [!WARNING]
> Informations urgentes nécessitant une attention immédiate pour éviter des problèmes.

> [!CAUTION]
> Avertissements sur les risques ou les conséquences négatives de certaines actions.
```

**Résultat**

> [!NOTE]
> Informations utiles que les utilisateurs doivent connaître, même en parcourant rapidement le contenu.

> [!TIP]
> Conseils pour mieux faire les choses ou plus facilement.

> [!IMPORTANT]
> Informations clés que les utilisateurs doivent connaître pour atteindre leur objectif.

> [!WARNING]
> Informations urgentes nécessitant une attention immédiate pour éviter des problèmes.

> [!CAUTION]
> Avertissements sur les risques ou les conséquences négatives de certaines actions.
