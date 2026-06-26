$(document).ready(function () {

  $(".search-bar input").on("keyup", function () {
    let value = $(this).val().toLowerCase();

    $(".product-card").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });

  });

});