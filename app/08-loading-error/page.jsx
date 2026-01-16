export default function LoadingErrorTable() {
  return (
    <table style={{
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px"
    }}>
      <thead>
        <tr style={{ backgroundColor: "#f4f4f4" }}>
          <th style={thStyle}>Feature</th>
          <th style={thStyle}>loading.js</th>
          <th style={thStyle}>error.js</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={tdStyle}>Trigger</td>
          <td style={tdStyle}>Slow async operation</td>
          <td style={tdStyle}>Thrown error</td>
        </tr>
        <tr>
          <td style={tdStyle}>Component type</td>
          <td style={tdStyle}>Server Component</td>
          <td style={tdStyle}>Client Component</td>
        </tr>
        <tr>
          <td style={tdStyle}>Automatic rendering</td>
          <td style={tdStyle}>Yes</td>
          <td style={tdStyle}>Yes</td>
        </tr>
        <tr>
          <td style={tdStyle}>Retry support</td>
          <td style={tdStyle}>No</td>
          <td style={tdStyle}>Yes (reset())</td>
        </tr>
        <tr>
          <td style={tdStyle}>Purpose</td>
          <td style={tdStyle}>Show waiting state</td>
          <td style={tdStyle}>Show failure state</td>
        </tr>
      </tbody>
    </table>
  );
}

const thStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "left"
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "10px"
};
