// Imports
const { initializeFirebaseApp, restore } = require("firestore-export-import");
const serviceAccount = require("../firebase/serviceAccount.json");

// JSON To Firestore
const jsonToFirestore = async () => {
	try {
		console.log("Initialzing Firebase");
		initializeFirebaseApp(serviceAccount);
		console.log("Firebase Initialized");

		restore("../firebase/weps.json");
		console.log("Upload Success");
	} catch (error) {
		console.log(error);
	}
};

jsonToFirestore();
