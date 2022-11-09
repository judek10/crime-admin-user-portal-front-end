# Deployment

## How to maintain the project
The starting file structure should look like this:
![image](https://user-images.githubusercontent.com/77819572/200939491-d52a2bb7-288e-48bb-adf8-5d4ffea83ee5.png)

Some Important files/folders to keep in mind:
- src folder contains most of the code being worked on for the app.
- .eslintrc.json finds patterns, analyzes, and finds errors in Javascript/Typescript code.
- .gitignore contains all of the files that aren't to be included in version control.
- angular.json contains configuration details for Angular integration.
- capacitor.config.ts contains the ionic capacitor which helps the ionic application run at runtime.
- karma.conf.js contains the configuration details needed for Jasmine unit tests.
- The package.json files contain dependencies needed for the app.
- The tsconfig.app.json tsconfig.json, tsconfig.spec.json contain configuration details for typescript to run.

Src Folder:
![image](https://user-images.githubusercontent.com/77819572/200943841-82c90646-6079-4922-a02a-3605ecefd564.png)

Important files/folders to keep in mind about in the src folder:
- App folder contains the application's components, model classes, and tests, which mostly decides how the app will look and function.
- index.html is the base html page which every other html page will build off of.

## Start/Stop the Application
- Follow download steps in Development.md to make sure all the correct software is downloaded.
- Clone the repository into a new project on VScode.
- Open a terminal.
- Follow command steps in Development.md to make sure all needed packages are downloaded.
- Type the command to start the web app: ionic serve.
![image](https://user-images.githubusercontent.com/77819572/200946817-2f8bb1b7-f0b5-4323-ac94-beb65904963c.png)
- This will open up a local web server to run the web app.
- Any saved changes to the project while the app is running will automatically update the running web app. 
- To stop the application, on the VScode terminal type in Ctrl-C.

- To run the project's unit tests, type the following command: npm test.
- A new web browser will appear with Jasmine testing results. 

## Troubleshooting
When developing the application, there's the inevitable possibility of encountering problems.
- When saving the project and there's errors, the terminal will display correlating error messages. 
- Usually the error message will provide a filepath and line number for the file(s) with errors in order to locate the source of the problem.
- Another way to troubleshoot is to right-click on the web app and select Inspect to open inspect page.
- The inspect page provides the ability to debug source code and make breakpoints. There is also a console provided for console statements in code.
