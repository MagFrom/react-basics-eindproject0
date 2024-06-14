import { Image } from "@chakra-ui/react";

export const RecipeCardImage = ({ src }) => {
  return (
    <Image src={src} h={60} w={"100%"} borderRadius="2xl" objectFit={"cover"} />
  );
};
