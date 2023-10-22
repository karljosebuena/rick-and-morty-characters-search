import { SignUp } from "@clerk/nextjs";
import { Box } from "@mui/material";

export default function Page() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '10vh'
      }}
    >
      <SignUp />
    </Box>
  );
}