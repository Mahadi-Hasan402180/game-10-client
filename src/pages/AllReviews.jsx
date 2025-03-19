import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllReviewsCard from "../components/AllReviewsCard";

const AllReviews = () => {
    const loadedAllReviews = useLoaderData();
    console.log("Loaded Dataaaaaaaaaaaaaaaa:", loadedAllReviews);
    const [reviews, setReviews] = useState(loadedAllReviews);
    const [sortType, setSortType] = useState("");
    const [genreFilter, setGenreFilter] = useState("");


    const uniqueGenres = [...new Set(loadedAllReviews.map(review => review.genres))];


    const handleSort = (type) => {
        let sortedReviews = [...reviews];
        if (type === "rating") {
            sortedReviews.sort((a, b) => b.rating - a.rating);
        } else if (type === "year") {
            sortedReviews.sort((a, b) => b.publishingYear - a.publishingYear);
        }
        setSortType(type);
        setReviews(sortedReviews);
    };

    const handleFilter = (selectedGenre) => {
        setGenreFilter(selectedGenre);
        if (selectedGenre === "All") {
            setReviews(loadedAllReviews);
        } else {
            const filteredReviews = loadedAllReviews.filter(review => review.genres === selectedGenre);
            setReviews(filteredReviews);
        }
    };

    return (
        <div className="m-10 w-11/12 mx-auto">
            <h1 className="text-4xl rounded-xl font-black text-center text-gray-500 bg-blue-100 p-2">
                All Game Reviews
            </h1>


            <div className="flex justify-between items-center my-6">
                <select
                    className="border-red-800 bg-blue-200 p-2 rounded-lg"
                    onChange={(e) => handleSort(e.target.value)}
                    value={sortType}
                >
                    <option value="">Sort By</option>
                    <option value="rating">Rating (High to Low)</option>
                    <option value="year">Year (Newest to Oldest)</option>
                </select>
                <select
                    className="border p-2 bg-blue-200 rounded-lg"
                    onChange={(e) => handleFilter(e.target.value)}
                    value={genreFilter}
                >
                    <option value="All">All Genres</option>
                    {uniqueGenres.map((genre, index) => (
                        <option key={index} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                {reviews.map((review) => (
                    <AllReviewsCard
                        key={review._id}
                        review={review}
                        reviews={reviews}
                        setReviews={setReviews}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllReviews;
