let baseDeDatosLatas = [
    {
        nombre: 'Simcoe Pal Peso Lata',
        precio: 150,
        imagen: 'img/simcoePalPesoMain.jpg'
    },
    {
        nombre: 'Resistencia Red Ale Lata',
        precio: 130,
        imagen: 'img/resistenciaMain.jpg'
    },
    {
        nombre: 'American Ipa Bandida Lata',
        precio: 125,
        imagen: 'img/IpaBandidamain.jpg'
    },
    {
        nombre: 'Golden Ale Lata',
        precio: 120,
        imagen: 'img/IpaBandidamain.jpg'
    },
    {
        nombre: 'Angry Honey Rubia Ale Lata',
        precio: 125,
        imagen: 'img/IpaBandidamain.jpg'
    },
    {
        nombre: 'Fra-Ñeri Imperial Stout Lata',
        precio: 200,
        imagen: 'img/IpaBandidamain.jpg'
    }
]

let baseDeDatosPet = [
    {
        nombre: 'Simcoe Pal Peso Pet',
        precio: 170,
        imagen: 'img/simcoePalPesoMain.jpg'
    },
    {
        nombre: 'Resistencia Red Ale Pet',
        precio: 160,
        imagen: 'img/resistenciaMain.jpg'
    },
    {
        nombre: 'American Ipa Bandida Pet',
        precio: 180,
        imagen: 'img/IpaBandidamain.jpg'
    },
    {
        nombre: 'Golden Ale Pet',
        precio: 150,
        imagen: 'img/IpaBandidamain.jpg'
    },
    {
        nombre: 'Angry Honey Rubia Ale Pet',
        precio: 160,
        imagen: 'img/IpaBandidamain.jpg'
    },
    {
        nombre: 'Fenix Hop Pet',
        precio: 160,
        imagen: 'img/IpaBandidamain.jpg'
    }
]

let $productContainerLatas = document.querySelector('#productContainerLatas')
let $produtsContainerPet = document.querySelector('#productContainerPet')
let carrito = []
let total = 0

function renderbaseDeDatosLatas() {
    baseDeDatosLatas.forEach(function (producto) {
        var miNodo = document.createElement('div')
        miNodo.classList.add('col', 'mb-4')
        miNodo.innerHTML = `
        <div class="card">
            <h5 class="card-title text-center">${producto.nombre}</h5>
            <p class="card-text text-center precioCard">$${producto.precio}</p>
            <img src="${producto.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="d-flex justify-content-center">
                    <button type="button" class="addToCart item-button"><b>Agregar al Carrito</b></button>
                </div>
            </div>
        </div>
        `
        $productContainerLatas.appendChild(miNodo)
    })

}
renderbaseDeDatosLatas();


 function renderbaseDeDatosPet() {
     baseDeDatosPet.forEach(function (producto) {
         var miNodo = document.createElement('div')
         miNodo.classList.add('col', 'mb-4')
         miNodo.innerHTML = `
         <div class="card">
             <h5 class="card-title text-center">${producto.nombre}</h5>
             <p class="card-text text-center precioCard">$${producto.precio}</p>
             <img src=${producto.imagen} class="card-img-top" alt="...">
             <div class="card-body">
                 <div class="d-flex justify-content-center">
                     <button type="button" class="addToCart item-button"><b>Agregar al Carrito</b></button>
                 </div>
             </div>
         </div>
         `
         $produtsContainerPet.appendChild(miNodo)
     })
}
renderbaseDeDatosPet();