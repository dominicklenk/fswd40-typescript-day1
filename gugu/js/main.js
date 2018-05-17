var productPalette=[];

function renderProducts(){
 for(var i=0;i<Products.length;++i)
  {console.log("---"+Products[i].name); 
   let source="https://placehold.it/150x80?text=IMAGE";
   if(Products[i].myPhoto==="")
    {var curProduct=ps1+i+ps2+Products[i].name+ps3+source+ps4;}
   else
    {var curProduct=ps1+i+ps2+Products[i].name+ps3+Products[i].myPhoto+ps4;}
   console.log(curProduct);
   productPalette.push(curProduct);
  }
 $('#enterProducts').html(productPalette.join(''));
}


$(document).ready(function(){
 console.log('jQuery working');
 console.log(productSample);
 renderProducts();
});