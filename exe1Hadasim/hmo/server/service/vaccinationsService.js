import 'dotenv/config'
import { query } from './dbService.js';
async function getVaccination(VaccinationsId) {
    const result = await query('SELECT * FROM hmo.Vaccinations  where VaccinationsId=? ;', [VaccinationsId]);
    return result;
}
async function getAllVaccinations() {
    const result = await query('SELECT * FROM hmo.Vaccinations');
    return result;
}
async function updateVaccination(vaccinationId, updatedVaccination) {
    const resulat = await query(`UPDATE hmo.Vaccinations SET Manufacturer=? WHERE VaccinationsId =${vaccinationId}`, [updatedVaccination.Manufacturer]);
    return resulat;
}
async function deleteVaccination(VaccinationId) {
    let resulat;
    console.log("in service member in delete vec function: " + VaccinationId);
    const receivingVec = await query(`DELETE FROM hmo.ReceivingVaccines WHERE VaccinationsId=?;`, [VaccinationId]);
    resulat = await query(`DELETE FROM hmo.Vaccinations WHERE VaccinationsId=? ;`, [VaccinationId]);
    return resulat;
}
async function addVaccination(vaccination) {
    console.log("in service vec in add vec function: ");
    const resulat = await query(`INSERT INTO hmo.Vaccinations  VALUES (?);`, [vaccination.Manufacturer]);
    return resulat;
}
export { getVaccination, getAllVaccinations, updateVaccination, deleteVaccination, addVaccination }