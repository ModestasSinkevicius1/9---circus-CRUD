import { Circus } from "./Circus.js";

const cir = new Circus('Nosoul');

let msg = cir.intro();
//console.log(msg);
// Sveiki atvyke i "Besieliai" cirka!

let obj = cir.list();
for(const singleDate of obj){
    const stringDate =`${singleDate.year}-${singleDate.month}-${singleDate.day}`;
    const date = new Date(stringDate);
    //console.log(`${date}`);
    if(date < Date.now()){
        console.log(`${stringDate} (Already ended)`);
    }
    else{
        console.log(`${stringDate}`);
    }  
}
//console.log(obj);
// "Besieliai" cirko tvarkarastis:
// Siuo metu pasirodymu nera suplanuota.

msg = cir.newShow(2022, 9, 1);
//console.log(msg);
// Naujas pasirodymas 2022 Rugsėjo 1 dieną!

msg = cir.newShow(2022, 8, 25);
//console.log(msg);
// Naujas pasirodymas 2022 Rugpjūčio 25 dieną!

msg = cir.newShow(2022, 3, 17);
//console.log(msg);
// Naujas pasirodymas 2022 Kovo 17 dieną!

// READ: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
obj = cir.list();

for(const singleDate of obj){
    const stringDate =`${singleDate.year}-${singleDate.month}-${singleDate.day}`;
    const date = new Date(stringDate);
    //console.log(`${date}`);
    if(date < Date.now()){
        console.log(`${stringDate} (Already ended)`);
    }
    else{
        console.log(`${stringDate}`);
    }  
}
//console.log(obj);
// "Besieliai" cirko tvarkarastis:
// 1) 2022 Kovo 17d (jau įvykęs);
// 2) 2022 Rugpjūčio 25d;
// 3) 2022 Rugsėjo 1d.

msg = cir.changeDate(3, 2022, 9, 2);
//console.log(msg);
// Pasirodymo data pakeista į 2022 Rugsėjo 2 dieną!

obj = cir.list();
//console.log(obj);
// "Besieliai" cirko tvarkarastis:
// 1) 2022 Kovo 17d (jau įvykęs);
// 2) 2022 Rugpjūčio 25d;
// 3) 2022 Rugsėjo 2d.

msg = cir.cancelShow(0);
//console.log(msg);
// Atsaukti jau praejusio pasirodymo negalima!

msg = cir.cancelShow(1);
//console.log(msg);
// Pasirodymas atsauktas (2022 Rugpjūčio 25d)!

obj = cir.list();
//console.log(obj);
// "Besieliai" cirko tvarkarastis:
// 1) 2022 Kovo 17d (jau įvykęs);
// 2) 2022 Rugsėjo 2d.