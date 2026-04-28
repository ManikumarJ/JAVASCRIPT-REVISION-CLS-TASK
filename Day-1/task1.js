// Task 1
// A user form returns this data. Write a function to check which fields are empty or missing:
// const user = {
//   name: "John",
//   age: null,
//   email: undefined,
//   phone: ""
// };

const user = {
  name: "John",
  age: null,
  email: undefined,
  phone: ""
};

for(let val in user){
    
//    console.log(user[val]); // iterate

   if ( user[val] === undefined || user[val] === "" || user[val] === null ){
    console.log(val);
   }
   
 
}
