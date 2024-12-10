import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slick = () => {
  // ตั้งค่า options ของ react-slick
  const settings = {
    dots: false, // แสดงจุดบอกตำแหน่ง
    infinite: true, // หมุนวนเมื่อถึงจุดสุดท้าย
    speed: 500, // ความเร็วการเลื่อน (ms)
    slidesToShow: 1, // จำนวน slides ที่แสดง
    slidesToScroll: 1, // จำนวน slides ที่เลื่อนทีละหนึ่งครั้ง
    autoplay: true, // เปิด autoplay
    autoplaySpeed: 3000, // ความเร็ว autoplay (ms)
    arrows: false, // แสดงลูกศร
  };

  return (
    <div className="container mx-auto py-2">
  <Slider {...settings}>
    <div>
      <img
        src="image/kfc1.jpg"
        alt="Slide 1"
        className="w-full  object-cover" // ปรับความสูงที่นี่
      />
    </div>
    <div>
      <img
        src="image/kfc1.jpg"
        alt="Slide 1"
        className="w-full  object-cover" // ปรับความสูงที่นี่
      />
    </div>
    <div>
      <img
        src="image/kfc1.jpg"
        alt="Slide 1"
        className="w-full  object-cover" // ปรับความสูงที่นี่
      />
    </div>
  
  </Slider>
</div>

  );
};

export default Slick;
