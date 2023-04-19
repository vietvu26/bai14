import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  Navigate
} from "react-router-dom";

function Home() {
  return <h3>Home - Danh sách sản phẩm</h3>;
}

function Product() {
  let { productId } = useParams();

  return <h3>Product - ID sản phẩm: {productId}</h3>;
}

function Admin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Hàm check user có phải là admin hay không
    const checkIsAdmin = () => {
      const isAdmin = localStorage.getItem("isAdmin",true);
      setIsAdmin(isAdmin);
      if (!isAdmin) {
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    };

    checkIsAdmin();
  }, []);

  return isAdmin ? (
    <h3>Admin - Bạn có quyền truy cập</h3>
  ) : (
    <h3>Admin - Bạn không có quyền truy cập, sẽ chuyển về Trang chủ sau 3 giây</h3>
  );
}

function Bai1() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product/1">Product 1</Link>
            </li>
            <li>
              <Link to="/product/2">Product 2</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Bai1;