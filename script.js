let name =prompt ('Alex')
let money = 10000
let account = prompt (7777)
if (name == 'Alex') {
console.log(name);
    if (account == 7777) {
        console.log(5000);
    } else {
        console.log('ошибка');
    }

    if (money >=5000) {
        console.log('все отлично');
    } else {
           console.log('недостаточно средств');
    }
    console.log('5000 снял');
    console.log('5000 осталось');

} else {
console.log('Пользователь не найден, досвидул');
}




// Задача№2

let name2 = 'A'
let age = 20 
let money2 = '100$'

if (name2 === 'A') {
   console.log('проходит');


   if (age <= 40) {
 console.log('проходит');
   } else {
console.log('не проходит');
   }

   if (money2 >= '100$') {
    console.log('проходит');
   } else {
    console.log('не проходит');
   }


}else {
   console.log('не проходит');
}