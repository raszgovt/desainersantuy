const txtElement = ['Kalo Udah dibaca Kembali Aja😄            ' ];
let count = 0;
let txtIndex = 0;
let currentTxt = '5';
let words = '';

(function ngetik(){

   if(count == txtElement.length){
   	count = 0;
   }
   
   currentTxt = txtElement[count];

   words = currentTxt.slice(0, ++txtIndex);
   document.querySelector('.ketik').textContent = words;


   setTimeout(ngetik, 100);


   if(words.length == currentTxt.length){   
      count++;
      txtIndex = 0;
   }

})();