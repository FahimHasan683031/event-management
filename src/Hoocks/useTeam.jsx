

import { useEffect, useState } from "react";


const useTeam = () => {
    const [members, setMember]=useState([])
    useEffect(()=>{
        fetch('/teamMamber.json')
        .then(res => res.json())
        .then(data=>setMember(data))
    },[])
    return members

};

export default useTeam;






