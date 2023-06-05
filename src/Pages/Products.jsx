import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import SingleCard3 from "../Components/SingleCard3";
import { Button } from "react-bootstrap";
import { ProductContext } from "../context/ProductContext";
import products from "../Data/products";

const Products = () => {
  const [data, setData] = useContext(ProductContext);

  const filterData = (comingItem) => {
    const result = products.filter((fd) => {
      return fd.category === comingItem;
    });
    setData(result);
    console.log(result);
  };

  return (
    <div className="cards mt-4">
      <h1 className="text-center animate__animated animate__bounce animate__zoomInDown">
        Daily Flash Sale!
      </h1>

      <Container className=" my-4">
        <div className="my-4 d-flex justify-content-center align-items-center">
          <Button
            type="button"
            variant="info"
            onClick={() => {
              filterData("decor");
            }}
          >
            Decor
          </Button>
          <Button
            type="button"
            className="mx-3"
            variant="success"
            onClick={() => {
              filterData("sofa&bed");
            }}
          >
            Sofa&Bed
          </Button>
          <Button
            type="button"
            variant="warning"
            onClick={() => {
              filterData("table");
            }}
          >
            Table
          </Button>
        </div>
        <Row className="g-3">
          {data.map((fd) => (
            <SingleCard3
              key={fd.id}
              id={fd.id}
              img={fd.img}
              title={fd.title}
              previousprice={fd.previousprice}
              price={fd.price}
              link1={fd.link1}
              link2={fd.link2}
              alldata={fd}
              description={fd.description}
              li1={fd.li1}
              li2={fd.li2}
              li3={fd.li3}
              status={fd.status}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
