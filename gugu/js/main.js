var productPalette=[];

function renderProducts(){
 for(var i=0;i<Products.length;++i)
  {console.log("---"+Products[i].name);
   let productSample=ps1+i+ps2+Products[i].name+ps3+ps4;
   console.log(productSample);
   productPalette.push(productSample);
  }
 $('#enterProducts').html(productPalette.join(''));
}


$(document).ready(function(){
 console.log('jQuery working');
 console.log(productSample);
 renderProducts();
});