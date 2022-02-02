const array =[9,3,1,2,3,7,9,5,3];
  let sumTotal = 0,
      evenTotal = 0,
      oddTotal = 0,

  for(let i = 0; i< array.length; i++){
    sumTotal += array[i];
    
    if(array[i] % 2 === 0){
      evenTotal += array[i];
    }
    else{
      evenTotal = 0;
    }
    if(array[i % 2 === 1]){
      oddTotal = array[i];
    }
    else{
      oddTotal = 0;
    }
    console.log("i", array[i]);
  }
  