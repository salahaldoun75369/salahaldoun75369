let w;
let chekerOfOperation;
let operationSign;
let chekerOfFE;
let chekerOfSE;
let firstElement;
let secondElement;
let arrInp;
let sas;
let numExec;
let counterOfSas;
chekerOfOperation = true;
chekerOfFE = true;
chekerOfSE = false;
/*function count(inpup) {
   switch (mark) {
      case "*":
         return num1 * num2;
      case "+":
         return num1 + num2;
      case "-":
         return num1 - num2;
      case "/":
         if (num2 !== 0) {
            return num1 / num2;
         } else {
            return "не делится на нуль";
         }
   }
}*/
/*function calc(inp) {
   chekerOfOperation = true;
   chekerOfFE = true;
   chekerOfSE = false;
   let operationOutput;
   for (let w = 0; w <= (inp.length + 1); w++) {

      if (inp[w] == '(') {
         if (chekerOfOperation && (inp[w] != ' ')) {
            console.log('you write somthing wrong');
            break;
         }
         if (chekerOfOperation && (inp[w] != ' ')) {

         }
      }
      if (chekerOfSE && !chekerOfOperation && (inp[w] != ' ')) {
         if ((inp[w + 1] != '') || (inp[w + 1] != ' ')) {
            secondElement += inp[w];

         } else {
            secondElement += inp[w];
            chekerOfSE = false;
         }
      }
      if (chekerOfFE && !chekerOfOperation && (inp[w] != ' ')) {
         if (inp[w + 1] != ' ') {
            firstElement += inp[w];

         } else {
            firstElement += inp[w];
            chekerOfFE = false;
            chekerOfSE = true;
         }
         
         console.log(secondElement, '  ****');
      }
      if (chekerOfOperation && (inp[w] != ' ')) {
         operationSign = inp[w];
         chekerOfOperation = false;
         chekerOfFE = true;
      }
      if (operationSign == '*') {
         operationOutput = Number(firstElement) * Number(secondElement);
      }
      if (operationSign == '/') {
         operationOutput = Number(firstElement) / Number(secondElement);
      }
      if (operationSign == '+') {
         operationOutput = Number(firstElement) + Number(secondElement);
      }
      if (operationSign == '-') {
         operationOutput = Number(firstElement) - Number(secondElement);
      }

   }
   console.log(operationOutput);
}

let tecca
function writeText(tecca) {
   for (let b = 0; b <= tecca.length; b++) {
      console.log(tecca[b]);
      console.log(typeof (tecca[b]))
   };
};
function calc(inp) {
   arrInp = ['*', '(', '-', 5, 6, ')', 7];
   console.log(arrInp[1]);
   arrInp.slice(0, 3, 'sus');
   console.log(arrInp);
}
function numCreate(sas) {
   console.log(sas.lenght);
   for (counterOfSas = 0; counterOfSas <= sas.lenght; counterOfSas++) {
      if (typeof (counterOfSas) == 'number') {
         numExec += sas[counterOfSas];
      };

      console.log(sas[counterOfSas]);
   }

   console.log(typeof (Number(numExec)), Number(numExec));
}
function stringToNum(enterString, enterNum) {
   if (enterString == '0') {
      enterNum = enterNum * 10 + 0;
   }
   if (enterString == '1') {
      enterNum = enterNum * 10 + 1;
   }
   if (enterString == '2') {
      enterNum = enterNum * 10 + 2;
   }
   if (enterString == '3') {
      enterNum = enterNum * 10 + 3;
   }
   if (enterString == '4') {
      enterNum = enterNum * 10 + 4;
   }
   if (enterString == '5') {
      enterNum = enterNum * 10 + 5;
   }
   if (enterString == '6') {
      enterNum = enterNum * 10 + 6;
   }
   if (enterString == '7') {
      enterNum = enterNum * 10 + 7;
   }
   if (enterString == '8') {
      enterNum = enterNum * 10 + 8;
   }
   if (enterString == '9') {
      enterNum = enterNum * 10 + 9;
   }
}

*/
function setTimeout() {
   document.body.textContent = 'Новый <strong>BODY!</strong>'
}

function calc(inp) {

   console.log(document.body.textContent)
   arrInp = ['*', '(', '-', 5, 6, ')', 7];
   console.log(arrInp[1]);

   arrInp.pop();
   console.log(arrInp.pop());
   console.log(arrInp);
}
function numCreate(sas) {
   numExec = [];
   console.log(sas.length);
   for (counterOfSas = 0; counterOfSas <= sas.length; counterOfSas++) {
      if (sas[counterOfSas] == '1') {
         numExec += sas[counterOfSas];
         console.log(numExec);
      };

      console.log(sas[counterOfSas]);
   }
   console.log(numExec);
   console.log(typeof (Number(numExec)), Number(numExec));
}
