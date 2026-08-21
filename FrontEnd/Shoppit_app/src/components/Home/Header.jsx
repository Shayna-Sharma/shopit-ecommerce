import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className="py-5" style={{ backgroundColor: "#6050DC" }}>
            <div className="container">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bold">Welcome To Your Favorite Store</h1>
                    <p className="lead text-white-75 mb-4">Discover the Latest Trends with our Modern Collection</p>
                    <Link to="/products" className="btn btn-light btn-lg rounded-pill px-4 py-2">Shop Now</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;