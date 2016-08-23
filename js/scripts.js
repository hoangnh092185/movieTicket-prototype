function Ticket(movieTitle, threeD, matinee, ageRange, numberTickets) {
  this.movieTitle = movieTitle;
  this.threeD = threeD;
  this.matinee = matinee;
  this.ageRange = ageRange;
  this.numberTickets = numberTickets;
}

Ticket.prototype.getPrice = function(){
  var ticketPrice = 12;
  if (this.matinee){
    ticketPrice -= 4;
  }
  if (this.threeD){
    ticketPrice += 3;
  }
  if(this.ageRange === "senior" || this.ageRange === "student"){
    ticketPrice -=3;
  }
  return ticketPrice * this.numberTickets;
}


$(document).ready(function() {
  var ticketArray = [];
  $("form.form-group").submit(function(event){
    event.preventDefault();
    var movieTitle = $("select.select-movie").val();
    var ThreeD = ($("select.select-threeD").val() === "true");
    var Matinee = ($("select.select-matinee").val() === "true");
    var ageRange = $("select.select-ageRange").val();
    var numberTickets = $("select.select-number").val();
    console.log(movieTitle, ThreeD, Matinee, ageRange);

    var thisTicket = new Ticket(movieTitle, ThreeD, Matinee, ageRange, numberTickets);
    ticketArray.push(thisTicket);
    console.log(thisTicket);
    console.log(thisTicket.getPrice());

    $("#ticketPrices").text("");
    var price = 0;
    ticketArray.forEach(function(ticket){
      $("#ticketPrices").append("<li>" + ticket.movieTitle +" : $"+ ticket.getPrice()+ "   "+ ticket.ageRange +"   "+ ticket.numberTickets+"x"+ "</li>");
      price += ticket.getPrice();
    });
    $("#totalPrice").text("Total cost: $"+price);
  });
});
