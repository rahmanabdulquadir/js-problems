const loadData = () => {
 return new Promise((resolve, reject) => {
    let success = Math.random()
    console.log(success)

    if(success <= 0.5){
      resolve(5000)
    }else{
      reject(404)
    }
  })
}

loadData()
.then(res => console.log(res))
.catch((err) => console.error(err))