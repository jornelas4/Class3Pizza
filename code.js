$(document).ready(
    function () {
        // event handlers
        $("button").click(costSplit);

 //functions

  function costSplit() {
      //input how many plain cheese pizza's

      var pizzaQuantity =parseFloat($("#typeOfPizza").val());


//input how many extra toppings

      var toppingQuantity = parseFloat($("#toppings").val());


//how many people splitting the cost

      var totalPeople = parseFloat($("#billSplit").val());


      var calculation = ((pizzaQuantity * 15) + ( toppingQuantity *1.25)) /totalPeople;

//Results from spans

      $("#result").text(calculation.toFixed(2));
      $("p.output").show();

  }



  });

