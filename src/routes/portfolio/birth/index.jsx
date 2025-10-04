import Gallery from "react-photo-gallery";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const PortfolioBirth = () => {
  const [currentIndex, setCurrentIndex] = useState(undefined);

  const photos = [
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-1.avif",
      width: 976,
      height: 656,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-2.avif",
      width: 974,
      height: 650,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-3.avif",
      width: 974,
      height: 664,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-4.avif",
      width: 976,
      height: 1464,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-5.avif",
      width: 974,
      height: 476,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-6.avif",
      width: 974,
      height: 650,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-7.avif",
      width: 976,
      height: 556,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-8.avif",
      width: 974,
      height: 650,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-9.avif",
      width: 976,
      height: 650,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-10.avif",
      width: 974,
      height: 1406,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-11.avif",
      width: 976,
      height: 1412,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-12.avif",
      width: 974,
      height: 892,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-13.avif",
      width: 976,
      height: 1150,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-14.avif",
      width: 974,
      height: 684,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-15.avif",
      width: 976,
      height: 718,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-16.avif",
      width: 974,
      height: 650,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-17.avif",
      width: 976,
      height: 1410,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-18.avif",
      width: 974,
      height: 1356,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-19.avif",
      width: 976,
      height: 530,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-20.avif",
      width: 974,
      height: 806,
    },
    {
      src: "/assets/picture/portfolio-naissance/portfolio-naissance-21.avif",
      width: 976,
      height: 564,
    },
  ];
  const closeModal = () => setCurrentIndex(undefined);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <>
      <div className="px-10 md:px-[25%] py-10">
        <Gallery
          photos={photos}
          direction="column"
          columns={2}
          margin={5}
          onClick={(_, { index }) => setCurrentIndex(index)}
        />
      </div>

      {currentIndex !== undefined && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFFBF4]/90"
          onClick={closeModal}
        >
          <img
            src={photos[currentIndex].src}
            alt={`detail ${currentIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain select-none"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-black hover:opacity-70 transition"
          >
            <X size={32} />
          </button>
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white md:text-black hover:opacity-70 transition"
          >
            <ChevronLeft size={48} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white md:text-black hover:opacity-70 transition"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </>
  );
};
