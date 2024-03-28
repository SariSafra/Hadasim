import 'dotenv/config'
import { query } from './dbService.js';
import { deleteCorona } from './coronaService.js'
import { deleteReceiving } from './receivingService.js'
import { lettersOnly, numbersOnly } from './validationService.js';
async function getAllMembers() {
    const result = await query('SELECT LastName,FirstName,MemberId FROM hmo.Members ');
    return result;
}
async function getMember(memId) {
    const result = await query('SELECT * FROM hmo.Members  where MemberId=? ;', [memId]);
    return result;
}

async function UpdateMember(memberId, updatedMember) {
    if (!lettersOnly(updatedMember.LastName) || !lettersOnly(updatedMember.FirstName) || !lettersOnly(updatedMember.City) || !lettersOnly(updatedMember.Street) || !numbersOnly(updatedMember.MobileNum) || !numbersOnly(updatedMember.PhoneNum) || !numbersOnly(updatedMember.MemberId))
        throw ("Invalid input");
    const id = memberId.toString();
    const resulat = await query(`UPDATE hmo.Members SET LastName =?, FirstName =?,City=?,Street=?,HouseNum=?,DateOfBirth=?,MobileNum=?,PhoneNum=? WHERE MemberId =${id}`, [updatedMember.LastName, updatedMember.FirstName, updatedMember.City, updatedMember.Street, updatedMember.HouseNum, updatedMember.DateOfBirth, updatedMember.MobileNum, updatedMember.PhoneNum]);
    return resulat;
}
async function deleteMember(memberId) {
    let resulat;
    console.log("in service member in delete member function: " + memberId);
    const coronaDe = await deleteCorona(memberId);
    const receivingvec = await deleteReceiving(memberId)
    if (coronaDe && receivingvec)
        resulat = await query(`DELETE FROM hmo.Members WHERE MemberId=? ;`, [memberId]);
    else
        throw (`Cannot delete member with id: ${memberId}`);
    return resulat;
}

async function addMember(member) {
    if (!lettersOnly(member.LastName) || !lettersOnly(member.FirstName) || !lettersOnly(member.City) || !lettersOnly(member.Street) || !numbersOnly(member.MobileNum) || !numbersOnly(member.PhoneNum) || !numbersOnly(member.MemberId))
        throw ("Invalid input");
    console.log("member Id "+member.MemberId)
    const resulat = await query(`INSERT INTO hmo.Members  VALUES (?, ?, ?, ?,?,?,?,?,?);`, [member.MemberId, member.LastName, member.FirstName, member.City, member.Street, member.HouseNum, member.DateOfBirth, member.MobileNum, member.PhoneNum]);
    return resulat;
}
export {
    getAllMembers, getMember, UpdateMember, deleteMember, addMember
}