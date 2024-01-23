
const obj={
    name:'sahin',
    surname:'derisov',
    age:20,
    boy:180,
    contact:{
        email:'sahin.derisov@gmail.com',
        phone:99455804983
    }
}
const {name,age,contact,...rest}=obj
if( name ==='' || age<18 ||  contact.email ===''){
   return console.log('fill in the bosom');
}else{
    console.log(`welcome ${name} `);
}
let password='sahin'
let againpassword='sahin'
contact['password']= password === againpassword && password.length > 0 ? password:'not password'
console.log(obj);