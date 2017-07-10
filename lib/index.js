$(function() {
    listListener()
    addToCart()
});

// jQuery equivalent for original event handler; this code was given with initial github repo
//
function listListener(){
  $('button').on("click", function(event){
    event.preventDefault()
    let name = $('#name').val()
    let price = $('#price').val()
    $('.list').append(`<li class="item">${name} - ${price}  <a href="#" class="add-cart">Add to cart</a></li>`)
    $('#name').val('')
    $('#price').val('')
  })
}

// Vanilla JS equivalent for original event handler; this code was NOT given with initial github repo
//
// function listListener(){
//   document.querySelector("button").addEventListener("click", function(event){
//     event.preventDefault()
//     const name = document.getElementById('name').value
//     const price = document.getElementById('price').value
//     document.querySelector('.list').innerHTML += (`<li>${name} - ${price}  <a class='add-cart' href='#'>Add to Cart</a></li>`)
//     document.getElementById('name').value = ''
//     document.getElementById('price').value = ''
//   })
// }


// jQuery equivalent for event delegation, without OO JS refactor
//
function addToCart(){
  $('.list').on('click', '.add-cart', function(event) {
    event.preventDefault()
    const itemNode = event.target.parentNode
    const readyForCart = itemNode.innerText.split(' ').slice(0, -3).join(' ')
    itemNode.remove()
    $('.cart').append(`<li>${readyForCart}</li>`)
  })
}

// Vanilla JS equivalent for event delegation with "if" conditional for class name, without OO JS refactor
//
// function addToCart(){
//   document.querySelector('.list').addEventListener("click", function(event){
//     event.preventDefault()
//     if (event.target.className === "add-cart"){
//       const itemNode = event.target.parentNode
//       const readyForCart = itemNode.innerText.split(' ').slice(0, -3).join(' ')
//       itemNode.remove()
//       document.querySelector('.cart').innerHTML += (`<li>${readyForCart}</li>`)
//     }
//   })
// }
