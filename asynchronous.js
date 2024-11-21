// console.log("start")

// setTimeout(() => {
//   console.log("This is will start running after 2 second")
// }, 2000)

// console.log('end')

// callback
let order = "Order confirmed from customer";

const ans = new Promise((resolve, reject) => {
  if (order) {
    return resolve("Order taken from customer");
  }else{
    return reject("No order made yet")
  }
});

let ans2 = ans.then((data) => {
  console.log(data);

  return new Promise((resolve, reject) => {
    if (data) {
      return resolve("Order processing");
    } else {
      return reject("No order no processing");
    }
  });
});

let ans3 = ans2.then((data) => {
  console.log(data)

  return new Promise((resolve, reject) => {
    if(data){
      return resolve("Ordered food cooked")
    }else{
      return reject("not processed yet")
    }
  })
});

ans3.then((data) => {
  console.log(data)
})
