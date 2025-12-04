// Q8 – Movie Ticket Booking System

class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function() {
  console.log(`Movie: ${this.movieName}, Seat: ${this.seatNo}, Price: ${this.price}`);
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

const ticket = new OnlineTicket("Avengers", "B12", 300, 40);
ticket.printTicket();
console.log("Total Amount:", ticket.getTotalAmount());
