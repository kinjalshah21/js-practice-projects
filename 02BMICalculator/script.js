const form = document.querySelector('form')
// if you take height , weight value here then it will take values as soon as page gets loaded. Therefore it will be empty value
// const height = parseInt(document.querySelector('#height')).value

form.addEventListener('submit',(e) => {
  e.preventDefault()
  
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  
  
  if(height === '' || height <= 0 || isNaN(height)){
    results.innerHTML = "Please give valid height."
  }else if(weight === '' || weight <= 0 || isNaN(weight)){
    results.innerHTML = "Please give valid weight."
  }else {
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`
  }
})