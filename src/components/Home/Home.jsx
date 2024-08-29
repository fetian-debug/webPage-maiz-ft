import Style from "./home.module.css";
import img1 from "../../assets/images/img1.png";
import vector from "../../assets/images/vector.png";
import img2 from "../../assets/images/img2.png";
import imgPlace1 from "../../assets/images/imgPlace1.png";
import imgPlace2 from "../../assets/images/imgPlace2.png";
import imgPlace3 from "../../assets/images/imgPlace3.png";

import star from "../../assets/images/star.png";
import m3yan from "../../assets/images/m3yan.png";
import person from "../../assets/images/person.png";
import video from "../../assets/images/video.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
       <>
            {/* First Section */}
            <img src={star} alt='Main' className={Style.floweIcon} data-aos="fade-left" />
            <div className={Style.imageContainer}>
                <img src={img1} alt='Main' className={Style.Image} data-aos="zoom-in" />
                <div className={Style.headText}>
                    <div className={Style.headBackground} data-aos="fade-right">
                        Taste the authentic <br /> Saudi cuisine
                    </div>
                    <span>Among the best Saudi chefs in the world,<br /> serving you something beyond flavor.</span>
                    <Link to="/MAIZ/menu">
                    <button className={Style.headButton}>Our Menu</button>
                    </Link>
                </div>
            </div>
            <img src={vector} alt='Main' className={Style.circleIcon} data-aos="zoom-in" />
            {/* Second Section */}
            <div className={Style.secSection}>
                <span>
                    <img src={img2} alt='Main' className={Style.imgOne} data-aos="fade-up" />
                    <img src={vector} alt='Main' className={Style.circlesShape} />
                </span>
                <div className={Style.subContainer}>
                    <span className={Style.firstText} data-aos="fade-up">A distinctive dining destination<br /> inspired by the culture.</span>
                    <div className={Style.secText} data-aos="fade-up">Experience Al Balad old town of Jeddah vibes. </div>
                    <Link to="/MAIZ/venue">
                    <button className={Style.buttonVenue} data-aos="zoom-in">Our Venue</button>
                    </Link>
                    <div className={Style.imgesContainer}>
                        <img src={imgPlace1} alt='Main' data-aos="fade-left" className={Style.ImgScreen} />
                        <img src={imgPlace2} alt='Main' data-aos="fade-left" className={Style.ImgScreen} />
                        <img src={imgPlace3} alt='Main' data-aos="fade-left" className={Style.ImgScreen} />
                    </div>
                    <hr className={Style.breakLine} data-aos="fade-left" />
                </div>
                <div className={Style.diamondShape}>
                    <img src={m3yan} alt='Main' />
                </div>
            </div>
            {/* Third Section */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className={Style.thirdSection}>
                    <div className={Style.textDiv}>
                        <span className={Style.platText} data-aos="fade-right">
                            <span style={{ fontSize: '59.93px', color: '#243054', position: 'absolute', fontFamily: 'Cotoris' }}>
                                “
                            </span>
                            <br />
                            You can&#39;t go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.
                        </span>
                        <div className={Style.personDetail} data-aos="fade-right">
                            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13.32px', fontWeight: '500', lineHeight: '19.98px', color: 'rgba(36, 48, 84, 0.87)' }}>
                                Khalid Al Dawsry
                                <br />
                                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '9.99px', fontWeight: '500', lineHeight: '13.32px', color: 'rgba(36, 48, 84, 0.60)' }}>
                                    Jeddah, Saudi
                                </span>
                            </p>
                            <img src={person} style={{ borderRadius:'50%', width: '39.95px', height: '39.95px' }} alt='person' />
                        </div>
                        {/* Line Under Person Details */}
                        <div data-aos="fade-right" style={{ display: 'flex', alignItems: 'center', height: '10px', backgroundColor: '#D4A02B' }}>
                            <div style={{ height: '2px', width: '90%', backgroundColor: '#B39319' }}></div>
                            <div style={{ height: '3px', width: '10%', backgroundColor: '#07224D' }}></div>
                        </div>
                        <img src={star} alt='Flower' className={Style.flower} />
                    </div>
                    <img src={video} alt='Kabsa' className={Style.thirdSectionImage} />
                </div>
            </div>
            {/* Fourth Section */}
            <div className={Style.fourthSection}>
                <div className={Style.background_top}></div>
                <div className={Style.background_bottom}></div>
                <div className={Style.center}>
                    <img src={star} alt='Flower' data-aos="zoom-in" />
                    <div className={Style.textBottom} data-aos="zoom-in">A unique menu that reflects the true essence of the Saudi cuisine</div>
                    <Link to="/MAIZ/menu">
                    <button className={Style.buttonMenue} data-aos="zoom-in">Our Menu</button>
                    </Link>
                </div>
            </div>
        </>
    </>
  );
}
