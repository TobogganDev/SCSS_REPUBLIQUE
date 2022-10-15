let cursor = document.getElementById('cursor');

window.addEventListener('mousemove', cursorFollowMouse);

function cursorFollowMouse(e){
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
}