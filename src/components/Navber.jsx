import { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import userIcon from "../assets/user.png";
import game from "../assets/GamR Cottage.png";

const Navber = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOutUser();
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content text-blue-900 font-semibold bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/allreviews">All Reviews</Link></li>
                        <li><Link to="/addReview">Add Review</Link></li>
                        <li><Link to="/myReviews">My Reviews</Link></li>
                        <li><Link to="/myWatchlist">Game WatchList</Link></li>
                    </ul>
                </div>
                <Link to="/" className="ml-3">
                    <img className="w-48 rounded-lg" src={game} alt="Logo" />
                </Link>
            </div>

            <div className="navbar-center text-blue-900 font-semibold hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/allreviews">All Reviews</Link></li>
                    <li><Link to="/addReview">Add Review</Link></li>
                    <li><Link to="/myReviews">My Reviews</Link></li>
                    <li><Link to="/myWatchlist">Game WatchList</Link></li>
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-3">
                <input type="checkbox" value="synthwave" className="toggle theme-controller" />

              
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
                            <div className="w-10 h-10 rounded-full border border-gray-300">
                                <img src={user.photoURL || userIcon} alt="User Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            <li><p className="text-center font-semibold">{user.email || "User"}</p></li>
                        </ul>
                    </div>
                ) : (
                    <img src={userIcon} alt="Default Icon" className="w-10 h-10 rounded-full border border-gray-300" />
                )}

                {user ? (
                    <button onClick={handleLogout} className="btn btn-primary">Log Out</button>
                ) : (
                    <Link to="/auth/login" className="btn btn-primary">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navber;
