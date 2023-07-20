import {
  Box,
  Flex,
  Link,
  Heading,
  HStack,
  IconButton,
  VStack,
  Spacer,
  
} from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../../img/celo.svg";
import NextLink from "next/link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

const navList = [
  { title: "DAO Proposals", path: "#" },
  { title: "About", path: "/" },
  { title: "Blog", path: "/" },
  { title: "Team", path: "/" },
  { title: "FAQs", path: "/" },
];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <Flex
      as="nav"
      bg="#FBF6F1;"
      p="20px"
      zIndex="2"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      width="100%"
    >
      <HStack>
        <Link href="/">
          <Image src={Logo} alt="celo" width={90} height="auto" />
        </Link>

        <Heading as="h3" size="md">
          <NextLink href="/home" passHref>
            Africa DAO
          </NextLink>
        </Heading>
      </HStack>

      <Spacer />

      {/* NavList */}
      <HStack
        spacing="20"
        px="30"
        fontSize={18}
        display={["none", "none", "none", "flex"]}
      >
        {navList.map((item, index) => (
          <Box key={index}>
            <Link href={item.path}>{item.title}</Link>
          </Box>
        ))}
      </HStack>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        w="40px"
        h="40px"
        borderRadius="50%"
      >
        <IconButton
          size="md"
          colo
          icon={<HamburgerIcon />}
          display={["flex", "flex", "flex", "none"]}
          aria-label="Open Menu"
          onClick={() => setToggle(true)}
        />

        {toggle && (
          <Box
            as="div"
            bg="#FCF951"
            w="100%"
            h="100vh"
            p="5"
            position="fixed"
            zIndex="5"
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            top="0"
            border="0"
            right="0"
            flexDir="column"
          >
            <IconButton
              size="md"
              icon={<CloseIcon />}
              aria-label={"Close Menu"}
              onClick={() => setToggle(false)}
            />
            <VStack
              m="0"
              p="0"
              h="100%"
              w="100%"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              {navList.map((item, index) => (
                <Box key={index} m={5}>
                  <Link
                    href={item.path}
                    onClick={() => setToggle(false)}
                    fontSize="2xl"
                  >
                    {item.title}
                  </Link>
                </Box>
              ))}
            </VStack>
          </Box>
        )}
      </Box>
    </Flex>
  );
}
