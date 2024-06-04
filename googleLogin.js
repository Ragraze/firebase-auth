import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider,
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
const auth = getAuth();
auth.languageCode = "en";
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
provider.setCustomParameters({
	login_hint: "user@example.com",
});

const googleLoginPopup = document.getElementById("google-login-popup");
googleLoginPopup.addEventListener("click", function () {
	signInWithPopup(auth, provider)
		.then((result) => {
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			const user = result.user;
			console.log(user);
			window.location.href = "welcome.html";
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.customData.email;
			const credential = GoogleAuthProvider.credentialFromError(error);
		});
});

const googleLoginRedirect = document.getElementById("google-login-redirect");
googleLoginRedirect.addEventListener("click", function () {
	signInWithRedirect(auth, provider);
});
getRedirectResult(auth)
	.then((result) => {
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const token = credential.accessToken;
		const user = result.user;
		res.status(200);
		window.location.href = "welcome.html";
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		const email = error.customData.email;
		const credential = GoogleAuthProvider.credentialFromError(error);
		console.error(email, credential);
		res.status(errorCode).json({ error: errorMessage });
	});
