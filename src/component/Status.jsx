import React, { useContext } from "react";
import { Authcontext } from "../context/Authcontext";
import { Box, Heading } from "@chakra-ui/react";

const Status = () => {
  const { auth ,token } = useContext(Authcontext);
  return (
    <div>
      <Box bg="tomato" w="80%" m={"40px auto"} p={4} color="white">
        <Heading fontSize={"25px"}>
           {!auth ? 'Token is : '+ token : "Status : Log-Out "}
        </Heading>
      </Box>
    </div>
  );
};

export default Status;
