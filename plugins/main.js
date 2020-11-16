export default (context, inject) => {
  inject('scrollToElement', (divId) => {
    context.app.router.push(context.app.localePath('/'));
    setTimeout(() => {
      const el = document.getElementById(divId);
      if (divId === 'formSection' && el.offsetTop < 1) {
        const y = document.getElementById('formSection2').getBoundingClientRect().top + window.pageYOffset - 50;
        window.scrollTo({top: y, behavior: 'smooth'});
      } else if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 50;
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    }, 200);

  })
}

export const currentId = null;
