import React, { useState, useEffect, useRef } from "react";

//react-bootstrap
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { PaginationControl } from "react-bootstrap-pagination-control";

//axios
import axios from "axios";
import { BASE_URL } from "../../base";

//services
import { toBanglaNumber } from "../Services/ToBangla";

//icons
import { MdEdit, MdDelete } from "react-icons/md";

const ListComponent = ({ genre }) => {
  const [bookList, setBookList] = useState([]);
  const [loader, setLoader] = useState(true);

  //pagination-variables
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [perPage, setPerPage] = useState(0);

  useEffect(() => {
    fetchBookList();
  }, [page]);

  //book-list
  const fetchBookList = () => {
    const apiUrl = BASE_URL + "api/books?page=" + page +"&genre=" + genre;
    const config = {
      withCredentials: true,
    };

    axios
      .get(apiUrl, config)
      .then((response) => {
        console.log(response.data);
        if (response.data.status) {
          setBookList(response.data.books);
          setTotal(response.data.totalBooks);
          setPerPage(response.data.pageSize);
          setLoader(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {loader ? (
        <></>
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
                      <th>আপডেট/ ডিলেট</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookList?.map((book, index) => (
                      <tr key={index}>
                        <td>{book.name}</td>
                        <td>{book.writer}</td>
                        <td>{book.publisher}</td>
                        <td>{toBanglaNumber(book.publishingYear)}</td>
                        <td>
                          <Button className="me-2" variant="secondary">
                            <MdEdit />
                          </Button>
                          <Button variant="danger">
                            <MdDelete />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row className="mt-3">
            <Col className="d-flex justify-content-center">
              <PaginationControl
                page={page}
                // between={4}
                total={total}
                limit={perPage}
                changePage={(page) => {
                  setPage(page);
                }}
                ellipsis={1}
                linkClassName="custom-pagination"
              />
            </Col>
          </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default ListComponent;
