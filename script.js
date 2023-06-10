"use strict";

let data = "";
let color = '';

let slc = document.getElementById('slc');

slc.addEventListener('change',render)
    




function render() {
    let select = parseInt(slc.value);
    data = ''
        console.log(select)
        for (let i = 0; i < select; i++) {
            data += `<tr>`;
          
            for (let j = 0; j < select; j++) {
              color = (i+j)%2 === 0 ? 'black' : '';
              data += `<td style="background-color:${color};">  </td>`;
             }
          
            data += `</tr>`;
           }
        console.log(data);

document.getElementById('tbl').innerHTML = data;
        
    }
 select.addEventListener("change",render)




// let email = 'admin@gmail.com';
// let password = '12345';

// const submitButton = document.getElementById('button');


    
 
    // form.addEventListener('submit',(e) => {
 
    //     e.preventDefault()
        

    
    //     const email = document.getElementById('email').value;
    //     const password = document.getElementById('password').value;
      
       
    //     if(email === email && password === password){
    //         alert("Correct")
    //     }
    //     else{
    //        alert("Incorrect")
    //     }
    // })

   
    
