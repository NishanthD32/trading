
import { useNavigate } from "react-router-dom";
import Base from "../Basepages/Base";
import BarChart from "../components/Barchart";
import PieChart from "../components/Piechart";

export default function DashBoard(){
    return(
        <Base>
    <div className="flex flex-col">

   <div className="flex flex-row space-x-4 p-2 justify-center">
    <div className="card w-64 h-32 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">EARNINGS (MONTHLY) <i class="fa-solid fa-calendar-days"></i></h2>
    <p>$40,000</p>
  </div>
</div>
 <div className="card w-64 h-32 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">EARNINGS (ANNUAL) <i class="fa-solid fa-money-bill"></i></h2>
    <p>$215,000</p>
  </div>
</div>
 <div className="card w-64 h-32 bg-primary text-primary-content">
  <div className="card-body justify-center">
    <span><h2 className="card-title justify-center">TASK</h2>
    <label>50<progress className="progress progress-success w-32" value="50" max="100"></progress> <i class="fa-solid fa-list-check"></i></label>
  </span>
  </div>
</div>
 <div className="card w-64 h-32 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">PENDING REQUESTS <i class="fa-regular fa-clipboard"></i></h2>
    <p>18</p>
  </div>
</div>
   </div>

<div className="flex flex-row space-x-4 justify-center p-9"><div className="max-w-md card max-w-2xl bg-base-300 shadow-xl"><BarChart/></div>
<div className="max-w-md card max-w-2xl bg-base-300 shadow-xl"><PieChart/></div></div>
 
 <div className="flex flex-row space-x-4 justify-center">
 <div className="card max-w-2xl bg-base-300 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Projects!</h2>
    <label>Server Migration</label><label>20% <progress className="progress progress-error w-96 h-5" value="20" max="100"></progress></label>
    <label>Sales Tracking</label><label>40% <progress className="progress progress-secondary  w-96 h-5" value="40" max="100"></progress></label>
    <label>Customer Database</label><label>20% <progress className="progress progress-accent w-96 h-5" value="60" max="100"></progress></label>
    <label>Payout Details</label><label>20% <progress className="progress progress-warning w-96 h-5" value="80" max="100"></progress></label>
    <label>Account Setup</label><label>20% <progress className="progress progress-success w-96 h-5" value="100" max="100"></progress></label>
  </div>
</div>

<div className="card max-w-2xl bg-base-300 shadow-xl">
  <div className="w-96 h-64"><img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"></img></div>
  <p>Add some quality, svg illustrations to your project<br></br> courtesy of unDraw, a constantly updated collection of <br>
  </br>beautiful svg images that you can use completely<br></br> free and without attribution!</p>
</div>
 </div>
<div className="p-5">
<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </div>
</footer>
</div>
    </div>

        </Base>
    )
}