import React, { useState } from "react";
import Router from "next/router";

//react-bootstrap
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

//axios
import axios from "axios";
import { BASE_URL } from "../../base";

//react-toast
import { toast } from "react-toastify";

//react-icons
import { IoMdClose } from "react-icons/io";

const AddBookComponent = ({ show, handleClose }) => {
  const [name, setName] = useState(null);
  const [writer, setWriter] = useState(null);
  const [publisher, setPublisher] = useState(null);
  const [publishingYear, setPublishingYear] = useState(null);
  const [genre, setGenre] = useState(null);

  //book-create
  const addBook = () => {
    const apiUrl = BASE_URL + "api/books";
    const apiData = {
      name,
      writer,
      publisher,
      publishingYear,
      genre,
    };
    const config = {
      withCredentials: true,
    };

    axios
      .post(apiUrl, apiData, config)
      .then((response) => {
        if (response.data.status) {
          toast.success("বই সফলভাবে যোগ হয়েছে!", {
            position: "top-right",
            theme: "colored",
          });
          Router.push({
            pathname: "/",
          });
          handleClose();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        contentClassName="custom-modal"
      >
        <Modal.Header>
          <Button
            className="position-absolute top-0 end-0 me-3 custom-button-modal"
            onClick={handleClose}
            style={{ marginTop: "12px" }}
          >
            <IoMdClose />
          </Button>
          <Modal.Title>বই যোগ করুন</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{ width: "100%" }}>
            <Col className="mb-4">
              <Form.Label>নাম</Form.Label>
              <Form.Control
                type="text"
                className="custom-input"
                value={name || ""}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Col className="mb-4">
              <Form.Label>লেখক</Form.Label>
              <Form.Control
                type="text"
                className="custom-input"
                value={writer || ""}
                onChange={(e) => setWriter(e.target.value)}
              />
            </Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Col className="mb-4">
              <Form.Label>প্রকাশক</Form.Label>
              <Form.Control
                type="text"
                className="custom-input"
                value={publisher || ""}
                onChange={(e) => setPublisher(e.target.value)}
              />
            </Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Col className="mb-4">
              <Form.Label>প্রকাশের সাল</Form.Label>
              <Form.Control
                type="number"
                className="custom-input"
                value={publishingYear || ""}
                onChange={(e) => setPublishingYear(e.target.value)}
              />
            </Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Col className="mb-4">
              <Form.Label>ধরন</Form.Label>
              <Form.Select
                className="custom-input"
                value={genre || ""}
                onChange={(e) => {
                  setGenre(e.target.value);
                }}
              >
                <option value={null}>নির্বাচন করুন</option>
                <option value="novel">উপন্যাস</option>
                <option value="autobiography">আত্মজীবনী</option>
                <option value="translated">অনুবাদ</option>
                <option value="essay">প্রবন্ধ</option>
                <option value="short">ছোট গল্প</option>
                <option value="science">সাইন্স ফিকশন</option>
                <option value="religious">ধর্মীয়</option>
              </Form.Select>
            </Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Col className="mb-4">
              <Button
                className="custom-button-outlined float-end"
                size="sm"
                onClick={addBook}
              >
                সংরক্ষন করুন
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddBookComponent;
