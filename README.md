# ospo theme for Hugo

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./CODE_OF_CONDUCT.md)

## Features

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

## Contributing

To contribute, please follow the guidelines outlined in our [CONTRIBUTING.md](./CONTRIBUTING.md) and our [Code of Conduct](./CODE_OF_CONDUCT.md).


