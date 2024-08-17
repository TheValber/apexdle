import '../styles/ClassicGrid.css';

function ClassicGrid() {
  return (
    <div className="Classic-grid">
      <table>
        <thead>
          <tr>
            <th>Legend</th>
            <th>Class</th>
            <th>Release</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Home World</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wattson</td>
            <td className="warning">Controller</td>
            <td className="success">2019</td>
            <td className="error">Female</td>
            <td className="success">24</td>
            <td className="error">Solace</td>
          </tr>
          <tr>
            <td>Bloodhound</td>
            <td className="error">Recon</td>
            <td className="success">2019</td>
            <td className="warning">Non-binary</td>
            <td className="error">40</td>
            <td className="success">Talos</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ClassicGrid;
