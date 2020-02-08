import React from "react";
import PropTypes from "prop-types";
import Reflux from "reflux";
import { RStore, Actions } from "../../utils/store";

class AllJobs extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = RStore;
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
          <table class="jobs-table">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Location</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
            {this.state.jobData.map(job => {
              return (
                <tr key={job._id}>
                  <td>{job._id}</td>
                  <td class="jobs-table-title">{job.title}</td>{" "}
                  <td>{job.city}</td> <td>{job.employer}</td>{" "}
                  <td>
                    <span>
                      <button>edit</button>
                    </span>
                    <span>
                      <button>delete</button>
                    </span>
                  </td>{" "}
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

function Home(props) {
  return (
    <div>
      <div class="divider"></div>
      <AllJobs />
    </div>
  );
}

Home.propTypes = {
  string: PropTypes.string
};

export default Home;
