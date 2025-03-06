import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError("Password must contain an uppercase, lowercase, and be at least 6 characters.");
            return;
        }

        try {
            const result = await createNewUser(email, password);
            const user = result.user;

            await updateUserProfile({ displayName: name, photoURL: photo });
            setUser({ ...user, displayName: name, photoURL: photo });

            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
            <div className="card bg-base-100 w-full max-w-lg shadow-2xl p-6">
                <h1 className="text-4xl font-bold text-center mb-4">Register Your Account</h1>
                <form onSubmit={handleForm} className="space-y-4">
                    <label className="block text-lg font-medium">Your Name</label>
                    <input type="text" name="name" className="input w-full" placeholder="Full Name" required />

                    <label className="block text-lg font-medium">Photo URL</label>
                    <input type="text" name="photo" className="input w-full" placeholder="Photo URL" />

                    <label className="block text-lg font-medium">Email</label>
                    <input type="email" name="email" className="input w-full" placeholder="Enter your email" required />

                    <label className="block text-lg font-medium">Password</label>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} name="password" className="input w-full pr-10" placeholder="Enter your password" required />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-500">
                            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                        </button>
                    </div>

                    {error && <p className="text-sm text-red-600">{error}</p>}

                    <button className="btn btn-primary w-full mt-4">Register</button>
                    <p className="text-center">
                        Already have an account? <Link to="/auth/login" className="text-green-600 font-semibold">Login</Link>
                    </p>
                </form>

                <div className="text-center mt-4">
                    <button onClick={handleGoogleLogin} className="btn text-blue-600 btn-outline w-full flex items-center justify-center gap-2">
                        <FaGoogle />
                        Login With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
