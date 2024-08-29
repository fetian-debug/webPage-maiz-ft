import Style from "./about.module.css";
import person from "../../assets/images/person.png";

export default function About() {
  return (
    <div className={Style.aboutPage}>
    <p className={Style.aboutDescription} data-aos="zoom-in">
        Welcome to our venue, where we offer a unique dining experience inspired by the rich culture and history of our city. Our mission is to provide an exceptional experience with a blend of traditional flavors and modern elegance.
    </p>
    {/* Our Team Section */}
    <div className={Style.teamSection}>
        <h2 className={Style.teamTitle} data-aos="zoom-in">Meet Our Team</h2>
        <div className={Style.teamGrid}>
            <div className={Style.teamMember} data-aos="zoom-in">
            <img src={person} alt="Team Member 1" className={Style.teamImage} />
                <h3 className={Style.teamName}>Mohamed Mohamed</h3>
                <p className={Style.teamRole}>Manager</p>
                <p className={Style.teamBio}>Mohamed ensures that every guest has a memorable experience with impeccable service and attention to detail.</p>
            </div>
            <div className={Style.teamMember} data-aos="zoom-in">
            <img src={person} alt="Team Member 1" className={Style.teamImage} />
                <h3 className={Style.teamName}>Nour Ali</h3>
                <p className={Style.teamRole}>Head Chef</p>
                <p className={Style.teamBio}>Nour has over 20 years of experience in the culinary arts, bringing a unique blend of flavors to our dishes.</p>
            </div>
            <div className={Style.teamMember} data-aos="zoom-in">
            <img src={person} alt="Team Member 1" className={Style.teamImage} />
                <h3 className={Style.teamName}>Nasser Ahmed</h3>
                <p className={Style.teamRole}>Chef</p>
                <p className={Style.teamBio}>Nasser has over 10 years of experience in the culinary arts, bringing a unique blend of flavors to our dishes.</p>
            </div>
        </div>
    </div>

    {/* Creative Section */}
    <div className={Style.creativeSection} >
        <div className={Style.creativeContent}  >
            <h3 className={Style.creativeTitle} data-aos="fade-up">Our Story</h3>
            <p className={Style.creativeText} data-aos="fade-up">
                Dive into the story behind our establishment and discover the passion that drives us to deliver exceptional dining experiences.
            </p>
        </div>
    </div >
</div >
  )
}
