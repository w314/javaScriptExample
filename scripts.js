const gInput = document.querySelector("#gramm")
const oInput = document.querySelector("#ounce")

const conversionRate = 28.34952

// const numberFormatOptions = {
//   style: 'decimal',
//   minimumFractionDigits: 0,
//   maximumFractionDigits: 2,

// }
// const numberFormat = new Intl.NumberFormat('en-us', numberFormatOptions)

function onGrammChange(event) {
  const g = event.target.value
  oInput.value = g == 0 ? null : (g / conversionRate).toFixed(2)
}

function onOunceChange(event) {
  const o = event.target.value
  gInput.value = o == 0 ? null : (o * conversionRate).toFixed(2)
}