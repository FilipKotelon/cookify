import { SearchController } from './../components/search-controller/search-controller.class';
import { UserMessage } from './../components/user-message/user-message.class';
import { PopupController } from './../components/popup-controller/popup-controller.class';
import { Popup } from './../components/popup/popup.class';
import { FavoriteHeart } from './../components/favorite-heart/favorite-heart.class';

export let userMessage: UserMessage = null;

export class App{
  constructor(){
    this.init();
  } 

  init(){
    this.setupPopups();
    this.setupFavorites();
    this.setupSearch();
  }

  setupFavorites() {
    const hearts = document.querySelectorAll('.favorite-heart');
    hearts.forEach(heart => new FavoriteHeart(heart as HTMLElement, false));
  }

  setupPopups(){
    const popupArr = [];

    //Check if popup exists
    const searchPopupEl = document.getElementById('search-popup');
    if(searchPopupEl){
      const searchPopup = new Popup({
        popupElementId: 'search-popup',
        openersQuerySelector: '.open-search-popup',
        closersQuerySelector: '.close-search-popup'
      })

      popupArr.push(searchPopup);
    }

    const categoryPopupEl = document.getElementById('category-popup');
    if(categoryPopupEl){
      const categoryPopup = new Popup({
        popupElementId: 'category-popup',
        openersQuerySelector: '.open-category-popup',
        closersQuerySelector: '.close-category-popup'
      })

      popupArr.push(categoryPopup);
    }

    const ingredientPopupEl = document.getElementById('category-popup');
    if(ingredientPopupEl){
      const ingredientPopup = new Popup({
        popupElementId: 'ingredient-popup',
        openersQuerySelector: '.open-ingredient-popup',
        closersQuerySelector: '.close-ingredient-popup'
      })

      popupArr.push(ingredientPopup);
    }

    const messagePopupEl = document.getElementById('user-message-popup');
    if(messagePopupEl){
      const messagePopup = new Popup({
        popupElementId: 'user-message-popup',
        openersQuerySelector: '.open-message-popup',
        closersQuerySelector: '.close-message-popup'
      })

      userMessage = new UserMessage(messagePopupEl, messagePopup);

      //popupArr.push(messagePopup);
    }

    new PopupController(popupArr);
  }

  setupSearch(){
    const searchController = new SearchController();
  }
}