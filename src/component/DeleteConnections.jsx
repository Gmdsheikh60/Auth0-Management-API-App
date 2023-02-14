const DeleteConnections = (props) => {
  const connectionId = props.connectionId;
  const endpointUrl = `https://{{DOMAIN}}/api/v2/connections/${connectionId}`;
  const options = {
    method: "DELETE",
    headers: props.headers,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(endpointUrl, options);
      if (response.ok) {
        props.setTrigger(!props.trigger);
     }
     else if(!response.ok){
      const errorMsg = await response.json();
      if (errorMsg.message) {
        window.alert(`Error: ${errorMsg.message}`);
      } else {
        window.alert(`Error: Unable to Delete connection`);
      }
     }
    } catch (e) {
      window.alert(`Error: Unable to Delete connection`);
      console.error(e);    
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button
          className="btn btn-info"
          type="submit"
          style={{ "backgroundColor": "#F1A661" }}
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeleteConnections;
