// GOOGLE REVIEW COMPONENT

import React from 'react';

const Review = () => {

    return (
        <div className="review">
            <div className="review--container">
              <h1 className="review--title">Clients Review</h1>
                <div className="review__container__text">
                <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/138606' frameborder='0' width='100%' height='1000'></iframe>
                </div>
            </div>
        </div>
    )
}

export default Review;