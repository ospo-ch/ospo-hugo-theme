---
title: Installation
linkTitle: Installation
description: How to add the OSPO Hugo Theme to your site
weight: 1
toc: true
---

The OSPO Hugo Theme can be added to an existing Hugo site in three ways. The Hugo Module approach is recommended because it keeps the theme version-pinned and updatable with a single command.

## Prerequisites

- [Hugo extended](https://gohugo.io/installation/) ≥ 0.134.0
- [Go](https://go.dev/dl/) (required only for the Hugo Module method)

## Method 1 — Hugo Module (recommended)

1. Verify Go is installed:

```bash
go version
```

2. Initialize your site as a Hugo module (replace the path with your own):

```bash
hugo mod init github.com/<your_user>/<your-project>
```

3. Add the theme import to your `hugo.yaml` (or `hugo.toml`):

```yaml
module:
  imports:
    - path: github.com/ospo-ch/ospo-hugo-theme
```

4. Fetch the module:

```bash
hugo mod get
```

## Method 2 — Git submodule

Inside your Hugo site directory:

```bash
git submodule add https://github.com/ospo-ch/ospo-hugo-theme.git themes/ospo
```

Then set the theme in your config:

```yaml
theme: ospo
```

To update to a newer version later:

```bash
git submodule update --remote --merge
```

## Method 3 — Clone

```bash
git clone https://github.com/ospo-ch/ospo-hugo-theme themes/ospo
```

Set `theme: ospo` in your config. To update, `cd themes/ospo && git pull`.
