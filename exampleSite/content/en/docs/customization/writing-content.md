---
title: Writing content
linkTitle: Writing content
description: >
  How to write content
weight: 5
toc: true
---

## Titles

Best used for section headers.

```text
## Titles
```

### Subtitles

```text
### Subtitles
```

## Text Formatting

Bold style: use `**` around the text. `**bold**` will show as **bold**.

Italic style: use `_` around the text. `_italic_` will show as _italic_.

Strikethrough style: use `~` around the text. `~strikethrough~` will show as ~strikethrough~.

## Links

Example `[example](https://example.com)` will display the link [example](https://example.com).

## Blockquotes

### Singleline

**Input**

```text
> This is a single line blockquote
```

**Output**

> This is a single line blockquote

### Multiline

**Input**

```text
> This text will be shown on multiple lines.
>
> The end.
```

**Output**

> This text will be shown on multiple lines.
>
> The end.

## Lists

### Ordered List

**Input**

```text
1. First item
2. Second item
3. Third item
4. Fourth item
```

**Output**

1. First item
2. Second item
3. Third item
4. Fourth item

### Unordered List

**Input**

```text
- First item
- Second item
- Third item
- Fourth item
```

**Output**

- First item
- Second item
- Third item
- Fourth item

### Nested List

**Input**

```text
- First item
- Second item
  - Additional item
  - Additional item
- Third item
```

**Output**

- First item
- Second item
  - Additional item
  - Additional item
- Third item

### Tables

**Input**

```text
| Column #1 |  Column #2  | Column #3 |
| --------- | :---------: | --------: |
| Item #1   | Property #1 |     $1600 |
| Item #2   | Property #2 |       $12 |
| Item #3   | Property #3 |        $1 |
```

**Output**

| Column #1 |  Column #2  | Column #3 |
| --------- | :---------: | --------: |
| Item #1   | Property #1 |     $1600 |
| Item #2   | Property #2 |       $12 |
| Item #3   | Property #3 |        $1 |

## Code

Use backtick-fenced blocks with a language identifier to get syntax highlighting. Inline code uses single backticks: `like this`.

### YAML

```yaml
baseURL: https://example.com/
title: My OSPO Portal

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
    fmt.Println("Hello, OSPO!")
}
```

## Headings

Hugo maps Markdown `#` headings to HTML `<h1>`–`<h6>`. Headings `h2`–`h4` appear in the table of contents when `toc: true` is set in frontmatter.

```text
## h2 heading
### h3 heading
#### h4 heading
##### h5 heading
```

The render-heading hook adds anchor links automatically.

## Horizontal rule

```text
---
```

---

## Task lists

```text
- [x] Write the accessibility statement
- [x] Add syntax highlighting examples
- [ ] Publish the 1.0 release
```

- [x] Write the accessibility statement
- [x] Add syntax highlighting examples
- [ ] Publish the 1.0 release

## Images

```text
![Alt text](https://via.placeholder.com/400x200 "Optional title")
```

To include a local image, place it under `static/images/` and reference it with a root-relative path:

```text
![Logo](/images/logo.svg)
```

## Admonitions / Callouts

**Input**

```text
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
```

**Output**

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
