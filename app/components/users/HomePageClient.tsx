"use client";
import { useState } from "react";
import { AllUsers } from "./AllUsers";
import { useQuery } from "@tanstack/react-query";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface InitialData {
  data: User[];
  total_pages: number;
}

interface HomePageClientProps {
  initialData: InitialData;
  initialPage: number;
}

const fetchUsers = async (page: number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_FETCH_USERS_URL}?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const HomePageClient = ({
  initialData,
  initialPage,
}: HomePageClientProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const { data, isFetching } = useQuery({
    queryKey: ["users", currentPage],
    queryFn: () => fetchUsers(currentPage),
    initialData: initialPage === 1 ? initialData : undefined,
  });

  const users = data?.data || [];
  const totalPages = data?.total_pages || initialData.total_pages;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <AllUsers users={users} />
      <div>
        {Array.from({ length: totalPages }, (currentEl, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1 || isFetching}
            style={{
              margin: "0 5px",
              padding: "5px 10px",
              backgroundColor:
                currentPage === index + 1 ? "lightblue" : "white",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {isFetching && <p>Loading...</p>}
    </>
  );
};
