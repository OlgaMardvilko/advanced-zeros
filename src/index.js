module.exports = function getZerosCount(number, base) {
  let result;

  for (let i = 2; i <= base; i++) {
    if (base%i == 0) { 
        
		  let delitel = 0;
      let zeros = 0;
      let num = number;

      while (base%i == 0) {
        base = Math.floor(base/i);
        delitel++;
      }

      while (Math.floor(num/i) > 0) {
        zeros += Math.floor(num/i);
        num = Math.floor(num/i);
      }    
      result = Math.floor(zeros/delitel); 
    }
  }       
  return result;
}