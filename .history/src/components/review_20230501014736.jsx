// GOOGLE REVIEW COMPONENT

import React from 'react';
import { Link } from 'react-router-dom';


const Review = () => {

    return (
        <div className="review">
            <div className="review__container">
                <div className="review__container__text">
                    <h2>What our customers say</h2>
                    <p>Our customers love us! Read what they have to say below. Aliquam erat volutpat. Curabitur ac orci ac lorem blandit volutpat. Sed ac sodales nibh, eu ornare ipsum. Nullam quis libero vitae mi mollis faucibus. Sed vel elit euismod, aliquet magna quis, lacinia nisl. Ut ac nibh sit amet odio eleifend posuere. Vivamus auctor, nisl eget ultricies luctus, sapien nulla mattis arcu, eu aliquam nisl velit eget urna. </p>
                    <Link to="/reviews" className="btn btn--primary">Read More</Link>
                </div>
                <div className="review__container__image">
                    <img src="https://images.unsplash.com/photo-1542744173-8e9a9dfaabe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="review" />
                </div>
            </div>
        </div>
    )
}

export default Review;