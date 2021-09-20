fetch(
  "https://www.fiverr.com/ratings/index?user_id=78265358&as_seller=true&sort_by=recent&page_size=5",
  {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "https://pratikgohil.tk/",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  }
)
  .then((res) => res.json())
  .then((data) =>
    data.reviews.map((review_obj) => {
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
    })
  );
