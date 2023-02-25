<h1 align="center">
  Chow Counter
</h1>

<p align="center">
    <a href="https://www.loom.com/share/20fdacf1411149938cf3b8f8b0f2cfd2" alt="Video Demo">Video Demo</a>
</p>

<a href="https://www.loom.com/share/20fdacf1411149938cf3b8f8b0f2cfd2" alt="Video Demo"><img src="./screenshots/HomePageTop.png?raw=true" alt="Home Page"></a>

### _A Calorie-Tracking App with tools for discovering new restaurant and recipes_

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Background](#background)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Functionality](#functionality)
- [Design](#design)

---

## Background

In recent years, I have started adopting healthier lifestyle habits and something that has helped me tremendously on this journey has been becoming more aware of the foods I consume on a daily basis. I have a fair bit of experience using food databases provided by companies like MyFitnessPal and LoseIt, so naturally I decided to create my own system for looking up nutritional information to learn what running such a service entails. In a similar vein, two of my favorite hobbies include cooking and exploring new places to eat; however I frequently find myself indecisive about what to make and where to go. As such, I integrated a random recipe and restaurant generator into the app along with the aformentioned food search feature for whenever I find myself lacking in ideas or inspiration. 

[Return to Table of Contents](#Table-of-Contents)

---

## Features

- Dark/Light Mode Toggle

  <img src="./screenshots/HomePageTop.png?raw=true" alt="Home Page Dark Mode" width="300">
  <img src="./screenshots/HomePageLight.png?raw=true" alt="Home Page Light Mode" width="300">

- Food Search with error on unsuccessful query

  <img src="./screenshots/FoodSearchEmpty.png?raw=true" alt="Food Search Empty" width="300">
  <img src="./screenshots/FoodSearch.png?raw=true" alt="Food Search" width="300">
  <img src="./screenshots/FoodSearchError.png?raw=true" alt="Food Search Error" width="300">

- Restaurant Generator with error on unsuccessful query

  <img src="./screenshots/RestaurantPickerEmpty.png?raw=true" alt="Restaurant Generator Empty" width="300">
  <img src="./screenshots/RestaurantPicker.png?raw=true" alt="Restaurant Generator" width="300">
  <img src="./screenshots/RestaurantPickerError.png?raw=true" alt="Restaurant Generator Error" width="300">

- Recipe Generator with error on unsuccessful query

  <img src="./screenshots/RecipePickerEmpty.png?raw=true" alt="Recipe Generator Empty" width="300">
  <img src="./screenshots/RecipePickerRandom.png?raw=true" alt="Recipe Generator Random" width="300">
  <img src="./screenshots/RecipePicker.png?raw=true" alt="Recipe Generator" width="300">
  <img src="./screenshots/RecipePickerError.png?raw=true" alt="Recipe Generator Error" width="300">

- Responsive Web Design

  <img src="./screenshots/HomePageMobile.png?raw=true" alt="Home Page Top Mobile" height="300" width="148">
  <img src="./screenshots/HomePageBottomMobile.png?raw=true" alt="Home Page Bottom Mobile" height="300" width="148">
  <img src="./screenshots/RestaurantPickerMobile.png?raw=true" alt="Restaurant Picker Mobile" height="300" width="148">
  <img src="./screenshots/RestaurantPickerLightMobile.png?raw=true" alt="Restaurant Picker Light Mode Mobile" height="300" width="148">
  <img src="./screenshots/RecipePickerMobile.png?raw=true" alt="Recipe Picker Mobile" height="300" width="148">
  <img src="./screenshots/FoodSearchMobile.png?raw=true" alt="Food Search Mobile" height="300" width="148">
  <img src="./screenshots/FoodSearchErrorMobile.png?raw=true" alt="Food Search Error Mobile" height="300" width="148">

[Return to Table of Contents](#Table-of-Contents)

---

## Technologies Used

- Javascript, React, Node.js, and Express
- HTML, CSS, Tailwind, and DaisyUI
- AJAX, Axios, and RESTful routing
- Yelp API, Spoonacular API, and Edamam API

[Return to Table of Contents](#Table-of-Contents)

---

## Functionality

Upon visiting the site, the user is taken to a landing page where they can access the site's features via links on the navbar or the approriate buttons on the home page hero messages. 

To generate a random restaurant the user must specify a zip code, type of cuisine, price point (between '$' and '$$$$'), and maximum travel radius (between 1 and 25 miles). Upon a successful search, a card will be displayed with the restaurant's name, price point, estimated travel distance, categories, featured picture, address, phone number, and rating out of 5 stars, as well as a button that navigates to its corresponding Yelp page.

To generate a random recipe the user can either pick a totally random recipe by submitting with no parameters selected, or choose to refine their search by specifying a cuisine, particular diet, dietary intolerance, and/or dish type. Upon a successful search, a card will be displayed with the dish's name, relevant tags, picture, prep time, and serving size, as well as a button that navigates to a page with the rest of the recipe info.

To look up a food's nutritional information the user only needs to type in its name. Upon a successful search, a card will be displayed with the food's name, picture, calories, protein, fat, carbs, and fiber, as well as a button that navigates to a page containing various recipes in which it is an ingredient.

For any of the site's tools, if no results are found using the search parameters provided, a custom error card will pop up asking the user to try again with a different query. 

[Return to Table of Contents](#Table-of-Contents)

---

## Design

The navbar remains the same throughout the site, allowing easy navigation. The site brand on the left of the bar can be pressed at any time to bring the user back to the home page, while the links on the right side navigate to the two generators and the food search feature. On the far right end, a dark/light mode toggle allows users to switch the theme of the site to whichever color scheme they prefer.

The 'Get Started' button at the top of the home page auto-scrolls the user down to buttons that navigate to the site's various features. A 'Back to Top' button at the bottom of the home page allows users to return to the landing screen if they desire.

Query parameters for the restaurant and recipe generators are saved after each search so the user can press 'Generate' to randomly look up another item that meets their previous conditions. The input for the food search is cleared after each submission to let users look up another food of their choosing.

Responsive web design was implemented to accomodate screens of all sizes so when the width falls below 1024px, feature links on the navbar placed into a collapsible menu to the left of the site brand. Additionaly, elements on the landing page are resized and forms are stacked on top of result/error cards at smaller screen widths.

[Return to Table of Contents](#Table-of-Contents)
