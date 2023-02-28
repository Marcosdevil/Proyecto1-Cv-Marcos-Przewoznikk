const mostrarTextol = document.querySelector('#imagen-l');
console.log(mostrarTextol);
mostrarTextol.addEventListener('click', function(){
    console.log('clickeado');
    document.getElementById('texto-l').classList.toggle('active');
})

const mostrarTextoe = document.querySelector('#imagen-e');
console.log(mostrarTextoe);
mostrarTextoe.addEventListener('click', function(){
    console.log('clickeado');
    document.getElementById('texto-e').classList.toggle('active');
})