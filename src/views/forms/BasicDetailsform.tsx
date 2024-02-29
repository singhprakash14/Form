import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

// ** React hook form and yup imports
import { Controller } from "react-hook-form";

// ** Types and schema Imports
import { Props } from "../../types/user";

function BasicDetails({ userControl, errors }: Props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Controller
          name="name"
          control={userControl}
          defaultValue=""
          render={({ field }) => (
            <TextField
              autoComplete="off"
              size="small"
              {...field}
              label="Full name"
              variant="standard"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Controller
          name="age"
          control={userControl}
          defaultValue={0}
          render={({ field }) => (
            <TextField
              autoComplete="off"
              size="small"
              {...field}
              label="Age"
              variant="standard"
              fullWidth
              error={!!errors.age}
              helperText={errors.age?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl variant="standard" fullWidth>
          <InputLabel htmlFor="age-select">Sex</InputLabel>
          <Controller
            name="sex"
            control={userControl}
            defaultValue=""
            render={({ field }) => (
              <Select
                size="small"
                {...field}
                label="Sex"
                variant="standard"
                fullWidth
                error={!!errors.sex}
              >
                <MenuItem value="" disabled>
                  Select Sex
                </MenuItem>
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            )}
          />
          <FormHelperText sx={{ color: "red" }}>
            {errors.sex?.message}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
        <Controller
          name="mobile"
          control={userControl}
          defaultValue=""
          render={({ field }) => (
            <TextField
              autoComplete="off"
              size="small"
              type="number"
              {...field}
              label="Mobile No."
              variant="standard"
              fullWidth
              error={!!errors.mobile}
              helperText={errors.mobile?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl variant="standard" fullWidth>
          <InputLabel htmlFor="id-select">Govt Issued ID</InputLabel>
          <Controller
            name="govt_id_type"
            control={userControl}
            defaultValue=""
            render={({ field }) => (
              <Select
                size="small"
                {...field}
                label="Govt Issued ID"
                variant="standard"
                fullWidth
                error={!!errors.govt_id_type}
              >
                <MenuItem value="" disabled>
                  Select ID Type
                </MenuItem>
                <MenuItem value={"Aadhar"}>Aadhar</MenuItem>
                <MenuItem value={"PAN"}>PAN</MenuItem>
              </Select>
            )}
          />
          <FormHelperText sx={{ color: "red" }}>
            {errors.govt_id_type?.message}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
        <Controller
          name="govt_id"
          control={userControl}
          defaultValue=""
          render={({ field }) => (
            <TextField
              autoComplete="off"
              size="small"
              {...field}
              label="Govt Id"
              variant="standard"
              fullWidth
              error={!!errors.govt_id}
              helperText={errors.govt_id?.message}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}

export default BasicDetails;
