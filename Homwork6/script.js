function minNum(a, b) {
 if(a < b) {
    return a
 }else if(b < a) {
return b
 }else{
    return a
 }
    
}
console.log("task1 "+minNum(14,6))

 function consoleEvenNumbers(a, b) {
    let maxNumber = 0;
    let minNumber = 0;
     if (a > b) {
        maxNumber = a
         minNumber = b
     } else if (a < b) {
         maxNumber = a
         minNumber = b
     } else {
         console.log("both numbers is equal")
         return
     }

     for (let i = maxNumber; i >= minNumber; i--) {
         if (i % 2 == 0) {
             console.log("task2 "+i)
         }
     }
}
 

 consoleEvenNumbers(10, 4)


function power(a, b) {
    let x = Math.pow(a, b = 2)
    console.log("task3 "+x) 
    return x
} 
power(4, 9)

function fromN(a) {
    let enamFromN = 0
    for(let i = 1; i <= a; i++) {
        enamFromN += i;
      
        
    }return enamFromN
}
console.log("task4 "+fromN(10))


function evenN(n, m) {
    let evenArr = []
    let oddArr = []
    let minNums = Math.min(n, m);
    let maxNums = Math.max(n, m);
    let sumEvenArr = 0; 
    let sumOddArr = 0;
    

    for(let i = minNums; i <= maxNums; i++) {
        if(i % 2 === 0) {
            evenArr[i] = i; 
            sumEvenArr += i;           
                   
        } 
        if (i % 2 !== 0) {       
            oddArr[i] = i;
            sumOddArr += i;           
                      
        } 
    }       

    console.log("task5 "+sumEvenArr+ " it is sumEven")
    console.log("task5 "+sumOddArr+" it is sumOddArr")  

}
evenN(1, 5)

function getString(arr) {  
     if(arr.length === 0) {   
            return null  }
let maxStr = arr[0]; 
for (let i = 0; i < arr.length; i++) {    
if (maxStr.length < arr[i].length) {       
maxStr = arr[i] 
     } 
  }
console.log("task6 "+maxStr)
 }
getString(['one', 'two', 'three', 'four', 'five'])