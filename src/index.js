const trialDivision = (number) => {
    let is_prime = true;
    if(number > 1 &&  number % 1 === 0){
        for(let i = number ;i > 1; i--){
            if (number % i === 0 && number !== i){
                is_prime = false
            }
        }
    } else {
       is_prime = false;
    }
    return is_prime;
  }

  module.exports = trialDivision;
