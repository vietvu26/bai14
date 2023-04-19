import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      {/* Hiển thị danh sách sản phẩm */}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/admin">Trang admin</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          {/* Các Route khác */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Home;
