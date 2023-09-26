if (document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready(){
   var removebtn = document.getElementsByClassName('tab-button-remove')
   for(var i = 0; i < removebtn.length; i++){
    var button = removebtn[i]
    button.addEventListener('click', removeitem)
   }

   var addbtn = document.getElementsByClassName('tab-button-add')
   for (var i = 0; i < addbtn.length; i++){
    var button = addbtn[i]
    button.addEventListener('click', addtocart)
   }
}

function addtocart(event){
    var button = event.target
    var tabitem = button.parentElement.parentElement
    var tabsong = tabitem.getElementsByClassName("songname")[0].innerText
    var tabartist = tabitem.getElementsByClassName('artist')[0].innerText
    var tabtuning = tabitem.getElementsByClassName('tuning')[0].innerText

    insert(tabsong,tabartist,tabtuning)
    ready()
    updatePrice()

}
function insert(tabsong,tabartist,tabtuning){
    var tabshoprow = document.createElement('div')
    tabshoprow.classList.add('tab-shop-row')

    var parent = document.getElementsByClassName('tab-shop-column')[0]

    var cartrowcontents = `
         <div class="tab-title">
            <span> Strangers </span>
            <span> Kenya Grace </span>
        </div>
        <div class="tab-tuning">
            <span> CGCGCE Open-C</span>
        </div>
        <div class="tab-buy">
            <h1 class="tab-price"> $7.99</h1>
            <button class="btn tab-button tab-button-remove" type="button"> Remove</button> 
            <a class="tab-icon-link" href="https://www.youtube.com/watch?v=qLDfxY3aG4c&ab_channel=RunielleRaven" target="_blank"><img class="tab-icon" src="images/youtube.png" width="50px"></a>
        </div>
    `
    tabshoprow.innerHTML = cartrowcontents
    parent.appendChild(tabshoprow)

}

function removeitem(event){
    var button = event.target
    button.parentElement.parentElement.remove()
    updatePrice()
}

function updatePrice(){
    var cart = document.getElementsByClassName('tab-shop-column')[0]
    var cartRows = document.getElementsByClassName('tab-shop-row')
    total = 0 
    for(var i = 0; i < cartRows.length; i++){
        cartrow = cartRows[i]
        var price = document.getElementsByClassName('tab-price')[0]
        price = parseFloat(price.innerText.replace('$', ''))
        console.log(price)
    
        total = total + price
    }
    total = Math.round(total * 100)/ 100
    document.getElementsByClassName('tab-shop-finalprice')[0].innerText = "Total: " + "$" + total
}

