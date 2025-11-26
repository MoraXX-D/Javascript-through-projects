const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{

  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector("#weight").value)

  console.log(height,weight)

  const result= document.querySelector("#results")

  if(height === '' || height <= 0 || isNaN(height)){
    result.innerHTML = `please give a valid height ${height}`
  }
  else if(weight === '' || weight <= 0 || isNaN(weight)){
    result.innerHTML = `please give a valid weight ${weight}`
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(1)

    if (bmi < 18.6){
        result.innerHTML = `<span>your BMI is ${bmi}, you are under weight</>`
    }
    else if (bmi > 18.6 && bmi < 24.6){
        result.innerHTML = `<span>your BMI is ${bmi}, you have a normal weight</>`
    }
    else if(bmi > 24.6){
        result.innerHTML = `<span>your BMI is ${bmi}, you are over weight</>`
    }
    
  }
})