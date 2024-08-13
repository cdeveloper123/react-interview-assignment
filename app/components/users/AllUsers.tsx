"use client";

import { AccordionComponent } from "./AccordionComponent";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface AllUsersProps {
  users: User[];
}

export const AllUsers = ({ users }: AllUsersProps) => {
  return (
    <>
      {users.map((user) => {
        return (
          <AccordionComponent key={user.id} user={user}/>
        );
      })}
    </>
  );
};
