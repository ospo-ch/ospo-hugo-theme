---
title: Writing Content
linkTitle: Writing Content
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
| Item #1   | Property #1 |     $1600 |
| Item #2   | Property #2 |       $12 |
| Item #3   | Property #3 |        $1 |
| Item #1   | Property #1 |     $1600 |
| Item #2   | Property #2 |       $12 |
| Item #3   | Property #3 |        $1 |
| Item #1   | Property #1 |     $1600 |
| Item #2   | Property #2 |       $12 |
| Item #3   | Property #3 |        $1 |
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
| Item #1   | Property #1 |     $1600 |
| Item #2   | Property #2 |       $12 |
| Item #3   | Property #3 |        $1 |
| Item #1   | Property #1 |     $1600 |
| Item #2   | Property #2 |       $12 |
| Item #3   | Property #3 |        $1 |
| Item #1   | Property #1 |     $1600 |
| Item #2   | Property #2 |       $12 |
| Item #3   | Property #3 |        $1 |
| Item #1   | Property #1 |     $1600 |
| Item #2   | Property #2 |       $12 |
| Item #3   | Property #3 |        $1 |

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
