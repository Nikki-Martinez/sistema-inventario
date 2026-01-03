import '../styles/Footer.css';
import packageInfo from '../../package.json';

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="footer">
      
      <div><span>Versión {packageInfo.version}</span></div>
      <div>© {anio} - Luis Martínez</div>
      <div>Estado: <span style={{color: 'green'}}>●</span> Conectado</div>
    </footer>
  );
}