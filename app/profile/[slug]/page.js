import { UserDetail } from "@/app/components/UserDetail";
import { Box } from "@chakra-ui/react";

const getUser = async (params) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_FETCH_USERS_URL}/${params.slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};
const UserProfile = async ({ params }) => {
  const user = await getUser(params);
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.50"
      >
        <UserDetail userDetail={user.data} />
      </Box>
    </>
  );
};

export default UserProfile;
