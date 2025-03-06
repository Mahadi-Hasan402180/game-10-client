import { Link } from "react-router-dom";


const AllReviewsCard = ({ review }) => {
    const { _id,gameCoverImage, gameTitle, reviewDescription, rating, publishingYear, genres } = review;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img className="h-52 w-64 p-2 rounded-xl"
                    src= {gameCoverImage}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{gameTitle}</h2>
                <p>{reviewDescription}</p>
                <div className="card-actions justify-end">
                    <Link to={`/review/${_id}`}><button className="btn btn-primary">Explore Details</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default AllReviewsCard;