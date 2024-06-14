import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange, value }) => (
  <Input
    placeholder="Choose your recipe"
    borderRadius={"xl"}
    borderColor={"green"}
    color={"gray.100"}
    fontSize="1.25rem"
    textAlign="center"
    size="lg"
    width="auto"
    onChange={onChange}
    value={value}
  />
);
