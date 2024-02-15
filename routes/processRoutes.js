import express from "express";

import {allProcess, terminate} from '../controller/processController.js'

const router = express.Router();

router.get("/runningprocess",allProcess );
router.post("/terminateprocess",terminate)



export default router;
