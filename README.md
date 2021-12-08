###Layla Assignment Description

Thanks for taking on the Layla coding assignment. Here we’d like to assess your ability to explore API documentation and build a sample application.

Below are some high-level guidelines but we have left some things intentionally vague. We’d like to explore your approach to this. Be creative and have fun.

Time expectations: You can spend as much time as you’d like, but really we expect that you don’t spend more than 4 hours on this exercise. We’re not expecting high-quality production-ready code but are focusing more on understanding what decisions you took and why.


###Tech Requirements:
1. Chose any programming language you prefer

2. Preparation:
Sign up for a developer key for the MusixMatch api
Review API docs here

3. App requirements:
We’re building a song discovery app that will help us find music we like in various countries.
When the app loads it will start with the top 10 artists in Canada
I am able to change the country to a different country and view the top artists there
When I select an artist I can see 10 albums they’ve made with cover art and genres
For each album, I can bookmark the album into my favourites

4. To Submit your App:
Please push your code to a Github repository and share the URL for that repo with us
Please make sure your repository contains any instructions or requirements to run your app. Please make this as quick and easy as possible

5. Bonus Points:
If you deploy your app somewhere so we can see it live
Any other creative way you come up with to explore music
You chose web-based technologies


### Arthur's Submission

> Language, tools and environment

Frontend: 
- ReactJS with redux, immer, swr, hooks, react-router-dom
- CSS framework - Semantic UI

Backend:
- AWS Lambda
- AWS API Gateway


Live DEMO at [https://fanartie.github.io/layla/](https://fanartie.github.io/layla/)

If you would like to run at your local, here are the installation steps

```bash
git pull https://github.com/fanartie/layla.git
cd layla
cd app
yarn install
yarn start
```


###The design concept and consideration
>The CORS limitation

Because of CORS and CRSF protection, we can't call API through browser. 
Was attempting to use [https://cors-anywhere.herokuapp.com/](https://cors-anywhere.herokuapp.com/), it works but not reliable due to usage constrain.

Was considering to make a local backend, but it's not able for live demo, and is not easy for local tester to run 2 instances together.

Then, I decided to create a true cloud solution for this demo.

>The backend

I set up AWS-lambda as proxy backend, and use AWS-APIGateway as for public endpoint.

It takes about 15 minutes to set up, see the clean and simple source code here
[https://github.com/fanartie/layla/blob/main/backend/src/handlers/getMusic.js](https://github.com/fanartie/layla/blob/main/backend/src/handlers/getMusic.js)

The files under "backend" folder was created by AWS SAM template. 

>The apiKey

To save time, I temporary put the apiKey at [https://github.com/fanartie/layla/blob/main/backend/template.yaml#L31](https://github.com/fanartie/layla/blob/main/backend/template.yaml#L31)

Instead, we should either manually enter the secret into AWS Lambda admin console, or host the secret under AWS-Secret service. (That's what I usually do)

>Security Concern

To avoid abusing, we should add user credential to call the API endpoint.
I am experienced to apply the user credential at the level of API-Gateway, and why I was attempting to apply Google login for this demo, but it may out of scope too much. It's only a demo, should be fine.

>To be able to bookmark favourite album, is my first concern of frontend design.

We can't purely use Redux to run as a single page app, because we need to store bookmark URL with album-id.
Then we need to apply the trick of using URL-history, so we may still run with SPA.

>The benefit of using "useParams" hook from "react-router-dom"

This is a beauty and time-saving decision, it works perfectly with the URL-history.
Any URL update that triggers the useParams hook, and then the observers work together to update the other components perfectly.

see sample at 
