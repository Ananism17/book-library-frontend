import React, { useState, useEffect, useRef } from "react";

//react-bootstrap
import { Container, Row, Col, Table, Button } from "react-bootstrap";

//axios
import axios from "axios";
import { BASE_URL } from "../../base";
import { toBanglaNumber } from "../Services/ToBangla";

const ListComponent = ({ genre }) => {
  const [bookList, setBookList] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchBookList();
  }, []);

  //book-list
  const fetchBookList = () => {
    const apiUrl = BASE_URL + "api/books?page=1&genre=" + genre;
    const config = {
      withCredentials: true,
    };

    axios
      .get(apiUrl, config)
      .then((response) => {
        console.log(response.data);
        if (response.data.status) {
          setBookList(response.data.books);
          setLoader(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(bookList);

  return (
    <>
      {loader ? (
        <>Loading</>
      ) : (
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
                    {bookList?.map((book, index) => (
                      <tr key={index}>
                        <td>{book.name}</td>
                        <td>{book.writer}</td>
                        <td>{book.publisher}</td>
                        <td>{toBanglaNumber(book.publishingYear)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default ListComponent;
