import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../Screens/Product";
import Message from "../Message";
import Loader from "../Loader";
import Paginate from "../Paginate";
import { listProducts } from "./productActions";
import ProductCarousel from "../ProductCarousel";
import Meta from "../Meta";
import logo from "./logo"

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
    <Container fluid>
   
      <Helmet>
        <title>{`${logo.image}`}</title>
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
    
      <Container variant="primary" fluid>
  <Row className="top-marketing" variant="primary">
    <Col className="home_font">Best quality from Europe</Col>
    <Col className="home_font">Buy the Best of German</Col>
  </Row>
  
</Container>
      {!keyword ? (
        <ProductCarousel />
  
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <Row>
        <Col mr-sm-10>
      <h1>Newest Products</h1>
      </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row className="homepage_products">
            {products.map((product) => (
              <Col key={product._id} sm={12} md={9} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Row className="homepage_section">
           
          </Row>
          
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : {}}
          />
        </>
      )}
      </Container>
    </>
  );
};

export default HomeScreen;
