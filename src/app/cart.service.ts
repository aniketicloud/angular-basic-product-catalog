import { Injectable } from "@angular/core";
import { Product } from "./products";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];
  constructor() {}

  /**
   * It appends a product to an array of items.
   * @param product product that appends to items.
   */
  addToCart = (product: Product): void => {
    this.items.push(product);
  };

  /**
   * It collets the items users add to the cart and
   * returns each item with its associated quantity.
   * @returns each item from the items array with its associated quantity
   */
  getItems = () => this.items;

  /**
   * It returns an empty array of items, which empties the cart.
   * @returns an empty array of items
   */
  clearCart = () => {
    this.items = [];
    return this.items;
  };
}
