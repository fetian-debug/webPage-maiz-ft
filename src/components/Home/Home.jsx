import Style from "./home.module.css";
import img1 from "../../assets/images/img1.png";
import vector from "../../assets/images/vector.png";
import img2 from "../../assets/images/img2.png";
// import imgPlace1 from "../../assets/images/imgPlace1.jpeg";
// import imgPlace2 from "../../assets/images/imgPlace2.jpeg";
// import imgPlace3 from "../../assets/images/imgPlace3.jpeg";

import star from "../../assets/images/star.png";
import line from "../../assets/images/line.png";
import m3yan from "../../assets/images/m3yan.png";
import person from "../../assets/images/person.png";
import video from "../../assets/images/video.png";
import triangles from "../../assets/images/triangles.png";

export default function Home() {
  return (
    <>
      <header>
        <div className={Style.landing_page}>
          <div className={Style.text}>
            <p>Taste the authentic Saudi cuisine</p>
            <p>
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>
            <button>
              <a href="menu">Our Menu</a>
            </button>
          </div>
          <img src={img1} alt="image1" />
        </div>
        <img className={Style.vector} src={vector} alt="image" />
      </header>

      <main className={Style.main}>
        <div className={Style.section1}>
          <div className={Style.sct1_container}>
            <img className={Style.img2} src={img2} alt="image" />
            <div className={Style.sct1_text}>
              <p>A distinctive dining destination inspired by the culture.</p>
              <p>Experience Al Balad old town of Jeddah vibes.</p>
              <button>
                <a href="#">Our Venue</a>
              </button>
              {/* <div className={Style.sct1_imgs}>
          <img className={Style.imgPlace1} src={imgPlace1} alt="image" />
          <img className={Style.imgPlace1} src={imgPlace2} alt="image" />
          <img className={Style.imgPlace1} src={imgPlace3} alt="image" />
        </div> */}
              <div className={Style.sct1_footer}>
                <img src={line} alt="image" />
                <img src={m3yan} alt="image" />
              </div>
            </div>
          </div>
        </div>
        <div className={Style.section2}>
          <div className={Style.sct2_container}>
            <div className={Style.sct2_text}>
              <i className="fa-solid fa-quote-left" />
              <p className={Style.desc}>
                You can&#39;t go wrong with Chicken Mandi, I had it twice. The
                chicken was cooked perfectly, juicy &amp; soft (usually mandi
                chicken is a bit dry). I would defiantly recommend it.
              </p>
              <div className={Style.user_box}>
                <div className={Style.username}>
                  <p>Khalid Al Dawsry</p>
                  <p>Jeddah, Saudi</p>
                </div>
                <img className={Style.person} src={person} alt="user-image" />
              </div>
            </div>
            <div className={Style.video}>
              <img src={video} alt="video" />
            </div>
          </div>
        </div>
        <div className={Style.section3}>
          <div className={Style.sct3_container}>
            <img src={star} alt="image" />
            <p>
              A unique menu that reflects the true essence of the Saudi cuisine
            </p>
            <button>
              <a href="menu">Our Menu</a>
            </button>
            <img src={triangles} alt="image" />
          </div>
        </div>
      </main>
    </>
  );
}
