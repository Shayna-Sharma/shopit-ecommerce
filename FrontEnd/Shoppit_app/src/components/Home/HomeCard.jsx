import { Link } from "react-router-dom";
import styles from "./HomeCard.module.css";
import { API_BASE_URL } from "../../api";

const HomeCard = ({ product }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Link
                to={`/products/${product.slug}`}
                className={styles.link}
            >
                <div className={styles.card}>

                    <div className={styles.imageWrapper}>
                        <img
                            src={`${API_BASE_URL}${product.image}`}
                            alt={product.name}
                            className={styles.image}
                        />
                    </div>

                    <div className={styles.body}>
                        <h5 className={styles.title}>
                            {product.name}
                        </h5>

                        <p className={styles.price}>
                            ₹{product.price}
                        </p>
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default HomeCard;