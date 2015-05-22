cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.barcodescanner/www/barcodescanner.js",
        "id": "com.phonegap.plugins.barcodescanner.BarcodeScanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.speech/SpeechRecognizer.js",
        "id": "com.phonegap.plugins.speech.SpeechRecognizer",
        "clobbers": [
            "plugins.speechrecognizer"
        ]
    },
    {
        "file": "plugins/com.rjfun.cordova.plugin.iflyspeech/www/speech.js",
        "id": "com.rjfun.cordova.plugin.iflyspeech.speech",
        "clobbers": [
            "navigator.speech"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/me.rahul.plugins.speechrecognition/www/SpeechRecognition.js",
        "id": "me.rahul.plugins.speechrecognition.SpeechRecognition",
        "clobbers": [
            "window.speechrecognition"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.barcodescanner": "2.0.1",
    "com.phonegap.plugins.speech": "1.0.0",
    "com.rjfun.cordova.plugin.iflyspeech": "0.0.2",
    "cordova-plugin-whitelist": "1.0.1-dev",
    "me.rahul.plugins.speechrecognition": "0.0.1",
    "org.apache.cordova.geolocation": "0.3.12"
}
// BOTTOM OF METADATA
});