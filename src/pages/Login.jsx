import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa"; 

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const { logInUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false); 
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then((result) => {
                setUser(result.user);
                navigate(location?.state || "/");
            })
            .catch((err) => {
                setError("Invalid email or password. Please try again.");
            });
    };

   
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                navigate(location?.state || "/");
            })
            .catch((err) => {
                setError("Google authentication failed. Try again.");
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
            <div className="card bg-base-100 w-full max-w-lg shadow-2xl p-8">
                <h1 className="text-4xl font-bold text-center mb-4">Login to Your Account</h1>
                
                <form onSubmit={handleLogin} className="space-y-4">
                    
                    <label className="block text-lg font-medium">Email</label>
                    <input type="email" name="email" className="input w-full" placeholder="Enter your email" required />

                 
                    <label className="block text-lg font-medium">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"} 
                            name="password"
                            className="input w-full pr-10"
                            placeholder="Enter your password"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)} 
                            className="absolute right-3 top-3 text-gray-500"
                        >
                            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                        </button>
                    </div>

                   
                    <Link to="/auth/forgot-password" className="text-sm text-blue-600">
                        Forgot Password?
                    </Link>

                    
                    {error && <p className="text-sm text-red-600">{error}</p>}

                    
                    <button className="btn btn-primary w-full mt-4">Login</button>
                </form>

                
                <div className="text-center mt-4">
                    <button onClick={handleGoogleLogin} className="btn text-blue-600 btn-outline w-full flex items-center justify-center gap-2">
                        <FaGoogle />
                        Login With Google
                    </button>
                </div>

                
                <p className="text-center mt-4">
                    Don’t have an account?{" "}
                    <Link to="/auth/register" className="text-red-600 font-semibold">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
