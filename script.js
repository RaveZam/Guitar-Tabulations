if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready(){
    let removeItemButton = document.getElementsByClassName('cart-btn')

    for(var i = 0; i < removeItemButton.length; i++){
        var button = removeItemButton[i]
        button.addEventListener('click', removeCartItem)

    }

    var quantityInputs = document.getElementsByClassName('cart-input')
    for(var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)

}
}

function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1 
    }
    updatePrice()
}


function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updatePrice()
}


function updatePrice() {
       var cartItemContainer = document.getElementsByClassName('cart-parent')[0]
       var cartRows = cartItemContainer.getElementsByClassName('cart-row')
       var total = 0
        for(var i = 0; i < cartRows.length; i++){
            var cartRow = cartRows[i]
            var priceElement = cartRow.getElementsByClassName('cart-price-incart')[0]
            var quantityElement = cartRow.getElementsByClassName('cart-input')[0]

            var price = parseFloat(priceElement.innerText.replace('$', ''))
            var qty = quantityElement.value 
            total = total + (price * qty)   
}
total = Math.round(total * 100) / 100
document.getElementsByClassName("total-price")[0].innerText = "$" + total 
}


