import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Row = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4, // จำนวนโลโก้ที่แสดงพร้อมกัน
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // เวลาในการเลื่อน (มิลลิวินาที)
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // สำหรับหน้าจอขนาดเล็ก
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // สำหรับหน้าจอขนาดเล็กมาก
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mt-10 px-14">
      <Slider {...settings}>
        <div>
          <img src="image/React.svg" alt="React Logo" className="h-16 mx-auto" />
        </div>
        <div>
          <img src="image/tailwind.png" alt="Tailwind Logo" className="h-16 mx-auto" />
        </div>
        <div>
          <img src="image/node.png" alt="Node.js Logo" className="h-16 mx-auto" />
        </div>
        <div>
          <img src="image/mysql-logo.svg" alt="MySQL Logo" className="h-16 mx-auto" />
        </div>
        <div>
          <img src="image/docker.svg" alt="Docker Logo" className="h-16 mx-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default Row;
