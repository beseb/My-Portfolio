const icons = document.querySelector('.skills-icons');
const iconWidth = document.getElementById('icon').clientWidth;
const iconMargin = parseInt(getComputedStyle(document.getElementById('icon')).marginRight);

function duplicateIcons() {
  const firstIcon = icons.children[0];
  const lastIcon = icons.children[icons.children.length - 1];
  
  const cloneFirstIcon = firstIcon.cloneNode(true);
  const cloneLastIcon = lastIcon.cloneNode(true);
  
  icons.insertBefore(cloneLastIcon, firstIcon);
  icons.appendChild(cloneFirstIcon);
}

function adjustIconsPosition() {
  const currentPosition = -(iconWidth + iconMargin) * icons.children.length / 2;
  
  icons.style.transform = `translateX(${currentPosition}px)`;
}

duplicateIcons();
adjustIconsPosition();

window.addEventListener('resize', () => {
  adjustIconsPosition();
});
