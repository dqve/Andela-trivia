class ShoppingCart {
  constructor() {
    this.total = 0;
    this.items = {};
  }

  //

  add_item(item_name, quantity, price) {
    this.total += (quantity * price);
  
  if (this.items[item_name]) {
      this.items[item_name] += quantity;
    }
    else{ this.items[item_name] = quantity; }
  }
  
  removeItem(item_name, quantity, price) {
    this.total -= (quantity * price);
     if (this.items[item_name] < quantity) {
      this.items[item_name] = 0;
    } else {
      this.items[item_name] -= quantity;
    }
  }
  
  checkout(cash_paid) {
    const balance = cash_paid - this.total;
    if (balance > 0) {
      return balance;
    } return 'Cash paid not enough';
    
  }
}
class Shop extends ShoppingCart {
  constructor() {
    super();
    this.quantity = 100;
  }

  removeItem() {
    this.quantity -= 1;
  }
}

const cart = new ShoppingCart();
cart.total;
cart.items;
const shop = new Shop();
shop.removeItem();
shop.removeItem();

shop.quantity;