import HomeCard from "./HomeCard";

const CardContainer = ({ products }) => {
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