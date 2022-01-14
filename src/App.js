import Admin from "./components/Admin";
import { Flex, Spacer, Center, Text, Square, Box } from "@chakra-ui/react";
function App() {
  return (
    <Flex color="black">
      <Admin>
        <Text>Box 1</Text>
      </Admin>
      <Square bg="blue.500" size="150px">
        <Text>Box 2</Text>
      </Square>
      <Box flex="1" bg="tomato">
        <Text>Box 3</Text>
      </Box>
    </Flex>
  );
}

export default App;
