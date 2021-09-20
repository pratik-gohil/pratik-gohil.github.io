[
  {
    id: "611b64c285f7f1000140520f",
    comment:
      "Performed the work in the best way, quickly and efficiently.\nHe is highly recommended by me.\nI'm sure I'll hire his services again.",
    username: "karat24",
    created_at: "2021-08-17T07:29:24",
    value: 5.0,
    reviewer_country_code: "IL",
    reviewer_country: "Israel",
    encrypted_order_id: "FO8154EA9D182",
    score: 0.33844066,
    reviewer_industry: [],
    repeat_buyer: false,
    relevancy_score: 0.5,
    original_relevancy_score: 0.5,
  },
  {
    id: "609042fa1eea92000179b934",
    comment:
      "It was wonderful working with pratikgohil_ on my PWA project! He was fast and demonstrated a high level of understanding the technology. I will hire him again!",
    username: "dmc360i",
    created_at: "2021-05-03T18:39",
    value: 5.0,
    reviewer_country_code: "US",
    reviewer_country: "United States",
    encrypted_order_id: "FO71C918337C7",
    score: 0.0,
    repeat_buyer: false,
    relevancy_score: 0.0,
    original_relevancy_score: 0.5,
  },
].map((review_obj) => {
  const {
    comment,
    username,
    reviewer_country,
    reviewer_country_code,
    value,
  } = review_obj;
  var review = document.createElement("div");
  review.className = "review";
  review.innerHTML = `
            <p class="user"><a href="https://fiverr.com/${username}" target="_blank" class="username">${username}</a> <span class="stars"><i class="fas fa-star"></i>${value}</span></p>
            <p class="country"><img class="country_flag" src="https://lipis.github.io/flag-icon-css/flags/4x3/${reviewer_country_code.toLowerCase()}.svg"/> <span class="country_name">${reviewer_country}</span></p>
            <p class="comment">${comment}</p>
            `;

  document.querySelector(".reviews").appendChild(review);
});
