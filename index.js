// Signature code
const isChrome = !!window.chrome;
const colors = {
  r: isChrome ? "\x1b[0m" : '',
  red: isChrome ? "\x1b[31m" : '',
  green: isChrome ? "\x1b[32m" : '',
  yellow: isChrome ? "\x1b[33m" : '',
  blue: isChrome ? "\x1b[34m" : '',
  magenta: isChrome ? "\x1b[35m" : '',
  cyan: isChrome ? "\x1b[36m" : '',
  white: isChrome ? "\x1b[37m" : '',
  gray: isChrome ? "\x1b[90m" : '',
  grey: isChrome ? "\x1b[90m" : '',
  bold: isChrome ? "\x1b[1m" : '',
  dim: isChrome ? "\x1b[2m" : '',
  italic: isChrome ? "\x1b[3m" : '',
  underline: isChrome ? "\x1b[4m" : '',
  inverse: isChrome ? "\x1b[7m" : '',
  hidden: isChrome ? "\x1b[8m" : '',
  strikethrough: isChrome ? "\x1b[9m" : '',
}

const js = `${colors.yellow}JavaScript`;
const html = `${colors.red}HTML`;
const css = `${colors.cyan}CSS`;
const firebase = `${colors.yellow}Firebase`;
const github = `${colors.magenta}GitHub`;
const info = `
    ${colors.underline}Author${colors.r}:  Franco Canalejo
    ${colors.underline}Email${colors.r}:   fcanalejo2000@outlook.com
    ${colors.underline}Website${colors.r}: https://francocanalejo.dev/
    ${colors.underline}Project${colors.r}: https://github.com/FragnaroK/recycling

`
const banner = `
                     ${js} ${html} ${css} ${firebase} ${github}${colors.red}
    ███████ ██████   █████   ██████  ███    ██  █████  ██████   ██████  ██   ██
    ██      ██   ██ ██   ██ ██       ████   ██ ██   ██ ██   ██ ██    ██ ██  ██ 
    █████   ██████  ███████ ██   ███ ██ ██  ██ ███████ ██████  ██    ██ █████  
    ██      ██   ██ ██   ██ ██    ██ ██  ██ ██ ██   ██ ██   ██ ██    ██ ██  ██ 
    ██      ██   ██ ██   ██  ██████  ██   ████ ██   ██ ██   ██  ██████  ██   ██
                                                                               
                                    (v0.0.2) ${colors.r} 

          Hey there! Welcome to my devtools. Run 'stats()' to learn more.
  `;

window.stats = () => console.log(info);
console.clean = () => {
  console.clear();
  console.log(banner);
}

// Project related code
function main() {
  console.clean();

  const header = document.querySelector("header");
  const joinUs = document.querySelector(".joinUs");
  const checkpointHeader = header.scrollHeight;
  const joinUsCheckpoint = joinUs.scrollHeight;


  const hideHeader = (cp = 0, scrollPos = 0) => {
    scrollPos <= cp ? (opacity = 1 - scrollPos / cp) : (opacity = 0);
    header.style.opacity = opacity;
  };

  const joinUsAnim = (cp, scrollPos) => {
    scrollPos >= cp * 1.7 ?
      joinUs.classList.add("seeing") :
      joinUs.classList.remove("seeing");
  };

  const onScroll = () => {
    let currentScroll = window.scrollY;
    hideHeader(checkpointHeader, currentScroll);
    joinUsAnim(joinUsCheckpoint, currentScroll);
  }

  onScroll();
  window.onscroll = onScroll;
}

window.onload = main;