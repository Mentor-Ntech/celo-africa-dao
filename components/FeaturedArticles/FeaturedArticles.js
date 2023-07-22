import {
  Container,
  Heading,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
  TabList,
  TabIndicator,
  SimpleGrid,
  Box,
  List,
  ListItem,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import Author from "../../img/author.svg";
import Link from "next/link";

const labelData = [
  { label: "Blogs" },
  { label: "Events" },
  { label: "Videos" },
];

const contentData = [
  {
    img: require("../../img/article1.svg"),
    avatar: require("../../img/author.svg"),
    author: "Poppy M",
    datePosted: "Feb 18th, 20",
    headline: "How to spend your money in 2022 and beyond",
    lead: " Cryptocurrencies like Bitcoin, XRP, and Eth have become increasingly popular over the past few years. They're also becoming an important part of our...",
    button1: "Africa Dao news",
    button2: "Project utility",
    timeToRead: "3 mins read",
  },
  {
    img: require("../../img/article2.svg"),
    avatar: require("../../img/author.svg"),
    author: "Poppy M",
    datePosted: "Feb 18th, 20",
    headline: "How to spend your money in 2022 and beyond",
    lead: " Cryptocurrencies like Bitcoin, XRP, and Eth have become increasingly popular over the past few years. They're also becoming an important part of our...",
    button1: "Africa Dao news",
    button2: "Project utility",
    timeToRead: "3 mins read",
  },
  {
    img: require("../../img/article3.svg"),
    avatar: require("../../img/author.svg"),
    author: "Poppy M",
    datePosted: "Feb 18th, 20",
    headline: "How to spend your money in 2022 and beyond",
    lead: " Cryptocurrencies like Bitcoin, XRP, and Eth have become increasingly popular over the past few years. They're also becoming an important part of our...",
    button1: "Africa Dao news",
    button2: "Project utility",
    timeToRead: "3 mins read",
  },
];

const FeaturedArticles = () => {
  return (
    <Container
      as="section"
      bg="#fbf6f1"
      maxWidth="auto"
      pl="56px"
      pt="60px"
      pb="120px"
    >
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
      <Tabs borderColor="#fbf6f1">
        <TabList fontFamily="Poppins" fontSize="16px" fontWeight="400">
          {labelData.map((label) => (
            <Tab>{label.label}</Tab>
          ))}
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="1px"
          bg="#403e3e"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <Flex
              gap="70px"
              wrap="wrap"
              justifyContent="center"
              alignItems="center"
              p="10px"
            >
              {contentData.map((content, i) => (
                <Box h="592px" w="427px">
                  <List spacing="3">
                    <ListItem>
                      <Image src={content.img} alt="Article" />
                    </ListItem>
                    <Flex gap="8px">
                      <Image src={content.avatar} alt="Author" />
                      <Text
                        fontFamily="sofian-sans"
                        fontSize="16px"
                        fontWeight="700"
                      >
                        {content.author}
                      </Text>
                      <Text
                        fontFamily="sofian-sans"
                        fontSize="16px"
                        fontWeight="200"
                      >
                        {content.datePosted}
                      </Text>
                    </Flex>
                    <ListItem>
                      <Text
                        fontFamily="PT-sherif"
                        fontSize="20px"
                        fontWeight="700"
                      >
                        {content.headline}
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text
                        fontFamily="PT-sherif"
                        fontSize="16px"
                        fontWeight="400"
                      >
                        {content.lead}
                      </Text>
                    </ListItem>
                    <Flex alignItems="center" gap="4">
                      <Box
                        as="button"
                        h="28px"
                        w="121px"
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        bg="#1A0329"
                        borderColor="#ccd0d5"
                        _hover={{ bg: "#FFFFFF", color: "#1c1a1a" }}
                        color="#F7F7F7"
                        fontFamily="Poppins"
                        fontSize="16px"
                        fontWeight="300"
                        borderRadius="100px"
                      >
                        <Link href="/">{content.button1}</Link>
                      </Box>
                      <Box
                        as="button"
                        h="28px"
                        w="121px"
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        bg="#1A0329"
                        borderColor="#ccd0d5"
                        _hover={{ bg: "#FFFFFF", color: "#1c1a1a" }}
                        color="#F7F7F7"
                        fontFamily="Poppins"
                        fontSize="16px"
                        fontWeight="300"
                        borderRadius="100px"
                      >
                        <Link href="/">{content.button2}</Link>
                      </Box>
                      <Text
                        fontFamily="Poppins"
                        fontSize="18px"
                        fontWeight="300"
                      >
                        {content.timeToRead}
                      </Text>
                    </Flex>
                  </List>
                </Box>
              ))}

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
            </Flex>
          </TabPanel>
          <TabPanel>22222</TabPanel>
          <TabPanel>33333</TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default FeaturedArticles;
