import { Box, Center, Text, Flex, Tag } from "@chakra-ui/react";

export const RecipeCardText = ({
  label,
  mealTypes,
  dishTypes,
  healthLabels,
  dietLabels,
  cautions,
}) => {
  return (
    <Box p="4">
      <Center flexDir="column" gap={1}>
        {mealTypes.length > 0 && (
          <Text
            textTransform={"uppercase"}
            fontSize="smaller"
            textAlign={"center"}
          >
            {mealTypes.join(", ")}
          </Text>
        )}
        <Text fontWeight="bold" fontSize="xl" mb={2} textAlign={"center"}>
          {label}
        </Text>
        {dishTypes.length > 0 && (
          <Flex mb={2}>
            <p>Dish:&nbsp;</p>
            <Text as="i" textAlign={"center"}>
              {dishTypes.join(", ")}
            </Text>
          </Flex>
        )}
        <Flex>
          {healthLabels.includes("Vegetarian") && (
            <Tag bgColor={"orange.100"} boxShadow="md" mr={1}>
              Vegetarian
            </Tag>
          )}
          {healthLabels.includes("Vegan") && (
            <Tag bgColor={"orange.100"} boxShadow="md">
              Vegan
            </Tag>
          )}
        </Flex>

        {dietLabels.length > 0 && (
          <Box textAlign={"center"} mt={3}>
            <p>Diet Label(s):</p>
            <Tag bgColor={"blue.100"} boxShadow="md" textAlign={"center"}>
              {dietLabels.join(", ")}
            </Tag>
          </Box>
        )}

        {cautions.length > 0 && (
          <Box mt={3} textAlign={"center"}>
            <p>Cautions: &nbsp;</p>
            <Tag bgColor={"green.100"} boxShadow="md" textAlign={"center"}>
              {cautions.join(", ")}
            </Tag>
          </Box>
        )}
      </Center>
    </Box>
  );
};
