const nameMeal = input =>{
  const re = new RegExp('/[A-ZÖÄ]{1}[a-zöäå\s,.?!\/{[}\]()-]{4,64}$/');
  return re.test(input);

};


export {nameMeal};
