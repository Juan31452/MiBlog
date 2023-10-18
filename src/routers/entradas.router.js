import {Router} from "express";
import{ingresar} from "../controllers/entradas.control";

const router = Router();

router.post("/ingresar", ingresar);

module.exports = router;
