//next
import React, { Fragment, useState } from "react";
import Head from "next/head";

//react-toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../GlobalComponents/NavbarComponent";
import LoginComponent from "../LoginComponents/LoginComponent";

//redux imports
import { connect } from "react-redux";

const Layout = ({ children, loggedIn }) => {

  return (
    <>
      <Fragment>
        <Head>
          <title>সাহিত্যের আঙিনা</title>
          <meta name="description" content="Digtial Library App" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ToastContainer />

        {loggedIn ? (
          <>
            <Navbar />
            {children}
          </>
        ) : (
          <>
            <LoginComponent />
          </>
        )}
      </Fragment>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

export default connect(mapStateToProps)(Layout);

