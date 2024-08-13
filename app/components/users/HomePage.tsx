import { Box } from "@chakra-ui/react";
import { HomePageClient } from "./HomePageClient";

const fetchUsers = async (page: any) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_FETCH_USERS_URL}?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

const HomePage = async () => {
  const initialPage = 1;
  const initialData = await fetchUsers(initialPage);
  return (
    <>
      <Box
        mr={500}
      >
        <HomePageClient initialData={initialData} initialPage={initialPage} />
      </Box>
    </>
  );
};

export default HomePage;
