export class Loader {
  el: HTMLElement;

  constructor(el: HTMLElement) {
    this.el = el;
  }

  open(){
    this.el.classList.add('open');
  }

  close(){
    this.el.classList.remove('open');
  }
}