import {
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Box,
  Text,
  Tag,
  Flex,
  Button,
  TableContainer,
  Table,
  Thead,
  Th,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Center flexDir="column" gap={4} bgColor="red.300">
      <Heading mt={5}>Your choosen recipe</Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        <Box width={{ base: "90%", md: "70%" }} p={2} m={1}>
          <Card
            size={"md"}
            border={"solid"}
            borderColor="gray.400"
            borderRadius="2xl"
            bgColor="gray.200"
            h="100%"
          >
            <CardBody>
              <Button
                bgColor="gray.100"
                boxShadow="md"
                position={"absolute"}
                m={2}
                w="fit-content"
                onClick={() => clickFn()}
              >
                Back to all recipes
              </Button>
              <Image
                src={recipe.image}
                h={60}
                w={"100%"}
                borderRadius="2xl"
                objectFit={"cover"}
              />
              <Flex flexDir={{ base: "column", md: "row" }} p="4" gap={4}>
                <Box flexBasis={{ base: "100%", md: "50%" }}>
                  {recipe.mealType.length > 0 && (
                    <Text
                      textTransform={"uppercase"}
                      fontSize="smaller"
                      alignItems={"flex-start"}
                      mb={1}
                    >
                      {recipe.mealType.join(", ")}
                    </Text>
                  )}
                  <Text fontWeight="bold" fontSize="xl" mr={2}>
                    {recipe.label}
                  </Text>

                  {recipe.yield !== null && (
                    <Text mt={2}>Servings: {recipe.yield}</Text>
                  )}
                  {recipe.dishType.length > 0 && (
                    <Text mb={2}>Dish type: {recipe.dishType.join(", ")}</Text>
                  )}
                  {recipe.ingredientLines.length > 0 && (
                    <>
                      <Text fontWeight="bold">Ingredients: </Text>
                      <ul style={{ listStyleType: "none" }}>
                        {recipe.ingredientLines.map((ingredient, index) => {
                          const cleanedIngredient = ingredient.replace(
                            /^\*\s*/,
                            ""
                          );
                          return <li key={index}>{cleanedIngredient}</li>;
                        })}
                      </ul>
                    </>
                  )}
                </Box>
                <Box flexBasis={{ base: "100%", md: "50%" }}>
                  {recipe.dietLabels.length > 0 && (
                    <>
                      <p>Diet Labels:</p>
                      <Tag
                        bgColor={"blue.100"}
                        boxShadow="md"
                        textAlign={"center"}
                        mb={2}
                      >
                        {recipe.dietLabels.join(", ")}
                      </Tag>
                    </>
                  )}
                  {recipe.healthLabels.length > 0 && (
                    <>
                      <p>Health Labels:</p>
                      <Box mb={2}>
                        <Flex flexWrap="wrap">
                          {recipe.healthLabels.map((label, index) => (
                            <Tag
                              key={index}
                              bgColor={"orange.100"}
                              boxShadow="md"
                              textAlign={"center"}
                              m={0.5}
                            >
                              {label}
                            </Tag>
                          ))}
                        </Flex>
                      </Box>
                    </>
                  )}
                  {recipe.cautions.length > 0 && (
                    <>
                      <p>Cautions:</p>
                      <Tag
                        bgColor={"green.100"}
                        boxShadow="md"
                        textAlign={"center"}
                        mb={4}
                      >
                        Allergens: {recipe.cautions.join(", ")}
                      </Tag>
                    </>
                  )}
                  <p></p>
                  <TableContainer>
                    <Table variant="striped" size="sm">
                      <Thead>
                        <Tr>
                          <Th>Nutrients</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {[
                          "ENERC_KCAL",
                          "PROCNT",
                          "FAT",
                          "CHOCDF",
                          "CHOLE",
                          "NA",
                        ].map((nutrient) => (
                          <Tr key={nutrient}>
                            <Td>{recipe.totalNutrients[nutrient].label}</Td>
                            <Td>
                              {recipe.totalNutrients[nutrient].quantity.toFixed(
                                0
                              )}
                            </Td>
                            <Td>{recipe.totalNutrients[nutrient].unit}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Box>
              </Flex>
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </Center>
  );
};
