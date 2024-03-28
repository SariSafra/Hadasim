import { React, useEffect, useState } from "react"
import { GetRequest, GetAllRequest, CreateRequest } from "./Tools/GetTools.jsx";
import { convertToDateFormat } from "./Tools/PrintTools.jsx";
export default function MemberVaccinations({ memberId }) {
    const fields = {
        VaccinationsDate: "", VaccinationsId: "1", MemberId: memberId
    }
    const [vaccinations, setVaccinations] = useState([]);
    const [commentArea, setCommentArea] = useState('');
    const [addVaccination, setAddVaccination] = useState(false);
    const [newVaccination, setNewVaccination] = useState(fields);
    const [allVaccinations, setAllVaccinations] = useState([]);
    useEffect(() => {
        GetRequest(memberId, setVaccinations, setCommentArea, "ReceivingVaccines");
    }, [newVaccination,addVaccination])
    useEffect(() => {
        GetAllRequest(setAllVaccinations, setCommentArea, "vaccination");
    }, [])
    useEffect(()=>{
        if(vaccinations.length==4||vaccinations.length>4)
             setAddVaccination(false);
    },[vaccinations])
    const handleSubmit = (e) => {
        e.preventDefault(); 
        CreateRequest(setCommentArea, 'ReceivingVaccines', newVaccination);
        GetRequest(memberId, setVaccinations, setCommentArea, "ReceivingVaccines");
        setAddVaccination(false);
        setNewVaccination(fields);
        window.scrollTo(0, document.body.scrollHeight);
    };

    return (
        <>
            {vaccinations.map((vaccination) => (<><br /><strong>Date: </strong><span>{vaccination.VaccinationDate}</span> <br /><strong>Manufacturer: </strong><span>{vaccination.Manufacturer}</span><br /></>))}
            {(vaccinations.length < 4) &&<><button onClick={() => setAddVaccination(!addVaccination)}>Add a vaccine</button><br/></> }
            {addVaccination && <>
                    <label className="selectorLabel" htmlFor="filterSelector">Choose a Vaccination's id : </label>
                    <select className="selector" id="filterSelector" value={newVaccination.VaccinationsId} onChange={(event) => { setNewVaccination((prev) => ({ ...prev, ["VaccinationsId"]: event.target.value })) }}>
                        {allVaccinations.map((vaccination) => (<option value={vaccination.VaccinationsId}>{vaccination.Manufacturer}</option>))}
                    </select>
                    <li><strong>Date:</strong>
                        <input name="VaccinationsId" type="Date" value={newVaccination.VaccinationsDate} onChange={(event) => { setNewVaccination((prev) => ({ ...prev, ["VaccinationsDate"]: convertToDateFormat(event.target.value) })) }} /> </li>
                   <button onClick={handleSubmit}>add</button>
                </>}
                <br/>
            {commentArea}
        </>

    )

}