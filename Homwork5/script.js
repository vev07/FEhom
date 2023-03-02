for(let i = 0; i <= 10; i++) {
    if(i % 2 == 0) {
        console.log(`task 1-`+i)
    }
}
for(let i = 55; i <= 55 && i >= 20; i--) {
    console.log(`task 2-`+i)
}
const numbers = [3, 5, 11, 2, 8, 1, 6];
for(let i = 0; i <numbers.length; i++) {    
        console.log(`task 3-`+numbers[i])
}
const numbers_squared = []
for(let i = 0; i <numbers.length; i++) { 
    numbers_squared[i] = numbers[i]*numbers[i]   
    console.log(`task 4-`+numbers_squared[i])
}
const last_elem = numbers_squared[numbers_squared.length-1]
console.log(`task 5 last_elem-`+last_elem)

const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
    }
    console.log(`task 6`)
    console.log(`User’s name is `+user.first_name+` `+ user.last_name+`. He is `+user.age+` years old`)
    