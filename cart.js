$( document ).ready(function() {
    
cargarcarrito();
});


function agregarcarrito(id){
    let products = JSON.parse(localStorage.getItem("product"));
    products.push(id);
    console.log(products);
    localStorage.setItem("product", JSON.stringify(products));
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'A product has been added to the cart.',
        showConfirmButton: false,
        timer: 1500
      })

}

function cargarcarrito(){
    var contador=0;
    var t;
    var p;
    var i;
    var total;
    var repetidasp=0;
    var products = JSON.parse(localStorage.getItem("product"));
    //busco las id repetidas, un mismo producto comprado dos veces
    const resultado = {}
    products.forEach(el => (resultado[el] = resultado[el] + 1 || 1))
    $('#cant').html(products.length+' items');

    //saco los repetidos de products
    let result = products.filter((item,index)=>{
        return products.indexOf(item) === index;
      })
      products=result;

    for (let index = 0; index < products.length; index++) {
        const product = products[index];

            url="https://fakestoreapi.com/products/"+product
            fetch(url).then(function(response) {
                return response.json();
            }).then(function(data) {
                data = JSON.stringify(data);
                var array= new Array(JSON.parse(data));

                //extraigo los datos del producto y calculo el total
                    contador++;
                     t=array[0].title;
                     p=array[0].price;
                     i=array[0].image;
                    if(contador!=1){
                        
                        if(resultado[product]>1){
                            total=total+(p*resultado[product]);
                        }else{
                            total=total+p;
                        }
                        
                    }else{
                        if(resultado[product]>1){
                            total=(p*resultado[product]);
                        }else{
                            total=p;
                        }
                        
                        
                    }   
                    total = Number(total.toFixed(2));            
                    $('#tp').html('&dollar;'+total);
                    
                    //los repetidos
                    if(resultado[product]>1){
                        //cambio la cant y el precio
                        //guardo esta id para no volver a cargarla

                        var pp=p*resultado[product];
                        //total=total+pp;
                        var x='<div class="row2 main align-items-center"><div class="col-2"><img class="img-fluid" id="image_cart" src="'+i+'"></div><div class="col"><div class="row2 text-muted" id="title_cart">'+t+'</div></div><div class="col"><a href="#" onclick="quitarcarrito('+product+');location.reload()">-</a><a href="#" class="border">'+resultado[product]+'</a><a href="#" onclick="agregarcarrito('+product+');location.reload()">+</a></div><div id="price_cart" class="col">&dollar; '+Number(pp.toFixed(2))+' <span class="close" onclick="eliminarproducto('+product+');location.reload()">&#10005;</span></div></div>';
                        

                    }else{
                        var x='<div class="row2 main align-items-center"><div class="col-2"><img class="img-fluid" id="image_cart" src="'+i+'"></div><div class="col"><div class="row2 text-muted" id="title_cart">'+t+'</div></div><div class="col"><a href="#" onclick="quitarcarrito('+product+');location.reload()">-</a><a href="#" class="border">1</a><a href="#" onclick="agregarcarrito('+product+');location.reload()">+</a></div><div id="price_cart" class="col">&dollar; '+p+' <span class="close" onclick="eliminarproducto('+product+');location.reload()">&#10005;</span></div></div>';
                         
                    }
                    
                   var z= $('#products_cart').html();
                   $('#products_cart').html(x+z);
                   
                
                }).catch(function(err) {
                    console.log('Fetch Error :-S', err);
                });
        
    }
    
}

function quitarcarrito(id){
    var products = JSON.parse(localStorage.getItem("product"));
    for (let index = 0; index < products.length; index++) {
        if(products[index]==id){
            products.splice(index, 1);
            localStorage.setItem("product", JSON.stringify(products));
            break;
        }
        
    }
    
    
    
}

function eliminarproducto(id){
    var products = JSON.parse(localStorage.getItem("product"));
   var contador=0;
    do{
        if(products.indexOf(id)===-1){
            localStorage.setItem("product", JSON.stringify(products));
            break;
        }else{
            products.splice(products.indexOf(id), 1); 
        }
    }while(products.indexOf(id)!=-1);
    localStorage.setItem("product", JSON.stringify(products));
   /* var products = JSON.parse(localStorage.getItem("product"));
    for (let index = 0; index < products.length; index++) {
        if(products[index]==id){
            products.splice(index, 1);
            
            if(products.indexOf(id)===-1){
                localStorage.setItem("product", JSON.stringify(products));
                break;
            }else{
                products.splice(products.indexOf(id), 1); 
            }
            
        }
        
    }
    localStorage.setItem("product", JSON.stringify(products));
    */
   
}

function cartanadirbtn(){
    var btn=document.getElementById('cartbtn');
   var id= btn.getAttribute('data-id' , id); 
   id=Number(id);
   console.log(id);
   agregarcarrito(id);  
   
}

// hacer alerta al agregar algo al carrito
//hacer el envio de mail con la reserva de productos