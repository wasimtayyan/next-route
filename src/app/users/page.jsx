"use client";
import React, { useEffect, useState } from "react";
import getAllUsers from "../../lib/getAllUsers";
import Link from "next/link";

function Page() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((res) => setUsers(res));
  }, []);
  {
  }
  return (
    <>
      {users.map((user, index) => {
        
        return (
          <div key={index}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </div>
        );
      })}
    </>
  );
}

export default Page;
