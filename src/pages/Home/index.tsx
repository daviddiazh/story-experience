import { GothicLayout } from '../../components/GothicLayout';
import { Typography } from '../../components/Typography';
import { Button } from '../../components/Button';
import { GoBackHeader } from '../../components/GoBackHeader';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css';

import './carousel.css';

import book from '../../assets/book.png'
import rules from '../../assets/rules.png'

import gallery1 from '../../assets/gallery/1.png'
import gallery2 from '../../assets/gallery/2.png'
import gallery3 from '../../assets/gallery/3.png'

const carousel: string[] = [gallery1, gallery2, gallery3];

export default function HomePage() {
  const [entered, setEntered] = useState(false);
  const navigate = useNavigate();

  const handleExplore = () => {
    setEntered(true);
    setTimeout(() => navigate('/book'), 800);
  };

  return (
    <GothicLayout className={entered ? styles.fadeOut : ''}>
      <GoBackHeader />
      <div className={styles.container}>
        <div className={styles.thirthy}>
          <Typography variant="title" style={{textAlign: 'center'}}>EL PALAIS</Typography>
          <Typography variant="subtitle" style={{textAlign: 'center'}}>Cada rincón es una prueba,</Typography>
          <Typography variant="subtitle" style={{textAlign: 'center'}}>Cada puerta,</Typography>
          <Typography variant="subtitle" style={{textAlign: 'center'}}>Una decisión</Typography>
        </div>
        <div className={styles.sixthy}>
          <Swiper
            pagination={{ clickable: true }}
            mousewheel={false}
            keyboard
            modules={[Navigation, Mousewheel, Keyboard, Autoplay, Pagination]}
            className="mySwiper"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={1}
            spaceBetween={0}
            navigation
            grabCursor={true}
            speed={800}
          >
            {carousel?.map(item => (
              <SwiperSlide key={item}>
                <img
                  src={item}
                  alt="Place"
                  loading="lazy"
                  style={{
                    padding: '0 20px'
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
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
          <img src={book} alt='Book' width={900} height='auto' className={styles.bookImg} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.thirthy}>
          <Typography variant="title">REGLAS</Typography>
          <Typography variant="subtitle" style={{textAlign: 'center'}}>Para permanecer,</Typography>
          <Typography variant="subtitle" style={{textAlign: 'center'}}>Debes cumplirlas</Typography>
        </div>
        <div className={styles.sixthy}>
          <img src={rules} alt='Rules' width={600} height='auto' className={styles.rulesImg} />
        </div>
      </div>
    </GothicLayout>
  );
}
