export default class AnimatedGif {
  constructor(gif) {
    this.gif = gif;
    this.inner = this.gif.querySelector('.inner');
    this.images = this.inner.querySelectorAll('div');
    this.numImages = this.images.length;
    this.gifSpeed = this.gif.getAttribute('data-gif-speed') || 1;
    this.fadeSpeed = this.gif.getAttribute('data-fade-speed') || 0;
    this.fadeEase = this.gif.getAttribute('data-fade-ease') || 'linear';
    this.activeId = 0;
    this.init();
  }

  init() {
    // set sizer div
    this.setSizer();

    // set css var for the speed of css transition
    this.gif.style.setProperty('--fade-speed', `${this.fadeSpeed}s`);
    this.gif.style.setProperty('--fade-ease', this.fadeEase);

    // init animation
    if (this.numImages > 1) {
      this.animate();
    }
  }

  setSizer() {
    const sizer = this.gif.querySelector('.sizer');
    sizer.innerHTML = this.images[0].innerHTML;
  }

  setImage(id) {
    // get current image ref
    const currentImg = this.images[this.activeId];

    // set z index of current image
    currentImg.style.zIndex = '0';

    // hide current image after new images is animated in
    setTimeout(() => currentImg.classList.remove('active'), this.fadeSpeed * 1000);

    // set the new activeId
    this.activeId = id;

    // get new image ref
    const newImg = this.images[this.activeId];

    // set z-index of new image
    newImg.style.zIndex = '1';

    // show new image
    newImg.classList.add('active');
  }

  switchImage() {
    if (this.activeId === this.numImages - 1) {
      this.setImage(0);
    } else {
      this.setImage(this.activeId + 1);
    }
  }

  animate() {
    this.timer = setInterval(() => this.switchImage(), this.gifSpeed * 1000);
  }
}
