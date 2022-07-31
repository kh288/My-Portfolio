import { Box, Button } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

function Navbar() {
  return (
    <Box display='flex' justifyContent='space-between' marginX='auto' margin={3}>
      <Box display='flex' gap={3}>
        <Button colorScheme='blue'>Something!</Button>
        <Button colorScheme='purple'>Another thing!</Button>
      </Box>
      <Box>
        <ColorModeSwitcher color='purple' />
      </Box>
    </Box>
  );
}

export default Navbar;