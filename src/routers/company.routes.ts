import express from 'express';
import { create_company_controllers } from '../controllers/create-company.controller'
const router = express.Router()

router.post('/add-company', create_company_controllers.addCompnay)
router.patch('/edit-company', create_company_controllers?.editCompany)
router.delete('/deletecompany', create_company_controllers?.deleteCompany)


export default router;