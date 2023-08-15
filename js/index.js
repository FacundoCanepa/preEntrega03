const body = document.querySelector("body");
const header = document.createElement ("header");
const listaMenu = document.createElement ("ul");
const menu = [ "pastas", "recetas", "ubicacion", "carrito"]; 

for (let i = 0 ; i< menu.length; i++ ) {
    const menus = menu[i];
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <a href="./pages/${menus}.html">${menus}</a>
    `
    listItem.style.fontSize = "6rem" ;
    listItem.style.fontWeight = "600"
    listItem.style.fontFamily = "'Island Moments', cursive"
    listItem.style.paddingLeft = "4rem"
    listItem.style.paddingRight = "4rem"
    listaMenu.appendChild(listItem);
}

header.style.backgroundColor = "#FBE6D4"; 
header.style.paddingTop = "2.5rem";
header.style.paddingBottom = "2.5rem";

listaMenu.style.display = "flex" ;
listaMenu.style.justifyContent = "space-around";
listaMenu.style.flexWrap= "wrap";

header.appendChild(listaMenu)


const main = document.createElement ("main");
main.style.backgroundColor = "#FECB89";

const listaProductos = [
    {
        id: 1,
        nombre:"Ravioles de verdura",
        precio: 720,
        img: "./assets/img/ravioles-tiopelotte.jpg" ,
    } ,
    {
        id: 2,
        nombre:"Ravioles de verdura y pollo",
        precio: 750,
        img:  "./assets/img/ravioles-tiopelotte.jpg",
    } ,
    {
        id: 3,
        nombre:"Ravioles de verdura y carne " , 
        precio: 750 , 
        img: "./assets/img/ravioles-tiopelotte.jpg" ,
    },
    {
        id: 4,
        nombre: "Ravioles de verdura y ricota",
        precio: 750,
        img: "./assets/img/ravioles-tiopelotte.jpg"  ,
    },
    {
        id: 4, 
        nombre: "fideos de huevo",
        precio: 1800 ,
        img: "./assets/img/ravioles-tiopelotte.jpg"  ,
    },
];

const listaProducto = document.createElement ("ul");
listaProducto.style.display = "flex" ;
listaProducto.style.justifyContent = "space-around";
listaProducto.style.paddingTop = "2.5rem"; 
listaProducto.style.paddingBottom = "2.5rem" ;
listaProducto.style.flexWrap= "wrap";

const carrito = []
const carritoTotal = []

const carritoImg = document.createElement ("div");
carritoImg.className = "carritoImg";
carritoImg.innerHTML= `
<h2>carrito</h2>
<img src="./assets/img/carrito.png" alt="">
`;
carritoImg.style.display = "flex" ;
carritoImg.style.justifyContent = "center" 
carritoImg.style.paddingBottom = "2rem" ;
carritoImg.style.fontSize = "4rem"
carritoImg.style.fontFamily = "'Quattrocento Sans', sans-serif";

const contenedorCarritos = document.createElement("div")
contenedorCarritos.style.display = "flex"; 
contenedorCarritos.style.justifyContent = "space-around"
contenedorCarritos.style.flexWrap= "wrap";



listaProductos.forEach((i) =>{
    let listItem = document.createElement ("li");
    listItem.innerHTML = `
    <img src="${i.img}" >
    <h1>${i.nombre}</h1>
    <h4>${i.precio}$</H4>
    `;
    const button = document.createElement ("button")
    button.id = "carritoIndex"
    button.innerHTML = `
    <button> añadir carrito </button>
    `
    listItem.style.fontFamily = "'Quattrocento Sans', sans-serif";
    listItem.style.textAlign = "center";
    listItem.style.fontSize = "1.5rem";
    listItem.style.paddingTop = "0.5rem" ;

    listaProducto.append(listItem)
    listItem.append(button)
    
    
    button.addEventListener("click" , () => {
        carrito.push({
            id : i.id,
            nombre : i.nombre,
            precio : i.precio,
            img : i.img ,
        });
        carritoTotal.push({
            id : i.id,
            nombre : i.nombre,
            precio : i.precio,
            img : i.img ,
        });
        carrito.forEach ((i) => {
            let contenidoCarrito = document.createElement ("ul");
            contenidoCarrito.className = "carrito";
            contenidoCarrito.innerHTML = `
            <img src="${i.img}" >
            <li>${i.nombre}</li>
            <li>${i.precio} $</li>
            `
            contenidoCarrito.style.fontFamily = "'Quattrocento Sans', sans-serif";
            contenidoCarrito.style.textAlign = "center";
            contenidoCarrito.style.fontWeight = "600"
            contenidoCarrito.style.fontSize = "2rem";
            contenidoCarrito.style.paddingBottom = "2rem"
            contenidoCarrito.style.width = "35rem";
            contenedorCarritos.append(contenidoCarrito)
        })
        carrito.pop()
    })  
});
const comprarTotal = document.createElement("div")
comprarTotal.style.textAlign = "center" ;
comprarTotal.style.paddingBottom = "10rem"
const comprarTotal2 = document.createElement ("button");
comprarTotal2.innerHTML = `
comprar
`
const precioTotal = document.createElement("div")
precioTotal.style.textAlign ="center";
precioTotal.style.fontSize = "5rem"

comprarTotal2.addEventListener("click" , () => {
    let sumaTotal = 0; 
    for (let i = 0; i < carritoTotal.length; i++) {
        sumaTotal += carritoTotal[i].precio;
    }
    Swal.fire({
        title: 'Quiere confirmar el pedido?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'confirmar'
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire(
            'tu pedido',
            'fue confirmado',
        )
        const precioTotalH4 = document.createElement("h4")
        precioTotalH4.innerText = `
        Total : ${sumaTotal} $
    `
        precioTotal.append(precioTotalH4)
        const carritoTotalJS = JSON.stringify(carritoTotal)
        localStorage.setItem('carrito',carritoTotalJS)
        }
    })
})
const footer = document.createElement("footer")
footer.style.justifyContent = "center"
footer.style.display = "flex"
footer.style.height = "20rem"
footer.style.backgroundColor ="#FFA931"


const footerDiv = document.createElement("div")

footerDiv.style.display = "flex"

footerDiv.style.alignItems = "end"
footer.append(footerDiv)

const copyright = document.createElement("p")
var añoActual = new Date().getFullYear();
copyright.style.fontSize ="2rem" ;
copyright.innerHTML = `
©  2008-${añoActual} Tio Pelotte
`

footerDiv.append(copyright)

comprarTotal.append(comprarTotal2)

main.append(listaProducto)
main.append(carritoImg)
main.append(contenedorCarritos)
main.append(comprarTotal)
main.append(precioTotal)
body.prepend(footer);
body.prepend(main);
body.prepend(header);