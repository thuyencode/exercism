# https://github.com/InkoHX/archlinux4devcontainer/blob/main/base/Dockerfile
FROM archlinux:base-devel

ARG USERNAME="archlinux"

RUN pacman -Syyu --noconfirm cmake git vim fish starship openssh unzip github-cli python-pytest leiningen clang nodejs nim

RUN useradd -m -g users -g wheel ${USERNAME} \
  && echo "ALL ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/${USERNAME} \
  && chsh --shell /bin/fish ${USERNAME}

# Library required by nimlangserver
RUN pacman -S --noconfirm pcre

# Install nimlangserver
RUN curl -L https://github.com/nim-lang/langserver/releases/download/latest/nimlangserver-linux-amd64.tar.gz | tar -xz && mv nimlangserver /usr/bin

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

CMD [ "fish" ]