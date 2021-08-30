export default class CarouselItem {
  constructor(domNode, carouselObj) {
    this.domNode = domNode;
    this.carousel = carouselObj;
    this.init();
  }

  /* EVENT HANDLERS */

  handleFocusIn() {
    this.domNode.classList.add('focus');
    this.carousel.hasFocus = true;
  }

  handleFocusOut() {
    this.domNode.classList.remove('focus');
    this.carousel.hasFocus = false;
  }
  init() {
    this.domNode.addEventListener('focusin', this.handleFocusIn.bind);
    this.domNode.addEventListener('focusout', this.handleFocusOut.bind);
  }
}
