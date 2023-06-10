"use strict";


// let slc = document.getElementById('slc');

// slc.addEventListener('change', ()=>{
//     console.log('value changed');
// })
    

//  let data = "";
//  let color = '';
 


//     let select = parseInt(slc.value);
//  for (let i = 0; i < select; i++) {
//   data += `<tr>`;

//   for (let j = 0; j < select; j++) {
//     color = (i+j)%2 === 0 ? 'black' : '';
//     data += `<td style="background-color:${color};">  </td>`;
//    }

//   data += `</tr>`;
//  }

// document.getElementById('tbl').innerHTML = data;



// let email = 'admin@gmail.com';
// let password = '12345';

// const submitButton = document.getElementById('button');


    
 
//     form.addEventListener('submit',(e) => {
 
//         e.preventDefault()
        

    
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;
      
       
//         if(email === "email" && password === "password"){
//             alert("Correct")
//         }
//         else{
//            alert("Incorrect")
//         }
//     })

   
    

let data = "";
let color = '';

const selection = document.getElementById("slc");

selection.addEventListener("change", (e) => {
    const optValue = parseInt(selection.options[selection.selectedIndex].innerText);

    data = "";

    for (let i = 0; i < optValue; i++) {
        data += "<tr>";

        for (let j = 0; j < optValue; j++) {
            color = i===j ? 'black' : '';
          data += `<td style="background-color:${color};">  </td>`;
        }

        data += "</tr>";
    }

    document.getElementById('tbl').innerHTML = data;
});