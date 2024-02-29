// ** MUI Imports
import {
  Grid,
  TextField,

  Autocomplete,
} from "@mui/material";

// ** React hook form and yup imports
import { Controller } from "react-hook-form";

// ** Types and schema Imports
import { Props } from "../../types/user";

// ** Redux imports
import { useAppSelector } from "../../redux/app/hooks";

function AddressDetails({ userControl, errors }: Props) {
  //  ** States and hooks 
    const { countryData } = useAppSelector((state) => state.country);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Controller
          name="address"
          control={userControl}
          defaultValue=""
          render={({ field }) => (
            <TextField
              autoComplete="off"
              size="small"
              {...field}
              label="Address"
              variant="standard"
              fullWidth
              error={!!errors.address}
              helperText={errors.address?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Controller
          name="state"
          control={userControl}
          render={({ field }) => (
            <TextField
              autoComplete="off"
              size="small"
              {...field}
              label="State"
              variant="standard"
              fullWidth
              error={!!errors.state}
              helperText={errors.state?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Controller
          name="country"
          control={userControl}
          render={({ field }) => (
            <Autocomplete
              size="small" {...field}
              disablePortal
              id="combo-box-demo"
              options={countryData}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  autoComplete="off"
                  variant="standard"
                  {...params}
                  label="Country"
                />
              )}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Controller
          name="pincode"
          control={userControl}
          defaultValue=""
          render={({ field }) => (
            <TextField
              autoComplete="off"
              size="small"
              type="number"
              {...field}
              label="Pin code"
              variant="standard"
              fullWidth
              error={!!errors.pincode}
              helperText={errors.pincode?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Controller
          name="city"
          control={userControl}
          defaultValue=""
          render={({ field }) => (
            <TextField
              autoComplete="off"
              size="small"
              type="number"
              {...field}
              label="City"
              variant="standard"
              fullWidth
              error={!!errors.city}
              helperText={errors.city?.message}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}

export default AddressDetails;
