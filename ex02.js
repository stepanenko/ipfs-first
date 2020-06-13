
const reviews = [4.5, 4.0, 5.0, 5.0, 3.0, 4.0, 5.0, 4.5];

function getReviews(acc, review) {
  review = review.toFixed(1);
  acc[review] = acc[review] ? acc[review] + 1 : 1;
  return acc;
}

const reviewsCount = reviews.reduce(getReviews, {});
// console.log(reviewsCount);


// Moore's answer:
function groupBy(acc, review) {
  const count = acc[review] || 0;
  return { ...acc, [review]: count + 1 };
}

const countGroupedByReview = reviews.reduce(groupBy, {});
console.log(countGroupedByReview);
