# Setup for Ray

## DEV CONTAINER

A Dev Container is provided in this repository. See [https://code.visualstudio.com/docs/devcontainers/containers](https://code.visualstudio.com/docs/devcontainers/containers) for more information.

When opening the repository within vscode you will be prompted to install the extension if missing and subsequently you will be prompted to reopen the workspace in the devContainer.

Local troubleshooting and support for the devContainer is not provided in this repository.

## LOCAL ENVIRONMENT - LINUX

### DEVELOPMENT

#### rust

1. Install rust
    ```bash
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    ```

### BUILD

#### bazelisk

  - Get the latest release information from https://github.com/bazelbuild/bazelisk/releases/latest
  - Open a terminal
  - Run the following command to download bazelisk:
    ```bash
    LATEST_RELEASE="$(curl -Ls -o /dev/null -w '%{url_effective}' https://github.com/bazelbuild/bazelisk/releases/latest)"
    curl -LO "${LATEST_RELEASE/releases\/tag/releases\/download}/bazelisk-linux-amd64"
    ```
  - Make the downloaded file executable:
    ```bash
    chmod 0755 bazelisk-linux-amd64
    ```
  - Move and rename the executable to a directory in your system's `$PATH`, such as `~/bin`, `~/.local/bin`, or similar:
    ```bash
    mkdir -v ~/bin/ 2>/dev/null && echo "You may need to reload your terminal to pick up the additional PATH."
    mv bazelisk-linux-amd64 ~/bin/bazel
    ```
  - Verify that bazelisk is installed by running the following command:
    ```bash
    bazel version
    ```
  - You should see the version number of bazel printed in the terminal.

### COMMIT

#### pre-commit

  - Install [pipx](https://pipx.pypa.io/stable/installation/)
    ```bash
    sudo apt install pipx 2>/dev/null || python3 -m pip install --user pipx
    pipx ensurepath
    ```
  - Install [pre-commit](https://pre-commit.com)
    ```bash
    pipx install pre-commit
    ```
  - configure local repository with pre-commit for both commit and push events
    ```bash
    pre-commit install -t pre-commit -t pre-push
    ```
