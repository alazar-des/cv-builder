import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import "./Nav.css";
import MyResume from "./PDFGenerator";

const Nav = (props) => {
  return (
    <div className="nav">
      <h1>My Resume</h1>
      <div>
        <PDFDownloadLink
          document={<MyResume content={props.content} />}
          fileName="MyResume.pdf"
          className="download-btn"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Download" : "Download"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Nav;
