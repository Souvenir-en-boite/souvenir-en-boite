import Gallery from "react-photo-gallery";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const PortfolioWedding = () => {
  const [currentIndex, setCurrentIndex] = useState(undefined);

  const photos = [
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-1.avif",
      width: 976,
      height: 806,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-2.avif",
      width: 974,
      height: 518,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-3.avif",
      width: 974,
      height: 1340,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-4.avif",
      width: 976,
      height: 1464,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-5.avif",
      width: 974,
      height: 1312,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-6.avif",
      width: 976,
      height: 688,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-7.avif",
      width: 976,
      height: 1516,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-8.avif",
      width: 974,
      height: 732,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-9.avif",
      width: 974,
      height: 1448,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-10.avif",
      width: 976,
      height: 1454,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-11.avif",
      width: 974,
      height: 1552,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-12.avif",
      width: 976,
      height: 626,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-13.avif",
      width: 976,
      height: 1290,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-14.avif",
      width: 974,
      height: 650,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-15.avif",
      width: 974,
      height: 1546,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-16.avif",
      width: 976,
      height: 1434,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-17.avif",
      width: 974,
      height: 1298,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-18.avif",
      width: 976,
      height: 718,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-19.avif",
      width: 976,
      height: 1380,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-20.avif",
      width: 974,
      height: 650,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-21.avif",
      width: 974,
      height: 1460,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-22.avif",
      width: 976,
      height: 650,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-23.avif",
      width: 976,
      height: 606,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-24.avif",
      width: 974,
      height: 1462,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-25.avif",
      width: 976,
      height: 1446,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-26.avif",
      width: 974,
      height: 696,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-27.avif",
      width: 976,
      height: 650,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-28.avif",
      width: 974,
      height: 1344,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-29.avif",
      width: 976,
      height: 650,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-30.avif",
      width: 976,
      height: 1464,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-31.avif",
      width: 974,
      height: 1436,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-32.avif",
      width: 976,
      height: 1464,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-33.avif",
      width: 974,
      height: 1460,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-34.avif",
      width: 976,
      height: 606,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-35.avif",
      width: 974,
      height: 650,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-36.avif",
      width: 976,
      height: 1464,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-37.avif",
      width: 974,
      height: 664,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-38.avif",
      width: 974,
      height: 610,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-39.avif",
      width: 976,
      height: 1392,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-40.avif",
      width: 974,
      height: 1250,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-41.avif",
      width: 976,
      height: 1344,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-42.avif",
      width: 974,
      height: 1432,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-43.avif",
      width: 976,
      height: 694,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-44.avif",
      width: 974,
      height: 1460,
    },
    {
      src: "/assets/picture/portfolio-mariage/portfolio-mariage-45.avif",
      width: 976,
      height: 806,
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
