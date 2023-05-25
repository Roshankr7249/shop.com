var cart=JSON.parse(localStorage.getItem("cartProduct")) || [];
let randomval=Math.floor(Math.random()*100000+1);
if(cart.length===0){
   document.querySelector("body").textContent='do some shopping first....'
}else{

  displayCart(cart);
}
// displayCart()


function displayCart(cart){
  document.querySelector("#rkFirst").textContent="";
cart.map(function(elem){
  var div=document.createElement("div")
  div.id="box";

  var img=document.createElement("img");
  img.src=elem.img_url;
  img.id="cartimg";

  var div2=document.createElement("div")
  div2.id="box2";

  var h4=document.createElement("h4")
  h4.id="prodname";
  h4.textContent=elem.name;

  var price=document.createElement("p")
  price.id="cartprice";
  price.textContent="$"+elem.price+".00";

  var h6=document.createElement("h6");
  h6.id="rkh6";
    h6.innerHTML=`+$2.06"<span id='dollar'>$</span> Cashback`

  var h62=document.createElement("h6");
  h62.style.fontSize="10px"
  h62.innerHTML=`Item#: <span id='random'>${randomval}</span>`

  var p=document.createElement("p");
  p.style.fontSize="10px"
  p.textContent="Single Tube (1.08 fl oz/32 ml)";

  var span=document.createElement('span')
  span.id='quantity'
  var dropdown=document.createElement('select')
  dropdown.id='drop'
  for(var i=1; i<=10; i++){
    var option=document.createElement('option')
    option.value=i;
    option.textContent=i;
    dropdown.append(option)
    if(i==10){
      option.value=`'+'+${i}`
    }
  }
  var hr=document.createElement("hr")
  hr.style.width="200%"

  span.append(dropdown)

  div2.append(h4, price, h6, h62, p, span,hr)

  let box3=document.createElement('div')
  box3.id='buttonsrk';

  let btn1=document.createElement('button')
  btn1.textContent='Save for Later'
  btn1.id='saveLater'

  let btn2=document.createElement('button')
  btn2.textContent='Remove';
  btn2.id='Remove';

  box3.append(btn1, btn2)

  div.append(img,div2, box3)

  document.getElementById('rkFirst').append(div)
     
})
}


 
