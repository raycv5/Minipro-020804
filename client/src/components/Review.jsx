import { Box, Heading, Grid, GridItem, Flex, Text } from "@chakra-ui/react";
import { FaRegMoneyBillAlt } from "react-icons/fa";

function Review() {
  return (
    <Box padding="5% 15%">
      <Text
        textAlign="center"
        marginBottom="48px"
        fontWeight="bold"
        fontSize="3xl"
      >
        Why us?
      </Text>
      <Grid templateColumns="repeat(4, 1fr)" gap="6px">
        <GridItem>
          <Flex flexDirection="column" alignItems="center" gap="8px">
            <FaRegMoneyBillAlt size="34px" />
            <Flex flexDirection="column" alignItems="center">
              <Text fontWeight="bold">Free Cancelation</Text>
              <Text>Stay flexible on your trip.</Text>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex flexDirection="column" alignItems="center" gap="8px">
            <FaRegMoneyBillAlt size="34px" />
            <Flex flexDirection="column" alignItems="center">
              <Text fontWeight="bold">Free Cancelation</Text>
              <Text>Stay flexible on your trip.</Text>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex flexDirection="column" alignItems="center" gap="8px">
            <FaRegMoneyBillAlt size="34px" />
            <Flex flexDirection="column" alignItems="center">
              <Text fontWeight="bold">Free Cancelation</Text>
              <Text>Stay flexible on your trip.</Text>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex flexDirection="column" alignItems="center" gap="8px">
            <FaRegMoneyBillAlt size="34px" />
            <Flex flexDirection="column" alignItems="center">
              <Text fontWeight="bold">Free Cancelation</Text>
              <Text>Stay flexible on your trip.</Text>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Review;
