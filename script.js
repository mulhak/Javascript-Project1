const heading = 'The Team (moves with Javascript)';
let i = 0;

const typing = ()=>{
    if(i < heading.length){
        document.querySelector('.heading').innerHTML += heading.charAt(i);
        i++;
        setTimeout(typing , 150);
    }
 
}
typing();
