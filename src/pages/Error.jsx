import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-sky-50 flex flex-col items-center justify-center">
        <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
                <FaExclamationTriangle className="text-6xl text-red-500 mx-auto mb-4" />
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops!</h1>
                <p className="text-gray-600 mb-6">
                    We can not seem to find the page you are looking for.  It might be an incorrect link or the page may have been removed.
                </p>
                <div className="flex justify-center">
                    <Link to="/" className="btn btn-primary mr-4">Go Home</Link>

                </div>
            </div>
        </div>
    </div>
    );
};

export default Error;