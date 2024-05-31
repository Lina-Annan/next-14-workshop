import Image from "next/image";

const ImageExample = () => {
  return (
    <>
      <Image src="./image.jpg" alt="image" width={500} height={500} />
    </>
  );
};

export default ImageExample;
