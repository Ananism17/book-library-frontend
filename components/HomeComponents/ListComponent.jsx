import React, { useState, useEffect, useRef } from "react";

//react-bootstrap
import { Container, Row, Col, Table, Button } from "react-bootstrap";

//axios
import axios from "axios";
import { BASE_URL } from "../../base";

const ListComponent = () => {

  const [bookList, setBookList] = useState([])

  useEffect(() => {
    fetchBookList();
  }, []);

  //trade-license-list
  const fetchBookList = () => {
    const apiUrl = BASE_URL + "api/books?page=1&genre=story";

    axios
      .get(apiUrl)
      .then((response) => {
        if (response.data.status) {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Container>
        <Row>
          <Col className="mt-5">
            <Table className="custom-table" responsive>
              <thead>
                <tr>
                  <th>নাম</th>
                  <th>লেখক</th>
                  <th>প্রকাশক</th>
                  <th>প্রকাশের সাল</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>পথের পাঁচালি</td>
                  <td>বিভূতিভূষণ বন্দ্যোপাধ্যায়</td>
                  <td>রঞ্জন প্রকাশলয়</td>
                  <td>১৯২৯</td>
                </tr>
                <tr>
                  <td>পথের পাঁচালি</td>
                  <td>বিভূতিভূষণ বন্দ্যোপাধ্যায়</td>
                  <td>রঞ্জন প্রকাশলয়</td>
                  <td>১৯২৯</td>
                </tr>
                <tr>
                  <td>পথের পাঁচালি</td>
                  <td>বিভূতিভূষণ বন্দ্যোপাধ্যায়</td>
                  <td>রঞ্জন প্রকাশলয়</td>
                  <td>১৯২৯</td>
                </tr>
                <tr>
                  <td>পথের পাঁচালি</td>
                  <td>বিভূতিভূষণ বন্দ্যোপাধ্যায়</td>
                  <td>রঞ্জন প্রকাশলয়</td>
                  <td>১৯২৯</td>
                </tr>
                <tr>
                  <td>পথের পাঁচালি</td>
                  <td>বিভূতিভূষণ বন্দ্যোপাধ্যায়</td>
                  <td>রঞ্জন প্রকাশলয়</td>
                  <td>১৯২৯</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ListComponent;
