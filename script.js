const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const calBtn = document.querySelector('#calcBtn');
const bmiVal = document.querySelector('#bmiValue');
const bmiStatus = document.querySelector('#bmiStatus');

const resetbtn = document.querySelector('#resetBtn')



calBtn.addEventListener('click',() =>{
  let weightValue = Number(weight.value);
  let heightValue = Number(height.value);

  if(weightValue <=0 || heightValue <=0){
    alert('please enter valid number')
    return;
  }

  let meter = heightValue /100;
  let bmi = weightValue / (meter * meter);
  let fixedBmi = bmi.toFixed(2);
  bmiVal.textContent = fixedBmi;

  if(bmi < 18.5){
    bmiStatus.textContent = 'underweight';
    bmiStatus.style.color = 'blue'

  }else if(bmi >=18.5 && bmi <=24.9){
    bmiStatus.textContent = 'normalweight';
    bmiStatus.style.color = 'green';
  }else if(bmi >=25 && bmi <=29.9){
    bmiStatus.textContent = 'overweight';
    bmiStatus.style.color = 'yellow';
  }else{
    bmiStatus.textContent = 'obese';
    bmiStatus.style.color = 'red';
  }

})

resetbtn.addEventListener('click',() =>{
  weight.value = '';
  height.value = '';

  bmiStatus.textContent = '--';
  bmiVal.textContent = '--';
  bmiStatus.style.color = '#e6eef8'
})