import { Popup } from './../components/popup/popup.class';

export class App{
  constructor(){
    this.init();
  } 

  init(){
    this.setupPopups();
  }

  setupPopups(){
    const searchPopup = new Popup({
      popupElementId: 'search-popup',
      openersQuerySelector: '.open-search-popup',
      closersQuerySelector: '.close-search-popup'
    })
  }
}