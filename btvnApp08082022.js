//BÀI 1:Khởi tạo một biến có tên sản phẩm,chứa một mảng sản phẩm, 
// mỗi sản phẩm có tên, giá, thương hiệu, danh mục và màu sắc

// let phone = [
//     {'#': 1, Name: 'Sony Xperia XA Premium', Brand: 'Sony', Price: 4428, Color: 'White', Category: 'Charge'},
//     {"#": 2, Name: 'OPPO F3 Plus', Brand: 'OPPO', Price: 5487, Color: 'Black', Category: 'Phone'},
//     {"#": 3, Name: 'IPhone 13 Pro max', Brand: 'Apple', Price: 21490, Color: 'Gray', Category: 'Phone'},
//     {"#": 4, Name: 'Samsung Galaxy S8', Brand: 'Samsung', Price: 8490, Color: 'Blue', Category: 'Phone'},
// ]
//1.1:

// for (i = 0; i < phone.length; i++){
//     console.log(`#${[i]} Name: ${phone[i].Name}`);
//     console.log(`Price: ${phone[i].Price}`);
//     console.log(`-------------------------------`);
// }

//1.2:

// let userInput = prompt('Enter product position:');
// //console.log(phone[userInput]);
// console.log(`Name: ${phone[userInput].Name}`);
// console.log(`Brand: ${phone[userInput].Brand}`);
// console.log(`Price: ${phone[userInput].Price}`);
// console.log(`Color: ${phone[userInput].Color}`);
// console.log(`Category: ${phone[userInput].Category}`);

//1.3:

// let userInputCatelogy = prompt('Input catelogy: ');
// for (i = 0; i < phone.length; i++) {
//     if (phone[i].Category === userInputCatelogy) {
//         console.log(`Name: ${phone[i].Name}`);
//         console.log(`Price: ${phone[i].Price}`);
//     }
// }

//1.4:

// for (i = 0; i < phone.length; i++) {
//     phone[i].Providers = prompt(`Input Providers ${i+1}`);
//     console.log(`#${[i]} Name: ${phone[i].Name}`);
//     console.log(`Price: ${phone[i].Price}`);
//     console.log(`Providers: ${phone[i].Providers}`);
//     console.log(`-------------------------------`);
// }

//1.5:

// phone[0].Providers = 'Phukienso';
// phone[1].Providers = 'Tgdd';
// phone[2].Providers = 'Tgdd';
// phone[3].Providers = 'Tgdd';

// let userInputProviders = prompt('Input provider');

// for (i = 0; i < phone.length; i++) {
//     if(phone[i].Providers === userInputProviders) {
//         console.log(`Name: ${phone[i].Name}`);
//         console.log(`Brand: ${phone[i].Brand}`);
//         console.log(`Price: ${phone[i].Price}`);
//         console.log(`Color: ${phone[i].Color}`);
//         console.log(`Category: ${phone[i].Category}`);
//         console.log(`Providers: ${phone[i].Providers}`);
//        console.log(`-------------------------------`);
//     }
// }



//BÀI 2: 
//2.1

let task = [
    {No1: 1, Subject: 'HTML', Complete: 'false'},
    {No1: 2, Subject: 'CSS', Complete: 'false'},
    {No1: 3, Subject: 'JavaScript', Complete: 'false'},
    {No1: 4, Subject: 'Node Package Manager', Complete: 'false'},
    {No1: 5, Subject: 'Git', Complete: 'false'},
];
// console.log('This is your task:');
// for (i = 0; i < task.length; i++) {
//     console.log(`${i+1}. ${task[i].Subject}`);
//     console.log(`Complete: ${task[i].Complete}`);
// }

//2.1 Create

// let stat = true;
// while (stat) { 
let userInput = prompt('Input C/R/U/D/E:').toLowerCase();
if (userInput === 'c') {
    // //Tạo mới
    let userInputC = prompt('Input subject: ');
    let userInputCValue = prompt('Input value of subject: ');

    // console.log(toString(userInputC));
    // console.log(toString(userInputCValue));

    //console.log(task.length);
    //console.log(task.length + 1);
    // console.log(String(userInputC));
    // console.log(String(userInputCValue));

  
   // task[task.length].Subject = String(userInputC);
    //task[task.length].Complete = String(userInputCValue);

    // let newObj = `{No: ${task.length + 1}, Subject: ${userInputC}, Complete: ${userInputCValue}}`;
    let newObj = {No1: task.length + 1, Subject: userInputC, Complete: userInputCValue};
    console.log("222222",newObj);
    task.push(newObj);
    console.log("111",task);
    
    for (i = 0; i < task.length; i++) {
        console.log(`${i+1}. ${task[i].Subject}`);
        console.log(`Complete: ${task[i].Complete}`);
    }


}

// } else if (userInput === 'r') {
//     //Đọc dữ liệu
//    for (let i = 0; i < task.length + 1; i++) {
//         console.log(`${i}. ${task[i].Subject}`);
//         console.log(`Complete: ${task[i].Complete}`);
//    }
// } else if (userInput === 'u') {
//     //Update dữ liệu
//     let inputIndexU = prompt('Input index update');
//     let inputValueU = prompt('Input value update');
//     task[inputIndexU].Subject = inputValueU;

//     /* for (let i = 0; i < task.length + 1; i++) {
//         console.log(`${i}. ${task[i].Subject}`);
//         console.log(`Complete: ${task[i].Complete}`);
//     } */

// } else if (userInput === 'd') {
//     //Delete
//     let inputIndexDelete = prompt('Input index delete');
//     delete task[inputIndexDelete];
    
//     for (let i = 0; i < task.length + 1; i++) {
//         console.log(`${i}. ${task[i].Subject}`);
//         console.log(`Complete: ${task[i].Complete}`);
//     }

// } else if (userInput === 'e') {
//     statu = false;
// }
// // }









