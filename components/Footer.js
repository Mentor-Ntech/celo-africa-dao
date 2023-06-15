import { FaGithub, FaSlack, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Logo from "../img/image.png";
import { Heading, Box, Text, Link } from "@chakra-ui/react";

const resources = [
  { title: "WhitePaper", url: "#" },
  { title: "FAQs", url: "#" },
];

const foundation = [
  { title: "Contact", url: "#" },
  { title: "Job Opportunity", url: "#" },
];

const developers = [
  { title: "Documentation", url: "#" },
  { title: "Developer Guides", url: "#" },
];

const community = [
  { icon: <FaSlack />, url: "#" },
  { icon: <FaTelegramPlane />, url: "https://telegram.com" },
  { icon: <FaTwitter />, url: "#" },
  { icon: <FaGithub />, url: "#" },
];

const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#FCF951", padding: "20px" }}>
      <Box w="100%">
        <Box w="100%" display="flex" gap={5} justifyContent="flex-start">
          <Image src={Logo} alt="celo" width={150} />
          <Heading as="h3" size="lg" color="#1C1C1C">
            Africa DAO
          </Heading>
        </Box>

        <Box
          w="95%"
          display="flex"
          justifyContent="center"
          flexWrap="nowrap"
          alignItems="flex-start"
          marginTop="10"
        >
          <Box w="100%">
            <Heading as="h5" fontSize="xl" fontWeight="500">
              Resources
            </Heading>

            {resources.map((item) => (
              <Text fontSize="lg" fontWeight="200">
                <Link>{item.title}</Link>
              </Text>
            ))}
          </Box>

          <Box w="100%">
            <Heading as="h5" fontSize="xl" fontWeight="500">
              Foundation
            </Heading>

            {foundation.map((item) => (
              <Text fontSize="lg" fontWeight="200">
                <Link>{item.title}</Link>
              </Text>
            ))}
          </Box>

          <Box w="100%">
            <Heading as="h5" fontSize="xl" fontWeight="500">
              Developer
            </Heading>

            {developers.map((item) => (
              <Text fontSize="lg" fontWeight="200">
                <Link>{item.title}</Link>
              </Text>
            ))}
          </Box>

          <Box w="100%">
            <Heading as="h5" fontSize="xl" fontWeight="500">
              Join the community
            </Heading>

            <Box display="flex">
              {community.map((item) => (
                <Text margin={2} fontSize="2xl">
                  <Link display="inline" href={item.url} isExternal>
                    {item.icon}
                  </Link>
                </Text>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="nowrap"
          alignItems="flex-start"
          marginTop="20"
        >
          <Text fontWeight="600">
            <Link>Privacy Policy</Link>
          </Text>
          <Text fontWeight="600">&copy; {currentYear} Celo Inc.</Text>
          <Text fontWeight="600">
            <Link>Terms of Service</Link>
          </Text>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
