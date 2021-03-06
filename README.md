# nodejs-prod-server-boilerplate
node.js production server template , include logs , node cache for error , logger, route ,  node mailer,automatic tests mocha & chai , docker , pm2.


## Getting Started

In order to install the application clone the repo.

Open cmd at project root and type
```
npm i
node app

```


### Prerequisites

```
* Node

```

### Dev Installing

**Setting up a deveplopment env**

Clone this repo.
```
git clone https://github.com/bmatoki/nodejs-prod-server-template.git
```

Install the node dependencies for each service.

```
npm i 

```


### Running the tests

The tests are mocha and chai based and needs a working dev environment.
Currently only the node apps contains unit and e2e testing.

Before running the test, the test config env needs to be updated with the relevant dev/prod details.
The config file can be found at config.js

```
config.json file:

{
  production: {....},
  test: {
    cors: {
      origin: '*',
      methods: 'GET,POST',
    },
    logger: {
      morganLevel: 'debug',
      level: 'info',
    },
  }
  development: {....}
}

```
To run the tests.

```
npm run test

```



### coding style 

Each code addition must be in line with the eslint and tslint in the project.
Those extend the airbnb style guide.

## Deployment

To install a production ready application you can follow the [Dev Installing](#dev-installing) after installing/validating Prerequisites are met.

## Uninstalling

Uninstall steps:
 * node - simply delete the files.


## Built With

* Node.


## Authors

* Boaz Matoki


## License

-
## Acknowledgments
-
