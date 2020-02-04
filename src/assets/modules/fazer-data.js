import FazerEnglish from '../FazerEnglish';
import FazerFinnish from '../FazerFinnish';

const coursesFi = [];
const coursesEn = [];
let lang = 'fi';
let menu = coursesFi;
const lunchMenuEn = JSON.stringify(FazerEnglish.LunchMenus.SetMenus);
const lunchMenuFi = JSON.stringify(FazerFinnish.LunchMenus.SetMenus);
  for(let item of Object.keys(lunchMenuEn) ){
        coursesEn.push(item.Meals);
  }
  for(let item of lunchMenuFi ){
    coursesFi.push(item.Meals);
}
  console.log(coursesFi);
  console.log(coursesEn);






const menuLanguageFazer = (lang) => {
  document.getElementById('ravintolat2').innerHTML = "";
  console.log(document.getElementById('ravintolat2'));
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
  document.getElementById('ravintolat2').appendChild(ul);
};




const changeLanguageFazer = () => {
    if(lang === 'fi'){
      lang = 'en';
      menuLanguage('en');
    }else if(lang === 'en'){
      lang = 'fi';
      menuLanguage('fi');
    }
};


const sortingFazer = () => {

  coursesEn.sort();
  coursesFi.sort();
  menuLanguage('fi');
  menuLanguage('en');
};


const dish = coursesEn;
const dish2 = coursesFi;
const showAlertFazer = () =>{
if(lang === 'en'){
  const randomCourse = dish[Math.floor(Math.random() * dish.length)];
  alert(randomCourse);
}else if(lang === 'fi'){
  const randomCourse = dish2[Math.floor(Math.random() * dish2.length)];
  alert(randomCourse);
}

};



export {showAlertFazer,sortingFazer,menuLanguageFazer,changeLanguageFazer};
