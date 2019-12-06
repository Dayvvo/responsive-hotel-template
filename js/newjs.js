/* 
buttons color change when clicked

select each button(queryselector), 
loop through the nodelist and add eventlisteners mousedown and mouseup event listeners to add and remove the class name with color 
*/

let btnclick= document.querySelectorAll('td');

for (var i=0 ; i<btnclick.length; i++) {
   btnclick[i].addEventListener('mousedown', function() {
   this.classList.add('tdhover');   }); 
   btnclick[i].addEventListener('mouseup',function() {
       this.classList.remove('tdhover')
   })
   
}

let screen= document.getElementById('display');


    let dialkeys= document.querySelectorAll('td');
    for (let i = 0; i < dialkeys.length; i++) {
        dialkeys[i].addEventListener('click',function () {
                const el = document.createElement('span');
                el.textContent = dialkeys[i].textContent;
                return el;
                screen.appendChild(el);
                }
                
                
        )
               
            }

let clicknshow= document.querySelectorAll('td');

for (let index = 0; index <clicknshow.length; index++) {
    const numberinput = clicknshow[index];
    numberinput.addEventListener('click', function () {
       if (clicknshow.classList=="num-btn") {
        let arraycomp=[];
        arraycomp.push(numberinput.textContent);
         let valueno;
        for (let index = 0; index < arraycomp.length; index++) {
            valueno+=arraycomp[index];
            let screenval= document.querySelector('#display');
            screenval.textContent=valueno;
        console.log(arraycomp);    
        }    
    }
    })
}
    




/* responsive navbar

let dropdown=document.querySelector('.togglebar');

dropdown.addEventListener('click', function() {
 let navs=document.querySelector('.navrwd');
 navs.classList.toggle('navactive');            
} )

*/

//responsive sidebar

var slideicon= document.querySelector(".togglebar");
slideicon.addEventListener('click', function () {
    let sidenav= document.getElementById('sidebar');
    sidenav.classList.toggle('activeside');
   
})