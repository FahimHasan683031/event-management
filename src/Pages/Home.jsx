import Banner from "../Components/Banner";
import Reviews from "../Components/Review/Reviews";
import Services from "../Components/Services";
import TeamMember from "../Components/Team/TeamMember";
import WhyChoseUs from "../Components/WhyChoseUs";
import WorkingProcess from "../Components/WorkingProcess";



const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WorkingProcess></WorkingProcess>
            <WhyChoseUs></WhyChoseUs>
            <TeamMember></TeamMember>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;