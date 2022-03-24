let fifty = document.querySelector('#fifty');
let hundred = document.querySelector('#hundred');
let textarea = document.querySelector('#textarea');

let range = document.querySelector('#range')
let rangehundred = document.querySelector('#rangehundred')
let textareaspan = document.querySelector('#textareaspan')

let elvalue = fifty.getAttribute('maxlength')
let elvaluehundred = hundred.getAttribute('maxlength')
let elvaluezero = textarea.getAttribute('maxlength')





fifty.addEventListener('keyup', workRange);
hundred.addEventListener('keyup', workRange);
textarea.addEventListener('keyup', workRange);

function workRange(e) {
  if(e.target.id == fifty.id) {
    let a = e.target.value;
    range.style.width = `${a.length * (100 / elvalue)}%`
  }
  if(e.target.id == hundred.id) {
    let a = e.target.value;
    rangehundred.style.width = `${a.length * (100 / elvaluehundred)}%`
  }
  if(e.target.id == textarea.id) {
    let a = e.target.value;
    textareaspan.style.width = `${a.length * (100 / elvaluezero)}%`
  }
}

