// Find the largest among three numbers.

const largestNumberFind = (num1 , num2 , num3) =>{
    if(num1 >= num2 && num1 > num3 ){
            console.log(`${num1} is Greater number`);
            
    }
   else if (num2 >= num3 && num2>= num1){
     console.log(`${num2} is Greater number`);
   }
   else{
     console.log(`${num3} is Greater number`);
   }
}
largestNumberFind(10 , 20 , 30)
largestNumberFind(232, 20 , 100)
largestNumberFind(1000, 80000, 2)