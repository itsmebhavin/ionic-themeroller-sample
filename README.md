## Capacitor Compilation Process

# Compiling PWA

    - npm install --save @capacitor/core @capacitor/cli
    - npx cap init
    - npm run build / ionic build
    - [make sure in angular.json file, outputPath = "www"]
    - [make sure in capacitor.config.json file, webDir = "www"]
    - [make sure in capacitor.config.json file, bundledWebRuntime = "false"]
    - npx cap web
    - npx cap copy web
    - npx cap serve

# Compiling iOS

    - npx cap add ios
    - npx cap copy ios
    - npx cap open ios

# Compiling Android

    - npx cap add android
    - npx cap copy android
    - npx cap open android

# Compiling electron

    - npx cap add electron
    - npx cap copy electron
    - cd electron
    - npm run electron:start

# Commands to remember for later use

    - $ npx cap copy
    - $ npx cap open
    - $ npx cap serve
    - [for progressive web apps]
    - $ npx cap update
    - $ npm install really-cool-plugin
    - $ npx cap update // after plugin install
    - $ npx cap sync
