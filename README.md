# ospo-hugo-theme

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./CODE_OF_CONDUCT.md)

> [!WARNING]
> ospo-hugo-theme is under development and potentially unstable.

This is a [Hugo](https://gohugo.io) theme for Open Source Program Office (ospo) portals. Our aim is to help you get a working ospo site up and running as easily as possible, so you can concentrate on creating great content for your community.

## Features

- **Software Catalog**: Inventory of the open-source projects used within your oganization
- **Projects**: List of projects developped and maintained by your organization
- **Insights**: Open Source Health reports for your projects
- **Docs**: Technical documentation

## Installation

Hugo offers multiple options for using the themes, all of which are supported.

### 1. As a Hugo Module (recommended)

1. Pre-requisite: Hugo's command for module management require that the Go programming language is installed on your system. Check whether `go` is already installed:

```console
go version
```

If the `go` language is not installed, follow the instructions on the Go website [download page](https://go.dev/dl/).

2. Initialize your site as a Hugo module:

```console
hugo mod init github.com/<your_user>/<your-project>
```

3. Import the theme:

```toml
[module]
  [[module.imports]]
    path = 'github.com/ospo-ch/ospo-hugo-theme'
```

### 2. As Git submodule

Inside the folder of your Hugo site, run:

```console
git submodule add https://github.com/ospo-ch/ospo-hugo-theme.git themes/ospo
```

This downloads the repository from GitHub and puts the content in your themes folder as a git sub-module.

To update your theme to future versions:

```console
git submodule update --remote --merge
```

### 3. Clone the repository

Inside the folder of your Hugo site, run:

```console
git clone https://github.com/ospo-ch/ospo-hugo-theme themes/ospo
```

This downloads the repository from GitHub and puts the content in your themes folder.

To update the theme to future versions:

```console
cd themes/ospo
git pull
```

## Configuration

### Add your favicons

Create a set of favicons via [https://cthedot.de/icongen/](https://cthedot.de/icongen/) or another tool and put them in your site project's `static/favicons` directory. This will override the default favicons for the theme.

For special requirements, create your own `layout/partials/head/favicons.html` file.

### Custom styles

To customize your project look and feel you can provide your own version of the theme placeholder files and place them in the `assets/scss/` folder:

- `_variables_project.scss`: override the theme variables
- `_styles_project.scss`: add custom SCSS styles or override the theme's styles

## Contributing

To contribute, please follow the guidelines outlined in our [CONTRIBUTING.md](./CONTRIBUTING.md) and our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Acknowledgements

This project couldn't be possible without the amazing open-source work from the community, especially:

- [Hugo](https://gohugo.io)
- [FontAwesome](https://fontawesome.com/)
- [CNCF Dot Org Theme](https://github.com/cncf/dot-org-hugo-theme)
- [Google Docsy Theme](https://github.com/google/docsy)
- [Google Lighthouse](https://github.com/GoogleChrome/lighthouse)
