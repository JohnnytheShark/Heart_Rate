# Heart Story 🏃🏼

## Passion Project of creating a Data Analytical Dashboard for Athletes from Scratch

I wanted to create a dashboard from ground up without the use of Tableu, Microsoft Power BI, or any other data analytical tools as a challenge. 
I used D3.js and React to create the Frontend.

## Why Build it? 
I wanted to showcase my skills as a Developer and Data Analyst. I could have easily built it with a different app or stack but felt this one allowed me the most flexibility and fastest setup.

Sample Dashboard can be viewed here: [Heart Story Dashboard](https://johnnytheshark.github.io/Heart_Story/Analysis)

### The Dashboard Project was split as follow: 
1. Front-End Application (React + D3.js) which can be seen here: [Front-End](https://github.com/JohnnytheShark/Heart_Rate/tree/master/Heart_Rate)
2. Back-End REST API (Python Flask) which converts your GPX file to JSON [Back-End](https://github.com/JohnnytheShark/Heart_Rate/tree/master/Heart_Story_Backend)

### Improvements I would make:
1. More Data Analytics Processed on the Backend. After creating the original dashboard I realized it slowed down the frontend a bit having to do the analysis, not by much just some. So I would move the analytics to Python or Rust.
2. Create More Visuals to view the data and create an option to compare runs.
3. Use a different or more charting libraries to explore what the possibilities are out there.
4. Turn this into an Electron App or Tauri application and have it on my desktop to use whenever I would please. 


### Installation Instructions to see your own data
1. Copy the repository
2. Under Heart_Story > src > example-data > replace the MarathonRun.json file with the JSON file you interpret
3. If you have a GPX file that you exported from your fitness app, that has Heart Rate (Garmin) you can run this script [here](https://github.com/JohnnytheShark/Python-Projects/tree/master/GPX) to convert it to JSON
4. Then run npm install, and npm run dev to view the site at localhost:5173
5. View your data. Remember that this is not medical advice in any kind of way. Rather just a way to view your data. 
