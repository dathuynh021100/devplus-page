import "./Review.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const slide_data = [
  {
    author: "Quynh Nga",
    img: "https://devplus.edu.vn/assets/images/devplus/person2.png",
    job: "Menber DevPlus ++",
    title:
      "I learnt a lot of knowledge from experienced seniors of Dev plus. They help me to understand the procedure in running a real project. Additionally, taking part in activities such as workshops promote my soft skills.",
  },
  {
    author: "Thatsadaphone Inthapakdy",
    img: "https://devplus.edu.vn/assets/images/devplus/person3.png",
    job: "Menber DevPlus ++",
    title:
      "Dev plus help me to re-train about knowledge with technology, experience how to do the real project with senior developers by testing their current project, and share more experience with them. enjoy more events and workshops.",
  },
  {
    author: "Tien Thinh",
    img: "https://devplus.edu.vn/assets/images/devplus/person1.png",
    job: "Menber DevPlus ++",
    title:
      "This is an awesome programme which supports me too much in enhancing my skills and knowledge to become a developer. I feel very lucky because of joining Devplus.",
  },
];

function Review() {
  const settings = {
    customPaging: (i) => <div className="ft-slick__dots--custom"></div>,
    dots: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    responsive: [
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="review">
      <div className="review-container">
        <div className="carousel-title">
          <h2>What alumni saying</h2>
        </div>
        <Slider {...settings}>
          {slide_data.map((item, index) => (
            <div className="card" key={index}>
              <div className="rv-content">
                <div className="author-desc">
                  <div className="rv-desc">
                    <img
                      className="quote"
                      src="https://devplus.asia/assets/images/testimonial/style5/quote2.png"
                      alt=""
                    />
                    {item.title}
                  </div>
                  <div className="desc-img">
                    <img src={item.img} alt="" />
                  </div>
                </div>
                <div className="rv-details">
                  <div className="rv-name">{item.author}</div>
                  <div className="rv-job">{item.job}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Review;
