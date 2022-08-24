import { Flex, IconButton, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function SocialLinks() {
  const spacing = 3;
  return (
    <Flex justifyContent="center" gap={spacing} margin={spacing}>
      <a target="_blank" href="https://github.com/kh288" rel="noreferrer">
        <IconButton
          size="lg"
          fontSize="4xl"
          variant="ghost"
          color="current"
          icon={<Icon as={FaGithub} />}
          aria-label="Home Button"
        />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/kevin-hernandez-5a8243167/"
        rel="noreferrer"
      >
        <IconButton
          size="lg"
          fontSize="4xl"
          variant="ghost"
          color="current"
          icon={<Icon as={FaLinkedin} />}
          aria-label="Home Button"
        />
      </a>
      <a
        target="_blank"
        href="mailto:kevin.hernandez288@gmail.com"
        rel="noreferrer"
      >
        <IconButton
          size="lg"
          fontSize="4xl"
          variant="ghost"
          color="current"
          icon={<Icon as={FaEnvelope} />}
          aria-label="Home Button"
        />
      </a>
    </Flex>
  );
}
