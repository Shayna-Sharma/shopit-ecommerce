import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram , FaFacebook , FaXTwitter} from "react-icons/fa6";
import styles from "./Footer.module.css";

const Footer = () => {
    return(
        <footer className={`bg-dark text-white ${styles.footer}`}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">  
                        <h5 className="fw-bold">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link className={`${styles.footerLink} text-white text-decoration-none d-flex align-items-center gap-2`} to="/">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link className={`${styles.footerLink} text-white text-decoration-none d-flex align-items-center gap-2`} to="/products">Products</Link>
                            </li>
                            <li className="mb-2">
                                <Link className={`${styles.footerLink} text-white text-decoration-none d-flex align-items-center gap-2`} to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h5 className="fw-bold">Follow Us</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="https://instagram.com" target='_blank' rel='norefferer' className={`${styles.footerLink} text-white text-decoration-none d-flex align-items-center gap-2`}><FaInstagram size={20}/> Instagram</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://facebook.com" target='_blank' rel='norefferer' className={`${styles.footerLink} text-white text-decoration-none d-flex align-items-center gap-2`}><FaFacebook size={20}/> Facebook</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://twitter.com" target='_blank' rel='norefferer' className={`${styles.footerLink} text-white text-decoration-none d-flex align-items-center gap-2`}><FaXTwitter size={20}/> Twitter</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-center mt-4 mb-0">© 2026 Shoppit. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer