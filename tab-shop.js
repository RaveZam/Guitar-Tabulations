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

   document.getElementsByClassName('tab-purchase-btn')[0].addEventListener('click', itempurchase)
}
function itempurchase(){
    var items = document.getElementsByClassName('tab-shop-column')[0]
    var price = document.getElementsByClassName('tab-shop-finalprice')[0]
    items.innerHTML = ""
    price.innerHTML = "Total: $0 "
    alert('Thank you for purchasing!')
}  


function addtocart(event){
    var button = event.target
    var tabitem = button.parentElement.parentElement
    var tabsong = tabitem.getElementsByClassName("songname")[0].innerText
    var tabartist = tabitem.getElementsByClassName('artist')[0].innerText
    var tabtuning = tabitem.getElementsByClassName('tuning')[0].innerText
    var iconlink = tabitem.getElementsByClassName('tab-icon-link')[0]
    insert(tabsong,tabartist,tabtuning,iconlink)
    ready()
    updatePrice()

}
function insert(tabsong,tabartist,tabtuning,iconlink){
    var tabshoprow = document.createElement('div')
    tabshoprow.classList.add('tab-shop-row')
    var parent = document.getElementsByClassName('tab-shop-column')[0]
    var tabsongname = parent.getElementsByClassName('songname')
    for (var i = 0; i < tabsongname.length; i++ ){
        if (tabsongname[i].innerText == tabsong){
            alert("This Item is already in your cart")
            return
        }
    }
    var cartrowcontents = `
         <div class="tab-title">
            <span class = "songname"> ${tabsong} </span>
            <span class = "artist"> ${tabartist} </span>
        </div>
        <div class="tab-tuning">
            <span> ${tabtuning} </span>
        </div>
        <div class="tab-buy">
            <h1 class="tab-price"> $7.99</h1>
            <button class="btn tab-button tab-button-remove" type="button"> Remove</button> 
            <a class="tab-icon-link" href="${iconlink.href}" target="_blank"><img class="tab-icon" src="images/youtube.png" width="50px"></a>
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
        total = total + price
    }
    total = Math.round(total * 100)/ 100
    document.getElementsByClassName('tab-shop-finalprice')[0].innerText = "Total: " + "$" + total
}


const header = document.getElementsByClassName('main-header')[0]

function handleScroll(){
    const scrollY = window.scrollY;

    // Add a class to the header when scrolling down
    if (scrollY > 30) { // Adjust the threshold as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);
