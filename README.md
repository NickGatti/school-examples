# Review over steps of how to start a workspace like this:

## Commands:

```
 $ npm init
 $ npm install babel-core babel-loader babel-preset-env html5-boilerplate node-sass css-loader sass-loader style-loader uuid webpack assert-plus --save-dev
 $ npm install webpack-dev-server@2.4.1 --save-dev

 $ touch webpack.config.js 
```

### Filename webpack.config.js:

```
var path = require('path');

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    },
                ]
            }
        ]
    }
    
}
```

### Filename package.json:

```
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --config webpack.config.js -d --port $PORT --host $IP --content-base public/ --inline --hot"
  },
```

## Commands:

```
 $ mkdir src
 $ touch src/index.js

 $ mkdir sass
 $ touch sass/main.scss
 $ touch sass/vars.scss

 $ mkdir public
 $ mkdir public/css

 $ cp node_modules/html5-boilerplate/dist/index.html public/index.html
 $ cp node_modules/html5-boilerplate/dist/css/normalize.css public/css/normalize.css
```

> Filename ./public/index.html include script source ./public/bundle.js

### First terminal

```
> $ npm start
```

### New terminal

```
> $ webpack --watch
```

## Git setup

* Make new repository on git
* Take note of remote origin path

### Commands

```
> $ git init
> $ git commit -m "first commit"
> $ git remote add origin **YOUR ORIGIN**
> $ git push -u origin master
```