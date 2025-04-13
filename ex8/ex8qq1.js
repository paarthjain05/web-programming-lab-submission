function calculateTotal() {
    var adultTickets = document.getElementById('adultTickets').value;
    var childTickets = document.getElementById('childTickets').value;

    adultTickets = parseInt(adultTickets);
    childTickets = parseInt(childTickets);

    var adultPrice = 20;
    var childPrice = 10;

    var totalAmount = (adultTickets * adultPrice) + (childTickets * childPrice);

    document.getElementById('totalAmountDisplay').value = totalAmount;
}
