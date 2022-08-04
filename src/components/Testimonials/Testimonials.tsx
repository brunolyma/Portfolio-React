import Avatar1 from "../../assets/avatar1.jpg";
import Avatar2 from "../../assets/avatar2.jpg";
import Avatar3 from "../../assets/avatar3.jpg";
import Avatar4 from "../../assets/avatar4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./testimonials.css";

const clientsReview = [
  {
    avatar: Avatar1,
    client: "Chiquinha",
    comment:
      "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.",
  },
  {
    avatar: Avatar2,
    client: "Chaves",
    comment:
      "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.",
  },
  {
    avatar: Avatar3,
    client: "Kiko",
    comment:
      "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.",
  },
  {
    avatar: Avatar4,
    client: "Pópis",
    comment:
      "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Pagination]}
        className="container testimonials__container mySwiper"
      >
        {clientsReview &&
          clientsReview.map((review) => (
            <SwiperSlide key={review.client} className="testimonials">
              <div className="client__avatar">
                <img src={review.avatar} alt="" />
              </div>
              <h5 className="client__name">{review.client}</h5>
              <small className="client__review">{review.comment}</small>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
