import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import Slide from './Slide';
import banner1 from '../assets/img/hei-banner-1.webp';
import banner2 from '../assets/img/hei-banner-2.webp';
import banner3 from '../assets/img/hei-banner-3.webp';

function Prof() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      effect="fade"
      loop={true}
      spaceBetween={50}
      slidesPerView={1} 
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='text-black'
    >
      <SwiperSlide>
        <Slide texte="Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relâche pour la montée en compétences de nos étudiants." backgroundImg={banner1} />
      </SwiperSlide>
      <SwiperSlide>
      <Slide texte="« L’éducation est l’arme la plus puissante pour changer le monde » selon Nelson Mandela. « L’éducation dans l’informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar » selon HEI. C’est notre mission." backgroundImg={banner2} />
      </SwiperSlide>
      <SwiperSlide>
      <Slide texte="Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l’employabilité de nos étudiants." backgroundImg={banner3} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Prof;