import 'dotenv/config'
import { memberRouter } from './router/memberRouter.js'
import { VaccinationRouter } from './router/VaccinationsRouter.js'
import { ReceivingRouter } from './router/ReceivingRouter.js'
import { coronaRouter } from './router/CoronaRouter.js'
import express from "express";
import cors from 'cors';
import { logErrors } from "./middleware/logErrors.js"
import morgan from 'morgan'


const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); 
app.use('/member/', memberRouter);
app.use('/vaccination/', VaccinationRouter);
app.use('/ReceivingVaccines/', ReceivingRouter);
app.use('/corona/', coronaRouter);
app.use(logErrors);

app.listen(process.env.PORT, () => {

    console.log(`app in port ${process.env.PORT}`)
})






