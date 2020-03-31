# React Cart

1. clone this repo
2. create a new branch `yourName-solution`
3. Write a 2 page react app that contains the following pages
4. Submit a PR into master with your solution

# Products
![products](products.png)

- The `Add to wishlist` button requires no functionality
- The `Contact with author` button requires no functionality
- The `Add to cart` button should add the product to the cart. Multiple clicks should result in multiple product addition to the cart
- The image carousel should be functional - no actual images necessary
- Actual text content of page does not matter. You can copy exactly from image if you want


# Cart
![cart](cart.png)

- Items in cart showed in image are for display purposes only. In actual cart there will only be one product added from the products page (since the product page only has one product), but the quantity can indeed change
- `Continue shopping` button should go back to products page
- `Info` buttons require no functionality
- `Cancel` button requires no functionality
- `Checkout` button should clear the cart and return to the products page
- Actual text content of page does not matter. You can copy exactly from image if you want

# Requirements

- You can use `create react app`
- Use `Redux` and `Sagas` for state management
- Use any additional libraries you want
- try to approximate the wire frames as much as possible, but feel free to improvise
- Code should run locally after `npm install` & `npm run start`

# Bonus

Update the `Checkout` button in the cart page to use [Zoid](https://github.com/krakenjs/zoid). The button should now render the Zoid cross domain component in a pop up window, the pop up window should simply have an `Ok` button which completes the order.