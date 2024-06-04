import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const firebaseConfig = {
	apiKey: "AIzaSyDqNIeeTdr9Db1ZunHk1ILL8Y7ghe37jVA",
	authDomain: "capstone-project-agrisense.firebaseapp.com",
	projectId: "capstone-project-agrisense",
	storageBucket: "capstone-project-agrisense.appspot.com",
	messagingSenderId: "417220384287",
	appId: "1:417220384287:web:68f67330102c5017d3272a",
	measurementId: "G-V0F2S2XSV6",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const user = auth.currentUser;

function updateUserProfile(user) {
	const username = user.displayName;
	const email = user.email;
	const photoURL = user.photoURL;
	const phoneNumber = user.phoneNumber;
	const providerData = user.providerData;
	const emailVerified = user.emailVerified;
	const uid = user.uid;
	console.log(
		username,
		email,
		photoURL,
		phoneNumber,
		providerData,
		emailVerified,
		uid
	);
	document.getElementById("username").textContent = username;
	document.getElementById("email").textContent = email;
	document.getElementById("photoURL").src = photoURL;
	document.getElementById("phoneNumber").textContent = phoneNumber;
	document.getElementById("providerData").textContent = providerData;
	document.getElementById("emailVerified").textContent = emailVerified;
	document.getElementById("uid").textContent = uid;
}

onAuthStateChanged(auth, (user) => {
	if (user) {
		updateUserProfile(user);
		const uid = user.uid;
		console.log(uid);
	} else {
		console.log("No user is signed in");
		window.location.href = "login.html";
	}
});
