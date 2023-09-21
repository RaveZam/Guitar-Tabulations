if (document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}
function ready(){
    var removeBtn = document.getElementsByClassName('cart-btn')
        for(var i = 0; i < removeBtn.length; i++){
            var button = removeBtn[i]
            button.addEventListener('click', removeItem)  
        }
    var qtyinput = document.getElementsByClassName('cart-input')
        for(var i = 0; i < qtyinput.length; i++){
            var qty = qtyinput[i]
            qty.addEventListener('change', quantityChanged)
        }
    var addToCart = document.getElementsByClassName("add-to-cart")

    for(var i = 0; i < addToCart.length; i++){
        var addToCartBtn = addToCart[i]
        addToCartBtn.addEventListener('click', addingToCart)
    }    
}
function quantityChanged(event){
    var qtychange = event.target
    if (isNaN(qtychange.value) || qtychange.value <= 0 ){
        qtychange.value = 1
    }   
    updatePrice()
}

function removeItem(event){
    var buttonClicked = event.target 
    buttonClicked.parentElement.parentElement.remove()
    updatePrice()
}

function addingToCart(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName("gear-title")[0].innerText
    var price = shopItem.getElementsByClassName("cart-price")[0].innerText
    var img = shopItem.getElementsByClassName("gear-image")[0].src
    addItemToCart(title,price,img)
    updatePrice()
    ready()
}

    function addItemToCart(title,price,img){
        var cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
        var cartItems = document.getElementsByClassName('cart-parent')[0]
        var cartItemNames = cartItems.getElementsByClassName('gear-title')

        for (var i = 0; i < cartItemNames.length; i++){
            if(cartItemNames[i].innerText == title){
                alert("This item is in your cart")
                return
            }
        }
        var cartRowContents = `
           <div class="cart-item cart-column">
                <img class="cart-image" src="${img}" height="100">
                <span class = "gear-title">${title}</span>
            </div>
            <div class="cart-cost cart-column">
                <span class="cart-price cart-price-incart">${price}</span>
            </div>
            <div class="cart-quantity cart-column">
                <input class="cart-input "type="number" value="1" name="cart-qty">
                <button class="btn cart-btn">Remove</button>
            </div>`
        cartRow.innerHTML = cartRowContents
        cartItems.appendChild(cartRow)  
        purchase(cartRow)
      
    }



function updatePrice(){
    var cart = document.getElementsByClassName("cart-parent")[0]
    var cartRows = cart.getElementsByClassName("cart-row")
    total = 0 

    for(var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName("cart-price-incart")[0]
        var quantityElement = cartRow.getElementsByClassName("cart-input")[0]

        var price = parseFloat(priceElement.innerText.replace("$",""))
        var qty = quantityElement.value 

        total= total + (price *qty)
    
 }
 total = Math.round(total *100) / 100
 document.getElementsByClassName("total-price")[0].innerText = "Total: " + "$" + total 
}

document.getElementsByClassName("total-btn")[0].addEventListener('click', purchase)

function purchase(cartRow){
    console.log("clic")
}




