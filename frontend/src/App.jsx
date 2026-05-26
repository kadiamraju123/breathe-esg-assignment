import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [records, setRecords] = useState([]);
  const [file, setFile] = useState(null);

  const fetchRecords = () => {

    axios
      .get("http://127.0.0.1:8000/api/records/")
      .then((res) => {

        setRecords(res.data);

      });

  };

  useEffect(() => {

    fetchRecords();

  }, []);

  const uploadFile = async () => {

    if (!file) {

      alert("Select CSV file");

      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    formData.append(
      "source_type",
      "SAP"
    );

    await axios.post(
      "http://127.0.0.1:8000/api/upload/",
      formData
    );

    alert("CSV Uploaded");

    fetchRecords();
  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>Breathe ESG Dashboard</h1>

      <div
        style={{
          marginBottom: "20px"
        }}
      >

        <input
          type="file"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
        />

        <button
          onClick={uploadFile}
          style={{
            marginLeft: "10px",
            padding: "8px"
          }}
        >
          Upload CSV
        </button>

      </div>

      <table
        border="1"
        cellPadding="10"
      >

        <thead>

          <tr>
            <th>ID</th>
            <th>Activity</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Scope</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

  {records.map((record) => (

    <tr key={record.id}>

      <td>{record.id}</td>

      <td>{record.activity_type}</td>

      <td>{record.quantity}</td>

      <td>{record.unit}</td>

      <td>{record.scope}</td>

      <td>

        <span
          style={{

            padding: "5px 10px",

            borderRadius: "5px",

            backgroundColor:

              record.status === "APPROVED"
                ? "green"
                : record.status === "REJECTED"
                ? "red"
                : "orange",

            color: "white",

            fontWeight: "bold"
          }}
        >

          {record.status}

        </span>

      </td>

      <td>

        {record.status === "PENDING" ? (

          <>

            <button
              onClick={async () => {

                await axios.patch(
                  `http://127.0.0.1:8000/api/update/${record.id}/`,
                  {
                    status: "APPROVED"
                  }
                );

                fetchRecords();

              }}
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "8px",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Approve
            </button>

            <button
              onClick={async () => {

                await axios.patch(
                  `http://127.0.0.1:8000/api/update/${record.id}/`,
                  {
                    status: "REJECTED"
                  }
                );

                fetchRecords();

              }}
              style={{
                marginLeft: "10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "8px",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Reject
            </button>

          </>

        ) : (

          <span>
            Action Completed
          </span>

        )}

      </td>

    </tr>

  ))}

</tbody>
      </table>

    </div>
  );
}

export default App;