'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArrowBackIcon from './ui/icons/ArrowBackIcon';
import ArrowForwardIcon from './ui/icons/ArrowForwardIcon';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

type Props = {
  children: React.ReactNode;
};

type ArrowProps = {
  onClick: undefined;
};

const arrowStyle = 'react-multiple-carousel__arrow flex items-center justify-center';

const CustomLeftArrow = ({ onClick }: ArrowProps) => (
  <button aria-label="Go to previous slide" className={`${arrowStyle} + left-[calc(4%+1px)]`} onClick={onClick}>
    <ArrowBackIcon className="text-white !opacity-100" />
  </button>
);

const CustomRightArrow = ({ onClick }: ArrowProps) => (
  <button aria-label="Go to next slide" className={`${arrowStyle} + right-[calc(4%+1px)]`} onClick={onClick}>
    <ArrowForwardIcon className="text-white" />
  </button>
);

export default function MultiCarousel({ children }: Props) {
  return (
    <Carousel infinite autoPlay responsive={responsive} itemClass="p-4" customLeftArrow={<CustomLeftArrow onClick={undefined} />} customRightArrow={<CustomRightArrow onClick={undefined} />}>
      {children}
    </Carousel>
  );
}
