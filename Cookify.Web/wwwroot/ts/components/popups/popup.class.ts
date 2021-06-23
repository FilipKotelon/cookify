export interface IPopupData{
  popupElementId: string,
  openersQuerySelector: string,
  closersQuerySelector: string,
}

export class Popup{
  popup: HTMLElement;
  openers: HTMLElement[];
  closers: HTMLElement[];

  constructor(data: IPopupData){
    this.popup = document.getElementById(data.popupElementId);
    this.openers = [... document.querySelectorAll(data.openersQuerySelector) as NodeListOf<HTMLElement> ];
    this.closers = [... document.querySelectorAll(data.closersQuerySelector) as NodeListOf<HTMLElement> ];
  }

  open(){
    this.popup.classList.add('open');
  }

  close(){
    this.popup.classList.remove('open');
  }
}