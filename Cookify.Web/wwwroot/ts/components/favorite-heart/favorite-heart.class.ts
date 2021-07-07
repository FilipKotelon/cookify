import { userMessage, loader } from './../../app/app.class';
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
      this.toggleFavoriteRecipe();
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

  toggleFavoriteRecipe(){
    loader.open();

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
      loader.close();

      if(!this.filled){
        this.fillHeart();
      } else {
        this.emptyHeart();
      }
    })
    .catch(error => {
      loader.close();
      userMessage.showMessage('Zaloguj się, aby móc dodawać przepisy do ulubionych. <br> Jeśli jesteś już zalogowany/a, spróbuj ponownie później.');
      console.log(error);
    })
  }
}