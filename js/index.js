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

getData()