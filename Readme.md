Clone repo

- git clone https://github.com/alii-7/anonymised.git

Install

- npm install

Run Locally

- npm run serve
- Redirect to http://127.0.0.1:8080/

Run Cypress test

- npm run cypress:open
- Choose E2E Testing
- Choose spec.cy.js

##################################################################################################

For the WooW factor:

1. AWS

   1. I have deployed the app publicly here: http://cdkstack-websitebucket75c24d94-1wl0gtsjjxwrf.s3-website-us-east-1.amazonaws.com/
   2. I have hosted the app using AWS S3
   3. I have used AWS CDK for Infrastructure as code (IAC)

2. Github Actions

   1. I have added github actions to deploy to AWS using AWS CDK on PUSH on MAIN branch

3. Cypress

   1. I have integrated Cypress for E2E DOM testing
   2. I have add test cases to cover most of the task's requirements
   3. you dont have to test it yourself you can just check cypress by running npm run cypress:open 😉

##################################################################################################

PS:

1. I unload collect.js on reject button click. This part was not very clear in the requirements. but i can update if you want.
2. POST on unload requirement is not fully working because API is not working.
3. I have replaced the uuid API with https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID because the uuid API returns CORs error
