import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase/config";
import { firestoreOperations } from "./firebase/firestoreRefs";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showTerms, setShowTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  // Email/Password Signup
  const handleEmailSignup = async (e) => {
    e.preventDefault();
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Validate password length
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Show terms and conditions
    setShowTerms(true);
  };

  // Proceed with signup after accepting terms
  const proceedWithSignup = async (authMethod = "email") => {
    setLoading(true);
    setError("");

    try {
      let userCredential;

      if (authMethod === "email") {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
      } else if (authMethod === "google") {
        const provider = new GoogleAuthProvider();
        userCredential = await signInWithPopup(auth, provider);
      }

      const user = userCredential.user;

      // Create user document in Firestore
      await firestoreOperations.setUser(user.uid, {
        email: user.email,
        createdAt: new Date().toISOString(),
        profileComplete: false,
        walletLinked: false,
      });

      console.log("User created:", user.uid);

      // Navigate to profile setup
      navigate("/profile-setup");
    } catch (error) {
      console.error("Signup error:", error);
      setError(getErrorMessage(error.code));
      setShowTerms(false);
    } finally {
      setLoading(false);
    }
  };

  // Google Auth Signup
  const handleGoogleSignup = () => {
    setShowTerms(true);
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/email-already-in-use":
        return "This email is already registered. Please login instead.";
      case "auth/invalid-email":
        return "Invalid email address.";
      case "auth/operation-not-allowed":
        return "Email/password accounts are not enabled.";
      case "auth/weak-password":
        return "Password is too weak. Please use a stronger password.";
      default:
        return "Signup failed. Please try again.";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-950">
      <div className="max-w-md w-full">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Join BlockPost
            </h1>
            <p className="text-slate-400 text-sm">
              Create your account and start posting
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Signup Form */}
          <form onSubmit={handleEmailSignup} className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-100"
                placeholder="Enter your email"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-100"
                placeholder="Create a password"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-100"
                placeholder="Confirm your password"
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-slate-900 text-slate-400">Or continue with</span>
            </div>
          </div>

          {/* Google Signup Button */}
          <button
            onClick={handleGoogleSignup}
            disabled={loading}
            className="w-full py-3 bg-slate-800 hover:bg-slate-700 disabled:bg-slate-700 disabled:cursor-not-allowed border border-slate-700 rounded-lg font-medium transition-colors flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign up with Google
          </button>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-slate-400 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium">
                Sign in
              </Link>
            </p>
          </div>

          {/* Back to Landing */}
          <div className="mt-4 text-center">
            <Link to="/" className="text-slate-400 hover:text-slate-200 text-sm">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>

      {/* Terms and Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            
            <div className="space-y-4 text-slate-300 text-sm mb-6">
              <p>
                <strong>Welcome to BlockPost!</strong> By creating an account, you agree to the
                following terms:
              </p>

              <div>
                <h3 className="font-semibold text-slate-100 mb-2">1. Account Responsibility</h3>
                <p>
                  You are responsible for maintaining the security of your account and any
                  activities that occur under your account.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-100 mb-2">2. Content Ownership</h3>
                <p>
                  You retain ownership of all content you post. BlockPost creates cryptographic
                  hashes of your content for verification purposes.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-100 mb-2">3. Blockchain Integration</h3>
                <p>
                  Content hashes are stored on the blockchain. Once posted, these hashes are
                  immutable and cannot be deleted from the blockchain.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-100 mb-2">4. Wallet Connection</h3>
                <p>
                  Connecting a MetaMask wallet is optional but required for posting content.
                  You are responsible for the security of your wallet.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-100 mb-2">5. Prohibited Content</h3>
                <p>
                  You may not post content that is illegal, harmful, threatening, abusive,
                  harassing, or violates any laws or regulations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-100 mb-2">6. Privacy</h3>
                <p>
                  We collect and store your email, profile information, and wallet address (if
                  linked). This data is used to provide our services.
                </p>
              </div>

              <p className="text-slate-400">
                By clicking "I Accept", you confirm that you have read and agree to these terms
                and conditions.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setShowTerms(false)}
                className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => proceedWithSignup(formData.email ? "email" : "google")}
                disabled={loading}
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors"
              >
                {loading ? "Creating account..." : "I Accept"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
