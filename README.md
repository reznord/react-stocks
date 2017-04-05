This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


### Development
```bash
yarn install
yarnpkg start
```

### Deployment to github pages
The following command will build the application and will push the changes to the gh-pages branch (automatically generated)
when you run `yarnpkg deploy` for the first time.
```bash
yarnpkg deploy
```

If you do not have yarn installed, you can run it with npm as well:
```bash
npm install
npm run start
```

### Description
- This application fetches data from the given URL when the component loads.

  ##### The Application structure is as follows:
```
├── public                        # Static public assets (not imported anywhere in source code)
├── src                           # Application source code
│   ├── components                # Components used for the application will be listed in this directory
│   │   └── Row.js                # Table component which renders the data from socket.
│   ├── pages                     # Contains all the different pages of the application
│   │   ├── App                   # Components used for the application will be listed in this directory
│   │   │   └── styles            # Components used for the application will be listed in this directory
│   │   │   │  ├── App.css        # css for the application
│   │   │   ├── App.js            # Main page of the application
│   ├── index.css                 # global css
│   ├── index.js                  # root file of the application
│   ├── routes.js                 # Routes for the whole application are defined here
├── .gitignore                    # contains files/folders which are to be ignored by the project in git.
├── package.json                  # package.json file that includes all the dependencies for the project
├── README.md                     # Contains documentation for the project.
└── yarn.lock                     # Locks package versions for yarn (generated automatically when using `yarn`)
```
