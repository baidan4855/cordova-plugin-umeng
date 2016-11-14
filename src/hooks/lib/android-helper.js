
var fs = require("fs");
var path = require("path");
var utilities = require("./utilities");

module.exports = {
  setAppName: function() {
    var manifest = utilities.readManifest();
    manifest = manifest.replace(/(<activity[^>]*?) android:name="[^\"]+?"/m,'$1');
    manifest = manifest.replace('<activity','<activity android:name="com.ihealthlabs.plugins.UMActivity"');
    utilities.writeManifest(manifest);
  },
  removeAppName: function() {
    var manifest = utilities.readManifest();
    manifest = manifest.replace(/(<activity[^>]*?) android:name="[^\"]+?"/m,'$1 android:name="MainActivity"');
    utilities.writeManifest(manifest);
  }
};
