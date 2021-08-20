How to install and use the lightning web component OpptSearchLightning :

*** PREREQUISITES ***
- install visual studio code (https://code.visualstudio.com/download)
- in visual studio code install the salesforce extension pack.
  go to the extensions menu (ctrl-shift-x) and search for "salesforce extension pack".
  It will download +-9 extensions that you can use in vsCode to view salesforce lightning web components.
  
*** DEPLOY THE PROJECT TO SALESFORCE ***
- from github download the master folder of the project
- in VSCode open the project
  use the sdfx cli (installed through the extensions) to connect to your salesforce org and give the rights to the developper or administrator.
  using the command ctrl-shift-p and select "authorize an org"
- deploy the project to your salesforce org : ctrl-shift-p "deploy this source to org"

*** PLACE THE PROJECT IN YOUR SALESFORCE ORG ***
- in salesforce navigate to the app launcher and select the accounts.
- in the accounts page select and account and open the 'details' tab
- above on the right click on setup -> edit page
- in the edited page, on your right you will see an object called Opptsearch in the custom lightning web components
  place this object where you want it to be.
- activate the page as app page and give the permissions to users.
