import React, { useState, useEffect } from "react";

import ReviewButton from "./ReviewButton";

import Review from "./Review";

export default function Reviews() {
  const reviewsData = [
    {
      clientName: "kaizen2023",
      reviewText:
        ' " Allan was great to work with! He is professional and listens to your needs. He is patient and seems to make his best effort to ensure your expectations are met. He takes his time to ensure there is a quality experience and product fulfillment. " ',
      rating: 5,
      //   clientImage: "/path/to/img.jpg",
    },
    {
      clientName: "mace4all",
      reviewText:
        ' " Allan provided prompt and excellent service! He understood my needs and came up with a solution promptly and implemented flawlessly. I will definitely be reaching out for ongoing maintenance and future projects for my website / company. " ',
      rating: 5,
      //   clientImage: "/path/to/img.jpg",
    },
    {
      clientName: "mettenberg",
      reviewText:
        ' " Second time using Allan, he is great, delivered ahead of schedule and was very easy to communicate with. Highly recommend, he will be my go to website guy for everything moving forward. " ',
      rating: 5,
      //   clientImage: "/path/to/img.jpg",
    },
    {
      clientName: "alexcalhau",
      reviewText:
        ' " Great experience working with Allan. He was very patient and timely with each of my requests, and the quality of work was awesome! Highly recommend his services! " ',
      rating: 5,
      //   clientImage: "/path/to/img.jpg",
    },
    {
      clientName: "careyrichie",
      reviewText:
        ' " Allan was amazing to work with! He responded quickly to all of my questions and requests. He made my website better than I could have ever imagined! I wish I could give 100 out of 5 stars. Thank you so much Allan! " ',
      rating: 5,
      //   clientImage: "/path/to/img.jpg",
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => {
      setFade(false);
      setCurrentReviewIndex((currentReviewIndex + 1) % reviewsData.length);
    }, 7000);

    return () => clearTimeout(timer);
  }, [currentReviewIndex, reviewsData.length]);

  const reviewClass = fade ? "review-card fade-out" : "review-card";

  return (
    <div className="review-container container sm:mt-8 lg:border-solid lg:border-8 lg:border-emerald-400">
      <div className="review-heading">
        <h1 className="text-5xl pt-10 text-center">Client Reviews</h1>
        {/* <h2 className="text-2xl">Client Review</h2> */}
      </div>
      <Review className={reviewClass} {...reviewsData[currentReviewIndex]} />
      <ReviewButton />
    </div>
  );
}
