import './App.css';
import { Button } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <>
      <ColorModeSwitcher />
      <Button>Press Me!</Button>
    </>
  );
}

export default App;
