import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "../hooks/useFetch";
import AddConnection from "./AddConnection";
import DeleteConnections from "./DeleteConnections";
import { useState } from "react";

const Connectons = (props) => {
  const endpointUrl =
    "https://{{DOMAIN}}/api/v2/connections";
  const [trigger, setTrigger] = useState(true);

  const options = {
    method: "GET",
    headers: props.headerParameters,
  };

  const optionsStr = JSON.stringify(options);
  const { data, responseStatus } = useFetch(endpointUrl, optionsStr, trigger);
  if (responseStatus === 0 && data === "") {
    return (
      <div
        className="d-flex justify-content-center"
        style={{
          paddingTop: "5 rem",
        }}
      >
        <div
          className="spinner-border"
          style={{ width: "5rem", height: "5rem" }}
          role="status"
        >
          <div className="visually-hidden ">Loading...</div>
        </div>
      </div>
    );
  } else if (responseStatus !== 200) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{
          paddingTop: "25%",
        }}
      >
        <p>
          Something went wrong, please update the access token and try again!
        </p>
      </div>
    );
  } else if (data.length === 0) {
    return (
      <div>
        <div>
          <AddConnection
            headers={props.headerParameters}
            trigger={trigger}
            setTrigger={setTrigger}
          />
        </div>
        <div
          className="d-flex justify-content-center"
          style={{
            paddingTop: "25%",
          }}
        >
          <p>No Connection found</p>
        </div>
      </div>
    );
  } else if (data !== "") {
    return (
      <div>
        <AddConnection
          headers={props.headerParameters}
          trigger={trigger}
          setTrigger={setTrigger}
        />
        <div
          style={{
            padding: "5rem",
          }}
        >
          <table className="table table-hover" style={{ Margin: "5rem" }}>
            <thead>
              <tr style={{ backgroundColor: "#F1A661" }}>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Connection ID</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "#FFD8A9" }}>
              {data.map((connections, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{connections.name}</td>
                  <td>{connections.id}</td>
                  <td>
                    <DeleteConnections
                      connectionId={connections.id}
                      headers={props.headerParameters}
                      trigger={trigger}
                      setTrigger={setTrigger}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};
export default Connectons;
