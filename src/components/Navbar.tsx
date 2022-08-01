import { Box, Button } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

function Navbar() {
  return (
    <Box display='flex' justifyContent='space-between' marginX='auto' margin={2} maxWidth='1400'>
      <Box display='flex' gap={2}>
        <Button colorScheme='purple'>About</Button>
        <Button>Portfolio</Button>
        <Button>Contact</Button>
      </Box>
      <ColorModeSwitcher />
    </Box>
  );
}

export default Navbar;