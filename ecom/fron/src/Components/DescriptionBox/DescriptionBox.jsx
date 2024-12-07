import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className='description-box'>
            <div className="description-box-navigator">
                <div className="description-box-nav-box active">About Green Cart</div>
                <div className="description-box-nav-box-fade">Reviews</div>
            </div>
            <div className="description-box-description">
                <h2>Welcome to Green Cart</h2>
                <p>
                    Green Cart is the ultimate online platform for all your agricultural needs. Whether you're a small-scale gardener or a large-scale farmer, we provide a wide range of products designed to meet the diverse needs of the agriculture industry. From seeds and fertilizers to tools and equipment, we aim to be your one-stop shop for everything you need to grow and thrive.
                </p>
                <h3>Our Mission:</h3>
                <p>
                    At Green Cart, our mission is to empower farmers, gardeners, and agriculture enthusiasts by providing high-quality, sustainable, and affordable agricultural products. We believe that the right products can make a world of difference in helping you grow with confidence.
                </p>
                <h3>What We Offer:</h3>
                <ul>
                    <li>Wide Selection of Seeds: Choose from a variety of seeds for fruits, vegetables, flowers, and more.</li>
                    <li>Organic Fertilizers: Eco-friendly fertilizers to enhance the health of your soil and crops.</li>
                    <li>Gardening Tools & Equipment: Equip yourself with the best tools for planting, harvesting, and maintaining your garden or farm.</li>
                    <li>Pest Control Solutions: Protect your crops with safe and effective pest control products.</li>
                    <li>Expert Advice: Access gardening and farming tips through our blog or consult with experts for product recommendations.</li>
                </ul>
                <h3>Why Choose Green Cart?</h3>
                <ul>
                    <li>Quality Assurance: Only the best products sourced from trusted suppliers.</li>
                    <li>Sustainability: We offer eco-friendly options to support your sustainable agricultural practices.</li>
                    <li>Customer Focused: Excellent customer service to ensure a seamless shopping experience.</li>
                </ul>
            </div>
        </div>
    );
}

export default DescriptionBox;
