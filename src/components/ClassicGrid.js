import '../styles/ClassicGrid.css';
import { legendsFaces } from '../data/Face';

function ClassicGrid({legendsGrid}) {
  const legends = [...legendsGrid].reverse();

  return (
    <div className="Classic-grid">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Legend</th>
            <th>Class</th>
            <th>Release</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Home World</th>
          </tr>
        </thead>
        <tbody>
          {legends.map((legend, index) => (
            <tr key={index}>
              <td className='face' style={{ backgroundImage: `url(${legendsFaces[legend.legend]})`}}></td>
              <td>{legend.legend}</td>
              <td className={legend.class.state}>{legend.class.value}</td>
              <td className={legend.release.state}>{legend.release.value}</td>
              <td className={legend.gender.state}>{legend.gender.value}</td>
              <td className={legend.age.state}>{legend.age.value}</td>
              <td className={legend.homeworld.state}>{legend.homeworld.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClassicGrid;
