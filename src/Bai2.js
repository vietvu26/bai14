import React, { useState } from "react";
import {
BrowserRouter as Router,
Routes,
Route,
Link,
useNavigate,
Navigate
} from "react-router-dom";

function LoginPage() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const navigate = useNavigate();

const handleLogin = () => {
setIsLoggedIn(true);
navigate("/");
};

return (
<div>
<h3>Login Page</h3>
{!isLoggedIn ? (
<button onClick={handleLogin}>Login</button>
) : (
<Navigate to="/" />
)}
</div>
);
}

function HomePage() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const navigate = useNavigate();

const handleLogout = () => {
setIsLoggedIn(false);
navigate("/login");
};

return (
<div>
<h3>Home Page</h3>
{isLoggedIn ? (
<button onClick={handleLogout}>Logout</button>
) : (
<Navigate to="/login" />
)}
</div>
);
}

function Bai2() {
return (
<Router>
<div>
<nav>
<ul>
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/login">Login</Link>
</li>
</ul>
</nav>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/login" element={<LoginPage />} />
</Routes>
</div>
</Router>
);
}

export default Bai2;
