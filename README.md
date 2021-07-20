# Team Profile Generator

## Description

This is a Node.js based application built for team managers who would like to quickly generate a team profile HTML webpage that is organized into data cards per employee for quick reference. Running the app through a terminal allows the user to enter data for a manager and then an infinite number of engineers or interns until they are ready to output the index.html and accompanying style.css files. Using a responsive design, data cards are pushed to the index.html for each team member. Engineers include a link to their GitHub profiles while interns list the school they are enrolled in. Every employee includes their email available to click and load to the user’s email software of choice.

An important element I explored as part of this app is the testing modules included in the __tests__ folder. Each of the four classes built into the app have a suit of tests run using ‘jest’ to confirm proper object creation and method call functionality. Also included is the ‘inquirer’ module with validation for properly entered answers to the command line questions. Examples include checking that each name is not blank and does not include numbers along with making sure the emails include the @ symbol.

## Walkthrough Video

https://www.youtube.com/watch?v=AtOq2hcFxUg&ab_channel=WilliamCrownover

## Example Generated HTML Webpage

<img src="./assets/screenshot.jpg" width="1200" alt="Example of generated team profile webpage"/>

https://drive.google.com/file/d/1hipiAClXWToMrqqvo1sXyjSBqbFqUZ9e/view?usp=sharing

## Installation

You will need Node.js installed on your local machine to run this app.
Then you can clone this repo to your local machine.
You can then run it in VSCode and open an integrated terminal of the root folder.
Before use, run `npm install` to load any dependencies such as Inquirer to the folder.

## Usage

After proper installation, the app can be run using `node index.js` in the command line.
You will first be asked for the team manager’s information.
After that you can add infinite numbers of engineers and interns by filling out requested information per team member.
When ready to generate the file you will select ‘Finished’ for the next team member and the webpage html and css files will be generated to the “dist” folder.

## Tests

This application has four sets of tests for the class objects. To run the tests in VSCode, install 'jest' to dev dependencies with `npm install jest -D` and then use `npm run test` in an integrated terminal.
