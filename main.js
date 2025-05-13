
let productname = document.getElementById('inputname');
let productcategory = document.getElementById("input-category");
let productprice = document.getElementById("input-price");
let Productdiscount= document.getElementById("inputdiscount");
let productdescription = document.getElementById("inputdescription");
let productAddBtn=document.getElementById("productAddBtn");
let addbutton = document.querySelector(".addbtn");
let resetbutton = document.querySelector(".resetbtn");
let  listpofproduct = [];
let globalid =0;



if(localStorage.getItem('allproduct') !=null){
 listpofproduct= JSON.parse(localStorage.getItem ('allproduct')); 
displyproduct() 

}

function resetBtn(){
  productname.value = "";
  productcategory.value = "";
  productprice.value = "";
  Productdiscount.value = "";
  productdescription.value = "";

}
resetbutton.onclick = resetBtn;

function createproduct(e) {

e.preventDefault()


if (productAddBtn.innerHTML.includes("add")){

  let product = {
    name:productname.value, 
    category:productcategory.value, 
    price:productprice.value, 
    discount:Productdiscount.value,
    description:productdescription.value,}
    listpofproduct.push(product);}

else{
  updateproduct()
}

localStorage.setItem('allproduct',JSON.stringify(listpofproduct)  )
displyproduct()
 resetinput()
      productAddBtn.innerHTML = "add product";
}
addbutton.onclick = createproduct;





function displyproduct() {
let box = '';
for (let  i = 0;  i <listpofproduct.length;  i++) {
    box += 
`<div class="col-lg-4  " >
<div    class='box text-capitalize  '  >
<h5> id: ${i+1}</h5>
<h5> name: ${listpofproduct[i].name }  </h5>
<h5> category:${listpofproduct[i].category}</h5>
<h5> price:${listpofproduct[i].price}  $ </h5>
<h5> discount:${listpofproduct[i].discount} %  </h5>
<h5>  description:${listpofproduct[i].description}</h5>

<button  class=" mt-3  btn-edit    text-capitalize "  onclick="retriveProduct(${i})"       >
 <i class="fa-solid fa-pen  siz-icon  "     "></i>  </button>



<button  class=" mt-3  text-capitalize  deletbtn  " style="border: none; outline: none;"          onclick="deleteproduct(${i})"   id="deletebutton" > 
<i class="fa-solid fa-trash btn-delete fa-pen   siz-icon "  "></i></button>
</div>
</div> `}
document.getElementById('rowData').innerHTML=box;
}




function resetinput() {
    productname.value=""
    productcategory.value=""
    productprice.value=""
    Productdiscount.value=""
    productdescription.value=""
}

 function deleteproduct(deleteid){
listpofproduct.splice(deleteid,1)  
localStorage.setItem('allproduct',JSON.stringify(listpofproduct)  ) 
displyproduct()
console.log(listpofproduct);

}
 function retriveProduct(editid){
  globalid=editid;
 productname.value=listpofproduct[editid].name;
 productcategory.value=listpofproduct[editid].category;
 productprice.value=listpofproduct[editid].price;
Productdiscount.value=listpofproduct[editid].discount;
productdescription.value=listpofproduct[editid].description;
productAddBtn.innerHTML="update product";}

function  updateproduct(){
 listpofproduct [globalid].name=productname.value ;  
 listpofproduct [globalid].category=productcategory.value ;
 listpofproduct[globalid].price=productprice.value ;
 listpofproduct [globalid].discount=Productdiscount.value ;
 listpofproduct [globalid].description=productdescription.value ;

 productAddBtn.innerHTML="add product";
 resetinput()
}