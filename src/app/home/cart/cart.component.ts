import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ProductData } from "../models/product-data";
import { ProductService } from "../services/product.service";

@Component({
    selector: "app-cart",
    templateUrl: "./cart.component.html",
    styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
    public products$: Observable<ProductData[]>;

    constructor(private readonly productService: ProductService) {
        this.products$ = this.productService.cart$;
    }

    public ngOnInit(): void {
        this.productService.loadCart().subscribe();
    }

    public removeFromCart(productId: string): void {
        this.productService.removeProductFromCart(productId);
    }
}
