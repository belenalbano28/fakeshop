
$( document ).ready(function() {
    var idproduct=localStorage.getItem("idproduct");
cargar(idproduct);
cargarcarrito();
});

function productover(id){
    localStorage.setItem("idproduct", id);
    window.location.href = "singlep.html";
    
}

function cargar(id){
    var title=document.getElementById('title');
    var image=document.getElementById('image');
    var description=document.getElementById('description');
    var price=document.getElementById('price');
    var btn=document.getElementById('cartbtn');
 btn.setAttribute('data-id' , id);  

 url="https://fakestoreapi.com/products/"+id
 fetch(url).then(function(response) {
    return response.json();
   }).then(function(data) {
     data = JSON.stringify(data);
    var array= new Array(JSON.parse(data));
         var t=array[0].title;
         var p=array[0].price;
         var i=array[0].image;
         var d=array[0].description;
         title.innerHTML=t;
         image.setAttribute('src',i);
         description.innerHTML=d;
         price.innerHTML+=p;
         
     
     }).catch(function(err) {
         console.log('Fetch Error :-S', err);
       });
}

