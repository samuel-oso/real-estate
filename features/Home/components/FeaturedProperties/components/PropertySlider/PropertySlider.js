import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropertyCard from "@/features/common/modules/PropertyCard";
import { useIsDesktop } from "@/features/common/Hooks/useIsDesktop";

const PropertySlider = ({ featuredProperties }) => {
  const { isDesktop } = useIsDesktop();

  return featuredProperties.length > 0 ? (
    <Swiper
      slidesPerView={isDesktop ? 3 : 1}
      spaceBetween={10}
      loop={true}
      data-loop-fill-group-with-blank={true}
      centeredSlides={true}
      autoplay={{ delay: 2000, disableOnInteraction: true }}
      pagination={{ dynamicBullets: true }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {featuredProperties.map((property) => (
        <SwiperSlide key={property.id}>
          <PropertyCard {...property} />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : null;
};

export default PropertySlider;
