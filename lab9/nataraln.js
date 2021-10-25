

function accelerate(sus) {
   let isPrime = true;
   if ((sus != 1) && (sus != 0)) {
      for (let i = 2; i <= sus; i++) {
         isPrime = true;
         for (let j = 2; j < i; j++) {
            if (i % j == 0) {
               isPrime = false;
               break;
            };
         };
      };
   } else {
      if (sus == 0) {
         isPrime = false;
      }
   }

   if (isPrime) {
      console.log(sus, 'is a prime');
   } else {
      console.log(sus, 'is not prime');
   }
}

function isPrimeNumber(num) {
   if (typeof (num) == 'object') {
      for (let q = 0; q < num.length; q++) {
         accelerate(num[q]);
      }
   }
   if (typeof (num) == 'number') {
      accelerate(num);
   }
};