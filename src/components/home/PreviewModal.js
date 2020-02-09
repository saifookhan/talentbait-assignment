import React, { Component } from "react";
import "./modal.css";
export default class PreviewModal extends Component {
  render() {
    const job = this.props.selectedData;
    return (
      <div>
        <div className="modal">
          <div className="modal-content">
            <span
              className="close"
              onClick={e => {
                this.props.closeModal();
              }}
            >
              &times;
            </span>
            {/* {this.props.map(x => {
              return <p>{x}</p>;
            })} */}
            <div>
              <h2>Preview</h2>
            </div>
            <table>
              <tbody>
                <tr className="modal-table-row">
                  <td className="modal-table-key">ID</td>
                  <td className="modal-table-value">{job._id}</td>{" "}
                </tr>
                <tr className="modal-table-row">
                  <td className="modal-table-key">Title</td>
                  <td className="modal-table-value">{job.title}</td>
                </tr>
                <tr className="modal-table-row">
                  <td className="modal-table-key">City</td>
                  <td className="modal-table-value">{job.city}</td>
                </tr>
                <tr className="modal-table-row">
                  <td className="modal-table-key">Employer</td>
                  <td className="modal-table-value">{job.employer}</td>
                </tr>
                <tr className="modal-table-row">
                  <td className="modal-table-key">Tasks</td>
                  <td className="modal-table-value">{job.tasks}</td>
                </tr>
                <tr className="modal-table-row">
                  <td className="modal-table-key">Requirements</td>
                  <td className="modal-table-value">{job.requirements}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
