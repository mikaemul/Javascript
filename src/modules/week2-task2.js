const menu = [
  {name: 'Lingonberry jam', price: 4.00},
  {name: 'Mushroom and bean casserole', price: 5.50},
  {name: 'Chili-flavoured wheat', price: 3.00},
  {name: 'Vegetarian soup', price: 4.80},
  {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
];


const nameMeal = input =>{
  const re = new RegExp('/[A-ZÖÄ]{1}[a-zöäå\s,.?!\/{[}\]()-]{4,64}$/');
  return re.test(input);

};
let sortTheMenu = menu.sort((a,b) =>{
  return b.price - a.price;
});

const filtered = menu.filter(item => item.price < 5);

const addedPercentage = menu.map(item => item.price * (1 + 0.15));

let initialValue = 0;
let sum = menu.reduce((acc,current) => acc + current.price,initialValue);

//b

import FazerMenu from '../assets/fazer.json';
// console.log(FazerMenu.LunchMenus[1].SetMenus);
let vegeMeals = [];
for (const setMenu of FazerMenu.LunchMenus[1].SetMenus) {
  for (const meal of setMenu.Meals) {
    if (meal.Diets.includes('Veg')) {
      vegeMeals.push(meal.Name);
    }
  }
}

// preserve some structure with .filter()
vegeMeals = [];
for (const setMenu of FazerMenu.LunchMenus[1].SetMenus) {
  vegeMeals.push(setMenu.Meals.filter(meal => meal.Diets.includes('Veg')));
}



export {nameMeal,sortTheMenu,filtered,addedPercentage,sum,vegeMeals};
