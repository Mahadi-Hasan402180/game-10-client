import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const UpdateReview = () => {
    const { id } = useParams();
    const review = useLoaderData();
    const { gameCoverImage, gameTitle, reviewDescription, rating, publishingYear, genres } = review;

    const { user } = useContext(AuthContext);

    // State for controlled components
    const [updatedRating, setUpdatedRating] = useState(rating);
    const [updatedGenres, setUpdatedGenres] = useState(genres);

    const handleUpdateReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedreview = {
            gameCoverImage: form.gameCoverImage.value,
            gameTitle: form.gameTitle.value,
            reviewDescription: form.reviewDescription.value,
            rating: updatedRating, 
            publishingYear: form.publishingYear.value,
            genres: updatedGenres,
        };

        // Send updated data to the server
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedreview),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Review updated successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                }
            });
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-5 border bg-cyan-50 border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-4xl text-center font-bold text-blue-900 mb-5">Update Review</h2>
            <form onSubmit={handleUpdateReview}>
                <div className="mb-4">
                    <label htmlFor="gameCoverImage" className="block font-medium">Game Cover Image (URL)</label>
                    <input
                        type="text"
                        id="gameCoverImage"
                        name="gameCoverImage"
                        defaultValue={gameCoverImage}
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
                        defaultValue={gameTitle}
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
                        defaultValue={reviewDescription}
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
                        value={updatedRating}
                        min="1"
                        max="10"
                        onChange={(e) => setUpdatedRating(e.target.value)}
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
                        defaultValue={publishingYear}
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
                        value={updatedGenres}
                        onChange={(e) => setUpdatedGenres(e.target.value)}
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

                <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg">
                    Update Review
                </button>
            </form>
        </div>
    );
};

export default UpdateReview;
