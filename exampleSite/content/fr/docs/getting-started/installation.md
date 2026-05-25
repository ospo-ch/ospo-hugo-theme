---
title: Installation
linkTitle: Installation
description: Comment ajouter le thème OSPO Hugo à votre site
weight: 1
toc: true
---

Le thème OSPO Hugo peut être ajouté à un site Hugo existant de trois manières. L'approche par module Hugo est recommandée car elle verrouille la version du thème et permet sa mise à jour en une seule commande.

## Prérequis

- [Hugo extended](https://gohugo.io/installation/) ≥ 0.134.0
- [Go](https://go.dev/dl/) (requis uniquement pour la méthode Module Hugo)

## Méthode 1 — Module Hugo (recommandé)

1. Vérifiez que Go est installé :

```bash
go version
```

2. Initialisez votre site en tant que module Hugo (remplacez le chemin par le vôtre) :

```bash
hugo mod init github.com/<votre_utilisateur>/<votre-projet>
```

3. Ajoutez l'import du thème dans votre `hugo.yaml` (ou `hugo.toml`) :

```yaml
module:
  imports:
    - path: github.com/ospo-ch/ospo-hugo-theme
```

4. Récupérez le module :

```bash
hugo mod get
```

## Méthode 2 — Sous-module Git

Dans le répertoire de votre site Hugo :

```bash
git submodule add https://github.com/ospo-ch/ospo-hugo-theme.git themes/ospo
```

Puis définissez le thème dans votre configuration :

```yaml
theme: ospo
```

Pour mettre à jour vers une version plus récente :

```bash
git submodule update --remote --merge
```

## Méthode 3 — Clonage

```bash
git clone https://github.com/ospo-ch/ospo-hugo-theme themes/ospo
```

Définissez `theme: ospo` dans votre configuration. Pour mettre à jour, exécutez `cd themes/ospo && git pull`.
