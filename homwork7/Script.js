const numbers = document.querySelector('.numbers')
for(let i = 10; i >=5; i--) {
    numbers.innerHTML += `<p>${i*10}</p>`;   
}

const arrStringContainer = ["Yevhen", "Iryna", "Karyna","Zlata"]
const searchStringContainer = document.querySelector(".string_container") 
for(let i = 0; i < arrStringContainer.length; i++) {
    searchStringContainer.innerHTML += `<p>${arrStringContainer[i]}</p>`
}

const arrInfoFamily = [
    {firstName:  "Yevhen",
    lastName: "Vev",
    age: 39},
    
    { firstName: "Iryna",
    lastName: "Vev",
    age: 35},

    { firstName: "Karyna",
    lastName: "Vev",
    age: 12},

    { firstName: "Zlata",
    lastName: "Vev",
    age: 9}]
const searchUsersContainer = document.querySelector('.users_container')
for(let i = 0; i < arrInfoFamily.length; i++) {
    if(arrInfoFamily[i].age >= 18) {
        searchUsersContainer.innerHTML +=
        `<p>First name is ${arrInfoFamily[i].firstName}, second name is ${arrInfoFamily[i].lastName}
            , age ia ${arrInfoFamily[i].age }. </p>` 
    }
}
