var mens_data = [
    {
        img_url:"https://img.shop.com/Image/240000/243300/243385/products/559052312.jpg?plain&size=500x500",
        name: "Pet Health OPC Formula for Cats & Dogs with Glucosamine",
        desc:"Sold by Pet Health",
        price: 26.00,
        size : ['S','M','L','XL','XXL'],
        color : "Camel 140",
    },
    
    {
        img_url:"https://images.footlocker.com/is/image/EBFL2/V3605100?wid=267&hei=267&fmt=png-alpha",
        name: "Jordan Retro 6",
        desc:"Boys' Preschool•White/Grey",
        price: 90.00,
        size : ['S','M','L','XL','XXL'],
        color : "Awesome 73",
    },
]

displayproduct(mens_data)
function displayproduct(mens_data){
    document.getElementById("data").innerHTML="";
    mens_data.map(function(el){
        var div = document.createElement("div");

        var img = document.createElement("img");
        img.setAttribute("src",el.img_url);
        img.setAttribute("alt",el.name);

        img.setAttribute("class","product_image");

        var desc = document.createElement("p");
        desc.textContent = el.desc;

        var name = document.createElement("h3");
        name.textContent = el.name;
        
        var price = document.createElement("p");
        price.textContent = "$"+el.price+".00";

        var btn=document.createElement("button");
        btn.textContent="Add to Cart";
        btn.addEventListener("click", function(){
            addToCart(el)
        });

        div.append(img,desc,name,price,btn);
     document.getElementById("data").append(div);

    })
    
}

var cartArr=JSON.parse(localStorage.getItem("cartProduct"))||[];

function addToCart(el){
    cartArr.push(el);
    localStorage.setItem("cartProduct", JSON.stringify(cartArr));
}
