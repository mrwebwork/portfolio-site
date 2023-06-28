import React from "react";

export default function Review({
  clientName,
  reviewText,
  rating,
  clientImage,
}) {
  return (
    <div className="review-card py-4">
      {/* <img src={clientImage} alt={`${clientName}'s profile`} /> */}
      <p className="review-p italic text-xl lg:text-2xl">{reviewText}</p>
      <h2 className="review-client pt-5">~ {clientName}</h2>
      <div className="stars-container pt-5">
        {[...Array(rating)].map((_, i) => (
          <img key={i} src="../star-image.png" alt="star-review-images" />
        ))}
      </div>
    </div>
  );
}
