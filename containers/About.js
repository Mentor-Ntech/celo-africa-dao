import { Card, Flex, Heading, Text, chakra, shouldForwardProp } from "@chakra-ui/react"
import { motion, isValidMotionProp } from 'framer-motion';

import Image from "next/image"
import Coin  from "../img/HandsCoin.png"


const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const About = () => {

    
  return (
    <Flex as="section" bg="#FBF6F1" wrap={{base: "wrap", md:"noWrap"}} gap="100px" justifyContent="center" alignItems="center" px={{base: "20px", md: "50px"}} py="40px">
    <ChakraBox
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: 'loop',
        }}
        display={["none", "none", "flex", "flex"]}
        p="80px"
      >
        <Image src={Coin} height={800} width={800}/>
      </ChakraBox>
        

        <Flex as="div" gap={3} justifyContent="flex-start" flexDir="column" >
            <Heading as="h2" size="30px">What is Celo Africa DAO?</Heading>
            <Text size="24px">
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
            </Text>
            <Text size="24px">
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
            </Text>
         
        </Flex>
    </Flex>
  )
}

export default About