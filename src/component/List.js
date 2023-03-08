import React from "react";
import Titel from "./Titel";
export default function List() {
  const list = [
    {
      id: 1,
      title: "this is titel 1",
      description: "this is a discription form 1",
    },
    {
      id: 2,
      title: "this is titel 2",
      description: "this is a discription form 2",
    },
    {
      id: 3,
      title: "this is titel 3",
      description: "this is a discription form 3",
    },
  ];
  const newlist = list.map((person) => (
    <p key={person.id}>
      this is id:{person.id} and it is a {person.title} with a small dis{" "}
      {person.description}
    </p>
  ));
  return (
    <div>
      <Titel list={newlist} />
    </div>
  );
}
