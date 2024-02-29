// ** React hook form and yup imports
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// ** MUI Imports
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Container,
  Paper,
  Box,
} from "@mui/material";

// ** React Imports
import { useEffect, useState } from "react";

// ** Types and schema Imports
import { userSchema } from "../schema/user";
import { TUserData } from "../types/user";

// ** Components Imports
import BasicDetails from "../views/forms/BasicDetailsform";
import AddressDetails from "../views/forms/AddressDetailsForm";

// ** Redux imports
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { getCountryData } from "../redux/slices/countrySlice";
import { setUserData } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const steps = ["Basic Details", "Address Details"];

const UserForm = () => {
  //  ** States & Hooks
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentValidationSchema: any = userSchema[activeStep];

  const {
    control: userControl,
    handleSubmit,
    formState,
  } = useForm<TUserData>({
    mode: "all",

    resolver: yupResolver(currentValidationSchema),
  });
  const { errors } = formState;

  //  ** Sumbit handler
  const onSubmit = (data: TUserData) => {
    const isValid = Object.keys(errors).length <= 0;
    if (isValid) {
      setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
    }
    if (activeStep === 1 && isValid) {
      dispatch(setUserData([...userData, data]));
     
    }
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
   
  };

  // ** fetch data
  useEffect(() => {
    dispatch(getCountryData());

  }, [dispatch]);

  useEffect(()=>{
      if (activeStep === steps.length) {
      navigate('/users-list')
      }
  },[activeStep, navigate])

  

  return (
    <Container
      sx={{
        height: "100vh",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography
          variant="h4"
          gutterBottom
          textAlign={"center"}
          sx={{ mb: 2 }}
        >
          User Form
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 3 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography variant="h5" gutterBottom>
                  All steps completed
                </Typography>
              </div>
            ) : (
              <div>
                {activeStep === 0 ? (
                  <BasicDetails userControl={userControl} errors={errors} />
                ) : (
                  <AddressDetails userControl={userControl} errors={errors} />
                )}

                <Box sx={{ mt: 3 }}>
                  <Button
                    sx={{ borderRadius: 3, mr: 3 }}
                    size="small"
                    variant="contained"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button
                    sx={{ borderRadius: 3 }}
                    size="small"
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </div>
            )}
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default UserForm;
