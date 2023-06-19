import { VStack, Flex, Box, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"
import { Coin } from "../img/HandsCoin.png"

const About = () => {
  return (
    <Flex as="section">
        <Box as="div">
            <Image src={Coin}/>
        </Box>

        <VStack as="div" spacing={20}>
            <Heading as="h2" size="30px">What is Celo Africa DAO?</Heading>
            <Text>
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
            </Text>
            <Text>
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
            </Text>
        </VStack>
    </Flex>
  )
}

export default About