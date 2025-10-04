import Gallery from "react-photo-gallery";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const PortfolioPregnancy = () => {
  const [currentIndex, setCurrentIndex] = useState(undefined);

  const photos = [
    {
      src: "/assets/picture/portfolio-grossesse/portfolio-grossesse-1.avif",
      width: 968,
      height: 822,
    },
    {
      src: "/assets/picture/portfolio-grossesse/portfolio-grossesse-2.avif",
      width: 974,
      height: 1462,
    },
    {
      src: "/assets/picture/portfolio-grossesse/portfolio-grossesse-3.avif",
      width: 976,
      height: 1714,
    },
    {
      src: "/assets/picture/portfolio-grossesse/portfolio-grossesse-4.avif",
      width: 974,
      height: 1290,
    },
    {
      src: "/assets/picture/portfolio-grossesse/portfolio-grossesse-5.avif",
      width: 976,
      height: 612,
    },
    {
      src: "/assets/picture/portfolio-grossesse/portfolio-grossesse-6.avif",
      width: 974,
      height: 1462,
    },
    {
      src: "/assets/picture/portfolio-grossesse/portfolio-grossesse-7.avif",
      width: 976,
      height: 1464,
    },
    {
      src: "/assets/picture/portfolio-grossesse/portfolio-grossesse-8.avif",
      width: 974,
      height: 1462,
    },
    {
      src: "/assets/picture/portfolio-grossesse/portfolio-grossesse-9.avif",
      width: 976,
      height: 1464,
    },
    {
      src: "/assets/picture/portfolio-grossesse/portfolio-grossesse-10.avif",
      width: 974,
      height: 1462,
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
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
