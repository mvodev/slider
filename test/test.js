const slider = document.querySelector('.slider');
const thumb = document.querySelector('.thumb');
//console.log(thumb.getBoundingClientRect());
console.log(slider);
thumb.addEventListener('mousedown', mouseDownHandler);
function mouseDownHandler(e) {
 e.preventDefault();
 let shiftX = e.clientX - thumb.getBoundingClientRect().left;
 document.addEventListener('mousemove', onMouseMove);
 document.addEventListener('mouseup', onMouseUp);

 function onMouseMove(event) {
  let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
  console.log(event.clientX + ' ' + shiftX + ' ' + slider.getBoundingClientRect().left);
  // курсор вышел из слайдера => оставить бегунок в его границах.
  if (newLeft < 0) {
   newLeft = 0;
  }
  let rightEdge = slider.offsetWidth - thumb.offsetWidth;
  if (newLeft > rightEdge) {
   newLeft = rightEdge;
  }

  thumb.style.left = newLeft + 'px';
 }

 function onMouseUp() {
  document.removeEventListener('mouseup', onMouseUp);
  document.removeEventListener('mousemove', onMouseMove);
 }
}

thumb.ondragstart = function () {
 return false;
};
