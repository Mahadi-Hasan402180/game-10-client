import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';  
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
    const { user } = useContext(AuthContext); 
    const navigate = useNavigate();
    const [rating, setRating] = useState(1);  
    const [genres, setGenres] = useState("Action"); 

    const handleAddReview = async (e) => {
        e.preventDefault();
        console.log("addded reviews")
        const form = e.target;
        const gameCoverImage = form.gameCoverImage.value;
        const gameTitle = form.gameTitle.value;
        const reviewDescription = form.reviewDescription.value;
        const publishingYear = form.publishingYear.value;

        const reviewData = {
            gameCoverImage,
            gameTitle,
            reviewDescription,
            rating,
            publishingYear,
            genres,
            userEmail: user.email,
            userName: user.displayName,
        };

        console.log(reviewData);

        try {
            // Send the review data to the server
            const response = await fetch('https://game-server-zeta-five.vercel.app/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reviewData),
            });
            const data = await response.json();

            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your review has been submitted.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
                form.reset();  
                navigate('/');  
            }
        } catch (error) {
            console.error('Error adding review:', error);
            Swal.fire({
                title: 'Error!',
                text: 'There was an error submitting your review. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-5">Add New Review</h2>
            <form onSubmit={handleAddReview}>
                
                <div className="mb-4">
                    <label htmlFor="gameCoverImage" className="block font-medium">Game Cover Image (URL)</label>
                    <input
                        type="text"
                        id="gameCoverImage"
                        name="gameCoverImage"
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter game cover image URL"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="gameTitle" className="block font-medium">Game Title</label>
                    <input
                        type="text"
                        id="gameTitle"
                        name="gameTitle"
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter game title"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="reviewDescription" className="block font-medium">Review Description</label>
                    <textarea
                        id="reviewDescription"
                        name="reviewDescription"
                        required
                        rows="4"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Write your detailed review"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="rating" className="block font-medium">Rating (1-10)</label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        value={rating}
                        min="1"
                        max="10"
                        onChange={(e) => setRating(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="publishingYear" className="block font-medium">Publishing Year</label>
                    <input
                        type="number"
                        id="publishingYear"
                        name="publishingYear"
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter publishing year (e.g. 2021)"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="genres" className="block font-medium">Genres</label>
                    <select
                        id="genres"
                        name="genres"
                        value={genres}
                        onChange={(e) => setGenres(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    >
                        <option value="Action">Action</option>
                        <option value="RPG">RPG</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Strategy">Strategy</option>
                        <option value="Puzzle">Puzzle</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="userEmail" className="block font-medium">User Email</label>
                    <input
                        type="email"
                        id="userEmail"
                        name="userEmail"
                        value={user?.email || ''}
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="userName" className="block font-medium">User Name</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={user?.displayName || ''}
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg"
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default AddReview;
