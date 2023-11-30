import { Heading, Text, Container, Box, Button } from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";
import "../../styles/styles.css";

const VisionMission = () => {
  return (
    <>
      <Container
        as="section"
        maxW="auto"
        pb="144px"
        pl="39px"
        display={{ base: "none", lg: "flex" }}
        gap={{ md: "128px", lg: "0px" }}
        flexDirection={{ base: "column", lg: "row" }}
        background="#1A0329"
      >
        <Box
          display="flex"
          flexDir="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          pt="193px"
        >
          <Heading
            as="h2"
            fontSize="40px"
            color="#fff"
            fontFamily="PT-Serif"
            mb="15px"
          >
            Our Vision
          </Heading>

          <Text fontSize="24px" color="#fff" fontFamily="sofia-sans">
            The connectedness of individuals from different background working together to achieve the same
            mission of a healthy ecosystem where everyone can thrive irrespective of their experience is the kind of community
            we envisage to build in Celo Africa DAO.
          </Text>

          <Button
            rightIcon={<ArrowForwardIcon color="#1F2223" />}
            background="#1A0329"
            display="flex"
            justifyContent="center"
            textAlign="center"
            gap={18}
            flexShrink="0"
            color="#878787"
            border="1px solid rgba(103, 103, 103, 0.75)"
            width="331px"
            height="90px"
            borderRadius="60px"
            mt="101px"
          >
            <Link href="/">Read Whitepaper</Link>
          </Button>
        </Box>

        <Box as="div" id="mission">
          <Box as="div" mr="62px" mt="678px">
            <Heading
              as="h2"
              fontSize="40px"
              color="#fff"
              fontFamily="PT Serif"
              mb="15px"
            >
              Our Mission
            </Heading>

            <Text fontSize="24px" color="#fff" fontFamily="Sofia Sans">
              The Celo Africa DAO is dedicated to supporting emerging Web3 developers,designers, community managers
              and others in
              building impactful real-world solutions that solves relevant problems within the community.
              To achieve this, the DAO is organizing accelerator programs, developers workshops, community and university events,
              offering tailored support, including resources, mentorship, and a
              nurturing environment. These initiatives aim to foster success,
              innovation, and contribute to the overall growth and impact of the
              Celo ecosystem.
            </Text>
          </Box>
        </Box>
      </Container>

      {/* For Tablet */}
      <Container
        as="section"
        maxW="auto"
        pb="144px"
        pl="30px"
        display={{ base: "none", sm: "inline-block", lg: "none" }}
        background="#1A0329"
      >
        <Box>
          <Heading
            as="h2"
            fontSize="28px"
            color="#fff"
            fontFamily="PT-Serif"
            mt="61px"
            mb="15px"
          >
            Our Vision
          </Heading>

          <Text
            fontSize="22px"
            color="#fff"
            fontFamily="sofia-sans"
            mb="46px"
            mr="120px"
          >
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </Text>

          <Button
            rightIcon={<ArrowForwardIcon color="#1F2223" />}
            background="#1A0329"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={15}
            fontSize="16px"
            lineHeight="24px"
            fontFamily="sofia-sans"
            flexShrink="0"
            color="#878787"
            border="1px solid rgba(103, 103, 103, 0.75)"
            width="246px"
            height="48px"
            mt="46px"
            borderRadius="60px"
          >
            <Link href="/">Read Whitepaper</Link>
          </Button>
        </Box>

        <Box as="div" id="mission2" mt="46px" mr="30px">
          <Box as="div">
            <Heading
              as="h2"
              fontSize="28px"
              color="#fff"
              fontFamily="PT Serif"
              mb="15px"
              textAlign="right"
            >
              Our Mission
            </Heading>

            <Text
              fontSize="24px"
              color="#fff"
              fontFamily="Sofia Sans"
              ml="128px"
            >
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
              condimentum ac, vestibulum eu nisl.
            </Text>
          </Box>
        </Box>
      </Container>

      {/* For Mobile */}
      <Container
        as="section"
        maxW="auto"
        pb="144px"
        pl="22px"
        display={{ base: "inline-block", sm: "none", lg: "none" }}
        background="#1A0329"
      >
        <Box as="div">
          <Heading
            as="h2"
            fontSize="22px"
            color="#fff"
            fontFamily="PT-Serif"
            mb="15px"
            pt="46px"
          >
            Our Vision
          </Heading>

          <Text fontSize="18px" color="#fff" fontFamily="sofia-sans" mb="46px">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </Text>

          <Button
            rightIcon={<ArrowForwardIcon color="#1F2223" />}
            background="#1A0329"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={15}
            fontSize="16px"
            lineHeight="24px"
            fontFamily="sofia-sans"
            flexShrink="0"
            color="#878787"
            border="1px solid rgba(103, 103, 103, 0.75)"
            width="246px"
            height="48px"
            mt="46px"
            borderRadius="60px"
          >
            <Link href="/">Read Whitepaper</Link>
          </Button>
        </Box>

        <Box as="div" id="mission3" mt="46px" mr="30px">
          <Box as="div">
            <Heading
              as="h2"
              fontSize="22px"
              color="#fff"
              fontFamily="PT Serif"
              mb="15px"
              textAlign="right"
            >
              Our Mission
            </Heading>

            <Text fontSize="18px" color="#fff" fontFamily="Sofia Sans">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
              condimentum ac, vestibulum eu nisl.
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default VisionMission;
