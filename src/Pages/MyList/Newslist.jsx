import { Container, Row, Col } from "react-bootstrap";

const Newslist = (props) => {
  return (
    <>
      <Container>
        <Row className="d-flex">
          <Col>
            <div className="card card-icon">
              <img
                src={
                  !props.Imgurl
                    ? "https://aniportalimages.s3.amazonaws.com/media/details/ANI-20230421031008.jpg"
                    : props.Imgurl
                }
                class="card-img-top"
                alt="News Cover"
              />
              <div class="card-body ">
                <h5 class="card-title">{props.title} ...</h5>
                <p class="card-text">{props.description} ...</p>
                <a
                  href={props.newsurl}
                  target="blank"
                  class="btn btn-sm btn-dark"
                >
                  Read More
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card card-icon">
              <img
                src={
                  !props.Imgurl
                    ? "https://aniportalimages.s3.amazonaws.com/media/details/ANI-20230421031008.jpg"
                    : props.Imgurl
                }
                class="card-img-top"
                alt="News Cover"
              />
              <div class="card-body ">
                <h5 class="card-title">{props.title} ...</h5>
                <p class="card-text">{props.description} ...</p>
                <a
                  href={props.newsurl}
                  target="blank"
                  class="btn btn-sm btn-dark"
                >
                  Read More
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Newslist;
