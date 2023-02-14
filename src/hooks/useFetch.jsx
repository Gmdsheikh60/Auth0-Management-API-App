import { useState, useEffect } from "react";

const useFetch = (url, optionsStr, trigger) => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [responseStatus, setStatus] = useState(0);

  useEffect(() => {
    let success = true;
    const fetchData = async () => {
      try {
        const options = JSON.parse(optionsStr);
        const response = await fetch(url, options);
        setStatus(response.status);
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        const content = await response.json();

        if (success) {
          setData(content);
          setError(null);
        }
      } catch (err) {
        setError(err.message);
        setData(1);
        console.log("Error", error);
      }
    };

    fetchData();

    return () => {
      success = false;
      console.log("unmount");
    };
  }, [url, optionsStr, error, trigger]);

  return { data, responseStatus };
};

export default useFetch;
