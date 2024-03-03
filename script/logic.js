// Función para mostrar los campos de tarjeta de crédito o débito según la selección del usuario
document.addEventListener("DOMContentLoaded", function() {
    var creditCardInfo = document.getElementById("creditCardInfo");
    var debitCardInfo = document.getElementById("debitCardInfo");
    var creditCardRadio = document.getElementById("creditCard");
    var debitCardRadio = document.getElementById("debitCard");

    creditCardRadio.addEventListener("change", function() {
        if (creditCardRadio.checked) {
            creditCardInfo.style.display = "block";
            debitCardInfo.style.display = "none";
        }
    });

    debitCardRadio.addEventListener("change", function() {
        if (debitCardRadio.checked) {
            creditCardInfo.style.display = "none";
            debitCardInfo.style.display = "block";
        }
    });

    document.getElementById("checkoutForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Previene el envío del formulario por defecto

        // Simula una compra exitosa
        alert("¡Compra exitosa! Gracias por su compra.");
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Mostrar contenedor de inicio de sesión al hacer clic en "Sesión"
    document.getElementById("loginBtn").addEventListener("click", function () {
        document.getElementById("loginContainer").style.display = "block";
    });

    // Cerrar contenedor de inicio de sesión al hacer clic en la "x"
    document.getElementById("closeLogin").addEventListener("click", function () {
        document.getElementById("loginContainer").style.display = "none";
    });

    // Mostrar contenedor de opciones al hacer clic en "Todo"
    document.getElementById("showOptions").addEventListener("click", function () {
        document.getElementById("optionsContainer").style.display = "block";
    });

    // Cerrar contenedor de opciones al hacer clic en la "x"
    document.getElementById("closeOptions").addEventListener("click", function () {
        document.getElementById("optionsContainer").style.display = "none";
    });

    // Evento para el envío del formulario de inicio de sesión
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        // Obtener el valor del campo de nombre de usuario
        var usernameInput = document.getElementById("username");
        var username = usernameInput ? usernameInput.value : ""; // Verificar si el campo existe antes de acceder a su valor

        // Mostrar el mensaje de sesión iniciada
        alert("¡Sesión iniciada para el usuario: " + username);

        // Resto de las acciones después de iniciar sesión
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var cartItemCount = 0; // Variable para contar los elementos en el carrito

    // Función para agregar un producto al carrito
    function addToCart(productName, price) {
        cartItemCount++; // Incrementa el contador de elementos en el carrito
        document.getElementById("cartItemCount").textContent = cartItemCount; // Actualiza el contador en el ícono del carrito

        // Guardar el producto en el almacenamiento local
        var cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
        cartProducts.push({ productName: productName, price: price });
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }

    // Agrega un evento click a todos los botones "Agregar al carrito"
    var addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function() {
            var productName = this.getAttribute("data-product");
            var price = parseInt(this.getAttribute("data-price"));
            addToCart(productName, price);
            
            // Mostrar el producto agregado al carrito en formato JSON
            var productInfo = { productName: productName, price: price };
            
        });
    });

});

document.addEventListener("DOMContentLoaded", function () {
    // Función para mostrar los productos en el carrito
    function displayCartItems() {
        var cartItemsContainer = document.getElementById("cartItems");
        var subtotal = 0; // Variable para calcular el subtotal
        var total = 0; // Variable para calcular el total

        cartItemsContainer.innerHTML = ""; // Limpiar el cuerpo de la tabla antes de agregar los nuevos elementos

        // Obtener los productos del almacenamiento local
        var cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

        // Iterar sobre cada producto en el carrito y agregarlo como una fila en la tabla
        cartProducts.forEach(function(product) {
            var row = document.createElement("tr");
            row.innerHTML = "<td>" + product.productName + "</td><td>" + product.price + "</td>";
            cartItemsContainer.appendChild(row);
            subtotal += product.price; // Sumar el precio del producto al subtotal
        });

        // Calcular la comisión (5% del subtotal) y agregarla al total
        var comision = subtotal * 0.05;
        total = subtotal + comision;

        // Agregar una fila para mostrar el subtotal
        var subtotalRow = document.createElement("tr");
        subtotalRow.innerHTML = "<td><strong>Subtotal</strong></td><td><strong>" + subtotal + "</strong></td>";
        cartItemsContainer.appendChild(subtotalRow);

        // Agregar una fila para mostrar la comisión
        var comisionRow = document.createElement("tr");
        comisionRow.innerHTML = "<td><strong>Comisión (5%)</strong></td><td><strong>" + comision + "</strong></td>";
        cartItemsContainer.appendChild(comisionRow);

        // Agregar una fila para mostrar el total
        var totalRow = document.createElement("tr");
        totalRow.innerHTML = "<td><strong>Total</strong></td><td><strong>" + total + "</strong></td>";
        cartItemsContainer.appendChild(totalRow);
    }

    // Mostrar los productos del carrito al cargar la página
    displayCartItems();

    window.addEventListener("beforeunload", function() {
        // Borrar los productos almacenados al actualizar la página
        localStorage.removeItem('cartProducts');
    });
    
});









