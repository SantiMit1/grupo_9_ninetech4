const checkbox = document.querySelector("#check");
const descuento = document.querySelector("#descuento");


checkbox.addEventListener("click", ()=>{
    if (checkbox.checked == true) {
        descuento.style.display = "block";
    }else {
        descuento.style.display = "none";
    }});





