import React from 'react';
import { GridItem, Center, useColorModeValue } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  skillList: Array<string>;
};

export default function Skills({ skillList }: Props) {
  const spacing = 3;
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const card = useColorModeValue('whiteAlpha.600', 'blackAlpha.600');
  return (
    <GridItem
      colSpan={1}
      bg={card}
      rounded="md"
      padding={spacing}
      border="solid 1px"
      borderColor={borderColor}
    >
      <Center>
        <ul>
          {skillList.map((skill) => (
            <li key={uuidv4()}>{skill}</li>
          ))}
        </ul>
      </Center>
    </GridItem>
  );
}
