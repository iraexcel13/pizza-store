<<<<<<< HEAD
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
=======
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
>>>>>>> c5d1fb11e874350804ce465673a9716e9e385cae
