import { React, useEffect, useState } from "react";
import { GetAllRequest, UpdateRequest, CreateRequest } from "./Tools/GetTools.jsx";
import { displayObject } from "./Tools/PrintTools.jsx";
import DisplayMember from "./DisplayMember.jsx"
import AddMember from "./AddMember.jsx";
export default function Members() {
  const [members, setMembers] = useState([]);
  const [commentArea, setCommentArea] = useState('');
  useEffect(() => {
    GetAllRequest(setMembers, setCommentArea, "member");

  }, [])
  return (<>
    <AddMember setMembers={setMembers} members={members}/>
    <ul>{members.map((member) => (<DisplayMember member={member} setMembers={setMembers}/>))}</ul>
    <div>{commentArea}</div>

  </>)
}