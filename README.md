# Cash register app

## What is this project about?

This is an app built with Vue.js and TailwindCSS to enter and display the amount to be paid, the actual amount given and the change to be given back.

Here, the user has the option to enter the number using a number pad in the UI or directly using the keyboard.

Once the user has entered the amount to be added, there are up to 5 options shown up that are likely for the amount of money to be given by the customer.

After both amounts are entered, the user can either press Enter on the keyboard or click on the corresponding button to see how much change the customer will get.

In this window it is possible to click on the button or on the gray area and the two values will be reset and the next customer can be served.

## What was used to implement the project?

- Vue.js 3
- TailwindCSS
- Jest + @vue/test-utils
- Cypress

## What can I run locally?

To run any scripts, you need to clone the project locally and run `npm install`.

1. `npm run serve` Of course you can run the app itself, by default this will open the app at http://localhost:8080.
2. `npm run test:unit` This will run the numerous unit tests and test all components and functions.
3. `npm run test:e2e` This will start the app and run the end-2-end tests, but in headless-mode. This means that in the background the Chrome browser is running and in it the tests, but the browser is not opened for the developer. The resulting video can be viewed at `cypress/videos`.
4. `npm run cy:open` This will open the GUI of Cypress. There you can start the test and watch it. ATTENTION: In order to run the tests, the app must be started with `npm run serve` before.
