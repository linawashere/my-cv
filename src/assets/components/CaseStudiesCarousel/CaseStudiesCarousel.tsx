import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CaseCard from '../Card/Card';
import { Case } from '@/assets/data/cases';

interface CaseStudiesCarouselProps {
    cases: Case[];
}

const CaseStudiesCarousel: React.FC<CaseStudiesCarouselProps> = ({ cases }) => {
    return (
        <div className="swiper-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                // slidesPerView="auto"
                navigation
                pagination={{ clickable: true }}
                // autoplay={{ delay: 5000 }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                }}
            >
                {cases.map((caseStudy: Case) => (
                    <SwiperSlide key={caseStudy.id}>
                        <CaseCard {...caseStudy} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CaseStudiesCarousel;