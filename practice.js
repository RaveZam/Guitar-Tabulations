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
    var priceElement = shopItem.getElementsByClassName("cart-price")[0]
    var img = shopItem.getElementsByClassName("gear-image")[0].src
    var price = parseFloat(priceElement.innerText.replace("$", ""))
    addItemToCart(title,price,img)
}

    function addItemToCart(title,price,img){

      
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
 document.getElementsByClassName("total-price")[0].innerText = "$" + total 
}




