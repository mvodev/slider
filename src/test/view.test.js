import { View } from '../view/view';
const root = document.querySelector('#slider-test');
const view = new View({
 min: 15,
 max: 25,
 from: 17,
 step: 2,
 isVertical: true,
 hideThumbLabel: true,
 isRange: false,
},root);
console.log('inside view test');