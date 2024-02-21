const link = "https://fakestoreapi.com/products?limit=5";

let puma = document.getElementById("puma");
let jpeg = document.getElementById("jpeg1");
let price = document.getElementById("price");

 let puma1 = document.getElementById("puma1");
 let jpeg1 = document.getElementById("jpeg2");
 let price1 = document.getElementById("price1");

 let puma2 = document.getElementById("puma2");
 let jpeg2 = document.getElementById("jpeg3");
 let price2 = document.getElementById("price2");

 let puma3 = document.getElementById("puma3");
 let jpeg3 = document.getElementById("jpeg4");
 let price3 = document.getElementById("price3");

 let puma4 = document.getElementById("puma4");
 let jpeg4 = document.getElementById("jpeg5");
 let price4 = document.getElementById("price4");




            fetch(link).then((response) =>{
                response.json().then((data) =>{
                    display(data);
                }
                );
            })

        
            function display(data){
                console.log(data);
                const output = document.getElementById("root");
                output.innerHTML = JSON.stringify(data[0].description);
                puma.innerHTML = `${data[0]?.title}`;
                jpeg.innerHTML = `<img src ="${data[0].image}">`;
                price.innerHTML = `<h3>Price:$ ${data[0]?.price}</h3>`;

                const output1 = document.getElementById("root1");
                output1.innerHTML = JSON.stringify(data[1].description);
                puma1.innerHTML = `${data[1]?.title}`;
                jpeg1.innerHTML = `<img src ="${data[1].Image}">`;
                price1.innerHTML = `<h3>Price:$ ${data[1]?.price}</h3>`;

                const output2 = document.getElementById("root2");
                output2.innerHTML = JSON.stringify(data[2].description);
                puma2.innerHTML = `${data[2]?.title}`;
                jpeg2.innerHTML = `<img src ="${data[2].image}">`;
                price2.innerHTML = `<h3>Price:$ ${data[2]?.price}</h3>`;

                const output3 = document.getElementById("root3");
                output3.innerHTML = JSON.stringify(data[3].description);
                puma3.innerHTML = `${data[3]?.title}`;
                jpeg3.innerHTML = `<img src ="${data[3].image}">`;
                price3.innerHTML = `<h3>Price:$ ${data[3]?.price}</h3>`;

                const output4 = document.getElementById("root4");
                output4.innerHTML = JSON.stringify(data[4].description);
                puma4.innerHTML = `${data[4]?.title}`;
                jpeg4.innerHTML = `<img src ="${data[4].image}">`;
                price4.innerHTML = `<h3>Price:$ ${data[4]?.price}</h3>`;



                
                

            }