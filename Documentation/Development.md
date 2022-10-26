# Development

## Downloads needed
Visual Studio Code is used for the IDE.
* https://code.visualstudio.com/

NodeJS is needed to download and manage packages.
* https://nodejs.org/en/download/

PostgreSQL is needed for the database.
* https://www.postgresql.org/download/

## Recreating the project
* Clone this repository using Visual Studio Code
* Open a terminal inside VSCode
* Type the following command to install Ionic: npm install -g @ionic/cli native-run cordova-res
* Type the next command to install the capacitor: npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem
* To run the project in a web page type the command: ionic serve
* If there's errors when running ionic serve saying this cannot be loaded because running scripts is disabled on this system, then type the command: Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
* If there's continued errors when setting this up, try reloading the project and then enter the "ionic serve" command again.

Upon first loading up the repository, the configuation files for typescript, angular, and package.json are listed at the bottom. The non-configuration files that make up the app are contained within the src folder.
![image](https://user-images.githubusercontent.com/77819572/198145701-1935e520-7578-4d9c-9de7-4a3d276123a4.png)

In the src folder, the app folder contains all of the modules and components that make up the app. This is the main folder being worked with for app functionality.
![image](https://user-images.githubusercontent.com/77819572/198146683-b32b47a8-4a8f-4d1d-a198-75f891fc4d23.png)
