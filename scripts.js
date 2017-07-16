function Pizza(){
  this.pizzaSize = [];
  this.pizzaTopping = [];
  this.pizzaCost = 0;
};

Pizza.prototype.sizeCost = function() {
  var cost = 0;
  if (this.pizzaSize === "SMALL") {
    cost = 10;
  } else if (this.pizzaSize === "MEDIUM") {
    cost = 12;
  } else if (this.pizzaSize === "LARGE") {
    cost = 15;
  }

//this.pizzaTopping.forEach(function() {
Pizza.prototype.toppingCost = function() {
  this.pizzaTopping += 1;
}

  this.pizzaCost = cost;
}

$(document).ready(function(){
  $("form#pizza-order").submit(function(event){
  event.preventDefault();

  $("#topping-choices").show();
  $("input:checkbox[name=topping]:checked").each(function() {
    var toppings1 = $(this).val();
    $("#topping-choices").submit(function(){
      topping-choices.toppingCost();
    });
    $("#topping-choices").append(toppings1 + "<br>");
  });

  $("#size-choice").show();
  $("input:radio[name=pizza-size]:checked").each(function() {
    var size1 = $(this).val();
    $("#size-choice").submit(function(){
      size-choice.sizeCost();
    });
    $("#size-choice").append(size1 + "<br>");

    $("#total-cost").show();
    $("#total-cost").append(this.pizzaCost);
  });
  $("#pizza-order").hide();
});
});
