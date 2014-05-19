# gzotp

### what it does:

- it's wrapping following nodejs modules:
	- notp
	- qr
	- thirty-two

### how i do versioning:
`x.y.z`

- `x` means: it will break
- `y` means: it will not break but will contain more features
- `z` means: improvements, bug fixes, stuff like that.

in general this means you can set `x` as dependency through your package.json

### goals:

- clean generation of base64 encoded qr png's
- foolproof key generation
- usability

### how to use:

installation:  
`npm install gzotp`

usage:  

    var otp = require("gzotp");
    // generate key:
    var key = otp.gen();
    // generate uri:
    var uri = otp.uri(timebased /* true or false */, "description", key);
    // generate qr code:
    var qr = otp.qr(uri, cb);
    // where cb is like:
    var cb = function (uri) {
       console.log(uri); 
    }
    
### for usage there are:
`otp.hotp` for counter based tokens  
`otp.totp` for time based tokens

### for documentation about them take a look at:
https://github.com/guyht/notp


### todo:
- more notp abstraction for increased usability
