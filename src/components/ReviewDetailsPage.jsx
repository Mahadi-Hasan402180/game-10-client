import React, { useContext, useEffect } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const ReviewDetailsPage = () => {
    const { id } = useParams();
    const review = useLoaderData();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        console.log("Fetched review:", review);
    }, [review]);

    if (!review) {
        return <p>Loading...</p>;
    }

    const {
        gameCoverImage = '',
        gameTitle = 'Unknown Game',
        reviewDescription = 'No description available.',
        rating = 'N/A',
        genres = 'N/A'
    } = review;

    const handleAddToWatchlist = () => {
        if (!user) return;

        const watchlistItem = {
            reviewId: id,
            gameTitle,
            gameCoverImage,
            reviewDescription,
            rating,
            genres,
            reviewerName: user.displayName || 'Anonymous',
            reviewerEmail: user.email || 'Not provided',
            userEmail: user.email,
            username: user.displayName
        };

        fetch('https://game-server-zeta-five.vercel.app/watchlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(watchlistItem)
        });
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <img
                src={gameCoverImage || 'default-placeholder.jpg'}
                alt={gameTitle}
                className="w-full h-64 object-cover rounded-md"
            />
            <h2 className="text-2xl font-bold mt-4">{gameTitle}</h2>
            <p className="mt-2 text-gray-600">{reviewDescription}</p>
            <p className="mt-2"><strong>Rating:</strong> {rating}/10</p>
            <p className="mt-2"><strong>Genres:</strong> {genres}</p>


            {user && (
                <>
                    <p className="mt-2"><strong>Reviewer Name:</strong> {user.displayName || 'Anonymous'}</p>
                    <p className="mt-2"><strong>Reviewer Email:</strong> {user.email || 'Not provided'}</p>

                    <Link to='/myWatchlist'>
                        <button onClick={handleAddToWatchlist} className="mt-4 px-4 py-2  bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                            Add to WatchList
                        </button>
                    </Link>
                </>
            )}
        </div>
    );
};

export default ReviewDetailsPage;
