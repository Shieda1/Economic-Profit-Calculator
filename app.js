// https://www.omnicalculator.com/finance/economic-profit

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const economicprofitRadio = document.getElementById('economicprofitRadio');
const totalrevenueRadio = document.getElementById('totalrevenueRadio');
const explicitcostsRadio = document.getElementById('explicitcostsRadio');
const implicitcostsRadio = document.getElementById('implicitcostsRadio');

let economicprofit;
let totalrevenue = v1;
let explicitcosts = v2;
let implicitcosts = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

economicprofitRadio.addEventListener('click', function() {
  variable1.textContent = 'Total revenue';
  variable2.textContent = 'Explicit costs';
  variable3.textContent = 'Implicit costs';
  totalrevenue = v1;
  explicitcosts = v2;
  implicitcosts = v3;
  result.textContent = '';
});

totalrevenueRadio.addEventListener('click', function() {
  variable1.textContent = 'Economic profit';
  variable2.textContent = 'Explicit costs';
  variable3.textContent = 'Implicit costs';
  economicprofit = v1;
  explicitcosts = v2;
  implicitcosts = v3;
  result.textContent = '';
});

explicitcostsRadio.addEventListener('click', function() {
  variable1.textContent = 'Economic profit';
  variable2.textContent = 'Total revenue';
  variable3.textContent = 'Implicit costs';
  economicprofit = v1;
  totalrevenue = v2;
  implicitcosts = v3;
  result.textContent = '';
});

implicitcostsRadio.addEventListener('click', function() {
  variable1.textContent = 'Economic profit';
  variable2.textContent = 'Total revenue';
  variable3.textContent = 'Explicit costs';
  economicprofit = v1;
  totalrevenue = v2;
  explicitcosts = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(economicprofitRadio.checked)
    result.textContent = `Economic profit = ${computeeconomicprofit().toFixed(2)}`;

  else if(totalrevenueRadio.checked)
    result.textContent = `Total revenue = ${computetotalrevenue().toFixed(2)}`;

  else if(explicitcostsRadio.checked)
    result.textContent = `Explicit costs = ${computeexplicitcosts().toFixed(2)}`;

  else if(implicitcostsRadio.checked)
    result.textContent = `Implicit costs = ${computeimplicitcosts().toFixed(2)}`;
})

// calculation

function computeeconomicprofit() {
  return Number(totalrevenue.value) - Number(explicitcosts.value) - Number(implicitcosts.value);
}

function computetotalrevenue() {
  return Number(economicprofit.value) + Number(explicitcosts.value) + Number(implicitcosts.value);
}

function computeexplicitcosts() {
  return Number(totalrevenue.value) - Number(economicprofit.value) - Number(implicitcosts.value);
}

function computeimplicitcosts() {
  return Number(totalrevenue.value) - Number(explicitcosts.value) - Number(economicprofit.value);
}