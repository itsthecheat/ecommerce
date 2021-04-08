## ecommerce
Ecommerce store with React, Redux and Node

This app was created with React/Redux using the [Fake Store API](https://fakestoreapi.com/) for product info. 
Currently, the user can: 
1. View all the products on the main page
2. Select a product to view it's individual page
3. From the product page the user can select a quantity and add it to the cart
4. The cart will update as items are added or quantity is changed
5. Subtotal is calculate and updated based on items in cart

State is saved to local storage using redux-persist to prevent loss of items on page refresh. Server has been created using Express 
and connected with MongoDB Atlas along with models, schemas and beginning of routes. User can be added to database successfully after testing via Postman.

### To-Do:
1. Implement Login and Create Account
2. Connect client to server for user and cart information
3. ~~Add number to cart icon in header indicating number of items in cart~~
4. Implement checkout. Currently redirects user.
