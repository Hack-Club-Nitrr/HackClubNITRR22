import React from "react";
import styles from "./project.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsEyeFill, BsFillHeartFill } from "react-icons/bs";
import { FaComment } from "react-icons/fa";

export const Projects = () => {

const a=[1,1,1,1,1];
  const Card = () =>{
    return(
      <Col sm={4}>
      <div className={styles.card}>
        <div className={styles.image}>
          <div className={styles.imageback}>
            <img
              src="https://hackster.imgix.net/uploads/attachments/1453618/_m5A0Bz5yzW.blob?auto=compress%2Cformat&w=900&h=675&fit=min"
              alt=""
            />
          </div>
          <div className={styles.imagefront}>
            <img
              src="https://hackster.imgix.net/uploads/attachments/1453618/_m5A0Bz5yzW.blob?auto=compress%2Cformat&w=900&h=675&fit=min"
              alt=""
            />
          </div>
        </div>
        <div className={styles.bar}>Posted 3 days ago by Aditya Ray</div>
        <div className={styles.title}>
          How to use RYLR998 LORA module with Arduino?
        </div>
        <div className={styles.stats}>
          <div>
            <BsEyeFill /> 22{" "}
          </div>{" "}
          <div>
            <BsFillHeartFill /> 10{" "}
          </div>{" "}
          <div>
            <FaComment /> 2
          </div>
        </div>
      </div>
    </Col>
    )
  }

  return (
    <div className={styles.projects}>
      <div className={styles.banner}>MADE BY US</div>

      <Row>
      {a.map(i => {
        return  <Card/>;
      })}
      

       
      </Row>

      <div className={styles.ocean}>
        <div className={`${styles["bubble"]}${styles["bubble1"]}`}></div>
        <div className={`${styles["bubble"]}${styles["bubble2"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble3"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble4"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble5"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble6"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble7"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble8"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble9"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble10"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble11"]}`}></div>
        <div className={`${styles["bubble"]} ${styles["bubble12"]}`}></div>
      </div>
    </div>
  );
};
