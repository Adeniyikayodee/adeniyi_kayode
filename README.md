# adeniyi_Kayode
# JavaScript Server Application  
    
    JavaScript Server Application

# Prerqusities
 1. Install NodeJS 14 or higher = Download NodeJS and NPM from https://nodejs.org/en/download/
 2. MongoDB Online or community version = Download from https://www.mongodb.com/download-center/community

# Set up
  In the root folder, 
    create configh.json file with the following attribute:

```csharp
    {
        "connectionString": "YOUR DB URL", e.g "mongodb://localhost/node-mongo-api"
        "secret": "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
        "emailFrom": "EMAIL", e.g node@gmail.com
        "smtpOptions": {
            "host": "[ENTER SMTP OPTIONS"], FOR TEST, YOU CAN CREATE FREE TEST ACCOUNT IN ONE CLICK AT https://ethereal.email/
            "port": 587,
            "auth": {
                "user": "",
                "pass": ""
            }
        }
    }
```
# To run
 1. npm install 
 2. npm start
 3. For documentation and instructions run: http://localhost:5050/api-docs in browser

## For testing and Production, Configure in /src/config.json
 1. SMTP 
    a. create a free account in one click at https://ethereal.email/ and copy the options below the title Nodemailer configuration.
 2. Connect DB = MongoDB_url  
 3. Generate session secret from https://www.guidgenerator.com/