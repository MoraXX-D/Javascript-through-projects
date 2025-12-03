

fetch("https://api.apis.guru/v2/list.json")
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((e)=> console.log(e))