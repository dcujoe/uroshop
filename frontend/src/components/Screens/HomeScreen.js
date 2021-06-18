import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../Screens/Product";
import Message from "../Message";
import Loader from "../Loader";
import Paginate from "../Paginate";
import { listProducts } from "./productActions";
import ProductCarousel from "../ProductCarousel";
import Meta from "../Meta";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  console.log('product list', productList)

  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Helmet>
        <title>Welcome To Uroshop</title>
        <Meta />
        <meta
          name="description"
          content="we sell good electronic products for cheap"
        />
        <meta
          name="keyword"
          content="electronics, buy electronics, cheap electronics"
        />
      </Helmet>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <h1>Newest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={9} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : {}}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
