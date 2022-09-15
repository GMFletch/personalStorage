class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    return this.numCopies <= 0
      ? 'out of stock'
      : this.numCopies < 10
      ? 'low stock'
      : 'in stock';
  }

  sell(numSold = 1) {
    this.numCopies -= numSold;
  }

  restock(numRestock = 5) {
    this.numCopies += numRestock;
  }
}
