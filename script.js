"use strict";

// let data = "";
// let color = '';

// let slc = document.getElementById('slc');

// slc.addEventListener('change',render)
    




// function render() {
//     let select = parseInt(slc.value);
//     data = ''
//         console.log(select)
//         for (let i = 0; i < select; i++) {
//             data += `<tr>`;
          
//             for (let j = 0; j < select; j++) {
//               color = (i+j)%2 === 0 ? 'black' : '';
//               data += `<td style="background-color:${color};">  </td>`;
//              }
          
//             data += `</tr>`;
//            }
//         console.log(data);

// document.getElementById('tbl').innerHTML = data;
        
//     }
//  select.addEventListener("change",render)







   const submitButton = document.getElementById('button');


   form.addEventListener('submit',(e) => {

       e.preventDefault()
    

    function Input(){

    let email = 'admin@gmail.com';
    let pass = '12345';

    const userEmail = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value;

    if(email===userEmail && pass===userPassword) {

        alert("You've successfully logged in")
        
    }else{ alert("Username or password is incorrect")}

   
       
}
   Input();
})
   


   
