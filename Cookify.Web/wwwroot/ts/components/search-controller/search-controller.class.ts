export class SearchController {
  forms: HTMLFormElement[];

  constructor() { 
    this.forms = [ ...document.querySelectorAll('form') ];
    this.forms = this.forms.filter(form => form.querySelector('input[name="search"]'));
    this.init();
  }

  init(){
    this.setupSearches();
  }

  setupSearches(){
    this.forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchInput = form.querySelector('input[name="search"]') as HTMLInputElement;
        
        if(form.action.includes('?')){
          form.action += `&search=${searchInput.value}`;
        } else {
          form.action += `?search=${searchInput.value}`;
        }

        setTimeout(() => {
          form.submit();
        }, 50)
      })
    })
  }
}