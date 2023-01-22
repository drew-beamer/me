
import Slider from 'react-slick'


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
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

    }
    return <div style={{position: "relative", top: -25, width: "100%", zIndex: 0}}>
        <img src='/images/top.svg' style={{ width: "100%", height: "22px", position: 'relative', top: 22, zIndex: 1, preserve: false }} />


        <Slider {...settings}>
            {["gfwo-1.jpg", "brilliant.jpg", "lego-1.jpg", "gallinule.jpg", "ocellatedturkey1-1.jpg", "nopa.jpg", "trogon-1.jpg", "pigu.jpg", "weme-1.jpg", "oror.jpg", "ybfl-1.jpg"].map((filename) => {
                return <div>
                    <img src={`/images/carousel/${filename}`}/>
                </div>
            })}


        </Slider>
        <img src='/images/bottom.svg' style={{ width: "100%", height: "22px", position: 'relative', top: -22, zIndex: 1, preserve: false }}  />
    </div >
}