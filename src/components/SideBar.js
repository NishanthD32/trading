import { useNavigate } from "react-router-dom"

export default function SideBar(){
   const navigate = useNavigate()
    return(
        <div className="absolute inset-x-0 top-0 flex flex-col space-y-4">
            <button className="btn btn-outline" onClick={()=>navigate('/')}>DASHBORD</button>
            <button className="btn btn-outline " onClick={()=>navigate('/user/')}>USER</button>
            <button className="btn btn-outline " onClick={()=>navigate('/mentor/')}>MENTOR</button>
            <button className="btn btn-outline " onClick={()=>navigate('/notes/')}>TRADING NOTES</button>
        </div>
    )
}