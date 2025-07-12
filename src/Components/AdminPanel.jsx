import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
function AdminPanel(){
    const navigate=useNavigate();
    const [loading,setLoading]=useState(true);
    const [isAdmin,setIsAdmin]=useState(false);
    
    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem("user"));
        if(user.isAdmin || user.role ==='admin'){
           setIsAdmin(true)
        }else{
            navigate('/');
        }
        setLoading(false);
    },[]);
    if(loading) return <p>در حال بررسی ...</p>;
    if(!isAdmin) return null;
    return(
        <div className="">admin panel</div>
    )
}

export default AdminPanel