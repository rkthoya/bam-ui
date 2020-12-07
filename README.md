# Book A Meal :pizza:
[![Build Status](https://travis-ci.org/codingedward/book-a-meal-ui.svg?branch=develop)](https://travis-ci.org/codingedward/book-a-meal-ui)
[![Coverage Status](https://coveralls.io/repos/github/codingedward/book-a-meal-ui/badge.svg?branch=develop)](https://coveralls.io/github/codingedward/book-a-meal-ui?branch=develop)

Reimplementation of Andela Book A Meal developer challenge UI.

**Note**: The UI template is [here](https://codingedward.github.io/book-a-meal-ui).

## Table of Content

  * [Introduction](#introduction)
  * [The Client Side](#the-client-side)
     * [Color Palette](#color-palette)
     * [Fonts](#fonts)
     * [Images and Textures](#images-and-textures)
     * [Pages](#pages)
        * [Landing Page](#landing-page)
        * [Sign Up Page](#sign-up-page)
        * [Login Page](#login-page)
        * [Caterer Meals Management Page](#caterer-meals-management-page)
        * [Caterer Menu Management](#caterer-menu-management)
        * [Caterer Orders](#caterer-orders)
        * [Caterer Order History](#caterer-order-history)
        * [Customer Menu](#customer-menu)
        * [Customer Orders](#customer-orders)
        * [Customer Notifications](#customer-notifications)
        * [Customer Order History.](#customer-order-history)

## Introduction
The project entails having a caterer as the site administrator and can add 
meals to the application as well as set menus for a particular day. 
The customers, after signing up first, are then allowed to book meals online.

## The Client Side
This is the frontend part of the application and will involve building from 
the ground up a user interface without the use of UI frontend frameworks such 
as Bootstrap or Foundation. 

The color palette was generated using [coolors.co](https://coolors.co) which 
is a tool for generating non-crashing colors.

The wireframes are built using [wireframe.cc](https://wireframe.cc/).

### Color Palette
The following is the chosen scheme:

![Coolors Chosen Palette](https://coolors.co/export/png/2d728f-3b8ea5-f5ee9e-f49e4c-ab3428)

### Fonts
The following are the fonts used for this project:
1. [Nunito (Google Fonts) ](https://fonts.google.com/?query=Nunito)
2. [Leckerli One (Google Fonts)](https://fonts.google.com/?query=Leckerli+One)

### Images and Textures
The following are the images and textures used for this project:
1. [Photo](https://unsplash.com/photos/4_jhDO54BYg) by Dan Gold on Unsplash.
2. [Photo](https://unsplash.com/photos/awj7sRviVXo) by Casey Lee on Unsplash.
3. [Photo](https://unsplash.com/photos/tzl1UCXg5Es) by Robin Stickel on Unsplash.
3. [Photo](https://unsplash.com/photos/QaGDmf5tMiE) by Joseph Gonzalez on Unsplash.
4. [Photo](https://unsplash.com/photos/Vajgh8pZKnI) by Tran Mau Trin Tam on Unsplash.
5. [Texture](https://www.transparenttextures.com/food.html) background pattern.
6. Hamburger menu [icon](https://icons8.com/icon/5574/menu).

### Pages
Here we will show the wireframes of the main pages. 
The heirarchy of the application is as follows:

![Map](https://image.ibb.co/gwHiWx/map.png)

The web application will have the following pages:

#### Landing Page
This will be the first page any user of the application will land on. 
The following is the the wireframe of this page:

![Landing Page Wireframe](https://image.ibb.co/irri6n/landing_page.png)

From here the user can either choose to login or sign up as well as see some 
of the menus available for that particular day.

#### Sign Up Page
This will be used to create an account by a new user.
The  following is this page's wireframe:

![Sign Up Page Wireframe](https://image.ibb.co/eYR4z7/sign_up.png)

**Note**: The administrator does not sign up and he/she will have a default
account.

#### Login Page
This page will be used by both the adminstrator(the caterer) and the 
customers. The two will be differentiated using roles on the server. 

![Login Page Wireframe](https://image.ibb.co/gtzDsS/login.png) 

#### Caterer Meals Management Page
This is where the administrator will manage the meals in the application.

![Caterer Meals Management Frame](https://image.ibb.co/d89osS/manage_meals.png)

#### Caterer Menu Management 
Here the caterer can set the menu for a specific day

![Caterer Set Menu](https://image.ibb.co/dKxxmn/set_menu.png)

#### Caterer Orders 
Here, the caterer will be able to see meals ordered by the customer.

![Caterer Orders](https://image.ibb.co/h82Kz7/orders.png)

#### Caterer Order History
Here the caterer can view the history of orders made by customers.

![Caterer Order History ](https://image.ibb.co/jJRORn/order_history.png)


#### Customer Menu
Here, the user can view what has been set on the menu and make orders.

![User Menu](https://image.ibb.co/cGb2rx/user_menu.png)

#### Customer Orders
Here the customer can see and track the orders they made. After it has been
approved by the caterer, the status of the order will also change and he/she
can see this.

![User Orders](https://image.ibb.co/jY62rx/user_orders.png)

#### Customer Notifications
Here the customer will get updates on new meals and when the caterer sets the
menu.

![User Notifications](https://image.ibb.co/i5DqBx/user_notifications.png)

#### Customer Order History.
Here the customer can see their order history.

![User Order History](https://image.ibb.co/guyqBx/user_history.png)


