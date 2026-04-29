import { GothicLayout } from '../../components/GothicLayout';
import { Typography } from '../../components/Typography';
import { Button } from '../../components/Button';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function HomePage() {
  const [entered, setEntered] = useState(false);
  const navigate = useNavigate();

  const handleExplore = () => {
    setEntered(true);
    setTimeout(() => navigate('/book'), 800);
  };

  return (
    <GothicLayout className={entered ? styles.fadeOut : ''}>
      <div className={styles.container}>
        <div className={styles.thirthy}>
          <Typography variant="title" style={{textAlign: 'center'}}>EL PALAIS</Typography>
          <Typography variant="subtitle" style={{textAlign: 'center'}}>Cada rincón es una prueba,</Typography>
          <Typography variant="subtitle" style={{textAlign: 'center'}}>Cada puerta,</Typography>
          <Typography variant="subtitle" style={{textAlign: 'center'}}>Una decisión</Typography>
        </div>
        <div className={styles.sixthy}>
          <Typography variant="subtitle">Carrusel</Typography>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.thirthy}>
          <Typography variant="title">Archivo</Typography>
          <Typography variant="subtitle" style={{textAlign: 'center'}}>Fragmentos de otras invitadas que vinieron antes que tú...</Typography>
          <Button
            text='Explorar'
            onClick={handleExplore}
          />
        </div>
        <div className={styles.sixthy}>
          <Typography variant="subtitle">Imagen</Typography>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.thirthy}>
          <Typography variant="title">REGLAS</Typography>
          <Typography variant="subtitle" style={{textAlign: 'center'}}>Para permanecer,</Typography>
          <Typography variant="subtitle" style={{textAlign: 'center'}}>Debes cumplirlas</Typography>
        </div>
        <div className={styles.sixthy}>
          <Typography variant="subtitle">Imagen</Typography>
        </div>
      </div>
    </GothicLayout>
  );
}
