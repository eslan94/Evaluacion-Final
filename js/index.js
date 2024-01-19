let containerUno=document.querySelector("#container-uno")
let containerDos=document.querySelector("#container-dos")


const containerColor=(elemento, evento)=>{
    switch(evento){
        case 'mouseover':
            elemento.style.backgroundColor = 'green';
            break;
        case 'mouseout':
            elemento.style.backgroundColor = 'white';
            break;
    }
}

containerUno.addEventListener('mouseover',()=>{
    containerColor(containerDos, 'mouseover');
})

containerUno.addEventListener('mouseout',()=>{
    containerColor(containerDos, 'mouseout');
})