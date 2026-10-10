import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api, { API_BASE_URL } from "../../api";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
    const {slug} = useParams();

    const [product , setProduct] = useState(null);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(()=>{
        setLoading(true);
        setError(null);
        setProduct(null);

        api.get(`products/${slug}`)
        .then((res)=>{
            setProduct(res.data);
        })
        .catch((err)=>{
            if(err.response?.status === 404){
                setError("Product Not Found");
            }else{
                setError("Unable to load the product. Please try again.");
            }
        })
        .finally(() => { 
            setLoading(false); 
        });
    },[slug]);

    if (loading) { 
        return (
             <div className="container mt-5 text-center"> 
                <p>Loading product...</p> 
            </div> 
        ); 
    }

    if (error) { 
        return ( 
            <div className="container mt-5 text-center"> 
                <h2>Oops!</h2>
                <p>{error}</p>
                <Link to="/" className="btn btn-primary"> 
                    Back to Home 
                </Link> 
            </div> 
        ); 
    } 
    if (!product) { 
        return null;
    }

    return (
    <div className="container mt-5">
        <div className="row align-items-start">
            <div className="col-12 col-md-6 mb-4">
                <div className="border rounded p-3 text-center">
                    <img
                        src={`${API_BASE_URL}${product.image}`}
                        alt={product.name}
                        className="img-fluid"
                        style={{
                            maxHeight: "450px",
                            objectFit: "contain",
                        }}
                    />
                </div>
            </div>

            <div className="col-12 col-md-6">
                <h1>{product.name}</h1>

                <h3 className="text-primary my-3">
                    ₹{product.price}
                </h3>

                <p className={styles.description}>
                    {product.description || "No description available."}
                </p>

                <Link
                    to="/"
                    className="btn btn-outline-secondary mt-3 mb-3"
                >
                    Back to Products
                </Link>
            </div>
        </div>
    </div>
);

  
};

export default ProductDetails