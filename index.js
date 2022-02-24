const stock = { trainers = 12}
   // Write your code below:
      const onlineShopping = (resolve, reject) => {
          if (stock.trainers > 0) {
              resolve('order processed, trainers are on their way.');
          } else {
              reject('That item is sold out.');
          }
      };

      onlineShopping.then((message) => {
          console.log('it will take 3-5 days' + message)
      }).catch ((message) => {
          console.log('you are in a queue of...' + message) 
      })
