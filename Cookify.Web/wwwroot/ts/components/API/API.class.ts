export class API {
  antiForgeryToken: string;

  constructor(){
    const tokenInput = document.querySelector('[name="__RequestVerificationToken"]') as HTMLInputElement;
    this.antiForgeryToken = tokenInput.value;
  }
}