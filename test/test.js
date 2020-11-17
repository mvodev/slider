const slider = document.querySelector('.slider');
const thumb = document.querySelector('.thumb');
//console.log(thumb);
//console.log(slider);
thumb.addEventListener('mousedown', mouseDownHandler);
function mouseDownHandler(e) {
 e.preventDefault();
 let shiftY = e.clientY - thumb.getBoundingClientRect().top;
 document.addEventListener('mousemove', onMouseMove);
 document.addEventListener('mouseup', onMouseUp);

 function onMouseMove(event) {
  let top = event.clientY - shiftY - slider.getBoundingClientRect().top;
  if (top < 0) {
   top = 0;
  }
  let bottom = slider.offsetHeight - thumb.offsetHeight;
  if (top > bottom) {
   top = bottom;
  }

  thumb.style.top = top + 'px';
 }

 function onMouseUp() {
  document.removeEventListener('mouseup', onMouseUp);
  document.removeEventListener('mousemove', onMouseMove);
 }
}

thumb.ondragstart = function () {
 return false;
};
