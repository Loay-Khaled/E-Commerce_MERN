// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CheckCircleOutline } from "@mui/icons-material";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Box, Button, Container, Typography } from "@mui/material";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth/AuthContext";
import { useEffect } from "react";

const MyOrdersPage = () => {
  const { getMyOrders, myOrders } = useAuth();

  useEffect(() => {
    getMyOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      fixed
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Typography>My Orders</Typography>
      {myOrders.map(({ address, orderItems, total }) => (
        <Box
          sx={{ border: 1, borderColor: "gray", borderRadius: 2, padding: 1 }}
        >
          <Typography>Address: {address}</Typography>
          <Typography>Items: {orderItems.length}</Typography>
          <Typography>Total: {total}</Typography>
        </Box>
      ))}
    </Container>
  );
};

export default MyOrdersPage;
