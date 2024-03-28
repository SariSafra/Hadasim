export const displayObject = (obj, parentKey = '') => {
  return Object.entries(obj).map(([key, value]) => {
    const currentKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof value === 'object' && value !== null) {
      return (
        <li key={currentKey} style={{ listStyle: 'none' }}>
          <strong>{key}:</strong>
          <ul>{displayObject(value, currentKey)}</ul>
        </li>
      );
    } else {
      if (typeof value !== 'boolean') {
        return (
          <li key={currentKey} style={{ listStyle: 'none' }}>
            <strong>{key}: </strong>{value}
          </li>
        );
      }
    }
  });
};
export const lettersOnly = (inputString) => {
  const regex = /^[A-Za-z]+$/;
  return regex.test(inputString);
};
export const numbersOnly = (inputString) => {
  const regex = /^\d{9}$/;
  return regex.test(inputString);
};
export const displayMember = (memberDetails, editDetails, errorDisplay, setErrorDisplay, setMemberDetails, handleSubmit, inAdd) => {
  const handleChange = (e) => {
    let { name, value } = e.target;
    if(name=="DateOfBirth")
      value=convertToDateFormat(value);
    setMemberDetails((prevData) => {
      const newData = Array.isArray(prevData) ? [...prevData] : [];
      if (newData.length > 0) {
        newData[0] = { ...newData[0], [name]: value };
      } else {
        newData.push({ [name]: value });
      }

      return newData;
    });
    switch (name) {
      case "City":
      case "LastName":
      case "FirstName":
      case "Street":
        setErrorDisplay(prevData => ({ ...prevData, [name]: !lettersOnly(value) ? "can contain only English letters" : "" }));
        break;
      case "MemberId":
      case "PhoneNum":
      case "MobileNum":
        setErrorDisplay(prevData => ({ ...prevData, [name]: !numbersOnly(value) ? "can contain only numbers in length 9." : "" }));
        break;
      default:
        break;
    }
  };
  return <>
    <form onSubmit={handleSubmit}>
      <li><strong>Member Id:</strong>
        {inAdd ?
          <input name="MemberId" type="text" value={memberDetails.MemberId} onChange={handleChange} /> :
          <span> {memberDetails.MemberId}</span>}</li>
      <span className='commentArea'>{errorDisplay.MemberId}</span><br />
      <li><strong>Last Name:</strong> {editDetails ?
        <input name="LastName" type="text" value={memberDetails.LastName} onChange={handleChange} /> :
        memberDetails.LastName}</li>
      <span className='commentArea'>{errorDisplay.LastName}</span><br />
      <li><strong>First Name:</strong> {editDetails ?
        <input name="FirstName" type="text" value={memberDetails.FirstName} onChange={handleChange} /> :
        memberDetails.FirstName}</li>
      <span className='commentArea'>{errorDisplay.FirstName}</span><br />
      <li><strong> City:</strong> {editDetails ?
        <input name="City" type="text" value={memberDetails.City} onChange={handleChange} /> :
        memberDetails.City}</li>
      <span className='commentArea'>{errorDisplay.City}</span><br />
      <li><strong>Street:</strong> {editDetails ?
        <input name="Street" type="text" value={memberDetails.Street} onChange={handleChange} /> :
        memberDetails.Street}</li>
      <span className='commentArea'>{errorDisplay.Street}</span><br />
      <li><strong>House Number:</strong> {editDetails ?
        <input name="HouseNum" type="text" value={memberDetails.HouseNum} onChange={handleChange} /> :
        memberDetails.HouseNum}</li>
      <span className='commentArea'>{errorDisplay.HouseNum}</span><br />
      <li><strong>Date Of Birth:</strong> {editDetails ?
        <input name="DateOfBirth" type="Date" value={memberDetails.DateOfBirth} onChange={handleChange} /> :
        memberDetails.DateOfBirth}</li>
      <span className='commentArea'>{errorDisplay.DateOfBirth}</span><br />
      <li><strong>Mobile Number:</strong> {editDetails ?
        <input name="MobileNum" type="text" value={memberDetails.MobileNum} onChange={handleChange} /> :
        memberDetails.MobileNum}</li>
      <span className='commentArea'>{errorDisplay.MobileNum}</span><br />
      <li><strong>Phone Number:</strong> {editDetails ?
        <input name="PhoneNum" type="text" value={memberDetails.PhoneNum} onChange={handleChange} /> :
        memberDetails.PhoneNum}</li>
      <span className='commentArea'>{errorDisplay.PhoneNum}</span><br />
      {editDetails ? <button className="addButton" type="submit">update</button> : <></>}

    </form>
  </>

}
export const convertToDateFormat = (isoDate) => {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};