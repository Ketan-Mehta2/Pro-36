class Food{
constructor(){

            this.foodStock = 0;
            this.lastFed;
            this.image = loadImage("virtual pet images/milk.png");
}
getfoodStock(){
    var foodstockref = database.ref("foodS");
    foodstockref.on("value",function(data){
        this.foodstock = data.val();
    });
}
updateFoodStock(stock){
    database.ref("/").update({
        foodS:stock
    });

}
deductfood(){
    if(this.foodStock>0){
this.foodStock = this.foodStock-1;
    }
}
getfeedtime(){
    var feedtimeref = database.ref("Feedtime");
    feedtimeref.on("value",function(){
        this.feedtime = data.val();
    })
}
display(){
    background(46,139,87);
    var x = 70;
    var y = 100;
    for(i = 0;i<this.foodStock;i = i+1){
    if(i%10===0){
        x = 70;
        y = y+50;
    }
    image(this.image,x,y,50,50);
    x = x+30;

    }
}
}