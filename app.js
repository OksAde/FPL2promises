const storeShopping = require('./store.js')
const excuses = require("./customeractions,js")



let queue = ['Ikena', 'Marco', 'Isabel', 'Mike', 'Jesse']


async function storeShopping() {
    console.log(`going to the shop to buy some trainers...`);
    let footwear = shopForTrainers();
    console.log(`I'm want to wear ${footwear} when I go out tonight!`);
  } try {
      const outOfStock = await setTimeout()
      console.log('they were on sale')

  } catch (err) {
      excuses(cust,err)
  }
  
  storeShopping();


const inSize =  {
    console.log('your size is in stock')
}

const outOfStock {
    console.log('Your size is out of stock')
}
      

const stock =  {
    trainers =  12
};

for ( let cust of queue) {
    storeShopping(cust, stock)
    stock--
}
