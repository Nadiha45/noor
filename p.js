const array = [9, 3, 1, 2, 3, 7, 9, 5, 3];
console.log("index", "Array", "even", "oddd", "SumTotal");
let sumtotal = 0,
  eventotal = 0,
  oddtotal = 0,
  evenflag = 0,
  oddflag = 0;
// condition
for (let i = 0; i < array.length; i++) {
  sumtotal += array[i];
  if (array[i] % 2 === 0) {
    evenflag = array[i];
  } else {
    evenflag = 0;
  }
  if (array[i] % 2 === 1) {
    oddflag = array[i];
  } else {
    oddflag = 0;
  }
  array[i] % 2 === 0 ? eventotal += array[i] : oddtotal += array[i];
  console.log(' ', i,'   ', array[i],'  ', evenflag,'  ', oddflag,'   ', sumtotal);
};


console.log('This is eventotal :',eventotal);
console.log('This is oddtotal  :',oddtotal);
console.log('This is sumtotal  :',sumtotal);
if(sumtotal === eventotal + oddtotal){
  console.log('This is a equle value');
}else{
  console.log('This is not a equle value');
}