const shopForTrainers = () => {
    return new Promise((resolve, reject) => {
      const newTrainers = ['nike', 'adidas', 'converse', 'jordan',];
    setTimeout(()=>{
      let randomIndex = Math.floor(Math.random() * newTrainers.length);
      let newTrainer = newTrainers[randomIndex];
      console.log(` I decided to buy ${newTrainer}.`);
     resolve(newTrainer);
    }, 1000);
  });
  }
    
  module.exports = storeShopping;
