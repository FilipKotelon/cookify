export interface IPopupData{
  popupElementId: string,
  openersQuerySelector: string,
  closersQuerySelector: string,
}

export class Popup{
  popup: HTMLElement;
  openers: HTMLElement[];
  closers: HTMLElement[];
  beforeOpen: Function;

  constructor(data: IPopupData){
    this.popup = document.getElementById(data.popupElementId);
    this.openers = [... document.querySelectorAll(data.openersQuerySelector) as NodeListOf<HTMLElement> ];
    this.closers = [... document.querySelectorAll(data.closersQuerySelector) as NodeListOf<HTMLElement> ];

    this.init();
  }

  init(){
    setTimeout(() => {
      this.popup.classList.add('loaded');
    }, 50);

    this.setupOpeners();
    this.setupClosers();
  }

  setupOpeners(){
    this.openers.forEach(opener => { 
      opener.addEventListener('click', () => {
        this.open();
      })
    })
  }

  setupClosers(){
    this.closers.forEach(closer => { 
      closer.addEventListener('click', () => {
        this.close();
      })
    })
  }

  open(){
    if(this.beforeOpen){
      this.beforeOpen();
    }
    this.popup.classList.add('open');
    document.querySelector('html').classList.add('no-scroll');
  }

  close(){
    this.popup.classList.remove('open');
    document.querySelector('html').classList.remove('no-scroll');
  }
}