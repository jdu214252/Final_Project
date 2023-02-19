import products from "./index.json" assert{type: "json"};


// for(let i = 0; i < products.length; i++){
//     let user = `<div class = ramka>${products[i].name} </div>`;
// }


// var addAudit = function() {
// 	var elemKod = document.querySelector('.ramka').innerHTML;
// 	var elemOutKod = document.querySelector('.out__kod');

// 	elemOutKod.innerHTML += '<div>' + elemKod + '</div>';
// };

// function out() {
// 	var elem = window.event.EventTarget;
// 	if (elem.className === "btn") {
// 		addAudit();
// 	}
// };

let content = document.querySelector(".shop-content")

for(let i = 0; i < products.length; i++){
    let user = ` 
    <div class = "ramka">
    <div class="imeg1">
        <img src="./images/${products[i].image}" alt="">
    </div>
    <div class="product-title">
        ${products[i].name}
    </div>
    <div class="price">
        ${products[i].price + "$"}
    </div> 
    <button class="btn add-cart" data-id="${products[i].id}">Buy</button>
    </div>`
    
    content.innerHTML += user;

}



// let bar= document.querySelector(".out__cod");
// for(let i = 0; i < products.length; i++){
//     let user = ` 
//     <div class="ramkaAll">
//     <div class = "ramka1">
//     <div class="im"></div>
//     <div class="imeg2">
//         <img src="./images/${products[i].image}" alt="">
//     </div>
//     </div>
//     <div class = "abouts">
//     <div class="title">
//         ${products[i].name}
//     </div>
//     <div class="price">
//         ${products[i].price +"$"}
//         <button class="buton">xxx</button>
//     </div> 
    
//     </div>
//     </div>`
    
    

//     bar.innerHTML += user;
// } 

// ////////////////////////DELETE ADD /////////////////////////////////////////////////////////////////


document.querySelectorAll(".btn").forEach(button=>{
    button.addEventListener('click', function(e){
        addToCart(this.dataset.id)
        showPrice();
    })
})

function addToCart(id){
    let elem;
    for (let i = 0,len = products.length; i < len; i++) {
        if(products[i].id == id) {
            elem=  products[i];
            break;  
        }   
    }

    document.querySelector(".cart-box").innerHTML += `      
    <div class="small-cart">
        <img class="jpeg" src="./images/${elem.image}">
        <div class="cart-content">
            ${elem.name}
            <span class="cost">
            ${elem.price}
            </span>
            
        </div>

        <div class="button"> 
        
            <button class = "delete"  data-id="${elem.id}">Delete</button>
        </div>
    </div>
    `

    document.querySelectorAll(".delete").forEach(btn => {
        btn.addEventListener('click', function(e){
            this.parentNode.parentNode.remove();
            showPrice();
        })
    })
}

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');


cartIcon.onclick = () => {
    cart.classList.add("active");
};

closeCart.onclick = () => {
    cart.classList.remove("active");
}


// if(document.readyState == 'loading'){
//     document.addEventListener('DOMContentLoaded', ready)
// }else{
//     ready();
// }

function showPrice() {
    let onlytotal = document.querySelector(".total-price");
    let cost = document.querySelectorAll(".cost");
    let totalPrice = 0;
    for (let i = 0, len = cost.length; i < len; i++) {
        totalPrice += parseFloat(cost[i].innerText);
    }
    console.log(onlytotal);
    onlytotal.innerHTML = "Total: $" + totalPrice;
}

showPrice();
