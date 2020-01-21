import LunchMenu from '../src/assets/LunchMenu.json';
// Test
console.log('lunch menu object', LunchMenu);
console.log('Hello console!');

const lunchMenuJson = JSON.stringify(LunchMenu.courses);

const ravintolat1 = document.createElement('div');
ravintolat1.setAttribute("id", "ravintolat1");
const ravintolat = document.querySelector('.ravintolat');
ravintolat.appendChild(ravintolat1);

const changeLangButton1 = document.createElement('button');
changeLangButton1.setAttribute('id', 'changeLanguage1');
changeLangButton1.innerHTML = "Change the language of the menu to Fi.";
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

const ul = document.createElement('ul');
document.getElementById('ravintolat1').innerHTML = lunchMenuJson;

/*for(const courses of LunchMenu){
  const li = document.createElement('li');
  ul.appendChild(li);
  li.innerHTML +=courses;
}
*/
document.getElementById('ravintolat1').appendChild(ul);

const changeLanguageToFi = () => {
  const languageSwap = document.getElementById('ravintolat1');
    if(languageSwap.innerHTML = coursesEn){
      languageSwap.innerHTML = coursesFi;
    }
};

const changeLanguageToEn = () => {
  const languageSwap = document.getElementById('ravintolat1');
    if(languageSwap.innerHTML = coursesFi){
      languageSwap.innerHTML = coursesEn;
    }

};

changeLangButton1.addEventListener('click',changeLanguageToFi);
changeLangButton2.addEventListener('click',changeLanguageToEn);

const sorting = () => {

  coursesEn.sort();
  coursesFi.sort();
  document.getElementById('ravintolat1').innerHTML = coursesFi;
  document.getElementById('ravintolat1').innerHTML = coursesEn;
};
sortMenu.addEventListener('click',sorting);

//const dish = coursesEn;
const showAlert = () =>{
  const randomCourse = dish[Math.floor(Math.random() * dish.length)];
  alert(randomCourse);
};

randomDish.addEventListener('click',showAlert);



