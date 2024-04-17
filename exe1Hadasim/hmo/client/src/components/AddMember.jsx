import { React, useState } from "react";
import { displayMember } from "./Tools/PrintTools.jsx";
import { CreateRequest } from "./Tools/GetTools.jsx";
export default function AddMember({setMembers,members}) {
  const [commentArea, setCommentArea] = useState('');
  const fields = { MemberId: "", LastName: '', FirstName: '', City: '', Street: '', HouseNum: '', DateOfBirth: '', MobileNum: '', PhoneNum: "" }
  const [memberDetails, setMemberDetails] = useState(fields);
  const [errorDisplay, setErrorDisplay] = useState(fields);
  const [addMember, setAddMember] = useState(false);


  const isObjectEmpty = (obj) => {
    for (const key in obj) {
      if (obj[key] !== '' && obj[key] !== 0 && obj[key] !== "0") {
        return false;
      }
    }
    return true;
  };
  const handleSubmit =async (e) => {
    setCommentArea("try...");
    e.preventDefault();
    if (!isObjectEmpty(errorDisplay)) return;
    const v= await CreateRequest(setCommentArea, 'member', memberDetails[0]);
    if(v)
    {
      setCommentArea("try...");
    }
    if(commentArea=='')
    {
        setErrorDisplay(fields);
        setAddMember(false);
        setMembers([...members,memberDetails[0]]);
        setMemberDetails(fields);
        setCommentArea("");
    }
    
  };
  return (<>
    <button onClick={() => { setAddMember(!addMember) }}>add member</button>
    {addMember && displayMember(memberDetails, true, errorDisplay, setErrorDisplay, setMemberDetails, handleSubmit, true)}

    <div>{commentArea}</div>
  </>)
}