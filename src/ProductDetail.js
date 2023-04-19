import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
function ProductDetail(props) {
    const { productId } = props.match.params;
  
    return (
      <div>
        <h2>Thông tin sản phẩm {productId}</h2>
        {/* Hiển thị thông tin sản phẩm */}
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
            <Route path="/product/:productId" component={ProductDetail} />
            {/* Các Route khác */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  
  export default App;
  