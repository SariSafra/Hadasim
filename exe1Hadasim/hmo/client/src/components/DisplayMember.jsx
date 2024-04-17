
import React, { useEffect, useState } from "react";
import { DeleteRequest, GetRequest, UpdateRequest } from "./Tools/GetTools.jsx";
import { displayMember } from "./Tools/PrintTools.jsx";
import MemberVaccinations from "./MemberVaccinations.jsx";
import MemberDisease from "./MemberDisease.jsx";

export default function DisplayMember({ member,setMembers }) {
  const fields = {
    MemberId: "",
    LastName: "",
    FirstName: "",
    City: "",
    Street: "",
    HouseNum: "",
    DateOfBirth: "",
    MobileNum: "",
    PhoneNum: ""
  };

  const [commentArea, setCommentArea] = useState('');
  const [errorDisplay, setErrorDisplay] = useState(fields);
  const [showMember, setShowMember] = useState(false);
  const [memberDetails, setMemberDetails] = useState("");
  const [editDetails, setEditDetails] = useState(false);
  const [showVaccinations, setShowVaccinations] = useState(false);
  const [showDisease, setShowDisease] = useState(false);

  useEffect(() => {
    GetRequest(member.MemberId, setMemberDetails, setCommentArea, "member");
  }, [showMember]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isObjectEmpty(errorDisplay)) return;
    UpdateRequest(setMemberDetails, setCommentArea, memberDetails[0], "member");
    setErrorDisplay(fields);
    setEditDetails(false);
  };

  const isObjectEmpty = (obj) => {
    for (const key in obj) {
      if (obj[key] !== '' && obj[key] !== 0 && obj[key] !== "0") {
        return false;
      }
    }
    return true;
  };

  return (
    <>
      <div>
        {!showMember && (
          <div>
            <p><strong>Last Name:</strong> {member.LastName}</p>
            <p><strong>First Name:</strong> {member.FirstName}</p>
          </div>
        )}
        {showMember && displayMember(memberDetails[0], editDetails, errorDisplay, setErrorDisplay, setMemberDetails, handleSubmit, false)}
        {showMember && <button onClick={() => setEditDetails(!editDetails)}>🖋️</button>}
        <button onClick={() => setShowMember(!showMember)}>{showMember ? <strong>-</strong> : <strong>+</strong>}</button>
        <button onClick={() => setShowVaccinations(!showVaccinations)}>💉</button>
        <button onClick={() => setShowDisease(!showDisease)}>🤒</button>
        <button onClick={() => DeleteRequest(setMembers, setCommentArea, member.MemberId)}>🗑️</button>
      </div>

      {showVaccinations && <MemberVaccinations memberId={member.MemberId} />}
      {showDisease && <MemberDisease memberId={member.MemberId} />}
    </>
  );
}
