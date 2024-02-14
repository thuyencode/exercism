# https://github.com/InkoHX/archlinux4devcontainer/blob/main/base/Dockerfile
FROM archlinux:base-devel

ARG USERNAME="archlinux"

RUN pacman -Syyu --noconfirm cmake
RUN pacman -Syyu --noconfirm git
RUN pacman -Syyu --noconfirm vim
RUN pacman -Syyu --noconfirm fish
RUN pacman -Syyu --noconfirm starship
RUN pacman -Syyu --noconfirm openssh
RUN pacman -Syyu --noconfirm unzip
RUN pacman -Syyu --noconfirm github-cli
RUN pacman -Syyu --noconfirm python-pytest
RUN pacman -Syyu --noconfirm leiningen
RUN pacman -Syyu --noconfirm nodejs
RUN pacman -Syyu --noconfirm nim
RUN pacman -Syyu --noconfirm rustup
RUN pacman -Syyu --noconfirm fisher

RUN useradd -m -g users -g wheel ${USERNAME} \
  && echo "ALL ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/${USERNAME} \
  && chsh --shell /bin/fish ${USERNAME}

USER ${USERNAME}

# Install paru
RUN git clone https://aur.archlinux.org/paru-bin.git /tmp/paru \
  && cd /tmp/paru \
  && makepkg -si --noconfirm \
  && rm -rf /tmp/paru

# Install exercism-cli
RUN paru -S --noconfirm exercism-bin

# Install bun
RUN paru -S --noconfirm bun-bin

# Configure Fish and Starship
RUN mkdir -p ~/.config/fish/conf.d \
  && echo "set fish_greeting" >> ~/.config/fish/config.fish \
  && echo "starship init fish | source" >> ~/.config/fish/conf.d/starship.fish \
  && starship preset no-nerd-font > ~/.config/starship.toml \
  && printf "\n[container]\ndisabled = true" >> ~/.config/starship.toml

RUN rustup default stable

# Rust/Cargo configuration for Fish
RUN fish -c "fisher install halostatue/fish-rust"

CMD [ "fish" ]