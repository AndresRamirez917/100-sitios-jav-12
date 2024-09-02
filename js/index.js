async function getData() {
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json()
    console.log(products)
    products.forEach(element => {
        if(element.id <= 4){

            const card = document.createRange().createContextualFragment(`
                
                <div class="card">
                    <img src="${element.image}" alt="">
                    <p>${element.description}</p>
                </div>
                
                `)
                const features_card = document.querySelector('.features-card')
                features_card.append(card)
        }if(element.id == 5){

            const container = document.createRange().createContextualFragment(`
                
                <div class="container">
                    <h2>${element.category}</h2>
                   <p>${element.description}</p>
                </div>
                <h3>${element.title}</h3>
                   
                `)

                const features = document.getElementById('client');
                features.append(container)

        }
    });
}

const btn_validar = document.getElementById('btn-validar')
const validar = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const arr = [];
    const messageArr = ["nombre", "email", "mensaje"];
    arr.push(nombre, email, mensaje);
    for(i = 0; i < arr.length; i++){
        for(i = 0; i < messageArr.length; i++){
            if(arr[i].value == ""){
                swal({
                    title: `El campo ${messageArr[i]} no puede estar vacío`,
                    icon: "error",
                 })
                 return false;
            }
        }
        if(!emailvalido(email.value)){
            swal({
                title: `El formato del ${messageArr[1]} no es correcto`,
                icon: "error",
             })
             return false;
        }
    }
    nombre.value = "";
    email.value = "";
    mensaje.value = "";
    return true;

}

const mensaje  = ()=>{
    Swal.fire({
        icon: "info",
        title: "Atención...",
        text: "Será redirigido a Google Maps",
        showConfirmButton: false,
        timer: 3000,
      }); 
      window.location.href = mensaje  
}

const emailvalido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
btn_validar.addEventListener("click", validar)
getData()