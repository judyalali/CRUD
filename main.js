
let productname = document.getElementById('inputname');
let productcategory = document.getElementById("input-category");
let productprice = document.getElementById("input-price");
let Producdiscount= document.getElementById("inputdiscount");
let productdescription = document.getElementById("inputdescription")
let productAddBtn=document.getElementById("productAddBtn")
let  listpfproduct = [];
let globalid =0;

if(localStorage.getItem('allproduct') !=null){
 listpfproduct= JSON.parse(localStorage.getItem ('allproduct')); 
displyproduct() 

}



function createproduct() {

if (productAddBtn.innerHTML.includes("add")){

  let product = {
    name:productname.value, 
    category:productcategory.value, 
    price:productprice.value, 
    discount:Producdiscount.value,
    description:productdescription.value,}
    listpfproduct.push(product);}

else{
  updateproduct()
}
localStorage.setItem('allproduct',JSON.stringify(listpfproduct)  )
displyproduct()
 resetinput()
console.log(listpfproduct);}

function displyproduct() {
let box = '';
for (let  i = 0;  i <listpfproduct.length;  i++) {
    box += 
`<div class="col-lg-4  " >
<div    class='box text-capitalize  '  >
<h5> id: ${i+1}</h5>
<h5> name: ${listpfproduct[i].name}</h5>
<h5> category:${listpfproduct[i].category}</h5>
<h5> price:${listpfproduct[i].price}</h5>
<h5> discount:${listpfproduct[i].discount}</h5>
<h5>  description:${listpfproduct[i].description}</h5>


<button  class="btn2 mt-3      text-capitalize "  onclick="retriveProduct(${i})" > <i class="fa-solid fa-pen" style="color:rgb(179, 169, 178);"></i>  </button>
<button  class="btn1 mt-3  text-capitalize    "  onclick="deleteproduct(${i})" > <i class="fa-solid fa-trash" style="color:    rgb(179, 169, 178);"></i></button>
</div>
</div> `}
document.getElementById('rowData').innerHTML=box;}

function resetinput() {
    productname.value=""
    productcategory.value=""
    productprice.value=""
    Producdiscount.value=""
    productdescription.value=""
}
 function deleteproduct(deleteid){
listpfproduct.splice(deleteid,1)  
localStorage.setItem('allproduct',JSON.stringify(listpfproduct)  ) 
displyproduct()
console.log(listpfproduct);

 }
 function retriveProduct(editid){
  globalid=editid;
 productname.value=listpfproduct[editid].name;
 productcategory.value=listpfproduct[editid].category;
 productprice.value = listpfproduct[editid].price;
Producdiscount.value=listpfproduct[editid].discount;
productdescription.value=listpfproduct[editid].description;
productAddBtn.innerHTML="update product";}

function  updateproduct(){
 listpfproduct [globalid].name=productname.value ;  
 listpfproduct [globalid].category=productcategory.value ;
 listpfproduct[globalid].price=productprice.value ;
 listpfproduct [globalid].discount=Producdiscount.value ;
 listpfproduct [globalid].description=productdescription.value ;

 productAddBtn.innerHTML="add product";
 resetinput()
}