# https://github.com/InkoHX/archlinux4devcontainer/blob/main/base/Dockerfile
FROM archlinux:base-devel

ARG USERNAME="archlinux"

RUN pacman -Sy
RUN pacman -S --noconfirm cmake
RUN pacman -S --noconfirm git
RUN pacman -S --noconfirm vim
RUN pacman -S --noconfirm fish
RUN pacman -S --noconfirm starship
RUN pacman -S --noconfirm openssh
RUN pacman -S --noconfirm unzip
RUN pacman -S --noconfirm github-cli
RUN pacman -S --noconfirm python-pytest
RUN pacman -S --noconfirm nodejs
RUN pacman -S --noconfirm nim
RUN pacman -S --noconfirm rustup
RUN pacman -S --noconfirm fisher
RUN pacman -S --noconfirm bats
RUN pacman -S --noconfirm jre17-openjdk
RUN pacman -S --noconfirm leiningen

RUN useradd -m -g users -g wheel ${USERNAME} && echo "ALL ALL=(ALL) NOPASSWD:ALL" >/etc/sudoers.d/${USERNAME} && chsh --shell /bin/fish ${USERNAME}

USER ${USERNAME}

# Install paru
RUN git clone https://aur.archlinux.org/paru-bin.git /tmp/paru && cd /tmp/paru && makepkg -si --noconfirm && rm -rf /tmp/paru

# Install exercism-cli
RUN paru -S --noconfirm exercism-bin

# Install bun
RUN paru -S --noconfirm bun-bin

# Configure Fish and Starship
RUN mkdir -p ~/.config/fish/conf.d && echo "set fish_greeting" >>~/.config/fish/config.fish && echo "starship init fish | source" >>~/.config/fish/conf.d/starship.fish && starship preset no-nerd-font >~/.config/starship.toml && printf "\n[container]\ndisabled = true" >>~/.config/starship.toml

RUN rustup default stable

# Rust/Cargo configuration for Fish
RUN fish -c "fisher install halostatue/fish-rust"

CMD [ "fish" ]
