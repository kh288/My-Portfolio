import React from 'react';
import {
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  Link,
  ListItem,
  UnorderedList,
  useColorModeValue,
  Text,
  Image,
  Box
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  title: string;
  summary?: string;
  frontendList: Array<string>;
  backendList: Array<string>;
  deployment: string;
  github: string;
  imageUrl: string;
};

export default function ProjectCard({
  title,
  summary,
  frontendList,
  backendList,
  deployment,
  github,
  imageUrl
}: Props) {
  const spacing = 6;
  const card = useColorModeValue('whiteAlpha.600', 'blackAlpha.600');
  const borderColor = useColorModeValue('gray.300', 'gray.600');

  return (
    <GridItem
      colSpan={1}
      bg={card}
      rounded="md"
      padding={spacing}
      border="solid 1px"
      borderColor={borderColor}
    >
      <Heading marginBottom={spacing} textAlign="center" size="lg">
        {title}
      </Heading>
      <Text>{summary}</Text>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={spacing}
        marginTop={spacing}
        display="flex"
        justifyContent="space-between"
      >
        <GridItem colSpan={1} justifyContent="space-around">
          <Heading size="md">Front-end</Heading>
          <UnorderedList>
            {frontendList.map((frontendListItem) => (
              <ListItem key={uuidv4()}>{frontendListItem}</ListItem>
            ))}
          </UnorderedList>
        </GridItem>
        <GridItem colSpan={1}>
          <Heading size="md">Back-end</Heading>
          <UnorderedList>
            {backendList.map((backendListItem) => (
              <ListItem key={uuidv4()}>{backendListItem}</ListItem>
            ))}
          </UnorderedList>
        </GridItem>
      </Grid>

      <Box marginTop={spacing} display="flex" justifyContent="space-between">
        <Link href={deployment} isExternal tabIndex={-1}>
          <Button colorScheme="purple">
            Deployment
            <ExternalLinkIcon ml={spacing} />
          </Button>
        </Link>
        <Link href={github} isExternal tabIndex={-1}>
          <Button colorScheme="blue">
            Github <ExternalLinkIcon ml={spacing} />
          </Button>
        </Link>
      </Box>

      <Image marginTop={spacing} src={imageUrl} shadow="md" />
    </GridItem>
  );
}

ProjectCard.defaultProps = {
  summary: ''
};
