import 'dotenv/config'
import { query } from './dbService.js';
async function getCoronaById(MemberId) {
    const result = await query('SELECT * FROM hmo.CoronaPatients  where MemberId=? ;', [MemberId]);
    return result;
}
async function getAllCoronas() {
    const result = await query('SELECT * FROM hmo.CoronaPatients');
    return result;
}
async function updateCorona(MemberId, updatedCorona) {
    const resulat = await query(`UPDATE hmo.CoronaPatients SET StartDate=? ,EndDate=? WHERE MemberId =${MemberId}`, [updatedCorona.StartDate, updatedCorona.EndDate]);
    return resulat;
}
async function deleteCorona(MemberId) {
    console.log("in service member in delete corona function: " + MemberId);
    const resulat = await query(`DELETE FROM hmo.CoronaPatients WHERE MemberId=? ;`, [MemberId]);
    return resulat;
}
async function addCorona(corona) {
    console.log("in service vec in add corona function: " + corona.MemberId + " " + corona.EndDate);
    const resulat = await query(`INSERT INTO hmo.CoronaPatients  VALUES (?,?,?);`, [corona.MemberId, corona.StartDate, corona.EndDate]);
    return resulat;
}
export { getAllCoronas, getCoronaById, updateCorona, deleteCorona, addCorona }