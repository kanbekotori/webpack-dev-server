import './style.css'
import hello from './hello'

let el = document.createElement('div');
document.body.appendChild(el);

let btn = document.createElement('button');
btn.innerText = 'fff';
btn.onclick = function () {
  el.innerText = 'hhh'
};
document.body.appendChild(btn);

