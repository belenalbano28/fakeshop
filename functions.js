$( document ).ready(function() {
        fashionM();
        fashionW();
        electronics();
        jewellery();
 
});


function fashionM(){
    
    url="https://fakestoreapi.com/products/category/men's clothing"
    fetch(url).then(function(response) {
       return response.json();
      }).then(function(data) {
        data = JSON.stringify(data);
       var array= new Array(JSON.parse(data));
       var y;
       var men=document.getElementById('men');
       men.innerHTML='';
       
        for (let index = 0; index < array[0].length; index++) {
            var z=$('#men').html();
            var idproduct=array[0][index].id;
            var title=array[0][index].title;
            var price=array[0][index].price;
            var image=array[0][index].image;
            if(index%3==0){
                if(index==0){
                    var x='';
                
                    x='<div class="carousel-item active"><div class="container"><h1 class="fashion_taital">Menswear</h1><div class="fashion_section_2" ></div><div class="row"><div class="col-lg-4 col-sm-4" ><div class="box_main"><h4 class="shirt_text">'+title+'</h4><p class="price_text">Price  <span style="color: #262626;">$ '+price+'</span></p><div class="tshirt_img"><img src="'+image+'"></div><div class="btn_main"><div class="buy_bt"><a href="javascript:;" id="agregar" onclick="agregarcarrito('+idproduct+')">Buy Now</a></div><div class="seemore_bt"><a href="#" onclick="productover('+idproduct+')">See More</a></div></div></div> </div>';
                }else{
                    var x='';
                
                    x='<div class="carousel-item"><div class="container"><h1 class="fashion_taital">Menswear</h1><div class="fashion_section_2" ></div><div class="row"><div class="col-lg-4 col-sm-4" ><div class="box_main"><h4 class="shirt_text">'+title+'</h4><p class="price_text">Price  <span style="color: #262626;">$ '+price+'</span></p><div class="tshirt_img"><img src="'+image+'"></div><div class="btn_main"><div class="buy_bt"><a href="javascript:;" id="agregar" onclick="agregarcarrito('+idproduct+')">Buy Now</a></div><div class="seemore_bt"><a href="#" onclick="productover('+idproduct+')">See More</a></div></div></div> </div>';
                }
                y=index;
                //primera vez,multiplo de 3. 0,3,6,9
                
               if(index==array[0].length-1){
                men.innerHTML = z+x+'</div></div></div></div>';
             }
            }else if(index==y+1){
                //segundo item 
                x+='<div class="col-lg-4 col-sm-4" ><div class="box_main"><h4 class="shirt_text">'+title+'</h4><p class="price_text">Price  <span style="color: #262626;">$ '+price+'</span></p><div class="tshirt_img"><img src="'+image+'"></div><div class="btn_main"><div class="buy_bt"><a href="javascript:;" id="agregar" onclick="agregarcarrito('+idproduct+')">Buy Now</a></div><div class="seemore_bt"><a href="#" onclick="productover('+idproduct+')">See More</a></div></div></div> </div>';
                if(index==array[0].length-1){
                    men.innerHTML = z+x+'</div></div></div></div>';
                 }
            }else if(index==y+2){
                //el ultimo item
                x+='<div class="col-lg-4 col-sm-4" ><div class="box_main"><h4 class="shirt_text">'+title+'</h4><p class="price_text">Price  <span style="color: #262626;">$ '+price+'</span></p><div class="tshirt_img"><img src="'+image+'"></div><div class="btn_main"><div class="buy_bt"><a href="javascript:;" id="agregar" onclick="agregarcarrito('+idproduct+')">Buy Now</a></div><div class="seemore_bt"><a href="#" onclick="productover('+idproduct+')">See More</a></div></div></div> </div></div></div></div></div>';
                men.innerHTML = x+z;
            }
    
           }
           
      
       
      }).catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
}

function fashionW(){
    
    url="https://fakestoreapi.com/products/category/women's clothing"
    fetch(url).then(function(response) {
       return response.json();
      }).then(function(data) {
        data = JSON.stringify(data);
       var array= new Array(JSON.parse(data));
       var y;
       var women=document.getElementById('women');
       women.innerHTML='';
       
        for (let index = 0; index < array[0].length; index++) {
            var z=$('#women').html();
            var idproduct=array[0][index].id;
            var title=array[0][index].title;
            var price=array[0][index].price;
            var image=array[0][index].image;
            if(index%3==0){
                if(index==0){
                    var x='';
                
                    x='<div class="carousel-item active"><div class="container"><h1 class="fashion_taital">Womenswear</h1><div class="fashion_section_2" ></div><div class="row"><div class="col-lg-4 col-sm-4" ><div class="box_main"><h4 class="shirt_text">'+title+'</h4><p class="price_text">Price  <span style="color: #262626;">$ '+price+'</span></p><div class="tshirt_img"><img src="'+image+'"></div><div class="btn_main"><div class="buy_bt"><a href="javascript:;" id="agregar" onclick="agregarcarrito('+idproduct+')">Buy Now</a></div><div class="seemore_bt"><a href="#" onclick="productover('+idproduct+')">See More</a></div></div></div> </div>';
                }else{
                    var x='';
                
                    x='<div class="carousel-item"><div class="container"><h1 class="fashion_taital">Womenswear</h1><div class="fashion_section_2" ></div><div class="row"><div class="col-lg-4 col-sm-4" ><div class="box_main"><h4 class="shirt_text">'+title+'</h4><p class="price_text">Price  <span style="color: #262626;">$ '+price+'</span></p><div class="tshirt_img"><img src="'+image+'"></div><div class="btn_main"><div class="buy_bt"><a href="javascript:;" id="agregar" onclick="agregarcarrito('+idproduct+')">Buy Now</a></div><div class="seemore_bt"><a href="#" onclick="productover('+idproduct+')">See More</a></div></div></div> </div>';
                }
                y=index;
                //primera vez,multiplo de 3. 0,3,6,9
                
               if(index==array[0].length-1){
                women.innerHTML = z+x+'</div></div></div></div>';
             }
            }else if(index==y+1){
                //segundo item 
                x+='<div class="col-lg-4 col-sm-4" ><div class="box_main"><h4 class="shirt_text">'+title+'</h4><p class="price_text">Price  <span style="color: #262626;">$ '+price+'</span></p><div class="tshirt_img"><img src="'+image+'"></div><div class="btn_main"><div class="buy_bt"><a href="javascript:;" id="agregar" onclick="agregarcarrito('+idproduct+')">Buy Now</a></div><div class="seemore_bt"><a href="#" onclick="productover('+idproduct+')">See More</a></div></div></div> </div>';
                if(index==array[0].length-1){
                    women.innerHTML = z+x+'</div></div></div></div>';
                 }
            }else if(index==y+2){
                //el ultimo item
                x+='<div class="col-lg-4 col-sm-4" ><div class="box_main"><h4 class="shirt_text">'+title+'</h4><p class="price_text">Price  <span style="color: #262626;">$ '+price+'</span></p><div class="tshirt_img"><img src="'+image+'"></div><div class="btn_main"><div class="buy_bt"><a href="javascript:;" id="agregar" onclick="agregarcarrito('+idproduct+')">Buy Now</a></div><div class="seemore_bt"><a href="#" onclick="productover('+idproduct+')">See More</a></div></div></div> </div></div></div></div></div>';
                women.innerHTML = x+z;
            }
    
           }
           
      
       
      }).catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
}

function electronics(){
    
    url="https://fakestoreapi.com/products/category/electronics"
    fetch(url).then(function(response) {
       return response.json();
      }).then(function(data) {
        data = JSON.stringify(data);
       var array= new Array(JSON.parse(data));
       var y;
       var women=document.getElementById('electronics');
       women.innerHTML='';
       
        for (let index = 0; index < array[0].length; index++) {
            var z=$('#electronics').html();
            var idproduct=array[0][index].id;
            var title=array[0][index].title;
            var price=array[0][index].price;
            var image=array[0][index].image;
            if(index%3==0){
                if(index==0){
                    var x='';
                
                    x='<div class="carousel-item active"><div class="container"><h1 class="fashion_taital">Electronics</h1><div class="fashion_section_2" ></div><div class="row"><div class="col-lg-4 col-sm-4" ><div class="box_main"><h4 class="shirt_text">'+title+'</h4><p class="price_text">Price  <span style="color: #262626;">$ '+price+'</span></p><div class="tshirt_img"><img src="'+image+'"></div><div class="btn_main"><div class="buy_bt"><a href="javascript:;" id="agregar" onclick="agregarcarrito('+idproduct+')">Buy Now</a></div><div class="seemore_bt"><a href="#" onclick="productover('+idproduct+')">See More</a></div></div></div> </div>';
                }else{
                    var x='';
                
                    x='<div class="carousel-item"><div class="container"><h1 class="fashion_taital">Electronics</h1><div class="fashion_section_2" ></div><div class="row"><div class="col-lg-4 col-sm-4" ><div class="box_main"><h4 class="shirt_text">'+title+'</h4><p class="price_text">Price  <span style="color: #262626;">$ '+price+'</span></p><div class="tshirt_img"><img src="'+image+'"></div><div class="btn_main"><div class="buy_bt"><a href="javascript:;" id="agregar" onclick="agregarcarrito('+idproduct+')">Buy Now</a></div><div class="seemore_bt"><a href="#" onclick="productover('+idproduct+')">See More</a></div></div></div> </div>';
                }
                y=index;
                //primera vez,multiplo de 3. 0,3,6,9
                
               if(index==array[0].length-1){
                women.innerHTML = z+x+'</div></div></div></div>';
             }
            }else if(index==y+1){
                //segundo item 
                x+='<div class="col-lg-4 col-sm-4" ><div class="box_main"><h4 class="shirt_text">'+title+'</h4><p class="price_text">Price  <span style="color: #262626;">$ '+price+'</span></p><div class="tshirt_img"><img src="'+image+'"></div><div class="btn_main"><div class="buy_bt"><a href="javascript:;" id="agregar" onclick="agregarcarrito('+idproduct+')">Buy Now</a></div><div class="seemore_bt"><a href="#" onclick="productover('+idproduct+')">See More</a></div></div></div> </div>';
                if(index==array[0].length-1){
                    women.innerHTML = z+x+'</div></div></div></div>';
                 }
            }else if(index==y+2){
                //el ultimo item
                x+='<div class="col-lg-4 col-sm-4" ><div class="box_main"><h4 class="shirt_text">'+title+'</h4><p class="price_text">Price  <span style="color: #262626;">$ '+price+'</span></p><div class="tshirt_img"><img src="'+image+'"></div><div class="btn_main"><div class="buy_bt"><a href="javascript:;" id="agregar" onclick="agregarcarrito('+idproduct+')">Buy Now</a></div><div class="seemore_bt"><a href="#" onclick="productover('+idproduct+')">See More</a></div></div></div> </div></div></div></div></div>';
                women.innerHTML = x+z;
            }
    
           }
           
      
       
      }).catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
}

function jewellery(){
    
    url="https://fakestoreapi.com/products/category/jewelery"
    fetch(url).then(function(response) {
       return response.json();
      }).then(function(data) {
        data = JSON.stringify(data);
       var array= new Array(JSON.parse(data));
       var y;
       var women=document.getElementById('jewellery');
       women.innerHTML='';
       
        for (let index = 0; index < array[0].length; index++) {
            var z=$('#jewellery').html();
            var idproduct=array[0][index].id;
            var title=array[0][index].title;
            var price=array[0][index].price;
            var image=array[0][index].image;
            if(index%3==0){
                if(index==0){
                    var x='';
                
                    x='<div class="carousel-item active"><div class="container"><h1 class="fashion_taital">Jewellery Accessories</h1><div class="fashion_section_2" ></div><div class="row"><div class="col-lg-4 col-sm-4" ><div class="box_main"><h4 class="shirt_text">'+title+'</h4><p class="price_text">Price  <span style="color: #262626;">$ '+price+'</span></p><div class="tshirt_img"><img src="'+image+'"></div><div class="btn_main"><div class="buy_bt"><a href="javascript:;" id="agregar" onclick="agregarcarrito('+idproduct+')">Buy Now</a></div><div class="seemore_bt"><a href="#" onclick="productover('+idproduct+')">See More</a></div></div></div> </div>';
                }else{
                    var x='';
                
                    x='<div class="carousel-item"><div class="container"><h1 class="fashion_taital">Jewellery Accessories</h1><div class="fashion_section_2" ></div><div class="row"><div class="col-lg-4 col-sm-4" ><div class="box_main"><h4 class="shirt_text">'+title+'</h4><p class="price_text">Price  <span style="color: #262626;">$ '+price+'</span></p><div class="tshirt_img"><img src="'+image+'"></div><div class="btn_main"><div class="buy_bt"><a href="javascript:;" id="agregar" onclick="agregarcarrito('+idproduct+')">Buy Now</a></div><div class="seemore_bt"><a href="#" onclick="productover('+idproduct+')">See More</a></div></div></div> </div>';
                }
                y=index;
                //primera vez,multiplo de 3. 0,3,6,9
                
               if(index==array[0].length-1){
                women.innerHTML = z+x+'</div></div></div></div>';
             }
            }else if(index==y+1){
                //segundo item 
                x+='<div class="col-lg-4 col-sm-4" ><div class="box_main"><h4 class="shirt_text">'+title+'</h4><p class="price_text">Price  <span style="color: #262626;">$ '+price+'</span></p><div class="tshirt_img"><img src="'+image+'"></div><div class="btn_main"><div class="buy_bt"><a href="javascript:;" id="agregar" onclick="agregarcarrito('+idproduct+')">Buy Now</a></div><div class="seemore_bt"><a href="#" onclick="productover('+idproduct+')">See More</a></div></div></div> </div>';
                if(index==array[0].length-1){
                    women.innerHTML = z+x+'</div></div></div></div>';
                 }
            }else if(index==y+2){
                //el ultimo item
                x+='<div class="col-lg-4 col-sm-4" ><div class="box_main"><h4 class="shirt_text">'+title+'</h4><p class="price_text">Price  <span style="color: #262626;">$ '+price+'</span></p><div class="tshirt_img"><img src="'+image+'"></div><div class="btn_main"><div class="buy_bt"><a href="javascript:;" id="agregar" onclick="agregarcarrito('+idproduct+')">Buy Now</a></div><div class="seemore_bt"><a href="#" onclick="productover('+idproduct+')">See More</a></div></div></div> </div></div></div></div></div>';
                women.innerHTML = x+z;
            }
    
           }
           
      
       
      }).catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
}


