function removeItem() {
    let variantId = cartBtn.getAttribute("data-variant-id");
    $.ajax({
      type: "POST",
      url: "details.html",
      dataType: "html",
      data: {
        id: parseFloat(variantId),
        quantity: 0,
      },
    }).then((data) => {
      cartBtn.textContent = "Add to cart";
      cartBtn.removeAttribute("data-variant-id");
    });
  }
  