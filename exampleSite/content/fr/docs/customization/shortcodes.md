---
title: Shortcodes
linkTitle: Shortcodes
description: Shortcodes personnalisés fournis par le thème OSPO Hugo
weight: 10
toc: true
---

Les shortcodes sont des extraits que vous pouvez insérer dans le contenu Markdown pour afficher des composants spécifiques au thème que le Markdown standard ne permet pas d'exprimer.

## button

Affiche un lien d'appel à l'action stylisé.

**Syntaxe**

```text
{{</* button link="<url>" text="<libellé>" */>}}
```

**Paramètres**

| Paramètre | Requis | Description |
| --------- | :----: | ----------- |
| `link`    | Oui    | URL de destination (relative ou absolue). Les URL relatives sont développées avec `absURL` de Hugo. |
| `text`    | Oui    | Libellé visible du bouton. |

**Exemples**

```text
{{</* button link="catalog" text="Catalogue" */>}}

{{</* button link="https://github.com/ospo-ch/ospo-hugo-theme" text="Voir sur GitHub" */>}}
```

**Résultat**

{{< button link="catalog" text="Catalogue" >}}

{{< button link="https://github.com/ospo-ch/ospo-hugo-theme" text="Voir sur GitHub" >}}
