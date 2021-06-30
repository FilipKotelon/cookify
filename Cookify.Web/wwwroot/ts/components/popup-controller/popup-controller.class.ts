import { Popup } from '../popup/popup.class';

/**
 * Watches popups and, when a popup opens, it closes the other unneccessary popups so they don't stack
 */
export class PopupController{
  popups: Popup[];

  constructor(popups: Popup[]){
    this.popups = popups;

    this.init();
  }

  init(){
    this.watchPopups();
  }

  watchPopups(){
    this.popups.forEach(popup => {
      popup.beforeOpen = () => {
        this.closeOtherPopups(popup);
      }
    })
  }

  closeOtherPopups(currentPopup: Popup){
    this.popups.forEach(popup => {
      if(popup !== currentPopup){
        popup.close();
      }
    })
  }
}