
## Introduction

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Motivation

With the health situation in the world right now, an app that monitors the cases would surely come in handy, that was my motivation for creating this app. I used React to create the reusable components and the clickable elements for great user experience.

I pulled data from [this](https://disease.sh/v3/covid/countries) API.
The app consists of a Map component which renders a world map actualized by react-leaflet.
It also has a table which shows the countries and the corresponding covid-19 cases. It also has clickable Card components from @material-ui.

View the app here [kurves/covid-19 Tracker](https://covid-19-tracker-dab65.web.app/).

## Dependencies

 - leaflet
 - numeral
 - react
 - react-dom
    "react-leaflet": "^3.2.2",
    "react-query": "^3.34.6",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.2"
