import { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const MyReviews = () => {
    const { user } = useContext(AuthContext); 
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://game-server-zeta-five.vercel.app/myReviews?email=${user.email}`)
                .then(res => res.json())
                .then(data => setReviews(data))
                .catch(error => console.error("Error fetching reviews:", error));
        }
    }, [user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://game-server-zeta-five.vercel.app/reviews/${id}`, { method: "DELETE" })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your review has been removed.", "success");
                            setReviews(reviews.filter(review => review._id !== id));
                        }
                    });
            }
        });
    };

    return (
        <div className="m-10 w-11/12 mx-auto">
            <h1 className="text-4xl font-black text-center bg-blue-200 p-2">My Reviews</h1>
            {reviews.length === 0 ? (
                <p className="text-center text-gray-500 mt-4">No reviews added yet.</p>
            ) : (
                <table className="table-auto w-full border-collapse border border-gray-300 my-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2">game_cover_img</th>
                            <th className="border px-4 py-2">Game Title</th>
                            <th className="border px-4 py-2">Rating</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map(review => (
                            <tr key={review._id}>
                                <td className="border px-4 py-2"><img className="w-40 h-20" src={review.gameCoverImage} alt="" /></td>
                                <td className="border px-4 py-2">{review.gameTitle}</td>
                                <td className="border px-4 py-2">{review.rating}</td>
                                <td className="border px-4 py-2">
                                    <button className="btn btn-primary mx-2">
                                        <a href={`/updateReview/${review._id}`}>Update</a>
                                    </button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(review._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MyReviews;
