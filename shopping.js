$(function() {
  let itemCount = 0;
  const delHTML = "<span class='del'>Remove</span>";

  // 1) Add to Cart
  $('.add').on('click', function() {
    itemCount++;
    if (itemCount > 0) {
      $('#empty').hide();
    }

    const itemID   = $(this).attr('id');
    const itemName = $(this).attr('name');

    const cartLink =
      "<li class='cartItem' name='" + itemID + "'>" +
        itemName + " " + delHTML +
      "</li>";

    $('#cart').append(cartLink);
    $(this).hide();
  });

  // 2) Remove from Cart (delegated)
  $('#cart').on('click', '.del', function() {
    const $li = $(this).closest('li');
    const removedID = $li.attr('name');
    $li.remove();

    itemCount--;
    if (itemCount === 0) {
      $('#empty').show();
    }

    $('#' + removedID).show();
  });

  // 3) Star Rating
  $('.rating').on('click', 'img', function() {
    // turn all stars off
    $(this).siblings('img').addBack().attr('src', 'staroff.gif');

    // turn this + previous stars on
    $(this)
      .attr('src', 'staron.gif')
      .prevAll('img').attr('src', 'staron.gif');
  });
});