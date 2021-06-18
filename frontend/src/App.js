import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./components/Screens/HomeScreen";
import ProductScreen from "./components/Screens/ProductScreen";
import CartScreen from "./components/Screens/CartScreen";
import LoginScreen from "./components/Screens/LoginScreen";
import RegisterScreen from "./components/Screens/RegisterScreen";
import ProfileScreen from "./components/Screens/ProfileScreen";
import ShippingScreen from "./components/Screens/ShippingScreen";
import PaymentScreen from "./components/Screens/PaymentScreen";
import PlaceOrderScreen from "./components/Screens/PlaceOrderScreen";
import OrderScreen from "./components/Screens/OrderScreen";
import UserListScreen from "./components/Screens/UserListScreen";
import UserEditScreen from "./components/Screens/UserEditScreen";
import ProductListScreen from "./components/Screens/ProductListScreen";
import ProductEditScreen from "./components/Screens/ProductEditScreen";
import OrderListScreen from "./components/Screens/OrderListScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/userlist" component={UserListScreen} />
            <Route path="/admin/user/:id/edit" component={UserEditScreen} />
            <Route
              path="/admin/product/:id/edit"
              component={ProductEditScreen}
            />
            <Route
              path="/admin/productlist"
              component={ProductListScreen}
              exact
            />
            <Route
              path="/admin/productlist/:pageNumber"
              component={ProductListScreen}
              exact
            />
            <Route path="/admin/orderlist" component={OrderListScreen} />
            <Route path="/search/:keyword" component={HomeScreen} exact />
            <Route path="/page/:pageNumber" component={HomeScreen} exact />
            <Route
              path="/search/:keyword/page/:pageNumber"
              component={HomeScreen}
              exact
            />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
