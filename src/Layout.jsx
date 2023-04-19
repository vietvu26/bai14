import {Link, Outlet,useNavigate } from "react-router-dom";

function Layout(){
  
    const Navigate=useNavigate();
    const handleClick = () =>{
        Navigate ("/home");
    }
    return (
        <div>
            <nav> 
                <ul>
                    <li>
                        <button onClick={(handleClick)}>Hello</button> 
                    </li>
                    <li>
                        <Link to="./about" >About</Link>
                    </li>
                </ul>
            </nav>
        
        <Outlet/>
        </div>
    )
}

export default Layout;