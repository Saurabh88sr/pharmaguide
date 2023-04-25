import { Container, Row, Col } from "react-bootstrap";

const MyList = () => {
  return (
    <>
      <div className="container mt-3 p-2">
        <Container>
          <Row className="d-flex">
            <Col mb={3}>
              <ul className="list-group">
                <li className=" d-flex justify-content-between align-items-center">
                  <div className="">
                    {" "}
                    <h3>UserName</h3>{" "}
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Medicine
                  <span className="badge bg-primary rounded-pill">2</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  News
                  <span className="badge bg-primary rounded-pill">2</span>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="list-group">
                <li className="list-group-item justify-content-between align-items-center">
                  <div className="headBg"><h4>Medicine Name</h4> </div>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                  Generic Name
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                 Price
                </li>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse assumenda excepturi distinctio nemo aspernatur
                    voluptate, illum aperiam maiores vitae iste nesciunt officia
                    neque perspiciatis animi delectus praesentium ratione eaque
                    fugiat.
                  </p>
                </li>
                
              </ul>
            </Col>
            <Col>
              <ul className="list-group">
                <li className="list-group-item justify-content-between align-items-center">
                  <div className="headBg"><h4>Medicine Name</h4> </div>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                  Generic Name
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                 Price
                </li>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse assumenda excepturi distinctio nemo aspernatur
                    voluptate, illum aperiam maiores vitae iste nesciunt officia
                    neque perspiciatis animi delectus praesentium ratione eaque
                    fugiat.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MyList;
