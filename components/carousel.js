
import Slider from 'react-slick'
import Image from 'next/image'
import Head from 'next/head'


export default function Carousel() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: -15,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]

  }
  return <div style={{ position: "relative", top: -25, width: "100%", zIndex: 0 }}>
    <Head>
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
    <img src='/images/top.svg' style={{ width: "100%", height: "22px", position: 'relative', top: 22, zIndex: 1, preserve: false }} />


    <Slider {...settings}>
      {["gfwo-1.jpg","lego-1.jpg", "ocellatedturkey1-1.jpg", "nopa-1.jpg", "trogon-1.jpg", "pigu.jpg", "oror.jpg"].map((filename) => {
        return <div>
          <img src={`/images/carousel/${filename}`}/>
        </div>
      })}


    </Slider>
    <img src='/images/bottom.svg' style={{ width: "100%", height: "22px", position: 'relative', top: -22, zIndex: 1, preserve: false }} />
  </div >
}