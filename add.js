<script>
let cartBtn = document.querySelector("btn cart-btn")
const form =  document.getElementById("YOUR FORM ID")
form.addEventListener("submit", (e)= {
e.preventDefault()}
function addItem() {
$.ajax({
type: 'POST',
url: '/cart/add.js',
dataType: 'json',
data: $('#'+"YOUR FORM ID").serialize()
})
.then(data => {
cartBtn.textContent = "Remove from cart"
cartBtn.setAttribute("data-variant-id", data.variant_id);
})
      }
</script>

