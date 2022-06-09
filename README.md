# NutriBud Frontend

## Contents

## Homepage

When you get to our homepage (https://nutribud-frontend.sigmalabs.co.uk/), this is what you'll see.

![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/readme-edits/readme-files/homepage.png?raw=true "Homepage")

Here you see the header for the first time which you'll have access to on every page of our website we'll have a close look at this later on. In addition to the header we have a tab selector to choose whether you want to search for something you've eaten, or search for a specific barcode.

### searching

![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/readme-edits/readme-files/text-searchbar.png?raw=true "Text Searchbar")

When on the product name tab, you can search for vague foods, specific foods, meals or even just write a sentence such "For breakfast I had some toast" and we'll bring you a list of all items in our database to do with toast (This part is made possible with the fancy natural language processing technique).

### speech to text

You may have noticed this little icon in the searchbar
![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/readme-edits/readme-files/nomic-icon.jpeg "mic not in use icon"). This is a speech to text feature. If you press and hold on this icon, the line through it will disappear (the icon will look like this ![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/readme-edits/readme-files/mic-icon.jpeg "mic in-use icon") when the mic is listening for you.) meaning you can now say what you had to eat. When you've finished saying what you had to eat, just simply let go and the website will bring a list of items relating to what you just said (just a note, text to speech also supports the ability to say a generic sentence such as "I had eggs for lunch".)

### Tab selector

We have two types of searches, one for typing in a food and other for searching specific barcodes.
![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/readme-edits/readme-files/text-tab-selected.png?raw=true "text tab")
![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/readme-edits/readme-files/barcode-tab-selected.png?raw=true "barcode tab")

You can switch freely between the two tabs as you like.

### barcode search

Here, you can search for a specific barcode of a product. You'll also notice we no longer have the mic button, we now have this ![alt text](https://github.com/Sigma-Labs-XYZ/nutribud-frontend/blob/readme-edits/readme-files/barcode-scanner-button.jpeg "barcode scanner button") button instead. When clicked this will open a barcode scanner, just simply hold up your barcode to the camera and once scanned the site will do the rest of the work for you.

### tracking an item

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
