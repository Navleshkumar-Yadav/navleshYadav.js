class Product{

        // datamember

        // name;
        // price;
        // category;
        // description;
        // rating;
        constructor(productName , productPrice, productCategory, productDescription, productRating){
                this.name = productName;
                this.price = productPrice;
                this.category = productCategory;
                this.description = productDescription;
                this.rating = productRating;
        }
        // member function
        addToCart(){
                console.log("add to cart the product");

        }
        addToBuy(){
                console.log("add to buy the product");
        }
        addToBuyRemove(){
                console.log("add to remove the product");
        }
        displayProduct(){
                console.log("Product displayed");
        }
}
let iphone = new Product("iphone",80000,"mobile","apple iphone 12",4.8);
console.log(iphone);


let obj = {
        x : 10,
        y : 20,
        fn: function(){
                console.log(this.x, this.y);
        }

}
obj.fn();



let obj = {
        x : 10,
        y : 20,
        z: {
                x: 99,
                fn: function(){
                        console.log(this.x,this.y);
                }
        }

        


}
obj.z.fn();



let obj = {
        x: 20,
        y: 30,
        fn: function(){
                const arrow = () =>{
                        console.log(this.x,this.y);

                }
                arrow();
        }

}
obj.fn();
