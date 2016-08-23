function Ticket(movieTitle, threeD, matinee, ageRange) {
  this.movieTitle = movieTitle;
  this.threeD = threeD;
  this.matinee = matinee;
  this.ageRange = ageRange;
}

function getPrice(ticket){
  var ticketPrice = 12;
  if (ticket.matinee){
    ticketPrice -= 4;
  }
  if (ticket.threeD){
    ticketPrice += 3;
  }
  if(ticket.ageRange === "senior" || ticket.ageRange === "student"){
    ticketPrice -=3;
  }
  return ticketPrice;
}



$(document).ready(function() {
  var thisTicket = new Ticket("star wars", false, false, "senior");
  console.log(thisTicket);
  console.log(getPrice(thisTicket));
});
