
var admin = require("firebase-admin");

var serviceAccount = require("../apiagencevirtuelle-firebase-adminsdk-44fcs-083678fcb7.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore(); 
//db.settings({ ignoreUndefinedProperties: true })

module.exports = { admin, db } ;