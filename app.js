var base32 = require("thirty-two");
var notp = require("notp");

var QREncoder = require("qr").Encoder;

var charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz!@#$%^&*()<>?/[]{},.:;";

module.exports = {
	hotp: notp.hotp,

	totp: notp.totp,

	gen: function () {
		var key = "";
		for (var i = 0; i < 35; i++) {
			key += charset.charAt((Math.random() *charset.length) |0);
		}
		return key;
	},

	uri: function (timebased, description, key) {
		return "otpauth://" + (timebased ? "t" : "h") + "otp/" + description + "?secret=" + base32.encode(key);
	},

	qr: function (uri, cb) {
		var enc = new QREncoder;
		enc.on("end", function (png) {
			cb({
				uri: "data:image/png;base64," + png.toString("base64"),
				raw: png}
			);
		});
		enc.encode(uri);
	}
}
