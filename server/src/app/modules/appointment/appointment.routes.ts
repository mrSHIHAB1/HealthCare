import express from "express";
import { AppointmentController } from "./appointment.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.post(
    "/",
    auth(UserRole.PATIENT),
    AppointmentController.createAppointment
)
router.get(
    "/my-appointments",
    auth(UserRole.PATIENT, UserRole.DOCTOR),
    AppointmentController.getMyAppointment
)
router.patch(
    "/status/:id",
    auth(UserRole.ADMIN, UserRole.DOCTOR),
    AppointmentController.updateAppointmentStatus
)
router.get(
    '/',
    auth(UserRole.ADMIN),
    AppointmentController.getAllFromDB
);


export const AppointmentRoutes = router;