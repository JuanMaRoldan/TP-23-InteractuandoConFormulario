const $ = (element) => document.getElementById('element')
window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
let form = document.querySelector('form');
let errores = document.querySelector('errores')

let inputTitle = document.getElementById('title');
let inputAwards = document.getElementById('awards');
let inputRating = document.getElementById('rating');
let inputReleaseDate = document.getElementById('release_date');
let inputLength = document.getElementById('length');
let inputGenre = document.getElementById('genre_id');


inputTitle.focus();

let erroresArray = []



/* validacion en tiempo real */
inputTitle.addEventListener('blur',function(){
    if(!this.value){
      $('errorTitle').innerHTML='el campo no puede estar vacio';
      this.classList.add('is-invalid')
    }
});
inputRating.addEventListener('blur',function(){
    switch (true) {
        case !this.value:
            $('errorLength').innerHTML='el campo no puede estar vacio';
            this.classList.add('is-invalid')
            break;
        case this.value < 0 || this.value > 10:
        $('errorLength').innerHTML='el rating debe ser entre 0 y 10';
        this.classList.add('is-invalid')
        break;
        default:
            $('errorLength').innerHTML = null;
            this.classList.remove('is-invalid')
            break;
    }
});
inputAwards.addEventListener('blur',function(){
    switch (true) {
        case !this.value:
            $('errorLength').innerHTML='el campo no puede estar vacio';
            this.classList.add('is-invalid')
            break;
        case this.value < 0 || this.value > 10:
        $('errorLength').innerHTML='los premios deben ser entre 0 y 10';
        this.classList.add('is-invalid')
        break;
        default:
            $('errorLength').innerHTML = null;
            this.classList.remove('is-invalid')
            break;
    }
});
inputReleaseDate.addEventListener('blur',function(){
    if(!this.value){
      $('errorReleaseDate').innerHTML='el campo no puede estar vacio';
      this.classList.add('is-invalid')
    }
    
});
inputLength.addEventListener('blur',function(){
    switch (true) {
        case !this.value:
            $('errorLength').innerHTML='el campo no puede estar vacio';
            this.classList.add('is-invalid')
            break;
        case this.value < 60 || this.value > 360:
        $('errorLength').innerHTML='la duración debe ser entre 60 y 360';
        this.classList.add('is-invalid')
        break;
        default:
            $('errorLength').innerHTML = null;
            this.classList.remove('is-invalid')
            break;
    }
   
});
inputGenre.addEventListener('blur',function(){
    if(!this.value){
      $('errorGenre').innerHTML='el campo no puede estar vacio';
      this.classList.add('is-invalid')
    }else{
        $('errorGenre').innerHTML = null/* elimina mensaje de error */ 
        this.classList.remove('is-invalid')
    }
});



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let elements = form.elements;
    let error = false;
    for (let i = 0; i < elements.length; i++) {
       if(elements[i].classList.contains('is-invalid')){
        error = true;
        elements[i].classList.add('is-invalid')
       }
        
    }
       if(!error){/* si no hay errores, si error es false */
       e.target.submit(); /* target hace referencia a donde se genera el evento,
       en este caso la form */
       alert('La película se guardó satisfactoriamente')
       }else{
        errores.innerHTML += `<li>Errores pendientes</li>`;
        errores.classList.add('alert-warning')
       }
})

}