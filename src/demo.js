 $(document).ready(function () {
     DonutWidget.draw();
     $(".small").DonutWidget({
         max: 200
         , value: 50
         , caption: "jquery Implementation"
     });
 });