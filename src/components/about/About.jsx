import React from "react";
import styles from "./about.module.css";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const About = () => {
  return (
    <div className={styles.about}>
      <br /><br /><br /><br /> <br /> <br /> <br /> <br />
      <Row>
        <Col sm={6}>
 <br /> <br />
          <div className={styles.whale}>
            <div className={styles.whalebody}>
              <div className={styles.whaleeyes}></div>
              <div className={styles.teeth}></div>
            </div>
            <div className={styles.whaletail}></div>
            <div className={styles.whalecircle}></div>
            <div className={styles.flipper1}></div>
            <div className={styles.flipper2}></div>
            <div className={styles.spout}></div>
            <div className={styles.spray}></div>
          </div>
        </Col>
        <Col sm={6}>
          {" "}
          <div className={styles.banner}>about</div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
            culpa minima tempora aliquam molestiae vel delectus ad ab provident
            aut quas, dolor in. Aperiam atque laudantium inventore libero,
            eligendi omnis tenetur cupiditate dolor nesciunt earum porro
            accusamus non aut dolores mollitia doloribus obcaecati vero sint
            voluptatem recusandae. Distinctio, corporis?
          </div>
        </Col>
      </Row>
      <br /><br /><br /><br /> <br /> <br /> <br /> <br />
     
    </div>
  );
};
