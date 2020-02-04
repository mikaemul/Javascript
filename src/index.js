//import {showAlert,sorting,menuLanguage,changeLanguage} from './assets/modules/SodexoData';
//import {showAlertFazer,sortingFazer,menuLanguageFazer,changeLanguageFazer} from './assets/modules/FazerData';
//import SodexoData from './modules/SodexoData.js';

//i
const queue = () =>{
  this.data = [];
};
queue.prototype.enqueue = (record) =>{
  this.data.push(record);

};
 queue.prototype.dequeue = () =>{
  return this.data.shift();
};
queue.prototype.peek = () => {
  return this.data[0];
};
queue.prototype.lenght = () => {
  return this.data[this.data.length - 1];
};
queue.prototype.size = () => {
  return this.data.length;
};

const q = new queue();
q.add('h');
q.add('e');
q.add('l');
q.add('l');
q.add('o');

console.log(q);

//ii
const printMousePos = (event) =>{
  console.log(
  "clientX: " + event.clientX +
  " - clientY: " + event.clientY);
};
document.addEventListener('click',printMousePos);

//iii

const touchEvent = () =>{
  console.log('you touched the paragraph');
};
document.getElementById('touchEvent').addEventListener("touchstart",touchEvent);


//iv
setInterval(() => {
  console.log('Hurry up');
  //alert('Hurry Up!');
}, 15000);

let counter = 1;
let timer = setInterval(() => {
  console.log(`${counter++}. tick.`);
  if (counter > 14) {
    clearInterval(timer);
  }
}, 1000);

//v


const idling = () =>{
  let idleTime;
  window.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.keypress = resetTimer;

  const popUp = () =>{
    alert("Hurry Up!!");
    console.log('works');
  };
  const resetTimer = () => {
    clearTimeout(idleTime);
    idleTime = setTimeout(popUp,15000);
  };
};
window.onload = () =>{
  idling();
};


































//LunchMenu
/*const ravintolat1 = document.createElement('div');
ravintolat1.setAttribute("id", "ravintolat1");
const ravintolat = document.querySelector('.ravintolat');
ravintolat.appendChild(ravintolat1);

const changeLangButton1 = document.createElement('button');
changeLangButton1.setAttribute('id', 'changeLanguage1');
changeLangButton1.innerHTML = "Change the language of the menu.";
document.body.appendChild(changeLangButton1);


const sortMenu = document.createElement('button');
sortMenu.setAttribute('id', 'sortMenu');
sortMenu.innerHTML = "Sort menu";
document.body.appendChild(sortMenu);


const randomDish = document.createElement('button');
randomDish.setAttribute('id', 'randomDish');
randomDish.innerHTML = "RandomDish";
document.body.appendChild(randomDish);

menuLanguage('en');
changeLangButton1.addEventListener('click',changeLanguage);
sortMenu.addEventListener('click',sorting);
randomDish.addEventListener('click',showAlert);

//FazerMenu
/*const ravintolat2 = document.createElement('div');
ravintolat2.setAttribute("id", "ravintolat2");
ravintolat[1].appendChild(ravintolat2);


menuLanguageFazer('en');
changeLangButton1.addEventListener('click',changeLanguageFazer);
sortMenu.addEventListener('click',sortingFazer);
randomDish.addEventListener('click',showAlertFazer);
*/

















// Test
/*
console.log('lunch menu object', LunchMenu);
console.log('Hello console!');

const changeLangButton2 = document.createElement('button');
changeLangButton2.setAttribute('id', 'changeLanguage2');
changeLangButton2.innerHTML = "Change the language of the menu to En.";
document.body.appendChild(changeLangButton2)
*/

//const lunchMenuJson = JSON.stringify(LunchMenu.courses);
/*const coursesFi = [];
const coursesEn = [];
let lang = 'fi';const ravintolat1 = document.createElement('div');
ravintolat1.setAttribute("id", "ravintolat1");
const ravintolat = document.querySelector('.ravintolat');
ravintolat.appendChild(ravintolat1);

const changeLangButton1 = document.createElement('button');
changeLangButton1.setAttribute('id', 'changeLanguage1');
changeLangButton1.innerHTML = "Change the language of the menu.";
document.body.appendChild(changeLangButton1);

const changeLangButton2 = document.createElement('button');
changeLangButton2.setAttribute('id', 'changeLanguage2');
changeLangButton2.innerHTML = "Change the language of the menu to En.";
document.body.appendChild(changeLangButton2)


const sortMenu = document.createElement('button');
sortMenu.setAttribute('id', 'sortMenu');
sortMenu.innerHTML = "Sort menu";
document.body.appendChild(sortMenu);


const randomDish = document.createElement('button');
randomDish.setAttribute('id', 'randomDish');
randomDish.innerHTML = "RandomDish";
document.body.appendChild(randomDish);


let menu = coursesFi;
const lunchMenu = Object.values(LunchMenu.courses);
  for(let item of lunchMenu ){
        coursesFi.push(item.title_fi);
        coursesEn.push(item.title_en);
  }
  console.log(coursesFi);
  console.log(coursesEn);
  */



/*
const menuLanguage = (lang) => {
  document.getElementById('ravintolat1').innerHTML = "";
  console.log(document.getElementById('ravintolat1'));
  const ul = document.createElement('ul');
  if(lang === 'en'){
    for(const courses of coursesEn){
      const li = document.createElement('li');
      ul.appendChild(li);
      li.innerHTML +=courses;
    }
  }else if(lang === 'fi'){
    for(const courses of coursesFi){
      const li = document.createElement('li');
      ul.appendChild(li);
      li.innerHTML +=courses;
    }
  }
  document.getElementById('ravintolat1').appendChild(ul);
};
menuLanguage('en');



const changeLanguage = () => {
    if(lang === 'fi'){
      lang = 'en';
      menuLanguage('en');
    }else if(lang === 'en'){
      lang = 'fi';
      menuLanguage('fi');
    }
};

/*const changeLanguageToEn = () => {
  const languageSwap = document.getElementById('ravintolat1');
    if(languageSwap.innerHTML = coursesFi){
      languageSwap.innerHTML = coursesEn;
    }

};


changeLangButton1.addEventListener('click',changeLanguage);
//changeLangButton2.addEventListener('click',changeLanguageToEn);

const sorting = () => {

  coursesEn.sort();
  coursesFi.sort();
  menuLanguage('fi');
  menuLanguage('en');
};
sortMenu.addEventListener('click',sorting);

/*const sortingMenu = (courses, order = "acs") =>{
  let menuSorting = courses.sort();
  if(order = 'desc'){
    menuSorting.reverse();
  }
  return menuSorting;
};


const dish = coursesEn;
const dish2 = coursesFi;
const showAlert = () =>{
if(lang === 'en'){
  const randomCourse = dish[Math.floor(Math.random() * dish.length)];
  alert(randomCourse);
}else if(lang === 'fi'){
  const randomCourse = dish2[Math.floor(Math.random() * dish2.length)];
  alert(randomCourse);
}

};

randomDish.addEventListener('click',showAlert);

*/
