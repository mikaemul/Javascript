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

export {nameMeal,sortTheMenu,filtered,addedPercentage,sum};
