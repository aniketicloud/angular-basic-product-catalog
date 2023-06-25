import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product, products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // First get the product id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(({ id }) => id === productIdFromRoute);
  }

  /**
   * It adds the product to the cart and
   * it displays a message that you've added a product.
   * @param product current product that will be added in the cart.
   */
  addToCart = (product: Product): void => {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  };
}
