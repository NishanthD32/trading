import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function Base({children}){
    return(
      <div data-theme="cupcake">
          <div className="flex flex-col w-full">
  <div className="grid h-20 card bg-base-100 rounded-box place-items-center"><NavBar/></div>  
</div>
<div className="flex w-full h-screen ">
  <div className="grid h-20 flex-grow card bg-base-100 rounded-box place-items-center w-1/6 h-full"><SideBar/></div>
  
  <div className="grid h-20 flex-grow card  rounded-box  w-5/6 h-full">{children}</div>
</div>
      </div>
    )
}