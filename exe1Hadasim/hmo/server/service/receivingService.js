import 'dotenv/config'
import { query } from './dbService.js';
import { lettersOnly, numbersOnly } from './validationService.js';
async function getReceiving(memberId) {
    const result = await query('SELECT DISTINCT * FROM hmo.ReceivingVaccines NATURAL JOIN hmo.Vaccinations  where MemberId=? ;', [memberId]);

    return result;
}

async function getAllReceiving() {
    const result = await query('SELECT * FROM hmo.ReceivingVaccines');
    return result;
}
async function updateReceiving(MemberId, VaccinationId, updatedReceiving) {
    if (!numbersOnly(MemberId))
        throw ("Invalid input");
    const resulat = await query(`UPDATE hmo.ReceivingVaccines SET VaccinationDate=? WHERE VaccinationsId =${VaccinationId} AND MemberId=${MemberId}`, [updatedReceiving.VaccinationDate]);
    return resulat;
}
async function deleteReceiving(MemberId, VaccinationId = 0) {
    let resulat;
    console.log("in service member in delete rec function: " + VaccinationId);
    if (VaccinationId != 0)
        resulat = await query(`DELETE FROM hmo.ReceivingVaccines WHERE VaccinationsId=? AND MemberId=?;`, [VaccinationId, MemberId]);
    else
        resulat = await query(`DELETE FROM hmo.ReceivingVaccines WHERE  MemberId=?;`, [MemberId]);

    return resulat;
}
async function addReceiving(receiving) {
    if (!numbersOnly(receiving.MemberId))
        throw ("Invalid input");
    let check1 = await query("SELECT  COUNT(MemberId) AS number FROM hmo.ReceivingVaccines WHERE MemberId = ?;", [receiving.MemberId]);
    if (check1[0].number > 4)
        throw ("you can't insert more than 4 Vaccinations")
    const resulat = await query(`INSERT INTO hmo.ReceivingVaccines  VALUES (?,?,?);`, [receiving.MemberId, receiving.VaccinationsId, receiving.VaccinationsDate]);
    return resulat;
}
export { getAllReceiving, getReceiving, updateReceiving, deleteReceiving, addReceiving }