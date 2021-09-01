import { ClassNaming } from '../../utils/ClassNaming';
class Range{
 private range: HTMLDivElement;
 constructor() {
  const div = document.createElement('div');
  div.classList.add(ClassNaming.RANGE);
  this.range = div;
 }
 getRange(): HTMLDivElement {
  return this.range;
 }
}
export {Range}