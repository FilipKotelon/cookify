export class FavoriteHeart{
  el: HTMLElement;
  filled: boolean;

  constructor(checked = false){
    this.filled = checked;
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
  }

  emptyHeart(){
    this.el.classList.remove('filled');
  }

  addToFavorites(){

  }

  removeFromFavorites(){

  }
}