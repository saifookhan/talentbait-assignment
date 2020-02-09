import React from "react";
import Reflux from "reflux";
import { RStore } from "../../utils/store";
import { Link } from "react-router-dom";
import PreviewModal from "./PreviewModal";
import _ from "lodash";

class AllJobs extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = RStore;
  }

  state = {
    showModal: false,
    selectedData: ""
  };

  componentDidMount() {
    console.log(window.location.hash);
    if (window.location.hash === "#true") {
      alert("Successful.");
    }
  }

  deleteJob(id) {
    if (window.confirm("Are you sure you want to delete? (" + id + ")")) {
      _.remove(this.state.jobData, { _id: id });
    }
  }

  previewData = id => {
    this.setState({
      showModal: true,
      selectedData: this.state.jobData.filter(j => {
        return j._id === id;
      })[0]
    });
  };

  closeModal = e => {
    this.setState({ showModal: false, selectedData: "" });
  };

  render() {
    return (
      <div>
        <div>
          <h2>All jobs</h2>
        </div>
        {this.state.showModal && (
          <PreviewModal
            selectedData={this.state.selectedData}
            closeModal={this.closeModal}
          />
        )}

        <div>
          <table className="jobs-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Location</th>
                <th>Author</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.jobData.map(job => {
                return (
                  <tr key={job._id} onClick={e => this.previewData(job._id)}>
                    <td>{job._id}</td>
                    <td className="jobs-table-title">{job.title}</td>
                    <td>{job.city}</td> <td>{job.employer}</td>
                    <td>
                      <span>
                        <Link to={"/edit/" + job._id}>
                          <button className="edit-btn">Edit</button>
                        </Link>
                      </span>
                      <span>
                        <button
                          className="delete-btn"
                          onClick={e => this.deleteJob(job._id)}
                        >
                          Delete
                        </button>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <div className="divider"></div>
      <AllJobs />
    </div>
  );
}

export default Home;
