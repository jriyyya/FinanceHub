# Client

## Fonts
---
Add more fonts by editing src/assets/styles/index.css

Just copy paste the entire font import syntax and simply replace the name with another google font to add it to your client

To add fonts that are not google fonts, if you have ttf or wff files add them to src/assets/fonts


## Icons
---
https://fonts.google.com/icons 

Here are all usable icons, search for one and simply get it's codepoint (select and scroll the sidebar)

replace codepoint with the codepoint of icon you wish to include
You can then simply add a font by using it's codepoint and using the ```<MaterialIcon codepoint="" />``` component


## Tailwind and CSS
---
Check out src/assets/styles folder for most raw css

Tailwind config file has already been bootstrapped

 

# Server
Add more endpoints by adding to src/routes foder then import into _index.ts which represents the indexRouter

# Deployment
## Vercel
  - The repo can be deployed directly to vercel for both client and server without much extra config needed
## Netlify
  - Netlify can be used to host the client as well though vercel is recommended