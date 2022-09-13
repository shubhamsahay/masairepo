function Product(name,brand,price,description,sold) {
  this.name=name;
  this.brand=brand;
  this.price=price;
  this.description=description;
  this.sold=false;
  // Complete the constructor function
}

// Create these two methods in Product prototype :-
product.prototype.changePrice=function(newprice){
  this.price=newprice;
}

product.prototype.toggleStatus=function(){
  this.sold != this.sold;
}
// changePrice
// toggleStatus

// Do not change this
export default Product;
