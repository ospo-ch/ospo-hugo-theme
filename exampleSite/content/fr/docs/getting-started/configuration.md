---
title: Configuration
linkTitle: Configuration
description: Paramètres essentiels de hugo.yaml pour le thème OSPO Hugo
weight: 2
toc: true
---

Après l'installation, configurez le fichier `hugo.yaml` de votre site avec les options ci-dessous. Une configuration minimale fonctionnelle est présentée en premier, suivie des explications de chaque section.

## Configuration minimale

```yaml
baseURL: https://example.com/
languageCode: fr
title: Mon portail OSPO

params:
  accessibility:
    help_url: docs/accessibility/

taxonomies:
  categories: categories
  tags: tags
  prog_languages: prog_languages
```

## Paramètres

### Accessibilité

La valeur `params.accessibility.help_url` est utilisée par la barre de navigation rapide pour créer un lien vers votre déclaration d'accessibilité. Définissez-la sur le chemin relatif de votre page d'accessibilité (ex. : `docs/accessibility/`). Consultez la [Déclaration d'accessibilité](/fr/docs/accessibility/) fournie comme modèle.

## Support multilingue

Pour activer l'anglais et le français (ou d'autres langues), ajoutez un bloc `languages` :

```yaml
defaultContentLanguage: en
defaultContentLanguageInSubdir: false

languages:
  en:
    languageName: English
    weight: 1
  fr:
    languageName: Français
    weight: 2
    params:
      accessibility:
        help_url: docs/accessibility/
```

Hugo ne substitue **pas** le contenu d'une autre langue pour les pages manquantes — chaque langue doit disposer de ses propres fichiers de contenu.

## Coloration syntaxique

Le thème est livré avec une feuille de style pour la coloration syntaxique. Pour activer les blocs de code avec couleurs, définissez :

```yaml
markup:
  highlight:
    noClasses: false
```

## Styles personnalisés

Placez vos surcharges dans `assets/scss/` à la racine de votre site :

- `_variables_project.scss` — redéfinissez les variables SCSS du thème (couleurs, polices, espacements)
- `_styles_project.scss` — ajoutez des règles personnalisées ou surchargez les styles du thème

Ces fichiers sont importés automatiquement ; aucune modification du thème n'est nécessaire.
