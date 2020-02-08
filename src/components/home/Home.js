import React from "react";
import Reflux from "reflux";
import { RStore, Actions } from "../../utils/store";
import { Link } from "react-router-dom";
import _ from "lodash";

class AllJobs extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = RStore;
  }

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

  render() {
    return (
      <div
        onClick={e => {
          Actions.increment();
        }}
      >
        <div>
          <h2>All jobs</h2>
        </div>
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
                  <tr key={job._id}>
                    <td>{job._id}</td>
                    <td className="jobs-table-title">{job.title}</td>
                    <td>{job.city}</td> <td>{job.employer}</td>
                    <td>
                      <span>
                        <Link to={"/edit/" + job._id}>
                          <button>edit</button>
                        </Link>
                      </span>
                      <span>
                        <button onClick={e => this.deleteJob(job._id)}>
                          delete
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
