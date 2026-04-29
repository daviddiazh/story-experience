import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';
import { GothicLayout } from '../../components/GothicLayout';

export default function InvitationPage() {
  const [entered, setEntered] = useState(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    setEntered(true);
    setTimeout(() => navigate('/home'), 800);
  };

  return (
    <GothicLayout className={entered ? styles.fadeOut : ''}>
      <Typography variant="title">ERES INVITADA</Typography>

      <div className={styles.divider}>
        <span className={styles.dividerSymbol}>⚜</span>
      </div>

      <Typography variant="subtitle" as="p">AL PALAIS DES OMBRES</Typography>
      <Typography variant="subtitle" as="p">Un lugar donde la perfección</Typography>
      <Typography variant="subtitle" as="p">es el único camino.</Typography>

      <span className={styles.crossPattern}>✦ ✕ ✕ ✕ ✕</span>

      <Button text='ACEPTAR INVITACIÓN' onClick={handleEnter} />
    </GothicLayout>
  );
}
