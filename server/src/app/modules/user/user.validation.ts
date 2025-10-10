import z from "zod";

const createPatientValidationSchema = z.object({
    password: z.string(),
    patient: z.object({
        name: z.string().nonempty("Name is required"),
        email: z.string().nonempty("Email is required"),
        address: z.string().optional()
    })
});

const createdoctorValidationSchema=z.object({
    password:z.string(),
    doctor:z.object({
        name: z.string(),
  email: z.string().nonempty("Email is required"),
  contactNumber: z.string(),       
  address: z.string(),
  registrationNumber: z.string(),
  experience: z.number(),         
  gender: z.enum(["MALE", "FEMALE"]), 
  appointmentFee: z.number(),    
  qualification: z.string(),
  currentWorkingPlace: z.string(),
  designation: z.string(),
  profilePhoto: z.string().optional() 
    })

    
})

const createAdminValidationSchema = z.object({
    password: z.string({
        error: "Password is required"
    }),
    admin: z.object({
        name: z.string({
            error: "Name is required!"
        }),
        email: z.string({
            error: "Email is required!"
        }),
        contactNumber: z.string({
            error: "Contact Number is required!"
        })
    })
});

export const UserValidation = {
    createPatientValidationSchema,
    createdoctorValidationSchema,
    createAdminValidationSchema 
}

