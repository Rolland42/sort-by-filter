let btnAll = document.getElementById('btnAll');
let btnSummer = document.getElementById('btnSummer');
let btnAutumn = document.getElementById('btnAutumn');
let btnWinter = document.getElementById('btnWinter');
let btnSpring = document.getElementById('btnSpring');

let summerClass = document.getElementsByClassName('summer');
let autumnClass = document.getElementsByClassName('autumn');
let winterClass = document.getElementsByClassName('winter');
let springClass = document.getElementsByClassName('spring');

btnAll.addEventListener('click',function(){
    console.log('le bouton all fonctionne');
    for(let i = 0; i < summerClass.length; ++i){
        console.log(summerClass[i]);
        summerClass[i].classList.remove('hide');
        autumnClass[i].classList.remove('hide');
        winterClass[i].classList.remove('hide');
        springClass[i].classList.remove('hide');
    }
})

btnSummer.addEventListener('click',function(){
    console.log('le bouton summer fonctionne');
    for(let i = 0; i < summerClass.length; ++i){
        console.log(summerClass[i]);
        summerClass[i].classList.add('show');
        summerClass[i].classList.remove('hide');
        autumnClass[i].classList.add('hide');
        winterClass[i].classList.add('hide');
        springClass[i].classList.add('hide');
    }
})

btnAutumn.addEventListener('click',function(){
    console.log('le bouton autumn fonctionne');
    for(let i = 0; i < autumnClass.length; ++i){
        console.log(autumnClass[i]);
        summerClass[i].classList.add('hide');
        autumnClass[i].classList.add('show');
        autumnClass[i].classList.remove('hide');
        winterClass[i].classList.add('hide');
        springClass[i].classList.add('hide');
    }
})

btnWinter.addEventListener('click',function(){
    console.log('le bouton winter fonctionne');
    for(let i = 0; i < winterClass.length; ++i){
        console.log(winterClass[i]);
        summerClass[i].classList.add('hide');
        autumnClass[i].classList.add('hide');
        winterClass[i].classList.add('show');
        winterClass[i].classList.remove('hide');
        springClass[i].classList.add('hide');
    }
})

btnSpring.addEventListener('click',function(){
    console.log('le bouton spring fonctionne');
    for(let i = 0; i < springClass.length; ++i){
        console.log(springClass[i]);
        summerClass[i].classList.add('hide');
        autumnClass[i].classList.add('hide');
        winterClass[i].classList.add('hide');
        springClass[i].classList.add('show');
        springClass[i].classList.remove('hide');
    }
})
