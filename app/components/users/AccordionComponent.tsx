import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { UserDetail } from "../UserDetail";

interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }
interface AccordionComponentProps {
user: User;
}

export const AccordionComponent = ({user}: AccordionComponentProps) => {
  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontSize='xl'>
                {user.first_name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UserDetail userDetail={user}/>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
