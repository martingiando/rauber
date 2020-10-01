let baseDeDatos = [
    {
        nombre: 'Simcoe Pal Peso Lata',
        precio: 150,
        imagen: 'img/simcoePalPesoMain.jpg',
        codigo: 1.1,
    },
    {
        nombre: 'Resistencia Red Ale Lata',
        precio: 130,
        imagen: 'img/resistenciaMain.jpg',
        codigo: 1.2,
    },
    {
        nombre: 'American Ipa Bandida Lata',
        precio: 125,
        imagen: 'img/IpaBandidamain.jpg',
        codigo: 1.3,
    },
    {
        nombre: 'Golden Ale Lata',
        precio: 120,
        imagen: 'img/IpaBandidamain.jpg',
        codigo: 1.4,
    },
    {
        nombre: 'Angry Honey Rubia Ale Lata',
        precio: 125,
        imagen: 'img/IpaBandidamain.jpg',
        codigo: 1.5,
    },
    {
        nombre: 'Fra-Ñeri Imperial Stout Lata',
        precio: 200,
        imagen: 'img/IpaBandidamain.jpg',
        codigo: 1.6,
    },
    {
        nombre: 'Simcoe Pal Peso Pet',
        precio: 170,
        imagen: 'img/simcoePalPesoMain.jpg',
        codigo: 2.1,
    },
    {
        nombre: 'Resistencia Red Ale Pet',
        precio: 160,
        imagen: 'img/resistenciaMain.jpg',
        codigo: 2.2,
    },
    {
        nombre: 'American Ipa Bandida Pet',
        precio: 180,
        imagen: 'img/IpaBandidamain.jpg',
        codigo: 2.3,
    },
    {
        nombre: 'Golden Ale Pet',
        precio: 150,
        imagen: 'img/IpaBandidamain.jpg',
        codigo: 2.4,
    },
    {
        nombre: 'Angry Honey Rubia Ale Pet',
        precio: 160,
        imagen: 'img/IpaBandidamain.jpg',
        codigo: 2.5,
    },
    {
        nombre: 'Fenix Hop Pet',
        precio: 160,
        imagen: 'img/IpaBandidamain.jpg',
        codigo: 2.6,
    }
]

let $productContainerLatas = document.querySelector('#productContainerLatas')
let $produtsContainerPet = document.querySelector('#productContainerPet')
let carrito = localStorage.carrito ? JSON.parse(localStorage.carrito) : [];
let total = 0

function renderbaseDeDatos() {
    baseDeDatos.forEach(function (producto) {
        var miNodo = document.createElement('div')
        miNodo.classList.add('col', 'mb-4')
        miNodo.innerHTML = `
        <div class="card item">
            <h5 class="card-title text-center item-title">${producto.nombre}</h5>
            <p class="card-t1ext text-center precioCard item-price">$${producto.precio}</p>
            <img src="${producto.imagen}" class="card-img-top item-image" alt="...">
            <div class="card-body">
                <div class="d-flex justify-content-center">
                    <button type="button" class="addToCart item-button" onclick="agregarAlCarritoLatas(${baseDeDatos.indexOf(producto)})"><b>Agregar al Carrito</b></button>
                </div>
            </div>
        </div>
        `
        if ((producto.codigo) < 2){
            $productContainerLatas.appendChild(miNodo)
        }
        else if ((producto.codigo < 3) && (producto.codigo >= 2)){
            $produtsContainerPet.appendChild(miNodo)
        }
    })

}
renderbaseDeDatos();


let sectorCompraDeProductos = document.querySelector('#compras')

function sectorCompraCervezas() {
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

    sectorCompraDeProductos.appendChild(miNodoCervezas1)
    sectorCompraDeProductos.appendChild(miNodoCervezas2)
    sectorCompraDeProductos.appendChild(miNodoCervezas3)
}

sectorCompraCervezas()

const comprarButton = document.querySelector('.comprarButton')

comprarButton.addEventListener('click', comprarButtonClicked);

function comprarButtonClicked(){
    compraBirras.innerHTML = '';
    updateShoppingCartTotal();
}

function sectorModal() {
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

function agregarAlCarritoLatas(index) {
    
    var producto = baseDeDatos[index];
    if (carrito.length > 0) {
        var noExiste = true;
        for (var i = 0; i < carrito.length; i++) {
            if (producto.nombre === carrito[i].nombre) {
            carrito[i].cantidad++;
            noExiste = false;
            }
        }
        if (noExiste) {
            producto.cantidad = 1;
            carrito.push(producto);
        }
    } 
    else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
    
    localStorage.carrito = JSON.stringify(carrito);
}

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');

addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', clickAgregarCerveza);
});

function clickAgregarCerveza(event) {
    let button = event.target;
    let item = button.closest('.item');

    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImage = item.querySelector('.item-image').src;

    addBirras(itemTitle, itemPrice, itemImage)
}

const compraBirras = document.querySelector('.shoppingCartBirraContainer');

function addBirras(itemTitle, itemPrice, itemImage) {

    const elementsTitle = compraBirras.getElementsByClassName('shoppingCartItemTitle');
    for (let i = 0; i < elementsTitle.length; i++) {
        if (elementsTitle[i].innerText === itemTitle) {
            let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
            elementQuantity.value++;
            updateShoppingCartTotal();
            return;
        };
    }

    const filaCarrito = document.createElement('div')
    filaCarrito.innerHTML = `
    
    <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>

    `

    compraBirras.appendChild(filaCarrito);

    filaCarrito.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);

    filaCarrito.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged)

    updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

    shoppingCartItems.forEach(shoppingCartItem => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', ''));
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);

        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    shoppingCartTotal.innerHTML = `$${total.toFixed(0)}`
}

function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
}

function quantityChanged(event) {
    const input = event.target
    if (input.value <= 0) {
        input.value = 1
    }
    updateShoppingCartTotal();
}