import * as yup from 'yup'

 export const userSchema = [
  
   yup.object().shape({
     name: yup
       .string()
       .required("Name is required")
       .min(3, "Name must be at least 3 characters"),
     age: yup
       .number()
       .typeError("Age is required")
       .required("Age is required")
       .positive("Age must be a positive integer"),
     sex: yup
       .string()
       .required("Sex is required")
       .oneOf(["Male", "Female"], "Invalid sex"),
     mobile: yup
       .string()
       .matches(/^[6-9]\d{9}$/, "Invalid Indian mobile number")
       .required("Mobile number is required"),
     govt_id_type: yup
       .string()
       .oneOf(["Aadhar", "PAN"], "Invalid Government ID Type"),

     govt_id: yup.string().when("govt_id_type", (govt_id_type, schema) => {
       if (govt_id_type.includes("Aadhar")) {
         return schema
           .required("Aadhar number is required")
           .matches(/^[2-9][0-9]{11}$/, {
             message:
               "Aadhar number must not start with 0 or 1 and must be 12 digits long",
           });
       }
       return schema;
     }),
   }),

   yup.object({
     address: yup.string(),
     state: yup.string(),
     city: yup.string(),
     country: yup.string(),
     pincode: yup.string().matches(/^\d+$/, "Pincode must be numeric only"),
   }),
 ];