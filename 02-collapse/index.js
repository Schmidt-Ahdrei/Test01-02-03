const textVisible = document.querySelector('.collapsible__content');
const buttonVisible = document.querySelector('.collapsible__action--visible');
const buttonHidden = document.querySelector('.collapsible__action--hidden');

textVisible.style.display = 'none';
buttonVisible.style.display = 'none';

let options = {
  duration: 600,
  fill: 'forwards',
  easing: 'ease-in-out',
}

let keyframesDown = [
  {
    transform: 'translateY(0)' ,
    opacity: 0
  },
  {
    transform: 'translateY(80%)' ,
    opacity: 1
  }
]

let keyframesUp = [
  {
    transform: 'translateY(80%)' ,
    opacity: 1
  }, {

    transform: 'translateY(0)' ,
    opacity: 0
  },

]

 buttonVisible.addEventListener('click', () =>{
    textVisible.animate(keyframesUp, options);
    buttonHidden.style.display = '';
    buttonVisible.style.display = 'none';
 });

 buttonHidden.addEventListener('click', ()=>{
    textVisible.animate(keyframesDown, options);
    textVisible.style.display = '';
    buttonHidden.style.display = 'none';
    buttonVisible.style.display = '';
 });