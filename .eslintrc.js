module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
     "extends": ["eslint:recommended"],
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            
        },
        "sourceType": "module"
    },
    jsx-quotes: [ "classnames"],
     "plugins": [
        "react",
    ],
    "rules": {
       "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
         "semi": [
             "warn",
             "always"
         ],
    }
};