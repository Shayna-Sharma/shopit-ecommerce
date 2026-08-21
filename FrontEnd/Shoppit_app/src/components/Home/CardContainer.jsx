import HomeCard from "./HomeCard";

const CardContainer = () => {
    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            slug: "wireless-headphones",
            image: "https://via.placeholder.com/400",
            price: 2999,
        },
        {
            id: 2,
            name: "Smart Watch",
            slug: "smart-watch",
            image: "https://via.placeholder.com/400",
            price: 4999,
        },
        {
            id: 3,
            name: "Running Shoes",
            slug: "running-shoes",
            image: "https://via.placeholder.com/400",
            price: 3499,
        },
        {
            id: 4,
            name: "Laptop Bag",
            slug: "laptop-bag",
            image: "https://via.placeholder.com/400",
            price: 1999,
        },
    ];

    return (
        <div className="container mt-5">
            <div className="row">
                {products.map((product) => (
                    <HomeCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardContainer;