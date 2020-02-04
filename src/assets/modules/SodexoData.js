import LunchMenu from '../LunchMenu.json';
//import {getParsedMenuFazer} from './modules/fazer-data';
//const lunchMenuJson = JSON.stringify(LunchMenu.courses);
const coursesFi = [];
const coursesEn = [];
let lang = 'fi';
let menu = coursesFi;
const lunchMenu = Object.values(LunchMenu.courses);
  for(let item of lunchMenu ){
        coursesFi.push(item.title_fi);
        coursesEn.push(item.title_en);
  }
  console.log(coursesFi);
  console.log(coursesEn);

 /* const parseSodexoMenu = (sodexoDailyMenu) => {
    const courses = Object.values(sodexoDailyMenu);
    for (const course of courses) {
      coursesFi.push(course.category + ": " +  course.title_fi);
      coursesEn.push(course.title_en);
    }
  };
  parseSodexoMenu(LunchMenu.courses);
  const SodexoData = {coursesEn, coursesFi};
export default SodexoData;

  */




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




const changeLanguage = () => {
    if(lang === 'fi'){
      lang = 'en';
      menuLanguage('en');
    }else if(lang === 'en'){
      lang = 'fi';
      menuLanguage('fi');
    }
};


const sorting = () => {

  coursesEn.sort();
  coursesFi.sort();
  menuLanguage('fi');
  menuLanguage('en');
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



export {showAlert,sorting,menuLanguage,changeLanguage};

/*
const ravintolat1 = document.createElement('div');
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
document.body.appendChild(changeLangButton2);


const sortMenu = document.createElement('button');
sortMenu.setAttribute('id', 'sortMenu');
sortMenu.innerHTML = "Sort menu";
document.body.appendChild(sortMenu);


const randomDish = document.createElement('button');
randomDish.setAttribute('id', 'randomDish');
randomDish.innerHTML = "RandomDish";
document.body.appendChild(randomDish);
*/
//sortMenu.addEventListener('click',sorting);

/*const sortingMenu = (courses, order = "acs") =>{
  let menuSorting = courses.sort();
  if(order = 'desc'){
    menuSorting.reverse();
  }
  return menuSorting;
};
*/
/*const changeLanguageToEn = () => {
  const languageSwap = document.getElementById('ravintolat1');
    if(languageSwap.innerHTML = coursesFi){
      languageSwap.innerHTML = coursesEn;
    }

};
*/

//changeLangButton1.addEventListener('click',changeLanguage);
//changeLangButton2.addEventListener('click',changeLanguageToEn);
//randomDish.addEventListener('click',showAlert);
//menuLanguage('en');
