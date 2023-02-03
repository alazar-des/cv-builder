import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import "./Nav.css";
import MyResume from "./PDFGenerator";

export default class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <h1>My Resume</h1>
        <div>
          <PDFDownloadLink document={<MyResume content={this.props.content}/>} fileName="MyResume.pdf" className="download-btn">
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download"
            }
          </PDFDownloadLink>
        </div>
      </div>
    );
  }
}
