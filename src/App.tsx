import {Link,Routes,Route} from "react-router-dom";
import Contactus from "./Contactus";
import Login from "./Login";
import Singnup from "./Singup";
const Main  = ()=>{
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
           <div className="parent">
                <div className="header">
                    <div className="header-logo"> 
                    <img src={process.env.PUBLIC_URL+"vivens.png"} />
                    </div>
                    <div className="header-menu">
                        <div>
                            <Link to="/contactus" className="vivens_link"><i className="fa fa-address-book-o"></i> Contact Us</Link>
                        </div>
                        <div>
                            <Link to="/signup" className="vivens_link"><i className="fa fa-user-plus"></i> Sign up</Link>
                        </div>
                        <div>
                            <Link to="/login" className="vivens_link"><i className="fa fa-sign-in"></i> Login</Link>
                        </div>
                    </div>
                </div>

                <div className="main">
                    <Routes>
                        <Route path="/contactus" element={<Contactus></Contactus>}></Route>
                        <Route path="/signup" element={<Singnup></Singnup>}></Route>
                        <Route path="/login" element={<Login></Login>}></Route>
                    </Routes>
                </div>

                <div className="footer">
                    Copyright © Vivenns 2022. All Rights Reserved | Privacy Policy |Terms of Use and Disclaimer
                </div>
           </div>
        </>
    )
}
export default Main;