function Pizza(){
  this.pizzaSize = "";
  this.pizzaTopping = [];
  this.pizzaCost = 0;
};

Pizza.prototype.sizeCost = function() {

  if (this.pizzaSize === "SMALL") {
    this.pizzaCost= 10;
  } else if (this.pizzaSize === "MEDIUM") {
    this.pizzaCost = 12;
  } else if (this.pizzaSize === "LARGE") {
    this.pizzaCost = 15;
  }
  this.pizzaCost += this.pizzaTopping.length;
  }

$(document).ready(function(){
  var pizzaInstance = new Pizza();

  $("form#pizza-order").submit(function(event){
  event.preventDefault();

  $("#topping-choices").show();
  $("input:checkbox[name=topping]:checked").each(function() {
    var toppings = $(this).val();
    pizzaInstance.pizzaTopping.push(toppings)
  });

  $("#size-choice").show();
  $("input:radio[name=pizza-size]:checked").each(function() {
    var size1 = $(this).val();
    pizzaInstance.pizzaSize=size1;
  });

  for (var i = 0; i < pizzaInstance.pizzaTopping.length; i++){
    $("#topping-choices").append(pizzaInstance.pizzaTopping[i] + "<br>");
  }
    $("#size-choice").append(pizzaInstance.pizzaSize + "<br>");
    $("#total-cost").show();
    pizzaInstance.sizeCost();
    $("#total-cost").append(pizzaInstance.pizzaCost);
    $("#pizza-order").hide();
});
});
