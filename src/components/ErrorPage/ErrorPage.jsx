import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <h2 className="text-6xl text-orange-600 font-bold mt-64">Oops...</h2>
            <h3 className="text-2xl font-semibold mt-6">Page Not found</h3>
            <Link to='/'>
                <button className="btn btn-primary mt-6 text-white">Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;