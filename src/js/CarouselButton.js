export default class CarouselButton {
  constructor(domNode, carouselObj) {
    this.domNode = domNode;
    this.carousel = carouselObj;
    this.direction = 'previous';
    if (this.domNode.getAttribute('id') === 'next') {
      this.direction = 'next';
    }

    this.keyCode = Object.freeze({
      RETURN: 13,
      SPACE: 32,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
    });

    this.init();
  }
  changeItem() {
    if (this.direction === 'previous') {
      this.carousel.setSelectedToPreviousItem();
    } else {
      this.carousel.setSelectedToNextItem();
    }
  }
  handleFocus() {
    this.carousel.hasFocus = true;
    this.domNode.classList.add('focus');
  }

  handleBlur() {
    this.carousel.hasFocus = false;
    this.domNode.classList.remove('focus');
  }

  init() {
    this.domNode.addEventListener('click', this.changeItem.bind(this));
    this.domNode.addEventListener('focus', this.handleFocus.bind(this));
    this.domNode.addEventListener('blur', this.handleBlur.bind(this));
  }
}
