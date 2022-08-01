import Pic from '../assets/kevin-pic.png';
import { Image } from '@chakra-ui/react';

function KevinPic() {
  return (
    <Image borderRadius='50%' maxWidth={256} src={Pic}></Image>
  );
}

export default KevinPic;