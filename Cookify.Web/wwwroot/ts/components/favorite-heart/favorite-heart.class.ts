export class FavoriteHeart{
  el: HTMLElement;
  filled: boolean;

  constructor(el: HTMLElement, checked = false) {
      this.el = el;
      this.filled = checked;
      this.init();
  }

  init(){
    this.setupOnFill();
    this.setupOnEmpty();
  }

  setupOnFill(){
    this.el.addEventListener('click', () => {
      this.addToFavorites();
      this.fillHeart();
    })
  }

  setupOnEmpty(){
    this.el.addEventListener('click', () => {
      this.removeFromFavorites();
      this.emptyHeart();
    })
  }

  fillHeart(){
      this.el.classList.add('filled');
      this.el.style.opacity = '1';
  }

  emptyHeart(){
    this.el.classList.remove('filled');
  }

  addToFavorites(){

  }

  removeFromFavorites(){

  }
}