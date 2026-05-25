---
title: Configuration
linkTitle: Configuration
description: Essential hugo.yaml settings for the OSPO Hugo Theme
weight: 2
toc: true
---

After installation, configure your site's `hugo.yaml` with the options below. A minimal working configuration is shown first, followed by explanations of each section.

## Minimal configuration

```yaml
baseURL: https://example.com/
languageCode: en
title: My OSPO Portal

params:
  accessibility:
    help_url: docs/accessibility/

taxonomies:
  categories: categories
  tags: tags
  prog_languages: prog_languages
```

## Params

### Accessibility

The `params.accessibility.help_url` value is used by the skip-navigation bar to link to your accessibility statement. Set it to the relative path of your accessibility page (e.g. `docs/accessibility/`). See the bundled [Accessibility Statement](/docs/accessibility/) for a template.

## Multilingual support

To enable English and French (or other languages), add a `languages` block:

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

Hugo does **not** fall back to another language's content for missing pages — each language must have its own content files.

## Syntax highlighting

The theme ships with a syntax highlighting stylesheet. To activate token-colored code blocks, set:

```yaml
markup:
  highlight:
    noClasses: false
```

## Custom styles

Place your overrides in `assets/scss/` at your site root:

- `_variables_project.scss` — override theme SCSS variables (colors, fonts, spacing)
- `_styles_project.scss` — add custom rules or override theme styles

These files are imported automatically; no changes to the theme are needed.
