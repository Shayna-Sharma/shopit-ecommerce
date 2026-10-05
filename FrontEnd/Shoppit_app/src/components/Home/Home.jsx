import Header from "./Header";
import CardContainer from "./CardContainer";
import { useState, useEffect } from "react";
import api from "../../api";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get("products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
            });
    }, []);

    return (
        <>
            <Header />
            <CardContainer products={products} />
        </>
    );
};

export default Home;