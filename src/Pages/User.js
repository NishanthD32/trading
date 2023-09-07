import Base from "../Basepages/Base";

 export default function User(){
    return(
        <Base>
        <div className="flex justify-center p-5">
        <div className="card w-96 bg-base-300 shadow-xl justify-center ">
  <figure className="px-10 pt-10">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0_k4XokI-chey0QXFlbjtdgakiP7IZl6Jz1PEETuAIb27ESRpJERPfGBh58uylAYitA&usqp=CAU"  className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">LOGIN!</h2>
    <p>Login Wow Trading App</p>
    <div className="form-control">
  <label className="input-group">
    <span>Email</span>
    <input type="text" placeholder="info@site.com" className="input input-bordered" />
  </label>
</div>
<div className="form-control">
  <label className="input-group">
    <span>Password</span>
    <input type="Password" placeholder="Abcd1234@" className="input input-bordered" />
  </label>
</div>
    <div className="card-actions">
      <button className="btn btn-primary">Login</button>
    </div>
    <a className="text-blue-600" href="#" target="blank">Create New Account</a>
  </div>
</div>
        </div>
        </Base>
    )
}