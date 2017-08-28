//import $ from 'jquery';

export default function(){
  let me = 'two';
  let x = `<br/> another ${me}`;

  $('body').append(x);
}