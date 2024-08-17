import '../styles/ClassicPage.css';
import ClassicGame from '../components/ClassicGame';

function ClassicPage() {
  return (
    <div className="Classic-page">
      <h2 className="Rules">Guess today's Apex Legends character!</h2>
      <ClassicGame />
    </div>
  );
}

export default ClassicPage;