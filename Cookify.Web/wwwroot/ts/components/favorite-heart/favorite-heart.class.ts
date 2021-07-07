import { API } from './../API/API.class';
import 'axios';
import axios from 'axios';

export class FavoriteHeart{
  api: API;
  el: HTMLElement;
  filled: boolean;
  recipeId: number;

  constructor(el: HTMLElement, checked = false) {
    this.api = new API();
    this.el = el;
    this.filled = checked;
    this.recipeId = parseInt(this.el.dataset.recipeId);
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
    axios(
      {
        method: 'post',
        url: '/api/recipe/addToFavorites',
        data: {
          id: this.recipeId
        },
        headers: {
          'RequestVerificationToken' : this.api.antiForgeryToken
        }
      }
    )
    .then((r) => {
      console.log(r);
    })
    .catch(error => {
      console.log(error);
    })
  }

  removeFromFavorites(){

  }
}