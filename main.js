'use strict';

{
  const open =document.getElementById('open');
  const close =document.getElementById('close');
  const modal =document.getElementById('modal');

  open.addEventListener('click',()=>{
    modal.classList.remove('hidden');
  });
  close.addEventListener('click',()=>{
    modal.classList.add('hidden');
  });

}