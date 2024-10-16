"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { TextField, Button, Container, Typography, Box, Grid, Link as MUILink } from "@mui/material";
import Link from "next/link";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!mounted) return;

    setError("");

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      // Make API call to login the admin
      const res = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem('token', res.data.token);
      router.push("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid login credentials");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom align="center">
        Admin Login
      </Typography>
      {error && (
        <Typography variant="body2" color="error" align="center">
          {error}
        </Typography>
      )}
      <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
      </Box>
      <Typography align="center">
        Don&apos;t have an account?{" "}
        <Link href={"/admin/register"} variant="body2">
          Register here
        </Link>
      </Typography>
    </Container>
  );
}
