export class FavoriteHeart{
  el: HTMLElement;
  filled: boolean;

  constructor(el: HTMLElement, checked = false) {
      this.el = el;
      this.filled = checked;
      this.init();
  }

  init(){
    this.setupFilling();
  }

  setupFilling(){
    this.el.addEventListener('click', () => {
      if(!this.filled){
        this.addToFavorites();
        this.fillHeart();
      } else {
        this.removeFromFavorites();
        this.emptyHeart();
      }
    })
  }

  fillHeart(){
    this.el.classList.add('filled');
    this.filled = true;
  }

  emptyHeart(){
    this.el.classList.remove('filled');
    this.filled = false;
  }

  addToFavorites(){
    
  }

  removeFromFavorites(){

  }
}