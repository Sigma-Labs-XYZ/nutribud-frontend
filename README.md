# NutriBud Frontend

## Contents

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
![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/frontend-doc/readme-files/text-tab-selected.png?raw=true "text tab")
![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/frontend-doc/readme-files/barcode-tab-selected.png?raw=true "barcode tab")

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

## technologies used

```
npm install
npm i react-router-dom
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
yarn install
yarn add dynamsoft-javascript-barcode
yarn add @nivo/core @nivo/calendar @nivo/colors
yarn add @mui/lab
yarn add recharts
yarn add @date-io/moment
yarn add react-datepicker
yarn add @speechly/speech-recognition-polyfill
yarn add @speechly/react-client
yarn add react-speech-recognition
```

### description
