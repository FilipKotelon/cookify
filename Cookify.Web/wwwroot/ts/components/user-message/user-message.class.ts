import { Popup } from './../popup/popup.class';

export class UserMessage {
  boundPopup: Popup;
  el: HTMLElement;
  messageEl: HTMLElement;

  constructor(el: HTMLElement, boundPopup: Popup){
    this.boundPopup = boundPopup;
    this.el = el;
    this.messageEl = document.getElementById('user-message-content');
  }

  showMessage(message: string){
    this.changeMessage(message);
    this.open();
  }

  changeMessage(message: string){
    this.messageEl.innerHTML = message;
  }

  open(){
    this.boundPopup.open();
  }
}