'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const btnOpenModal=document.querySelectorAll('.show-modal');



    const openBtn=function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeBtn=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
   };
   for( let i=0;i<btnOpenModal.length;i++){


btnOpenModal[i].addEventListener('click',openBtn);
   }

btnCloseModal.addEventListener('click',closeBtn);
overlay.addEventListener('click',closeBtn);

document.addEventListener(  'keydown' ,function(e){
    console.log(e.key);
    if(e.key ==='Escape' && !modal.classList.contains
    ('hidden')){
        closeBtn(); 
    }
}
)








