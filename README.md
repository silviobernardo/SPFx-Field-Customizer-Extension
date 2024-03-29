## Sample goal

This sample will customize SharePoint List View fields style


## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.18.2-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)


## HOW TO RUN

1. Open repository folder on Visual Studio Code
2. Create a new SharePoint List and add new columns called "Age" (Number, with no decimal places) and "Rating" (Number, with no decimal places, min value 0, max value 5)
3. Add some records to the list
4. Go to "config/serve.json" file and update "pageUrl" value to your SharePoint List URL 
5. Open a terminal
6. Run "npm install"
7. Run "gulp trust-dev-cert"
8. Run "gulp serve" command.
