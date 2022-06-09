# NutriBud Frontend

## Contents

- [Homepage](#Homepage)
  - [searching](#searching)
  - [speech to text](#speech-to-text)
  - [tab selector](#tab-selector)
  - [barcode search](#barcode-search)
  - [tracking an item](#tracking-an-item)
- [Header](#header)
- [Profile page](#profile-page)
  - [calendar](#calendar)
  - [timeline](#timeline)
  - [nutrition overivew](#nutrition-overview)
- [settings page](#settings-page)
  - [info](#info)
  - [goals](#goals)
- [technology used](#technologies-used)
  - [css styling](#css-styling)
  - [testing libraries](#testing-libraries)
- [contributors](#contributors)

## Homepage

When you get to our homepage (https://nutribud-frontend.sigmalabs.co.uk/), this is what you'll see.

![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/frontend-doc/readme-files/homepage.png?raw=true "Homepage")

Here you see the header for the first time which you'll have access to on every page of our website we'll have a close look at this later on. In addition to the header we have a tab selector to choose whether you want to search for something you've eaten, or search for a specific barcode.

### searching

![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/frontend-doc/readme-files/text-searchbar.png?raw=true "Text Searchbar")

When on the product name tab, you can search for vague foods, specific foods, meals or even just write a sentence such "For breakfast I had some toast" and we'll bring you a list of all items in our database to do with toast (This part is made possible with the fancy natural language processing technique).

### speech to text

You may have noticed this little icon in the searchbar
![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/frontend-doc/readme-files/nomic-icon.jpeg "mic not in use icon"). This is a speech to text feature. If you press and hold on this icon, the line through it will disappear (the icon will look like this ![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/frontend-doc/readme-files/mic-icon.jpeg "mic in-use icon") when the mic is listening for you.) meaning you can now say what you had to eat. When you've finished saying what you had to eat, just simply let go and the website will bring a list of items relating to what you just said (just a note, text to speech also supports the ability to say a generic sentence such as "I had eggs for lunch".)

### Tab selector

We have two types of searches, one for typing in a food and other for searching specific barcodes.
![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/frontend-doc/readme-files/tab-selector-demo.gif "tab selector demo")

You can switch freely between the two tabs as you like.

### barcode search

Here, you can search for a specific barcode of a product. You'll also notice we no longer have the mic button, we now have this ![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/frontend-doc/readme-files/barcode-scanner-button.jpeg "barcode scanner button") button instead. When clicked this will open a barcode scanner, just simply hold up your barcode to the camera and once scanned the site will do the rest of the work for you.

### tracking an item

To track an item you have ate, you must be logged in so we know who you are! Tracking an item is really simple, just click the big plus sign on the right, type in how many grams of the item you had then click track item! We'll also give you a little message to let you know your item was tracked (or if something went wrong D:). If still not sure, here's a quick demo

![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/frontend-doc/readme-files/track-item-demo.gif "tracking item demo")

## Header

The header will be visible on every page of the website. If you're logged in, it will look something like this:

![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/frontend-doc/readme-files/header.png?raw=true "header image")

you can click on the little icon in the top right and a drop down menu will appear

![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/frontend-doc/readme-files/header-drop-down.png?raw=true "header drop down image")

If you're not logged in, the Profile button will not appear on the header and the settings button will not appear on the drop down and the logout will be replaced with a login button which redirects you to the login page.

If you _are_ logged in, clicking the profile button will take you to your profile page (where you'll see an overview of your tracking history) and clicking the settings button in the drop down menu will take you to your settings page where you can edit information about yourself and also edit your nutrition goals.

## Profile page

After clicking the profile button on the header, you will be taken to this page

![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/frontend-doc/readme-files/profile-page.png?raw=true "profile page picture")

You'll notice this ![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/frontend-doc/readme-files/info-icon.jpeg "info icon") icon in the top right of each component. Hovering over the icon will give you a run down of what that component means/does.

![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/frontend-doc/readme-files/info-hover-demo.gif "info icon hover demo")

### Calendar

On the page, you have a calendar (to select which day you want to see an overview of). Usually the calendar would look a lot more colourful than this however this specific account has only tracked one item. the days are coloured depending on how well you did with nutrition relative to your goals on that particular day.

### Timeline

The timeline component shows an ordered timeline of all the things you ate on the selected day. Hovering over an item shows you the nutritional value of the amount of the item you ate

![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/frontend-doc/readme-files/timeline-demo.gif "timeline demo")

### Nutrition Overview

The nutrition overview component gives you a pie chart of the three main macronutrients from the items you tracked on the selected day. Hovering over the different parts of the chart shows you the percentage of that particular macronutrient. It also has progress bars which tell you how close you got/are to your goal for the selected day.

![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/frontend-doc/readme-files/nutrient-overview-demo.gif "nutrient overview demo")

## Settings page

When you go to the settings page, you'll see something like this (if it's your first time going here then all the fields in info will be blank)

![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/frontend-doc/readme-files/settings-page-info.png "settings page, info tab")

### Info

You can change what it's in this fields, click save changes and the info will be updated! Currently we don't use this information so feel free to leave everything blank although we do have some features planned in the future that may use some of this information.

### Goals

Navigate to the goals tab and you'll see this (even if it's your first time coming here).

![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/frontend-doc/readme-files/settings-page-goals.png "settings page, goals tab")

This tab functions the same as the info tab however unlike the user info we give you these goals by default when you sign up, although they are only supposed to be temporary so we strongly encourage you to change them to suit your own goals.

## technologies used

- react v18.1.0
- react-router-dom v6.3.0
- react-script v5.0.1
- react-speech-recognition v3.9.1
- dynamsoft-javascript-barcode v9.0.2
- recharts v2.1.10
- @nivo v0.79.1
- @date-io/moment v2.14.0
- react-datepicker v4.8.0

### css styling

- @emotion/react v11.9.0
- @emotion/styled v11.8.1
- @mui/lab v5.0.0-alpha.84
- @mui/material v5.8.1

### testing libraries

- @testing-library/jest-dom v5.16.4
- @testing-library/react v13.3.0
- @testing-library/user-event v13.5.0

## Contributors

- [Ibrahim Ahmed](https://github.com/Ibahmed1)
- [Dan Michell](https://github.com/dan-michell)
- [Elisaveta Zobeva](https://github.com/e-zob)
- [Kainan Hassan](https://github.com/kainanh)
