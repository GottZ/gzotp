# gzotp

### what it does:

- it's wrapping following nodejs modules:
	- notp
	- qr
	- thirty-two

### goal:

- clean generation of base64 encoded qr png's
- foolproof key generation

### haw to use:

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


### PS:
this is not the final version.  
i'll add some more abstraction to notp so it will be easyer to use.
