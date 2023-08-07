import "../../styles/styles.css";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import { labelData, blogData, eventsData } from "./data";

import {
  Container,
  Heading,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
  TabList,
  TabIndicator,
  Box,
  List,
  ListItem,
  Text,
  Flex,
  Link,
} from "@chakra-ui/react";

const FeaturedArticles = () => {
  return (
    <Container as="section" bg="#fbf6f1" maxWidth="auto" pt="60px" pb="120px">
      <Heading
        as="h2"
        textAlign="center"
        fontFamily="PT-serif"
        fontSize="40px"
        fontWeight="700"
        mb="20"
      >
        Featured Articles
      </Heading>
      <Tabs as="div" borderColor="#fbf6f1">
        <TabList fontFamily="Poppins" fontSize="16px" fontWeight="400">
          {labelData.map((label, i) => (
            <Tab key={i}>{label.label}</Tab>
          ))}
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="1px"
          bg="#403e3e"
          borderRadius="1px"
        />
        <TabPanels>
          {/* Blog Tap Panel */}
          <TabPanel
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            gap="70px"
          >
            <Flex
              gap="70px"
              wrap="wrap"
              justifyContent="center"
              alignItems="center"
              p="10px"
              id="blogCard"
            >
              {blogData.map((blog, i) => (
                <Box
                  key={i}
                  h={{ base: "467px", sm: "592px" }}
                  w={{ base: "247px", sm: "427px" }}
                >
                  <List spacing="3">
                    <ListItem as="li">
                      <Image src={blog.img} alt="Article" />
                    </ListItem>
                    <Flex gap="8px">
                      <Image src={blog.avatar} alt="Author" />
                      <Text
                        fontFamily="sofian-sans"
                        fontSize="16px"
                        fontWeight="700"
                      >
                        {blog.author}
                      </Text>
                      <Text
                        fontFamily="sofian-sans"
                        fontSize="16px"
                        fontWeight="200"
                      >
                        {blog.datePosted}
                      </Text>
                    </Flex>
                    <ListItem as="li">
                      <Text
                        fontFamily="PT-sherif"
                        fontSize="20px"
                        fontWeight="700"
                      >
                        {blog.headline}
                      </Text>
                    </ListItem>
                    <ListItem as="li">
                      <Text
                        fontFamily="PT-sherif"
                        fontSize="16px"
                        fontWeight="400"
                      >
                        {blog.lead}
                      </Text>
                    </ListItem>
                    <Flex alignItems="center" gap="1">
                      <Box
                        as="button"
                        h="28px"
                        w={{ base: "76px", sm: "87px", md: "121px" }}
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        bg="#1A0329"
                        borderColor="#ccd0d5"
                        _hover={{ bg: "#FFFFFF", color: "#1c1a1a" }}
                        color="#F7F7F7"
                        fontFamily="Poppins"
                        fontSize={{ base: "10px", sm: "12px", md: "16px" }}
                        fontWeight="300"
                        borderRadius="100px"
                      >
                        <Link href="/">{blog.button1}</Link>
                      </Box>
                      <Box
                        as="button"
                        h="28px"
                        w={{ base: "76px", sm: "87px", md: "121px" }}
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        bg="#1A0329"
                        borderColor="#ccd0d5"
                        _hover={{ bg: "#FFFFFF", color: "#1c1a1a" }}
                        color="#F7F7F7"
                        fontFamily="Poppins"
                        fontSize={{ base: "10px", sm: "12px", md: "16px" }}
                        fontWeight="300"
                        borderRadius="100px"
                      >
                        <Link href="/">{blog.button2}</Link>
                      </Box>
                      <Text
                        fontFamily="Poppins"
                        fontSize={{ base: "12px", sm: "14px", md: "16px" }}
                        fontWeight="300"
                      >
                        {blog.timeToRead}
                      </Text>
                    </Flex>
                  </List>
                </Box>
              ))}
            </Flex>

            <Box
              as="button"
              h="46px"
              w="168px"
              p="10px"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              bg="transparent"
              borderColor="#ccd0d5"
              _hover={{ bg: "#FFFFFF" }}
              color="#1C1C1C"
              fontFamily="sofia-sans"
              fontSize="24px"
              fontWeight="400"
              borderRadius="60px"
              border="1px solid #676767"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Link href="/">See More</Link>
            </Box>
          </TabPanel>

          {/* Events Tab Panel */}
          <TabPanel>
            <Flex
              columnGap="70px"
              rowGap="20px"
              wrap="wrap"
              justifyContent="center"
              alignItems="center"
              p="10px"
            >
              {eventsData.map((event, i) => (
                <List
                  as="ul"
                  key={i}
                  border="1px solid black"
                  overflow="hidden"
                  h="auto"
                  w="427px"
                  borderRadius="30px"
                  bgColor={event.bgColor}
                >
                  <ListItem as="li">
                    <Image src={event.eventImg} />
                  </ListItem>
                  <ListItem as="li">
                    <Text
                      color="#F7F7F7"
                      fontFamily="PT-serif"
                      fontWeight="700"
                      fontSize={{ base: "16px", sm: "20px" }}
                      pos="relative"
                      top={{ base: "-32", sm: "-40" }}
                      mx="20px"
                    >
                      {event.description}
                    </Text>
                  </ListItem>
                  <ListItem as="li" bgColor={event.bgColor}>
                    <Text position="relative" top={{ base: "-95", sm: "-121" }}>
                      <Image src={event.eventBg} />
                    </Text>
                    <Text
                      color="black"
                      fontFamily="PT-serif"
                      fontWeight="700"
                      fontSize={{ base: "16px", sm: "20px" }}
                      m="20px"
                    >
                      {event.headline}
                    </Text>
                    <Text
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mt={2}
                      m="20px"
                      pb="40px"
                      href="/"
                    >
                      <Link
                        href={event.readmoreLink}
                        fontFamily="sans-serif"
                        fontWeight="700"
                        fontSize={{ base: "16px", sm: "20px" }}
                      >
                        Read More
                      </Link>
                      <Link href={"/"}>
                        <FaArrowRight />
                      </Link>
                    </Text>
                  </ListItem>
                </List>
              ))}
            </Flex>
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default FeaturedArticles;
