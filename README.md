<h1 align="center">
  Chow Counter
</h1>

<p align="center">
    <a href="https://www.loom.com/share/25f66c1a8d5845eabe4bb5e322d4efb1" alt="Video Demo">Video Demo</a>
</p>

<a href="https://www.loom.com/share/25f66c1a8d5845eabe4bb5e322d4efb1" alt="Video Demo"><img src="./screenshots/HomePageTop.png?raw=true" alt="Home Page"></a>

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

As someone who recently started adopting a healthier lifestyle, one action that has helped me tremendously on my journey has been becoming more aware of the foods I consume on a daily basis. I have a fair bit of experience using food databases provided by companies like MyFitnessPal and LoseIt, so naturally I decided to create my own system for looking up nutritional information to learn what running such a service entails. In a similar vein, two of my favorite hobbies include cooking and exploring new places to eat; however I frequently find myself indecisive about what to make and where to go. As such, I integrated a random recipe and restaurant generator into the app along with the aformentioned food search feature for whenever I find myself lacking in ideas or inspiration. 

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
- MongoDB and Mongoose
- Yelp API, Spoonacular API, and Edamam API

[Return to Table of Contents](#Table-of-Contents)

---

## Functionality

Upon visiting the site, the user is taken to a landing page

On an individual course's page, the user can read the description imported through YouTube's API. In case the user arrived on the course page from the course library, there is an option for adding the course to one of their playlists. They may attempt the quiz before and/or after watching the video. When a video ends, a modal provides the option to add the course to one of the user's existing playlists or for a new list to be created with this course, and then the user is taken to the quiz page for that course.

The quizzes are five multiple choice questions. The questions and answer choices are shuffled each time the quiz is displayed. Each quiz is immediately scored and results are displayed for the user.

The course library lists all the courses with quizzes that have been entered into the ChowCounter app by an administrator. There is a search feature to faciliate locating desired courses. Selecting a course takes the user to the individual course's page.

In order to give administrative permission to a user, a superuser needs to be created so that the Django Admin page can be accessed. Then, a user from the LMS_APP may be selected and "admin" entered as the User Level for that user.

Users who have administrative permission may create a course by pasting in the YouTube url for that video on the create a course page. The course will not appear in the course library, however, until a quiz has been created for it.

Users who have administrative permission may create or edit a quiz for a course. For development and demo purposes, one option is a lorem ipsum quiz which automatically fills in random text for the questions and answers. For real use purposes, another option is to actually create an appropriate quiz. An administrator may write 5 questions and supply three incorrect and one correct answer for each question. The edit quiz option populates with the current questions and answers and allows an administrator to modify them.

[Return to Table of Contents](#Table-of-Contents)

---

## Design

The navbar remains the same throughout the site, allowing easy navigation. The site brand on the left of the bar can be pressed at any time to bring the user back to the home page, while the links on the right side navigate to the two generators and the food search feature. On the far right end, a dark/light mode toggle allows users to switch the theme of the site to whichever color scheme they prefer.

The 'Get Started' button at the top of the home page auto-scrolls the user down to buttons that link to the site's various features. A 'Back to Top' button at the bottom of the home page allows users to return to the landing screen if they desire.

When a user does poorly on a quiz, they are returned to the individual course page so they can watch the video again.
When a user does well on a quiz, they are returned to their profile page for easy access to their playlists to continue learning.

Courses are not added to the course library until a quiz had been created for them.

[Return to Table of Contents](#Table-of-Contents)
