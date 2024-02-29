import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";

import { PiBooksFill } from "react-icons/pi";

const TilesComponent = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={3} className="text-center mt-5">
          <Link href={`/list?genre=novel`} className="custom-anchor">
            <div className="custom-tiles">
              <PiBooksFill style={{ fontSize: "40px" }} />
              <h5 className="mt-4">উপন্যাস</h5>
            </div>
          </Link>
        </Col>
        <Col xs={12} md={6} lg={3} className="text-center mt-5">
          <Link href={`/list?genre=autobiography`} className="custom-anchor">
            <div className="custom-tiles">
              <PiBooksFill style={{ fontSize: "40px" }} />
              <h5 className="mt-4">আত্মজীবনী</h5>
            </div>
          </Link>
        </Col>
        <Col xs={12} md={6} lg={3} className="text-center mt-5">
          <Link href={`/list?genre=translated`} className="custom-anchor">
            <div className="custom-tiles">
              <PiBooksFill style={{ fontSize: "40px" }} />
              <h5 className="mt-4">অনুবাদ</h5>
            </div>
          </Link>
        </Col>
        <Col xs={12} md={6} lg={3} className="text-center mt-5">
          <Link href={`/list?genre=essay`} className="custom-anchor">
            <div className="custom-tiles">
              <PiBooksFill style={{ fontSize: "40px" }} />
              <h5 className="mt-4">প্রবন্ধ</h5>
            </div>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={3} className="text-center mt-5">
          <Link href={`/list?genre=short`} className="custom-anchor">
            <div className="custom-tiles">
              <PiBooksFill style={{ fontSize: "40px" }} />
              <h5 className="mt-4">ছোট গল্প</h5>
            </div>
          </Link>
        </Col>
        <Col xs={12} md={6} lg={3} className="text-center mt-5">
          <Link href={`/list?genre=science`} className="custom-anchor">
            <div className="custom-tiles">
              <PiBooksFill style={{ fontSize: "40px" }} />
              <h5 className="mt-4">সাইন্স ফিকশন</h5>
            </div>
          </Link>
        </Col>
        <Col xs={12} md={6} lg={3} className="text-center mt-5">
          <Link href={`/list?genre=religious`} className="custom-anchor">
            <div className="custom-tiles">
              <PiBooksFill style={{ fontSize: "40px" }} />
              <h5 className="mt-4">ধর্মীয়</h5>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default TilesComponent;
