const { admin } = require("../config/firebase");

const verifyTokenBeforeLogin = async (req, res, next) => {
	const idToken = req.cookies.access_token;
	if (!idToken) {
		return res.status(403).redirect("/api/login");
		// res.json({ error: "No token provided" });
	}

	try {
		const decodedToken = await admin.auth().verifyIdToken(idToken);
		req.user = decodedToken;
		next();
	} catch (error) {
		console.error("Error verifying token:", error);
		return res.status(403).json({ error: "Unauthorized" });
	}
};
const verifyTokenAfterLogin = async (req, res, next) => {
	const idToken = req.cookies.access_token;
	if (idToken) {
		try {
			const decodedToken = await admin.auth().verifyIdToken(idToken);
			req.user = decodedToken;
			return res.redirect("/api/dashboard");
		} catch (error) {
			next();
			// console.error("Error verifying token:", error);
			// return res.status(403).json({ error: "Unauthorized" });
		}
	} else {
		next(); 
		// Proceed to the next middleware or route handler if no token
		// res.json({ error: "No token provided" });
	}
};

module.exports = {
	verifyTokenBeforeLogin,
	verifyTokenAfterLogin,
};
