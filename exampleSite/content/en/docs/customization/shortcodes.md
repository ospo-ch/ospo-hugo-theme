---
title: Shortcodes
linkTitle: Shortcodes
description: Custom shortcodes provided by the OSPO Hugo Theme
weight: 10
toc: true
---

Shortcodes are snippets you can drop into Markdown content to render theme-specific components that plain Markdown cannot express.

## button

Renders a styled call-to-action link.

**Syntax**

```text
{{</* button link="<url>" text="<label>" */>}}
```

**Parameters**

| Parameter | Required | Description |
| --------- | :------: | ----------- |
| `link`    | Yes      | Destination URL (relative or absolute). Relative URLs are expanded with Hugo's `absURL`. |
| `text`    | Yes      | Visible button label. |

**Examples**

```text
{{</* button link="catalog" text="Software Catalog" */>}}

{{</* button link="https://github.com/ospo-ch/ospo-hugo-theme" text="View on GitHub" */>}}
```

**Output**

{{< button link="catalog" text="Software Catalog" >}}

{{< button link="https://github.com/ospo-ch/ospo-hugo-theme" text="View on GitHub" >}}
