export default (context, inject) => {
  inject('scrollToElement', (divId) =>{
      const el = document.getElementById(divId);
      if (divId === 'formSection' && el.offsetTop < 1) {
        const y = document.getElementById('formSection2').getBoundingClientRect().top + window.pageYOffset - 50;
        window.scrollTo({top: y, behavior: 'smooth'});
      } else if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 50;
        window.scrollTo({top: y, behavior: 'smooth'});
      }})
}

export const currentId=null;
