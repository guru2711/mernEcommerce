import { Row,Col } from "react-bootstrap"
import Products from "../products"
import Product from "../components/products"

const HomeScreen = () => {
  return (
   <>
   <h1>Latest product</h1>
   <Row>
    {Products.map((product) => {
        return(

            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
    )
    })}
   </Row>
   </>
  )
}

export default HomeScreen