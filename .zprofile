# Delete all merged git branches
alias gclean="git branch --merged | grep -v "\*" | grep -v master | grep -v develop | grep -v stage | grep -v live | xargs -n 1 git branch -d"

# Nice git tree
alias gtree="git log --oneline --decorate --all --graph"

# close console after 10 minutes
export TMOUT=600

# Deno
export DENO_INSTALL="$HOME/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"

# Path to VSC
export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"

# NPM packages
export PATH=$HOME/bin:$HOME/.npm-packages/bin:$PATH

# mariadb bins
export PATH=$PATH:/opt/local/lib/mariadb-10.2/bin

# macports
export PATH="/opt/local/bin:/opt/local/sbin:$PATH"

# go
export PATH=$PATH:$HOME/go/bin

# rust
export PATH="$HOME/.cargo/bin:$PATH"
