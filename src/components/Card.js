import React from "react";
// component
import Card from "react-bootstrap/Card";
// GH icon
import GitHubIcon from "@mui/icons-material/GitHub";
// bootstrap grid
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const project = ({ items }) => {
  return (
    <Container>
      <Row>
        {items.map((projectItem) => {
          const { id, link, image, title, repo } = projectItem;
          return (
            <Col xs={12} sm={6} lg={4} className="column">
              <Card style={{ width: "26rem" }} key={id}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Link
                    className="card-title"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {title}
                  </Card.Link>
                  <span> | </span>
                  <Card.Link
                    className="card-repo"
                    href={repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon />
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default project;
