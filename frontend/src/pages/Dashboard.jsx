export default function Dashboard() {
  const sampleData = [
    {
      source: "SAP",
      activity: "Diesel Usage",
      quantity: 500,
      status: "Pending",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Breathe ESG Dashboard</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Source</th>
            <th>Activity</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {sampleData.map((row, index) => (
            <tr key={index}>
              <td>{row.source}</td>
              <td>{row.activity}</td>
              <td>{row.quantity}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
