import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface userDetailProps {
  userDetail: User;
}

export const UserDetail = ({ userDetail }: userDetailProps) => {
  return (
    <>
      <Box display="flex" alignItems="center" mb={4} fontSize="xl">
        <Image
          src={userDetail.avatar}
          width={300}
          height={300}
          alt={`${userDetail.first_name} ${userDetail.last_name}`}
        />
        <Box ml={4}>
          <Box mb={2} display="flex">
            <Text fontWeight="bold">First Name:</Text>
            <Link
              as={NextLink}
              href={`/profile/${userDetail.id}`}
              color="blue.300"
              _hover={{ color: "blue.500", textDecoration: "underline" }}
              pl={2}
            >
              {userDetail.first_name}
            </Link>
          </Box>
          <Box mb={2} display="flex">
            <Text fontWeight="bold">Last Name:</Text>
            <Text pl={2}>{userDetail.last_name}</Text>
          </Box>
          <Box display="flex">
            <Text fontWeight="bold">Email:</Text>
            <Text pl={2}>{userDetail.email}</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};
