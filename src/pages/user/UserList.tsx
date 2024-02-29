import { Box, Container, Paper, Typography } from "@mui/material";
import UsersTable from "../../views/tables/UsersTable";
import { useAppSelector } from "../../redux/app/hooks";



const columns = [
  { data: "name", title: "Name" },
  { data: "age", title: "Age" },
  { data: "sex", title: "Sex" },
  { data: "mobile", title: "Mobile No." },
  { data: "govt_id_type", title: "govt Id Type" },
  { data: "govt_id", title: "govt Id No." },
  { data: "country", title: "Country" },
  { data: "state", title: "State" },
  { data: "city", title: "City" },
  { data: "pincode", title: "Pincode" },
];
function UserList() {
     const { userData } = useAppSelector((state) => state.user);
    
  return (
    <Container
      sx={{
        height: "fit-content",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        width: "400px",
      }}
    >
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography
          variant="h4"
          gutterBottom
          textAlign={"center"}
          sx={{ mb: 2 }}
        >
          Users List
        </Typography>
        <Box sx={{ width: "100%", mt: 5 }}>
          <UsersTable data={userData} columns={columns} />
        </Box>
      </Paper>
    </Container>
  );
}

export default UserList;
