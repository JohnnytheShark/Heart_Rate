# Heart Story 🏃🏼

## Passion Project of creating a Data Analytical Dashboard for Athletes from Scratch

I wanted to create a dashboard from ground up without the use of Tableu, Microsoft Power BI, or any other data analytical tools as a challenge. 
I used D3.js and React to create the Frontend.

Sample Dashboard can be viewed here: [Heart Story Dashboard](https://johnnytheshark.github.io/Heart_Story/Analysis)

### The Dashboard Project was split as follow: 
1. Front-End Application (React + D3.js) which can be seen here: [Front-End](https://github.com/JohnnytheShark/Heart_Rate/tree/master/Heart_Rate)
2. Back-End REST API (Python Flask) which converts your GPX file to JSON [Back-End](https://github.com/JohnnytheShark/Heart_Rate/tree/master/Heart_Story_Backend)


### Installation Instructions to see your own data
1. Copy the repository
2. Under Heart_Story > src > example-data > replace the MarathonRun.json file with the JSON file you interpret
3. If you have a GPX file that you exported from your fitness app, that has Heart Rate (Garmin) you can run this script [here](https://github.com/JohnnytheShark/Python-Projects/tree/master/GPX) to convert it to JSON
4. Then run npm install, and npm run dev to view the site at localhost:5173
5. View your data. Remember that this is not medical advice in any kind of way. Rather just a way to view your data. 
