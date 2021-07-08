function init(){
  //console.log("Chamou init no Construtor em");
}

class User{
  constructor(name, email) {
    this.name = name;
    this.email = email;

    init(); //Chamando função
  }

  sendMessage(message){
    console.log(message);
  }

  get showEmail(){  //getter
    return undefined;
  }
}
 
class Admin extends User{  //Herança
  constructor(name, email){
    super(name, email);  //Chama construtor de User
    this.isAdmin = true;
  }
}

const user = new User("Augusto Lazaro", "guto.lazaro@mail.com");//Instanciando classe User
const admin = new Admin("Karla Santos", "karla.santos@mail.com", true); //Instanciando classe Admin

// console.log(user.name);
// console.log(user.email); //Chamada do construtor
// user.sendMessage("Hello World");//Chamada do método
// console.log(admin.showEmail);
// console.log(admin.name);
// console.log(admin.isAdmin);


// Functions x Arrow functions

function funMessage() {
  console.log("Hello function");
}

const arrMessage = () => {
  console.log("Hello arrow");
}

// Método sort()

const arrayPessoas = [
  {name: "Carlos", age: 23},
  {name: "Cuzco", age: 10},
  {name: "Jorge", age: 63}
]

const orderedArrayPessoas = arrayPessoas.sort((a, b) => {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
  return 0;
})
// console.log(arrayPessoas);
// console.log(orderedArrayPessoas);


// filter map reduce

const array = [1, 2, 3, 4, 5, 6, 7, 8] 

const filterArray = array.filter((elemento) =>{      //return true elements
  if(elemento % 2 == 0) return true;
  return false;
})

const mapArray = array.map((elemento) => {           //return something in a same size array
  if (elemento % 2 == 0) return (elemento + " is even");
  return (elemento + " is odd");
})

const reduceArray = array.reduce((sum, number) => {  // return the operations made with the array elements
  return sum + number;
}, 0)                  

console.log(filterArray);
console.log(mapArray);
console.log(reduceArray);