import { React, useEffect, useState } from "react"
import { GetRequest, CreateRequest } from "./Tools/GetTools.jsx";
import { convertToDateFormat } from "./Tools/PrintTools.jsx";
export default function MemberDisease({ memberId }) {
    const [disease, setDisease] = useState([]);
    const [addDisease, setAddDisease] = useState(false);
    const [commentArea, setCommentArea] = useState('');
    const [newDisease, setNewDisease] = useState({ MemberId: memberId, StartDate: '', EndDate: '' })

    useEffect(() => {
        GetRequest(memberId, setDisease, setCommentArea, 'corona');
    }, [addDisease])
    useEffect(() => {
        if (disease.length == 0)
            setAddDisease(true);
        else
            setAddDisease(false);
    }, [disease])

    const dateValidation=(date1,date2) =>{
        return date1<date2;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
       if(dateValidation(newDisease.StartDate,newDisease.EndDate)) 
       {
         CreateRequest(setCommentArea, 'corona', newDisease);
        GetRequest(memberId, setDisease, setCommentArea, 'corona');
        setAddDisease(false);
        }
        else 
        setCommentArea("Invalid dates");
    };

    return (
        <><strong>Disease</strong><br />
            {addDisease ? <><form onSubmit={handleSubmit}>
                <li><strong>Start Date:</strong>
                    <input name="StartDate" type="Date" value={convertToDateFormat(newDisease.StartDate)} onChange={(event) => { setNewDisease((prev) => ({ ...prev, ["StartDate"]: convertToDateFormat(event.target.value) })) }} /> </li>
                <li><strong>End Date:</strong>
                    <input name="EndDate" type="Date" value={convertToDateFormat(newDisease.EndDate)} onChange={(event) => { setNewDisease((prev) => ({ ...prev, ["EndDate"]: convertToDateFormat(event.target.value) })) }} /> </li>
                <button className="addButton" type="submit">add</button>
            </form></> :
                <><span><strong>start date: </strong>{disease.length > 0 && convertToDateFormat(disease[0].StartDate)}</span><br /><span><strong>end date: </strong>{disease.length > 0 && convertToDateFormat(disease[0].EndDate)}</span></>}
        {/* <span>{commentArea}</span> */}
        </>

    )

}