// shopping.js
$(function() {

    // 1) cart counter & remove‑button HTML
    let itemCount = 0;
    const delHTML = "<span class='del'>Remove</span>";
  
    // 2) Add to cart handler
    $('.add').on('click', function() {
      // increment counter
      itemCount++;
      // hide empty message once there's at least one
      if (itemCount > 0) {
        $('#empty').hide();
      }
      // grab id + name from the clicked ".add"
      const itemID   = $(this).attr('id');
      const itemName = $(this).attr('name');
  
      // build our new <li>
      const cartLink = 
        "<li class='cartItem' name='" + itemID + "'>" +
          itemName + " " + delHTML +
        "</li>";
  
      // append it into #cart and hide the "Add to Cart" button
      $('#cart').append(cartLink);
      $(this).hide();
    });
  
    // 3) Delegate removal from cart
    $('#cart').on('click', '.del', function() {
      // remove the <li>
      const $li = $(this).parent();
      const removedID = $li.attr('name');
      $li.remove();
  
      // decrement & if zero, show empty message
      itemCount--;
      if (itemCount === 0) {
        $('#empty').show();
      }
  
      // show its original "Add to Cart" again
      $('#' + removedID).show();
    });
  
    // 4) Star‑rating handler
    //    click any <img> inside a .rating span
    $('.rating').on('click', 'img', function() {
      // turn **all** stars off in this rating group
      $(this).siblings('img').addBack().attr('src', 'staroff.gif');
  
      // turn on this star + all previous stars
      $(this)
        .attr('src', 'staron.gif')
        .prevAll('img')
        .attr('src', 'staron.gif');
    });
  
  });