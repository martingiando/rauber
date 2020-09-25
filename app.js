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
        <div class="card item">
            <h5 class="card-title text-center item-title">${producto.nombre}</h5>
            <p class="card-text text-center precioCard item-price">$${producto.precio}</p>
            <img src="${producto.imagen}" class="card-img-top item-image" alt="...">
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
         <div class="card item">
             <h5 class="card-title text-center item-title">${producto.nombre}</h5>
             <p class="card-text text-center precioCard item-price">$${producto.precio}</p>
             <img src=${producto.imagen} class="card-img-top item-image" alt="...">
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


let sectorCompraDeProductos = document.querySelector('#compras')

function sectorCompraCervezas(){
    let miNodoCervezas1 = document.createElement('div')
    miNodoCervezas1.classList.add('col-6')
    miNodoCervezas1.innerHTML = `
        <div class='shopping-cart-header'>
            <h5>Producto</h5>
        </div>
    `

    let miNodoCervezas2 = document.createElement('div')
    miNodoCervezas2.classList.add('col-2')
    miNodoCervezas2.innerHTML = `
        <div class='shopping-cart-header'>
            <h5 class='text-truncate'>Precio</h5>
        </div>
    `

    let miNodoCervezas3 = document.createElement('div')
    miNodoCervezas3.classList.add('col-4')
    miNodoCervezas3.innerHTML = `
        <div class='shopping-cart-header'>
            <h5>Cantidad</h5>
        </div>
    `

    let miNodoCervezas4 = document.createElement('div')
    miNodoCervezas4.classList.add('col-md-12')
    miNodoCervezas4.innerHTML = `
        <div class='shopping-cart-total d-flex align-items-center'>
            <p class='mb-0'>Total</p>
            <p class='ml-4 mb-0 shoppingCartTotal'>$0</p>
        
            <button class='ml-auto btn btn-success comprarButton' type='button' data-toggle='modal' data-target='#comprarModal'>Comprar</button>
        </div>
    `

    sectorCompraDeProductos.appendChild(miNodoCervezas1)
    sectorCompraDeProductos.appendChild(miNodoCervezas2)
    sectorCompraDeProductos.appendChild(miNodoCervezas3)
    sectorCompraDeProductos.appendChild(miNodoCervezas4)
}

sectorCompraCervezas()

function sectorModal () {
    let miNodoModal = document.createElement('div')
    miNodoModal.classList.add('row')
    miNodoModal.innerHTML = `
    <div class="modal fade" id="comprarModal" tabindex="-1" aria-labelledby="comprarModalLabel"
          aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="comprarModalLabel">Gracias por su compra</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                  <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Email</label>
                      <input type="email" class="form-control" id="inputEmail4">
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">Nombre y Apellido</label>
                      <input type="text" class="form-control" id="inputPassword4">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                  </div>
                  <div class="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                  </div>
                </form>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-success" data-dismiss="modal">Confirmar Compra</button>
                  </div>
              </div>
          </div>
    </div>
    `
    sectorCompraDeProductos.appendChild(miNodoModal)

}
sectorModal()

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');

addToShoppingCartButtons.forEach(addToCartBurron =>{
    addToCartBurron.addEventListener('click', clickAgregarCerveza);
});

function clickAgregarCerveza(event){
    let button = event.target;
    let item = button.closest('.item');

    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImage = item.querySelector('.item-image').src;

    alert(itemTitle)
    alert(itemPrice)
    alert(itemImage)
}