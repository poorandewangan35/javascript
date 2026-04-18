// let myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task......")
//         // resolve({userName: "Pooran"})
//         reject("error loading data.....")
//     }, 2000)
// }).then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log(error)
// })

// console.log(myPromise)


// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Asyn task.....")

//         let task = false;
//         if(task){
//             console.log("loading data sucessful...")
//         }else{
//             console.log("Loading data unsecessful..")
//         }
//     }, 2000)
// }).then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("promise finished...")
// })


fetch("https://dummyjson.com/products")
.then((data)=>{
    return data.json()
}).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("data fetching finished")
})
