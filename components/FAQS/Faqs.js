import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const faqsData = [
  {
    id: 1,
    question: "What controls the DAO?",
    answer:
      "The DAO runs autonomously without a central control. The governance works that anyone is allowed to submit proposal but the multisig holders are in charge to review a proposal for the community to the vote on",
  },
  {
    id: 2,
    question: "How does the DAO work?",
    answer:
      "The DAO works autonomously, enabling individuals, community members and core contributors to submit proposal for activities within the DAO defined focus area from anywhere in Africa. The focus area ranges from developers education, technical workshop, university and community events, sponsored conferences etc. The proposals are voted for by the community members and approved by the multisig who manage the treasury for the DAO.",
  },
  {
    id: 3,
    question: " How can i be part of the DAO?",
    answer:
      "To become a member of the Celo Africa DAO, members need to join the DAO snapshot and participate in the voting process which doesn't require to hold specific amount of token to participate. Member are also required to join the DAO slack channel for inclusive community participation",
  },
  {
    id: 4,
    question: "When was the DAO created?",
    answer:
      "The DAO proposal was passed in March 2023, following passing of the onchain proposal CGP85 https://celo.stake.id/#/proposal/85",
  },
];

const Faqs = () => {
  return (
    <>
      <Flex
        as="div"
        bg="#fbf6f1"
        py="20px"
        px={{ base: "15px", sm: "80px", md: "120px", lg: "200px" }}
        flexDirection="column"
        id="faqs"
      >
        <Heading
          as="h2"
          fontSize="40px"
          fontWeight="700"
          fontFamily="PT-serif"
          textAlign="center"
          mb="138px"
        >
          General FAQs
        </Heading>
        {faqsData.map((item) => (
          <div key={item.id}>
            <Accordion allowMultiple>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          fontSize="32px"
                          fontWeight="400"
                          fontFamily="PT-serif"
                          textAlign="left"
                          w="100%"
                          p={0}
                          m={0}
                        >
                          {item.question}
                        </Box>
                        {isExpanded ? (
                          <AiOutlineMinusCircle fontSize="12px" />
                        ) : (
                          <AiOutlinePlusCircle fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      fontSize="20px"
                      fontWeight="200"
                      fontFamily="sans-serif"
                    >
                      {item.answer}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </Flex>
    </>
  );
};
export default Faqs;
