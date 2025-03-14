import loginLogouRoutes from './loginLogouRoutes.js';
import employeeRoutes from './employeeRoutes.js';
import donorRoutes from './donorRoutes.js';
import donationRoutes from './donationRoutes.js';
import stockRoutes from './stockRoutes.js';
import { Router } from 'express';

const routes = Router();
routes.use(loginLogouRoutes);
routes.use(employeeRoutes);
routes.use(donorRoutes);
routes.use(donationRoutes);
routes.use(stockRoutes);

export default routes;