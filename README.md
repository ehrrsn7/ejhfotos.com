# [ejhfotos.com](http://ejhfotos.com)

Source code for my website.

# How to run

## Install Dependencies

Install node.js/npm from this website: https://nodejs.org/en/download/

Install Git from https://git-scm.com

## Clone this repository and cd into it.

## Install dependencies

There is a script provided to both initialize and update all the applications. Run it with:

```console
./update.sh
```

Note: this will also start the server in the background if you already have pm2 installed.

## Run the server and see the applications 

The urls for each of the applications in local development will be listed when you run:

```console
./runserver.sh
```

## Use pm2 for production

pm2 runs node applications in the background and are used in production.

Instructions on how to install it are found at https://pm2.keymetrics.io/

The update.sh file is used to restart the server, as well as run the updates. 

```console
./update.sh
```
