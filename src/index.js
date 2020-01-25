console.log('Hello console!');

const coursesEn = ["Hamburger, cream sauce and poiled potates",
                "Goan style fish curry and whole grain rice",
                "Vegan Chili sin carne and whole grain rice",
                "Broccoli puree soup, side salad with two napas",
                "Lunch baguette with BBQ-turkey filling",
                "Cheese / Chicken / Vege / Halloum burger and french fries"];
const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
                "Goalaista kalacurrya ja täysjyväriisiä",
                "vegaani Chili sin carne ja täysjyväriisi",
                "Parsakeittoa,lisäkesalaatti kahdella napaksella",
                "Lunch baguette with BBQ-turkey filling",
                "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];


let lang = 'fi';
let menu = coursesFi;


const ravintolat1 = document.createElement('div');
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


const menuLanguage = (lang) => {
  document.getElementById('ravintolat1').innerHTML = "";
  const ul = document.createElement('ul');
  if(lang === 'fi'){
    for(const courses of coursesFi){
      const li = document.createElement('li');
      ul.appendChild(li);
      li.innerHTML +=courses;
    }
  }else if(lang === 'en'){
    for(const courses of coursesEn){
      const li = document.createElement('li');
      ul.appendChild(li);
      li.innerHTML +=courses;
    }
  }
  document.getElementById('ravintolat1').appendChild(ul);

};
menuLanguage('en');

const changeLanguage = () => {
  const languageSwap = document.getElementById('ravintolat1');
    if(lang === 'fi'){
      lang='en';
      menuLanguage('en');
    }else if(lang === 'en'){
      lang='fi';
      menuLanguage('fi');
    }

};

changeLangButton1.addEventListener('click',changeLanguage);


const sorting = () => {

  coursesEn.sort();
  coursesFi.sort();
  menuLanguage('fi');
  menuLanguage('en');
};
sortMenu.addEventListener('click',sorting);

const dish = coursesEn;
const dish2 = coursesFi;
const showAlert = () =>{
  if(lang==='en'){
    const randomCourse = dish[Math.floor(Math.random() * dish.length)];
    alert(randomCourse);
  }else if(lang==='fi'){
    randomCourse = dish2[Math.floor(Math.random() * dish2.length)];
    alert(randomCourse);
  }
};

randomDish.addEventListener('click',showAlert);

/*const sortingMenu = (courses, order = "acs") =>{
  let menuSorting = courses.sort();
  if(order = 'desc'){
    menuSorting.reverse();
  }
  return menuSorting;
};
*/

