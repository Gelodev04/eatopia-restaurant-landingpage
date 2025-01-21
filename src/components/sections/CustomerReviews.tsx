import React from "react";
import ReviewCarousel from "../ui/ReviewCarousel";

export default function CustomerReviews() {
    

  return (
    <div id="reviews" className="mt-16" style={{ scrollMarginTop: "8rem" }}>
        <div className="text-center">
        <h1 className="text-2xl text-red-500 italic font-medium">
          Customer Say
        </h1>
        <p className="uppercase text-5xl font-bold tracking-widest">
          Review
        </p>
        </div>
      <ReviewCarousel />
    </div>
  );
}
