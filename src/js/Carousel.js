import CarouselItem from './CarouselItem.js';
import CarouselButton from './CarouselButton.js';

const SHOW_NUMS = 3;

export default class Carousel {
  constructor(domNode) {
    this.domNode = domNode;
    this.items = [];
    this.currentIdx = 0;
    this.firstItem = null;
    this.currentDomNode = null;
    this.slideWidth = null;
    this.overallWidth = null;
    this.init();
  }
  setSelectedToPreviousItem() {
    if (this.currentIdx === 0) return;
    --this.currentIdx;
    this.domNode.style.transition = `all 300ms`;
    this.domNode.style.transform = `translateX(-${
      this.currentIdx * this.slideWidth
    }px)`;
  }
  setSelectedToNextItem() {
    if (this.currentIdx === this.items.length - SHOW_NUMS) return;
    ++this.currentIdx;
    this.domNode.style.transition = `all 300ms`;
    this.domNode.style.transform = `translateX(-${
      this.currentIdx * this.slideWidth
    }px)`;
  }
  init() {
    this.overallWidth = this.domNode.scrollWidth;
    const items = this.domNode.querySelectorAll('.carousel__item');
    this.slideWidth = document.querySelector('.carousel__item').offsetWidth;
    for (let i = 0; i < items.length; ++i) {
      const item = new CarouselItem(items[i], this);
      this.items.push(item);
      this.slideWidth = items[i].offsetWidth;
      if (!this.firstItem) {
        this.firstItem = item;
      }
      // focus 처리
    }
    const elems = document.querySelectorAll('.carousel__btn');
    elems.forEach(el => new CarouselButton(el, this));
  }
}

window.addEventListener('load', function () {
  new Carousel(document.querySelector('.carousel__list'));
});
