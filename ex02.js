
const reviews = [4.5, 4.0, 5.0, 1.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5];

function getReviews(acc, review) {
  review = review.toFixed(1);
  acc[review] = acc[review] ? acc[review] + 1 : 1;
  return acc;
}

const reviewsCount = reviews.reduce(getReviews, {});

console.log(reviewsCount); // { '4.5': 2, '4.0': 2, '5.0': 3, '1.0': 3, '3.0': 1 }