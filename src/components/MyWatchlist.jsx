import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyWatchlist = () => {
    const { user } = useContext(AuthContext); 
    const [watchlist, setWatchlist] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://game-server-zeta-five.vercel.app/reviews?userEmail=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setWatchlist(data);
                    setLoading(false);
                });
        }
    }, [user]);

    const handleRemove = (id) => {
        fetch(`https://game-server-zeta-five.vercel.app/reviews/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(() => {
                setWatchlist(prev => prev.filter(item => item._id !== id));
            });
    };

    if (loading) {
        return <p className="text-center text-gray-600">Loading watchlist...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">My Watchlist</h2>

            {watchlist.length === 0 ? (
                <p className="text-gray-500">Your watchlist is empty.</p>
            ) : (
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Game</th>
                            <th className="border p-2">Rating</th>
                            <th className="border p-2">Genre</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {watchlist.map((item) => (
                            <tr key={item._id} className="text-center">
                                <td className="border p-2 flex items-center gap-2">
                                    <img src={item.gameCoverImage} alt={item.gameTitle} className="w-10 h-10 rounded" />
                                    {item.gameTitle}
                                </td>
                                <td className="border p-2">{item.rating}/10</td>
                                <td className="border p-2">{item.genres}</td>
                                <td className="border p-2">
                                    <button
                                        onClick={() => handleRemove(item._id)}
                                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MyWatchlist;
