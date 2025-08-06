import Gallery from "react-photo-gallery";

export const PortfolioPregnancy = () => {

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
  return (
    <div className="px-10 md:px-[25%] py-10">
      <Gallery photos={photos} direction="column" columns={2} margin={5} onClick={(e, {photo, index}) => {
        console.log('e',e)
        console.log('photo',photo)
        console.log('index',index)
      }} />
    </div>
  );
};
