import { useEffect } from "react";
import useTeam from "../../Hoocks/useTeam";
import TeamCard from "./TeamCard";
import Aos from "aos";
import "aos/dist/aos.css"

const TeamMember = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    const members = useTeam()
    return (
        <div data-aos="fade-up" className="max-w-screen-xl mx-auto px-4 my-32 text-center">
            <p className="text-lg font-medium text-orange-400 py-3">Our Team</p>
                <h1 className="text-4xl font-bold text-[#242424] leading-[50px] mb-12">The Best Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
                {
                    members?.map(member=><TeamCard key={member.id} member={member}></TeamCard>)
                }
            </div>
        </div>
    );
};

export default TeamMember;