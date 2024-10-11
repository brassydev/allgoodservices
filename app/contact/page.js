"use client"; // This marks the file as a Client Component
import React, { useState } from "react";

import {
  Container,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid,
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
  Card,
  CardContent,
  Divider,
  Paper,
} from "@mui/material";
import toast from "react-hot-toast";
import CloseIcon from "@mui/icons-material/Close";
import { AccountCircle } from "@mui/icons-material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

export default function HealthInsuranceForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    ssn: "",
    address: "",
    email: "",
    phone: "",
    employmentStatus: "Employed",
    monthlyIncome: "",
    familyMembers: [], // Store family members here
  });

  const [open, setOpen] = useState(false);
  const [currentMemberIndex, setCurrentMemberIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMemberChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMembers = [...formData.familyMembers];
    updatedMembers[currentMemberIndex] = {
      ...updatedMembers[currentMemberIndex],
      [name]: value,
    };
    setFormData((prev) => ({
      ...prev,
      familyMembers: updatedMembers,
    }));
  };

  const addFamilyMember = () => {
    if (formData.familyMembers.length < 8) {
      setFormData((prev) => {
        const updatedFamilyMembers = [
          ...prev.familyMembers,
          {
            firstName: "",
            lastName: "",
            ssn: "",
            birthday: "",
            gender: "Male",
            relationship: "",
            citizenshipStatus: "Citizen",
            applicationStatus: "Applying",
          },
        ];

        // Set the current member index based on the updated array length
        setCurrentMemberIndex(updatedFamilyMembers.length - 1);

        return {
          ...prev,
          familyMembers: updatedFamilyMembers,
        };
      });

      setOpen(true); // Open modal after adding the member
    } else {
      alert("You can add up to 8 family members only.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/health_insurance_form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Health Insurance Form submitted successfully!", {
          style: {
            border: "1px solid #4BB543",
            padding: "16px",
            color: "#4BB543",
          },
          iconTheme: {
            primary: "#4BB543",
            secondary: "#FFFAEE",
          },
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          birthday: "",
          ssn: "",
          address: "",
          email: "",
          phone: "",
          employmentStatus: "Employed",
          monthlyIncome: "",
          familyMembers: [],
        });
      } else {
        toast.error("Error submitting form.", {
          style: {
            border: "1px solid #FF6347",
            padding: "16px",
            color: "#FF6347",
          },
          iconTheme: {
            primary: "#FF6347",
            secondary: "#FFFAEE",
          },
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClose = () => {
    if (formData.familyMembers.length > 0) {
      const currentMember =
        formData.familyMembers[formData.familyMembers.length - 1];

      // Check if all required fields are filled for the current member
      const allFieldsFilled =
        currentMember.firstName &&
        currentMember.lastName &&
        currentMember.ssn &&
        currentMember.birthday &&
        currentMember.relationship;

      if (!allFieldsFilled) {
        toast.error(
          "Please fill in all fields for the current family member before closing.",
          {
            style: {
              border: "1px solid #FF6347",
              padding: "16px",
              color: "#FF6347",
            },
            iconTheme: {
              primary: "#FF6347",
              secondary: "#FFFAEE",
            },
          }
        );
        return; // Prevent closing the dialog if fields are not filled
      }
    }
    setOpen(false); // Close the dialog
  };

  const handleSave = () => {
    if (formData.familyMembers.length > 0) {
      const currentMember =
        formData.familyMembers[formData.familyMembers.length - 1];

      // Check if all required fields are filled for the current member
      const allFieldsFilled =
        currentMember.firstName &&
        currentMember.lastName &&
        currentMember.ssn &&
        currentMember.birthday &&
        currentMember.relationship;

      if (!allFieldsFilled) {
        toast.error(
          "Please fill in all fields for the current family member before saving.",
          {
            style: {
              border: "1px solid #FF6347",
              padding: "16px",
              color: "#FF6347",
            },
            iconTheme: {
              primary: "#FF6347",
              secondary: "#FFFAEE",
            },
          }
        );
        return; // Prevent saving if fields are not filled
      }
    }

    console.log("Saving data...", formData);
    setOpen(false); // Close modal after saving
  };

  return (
    <Container sx={{ mt: 5 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={8}>
            <div className="center">
              <HealthAndSafetyIcon
                style={{
                  fontSize: 40,
                  color: "#00428c",
                  marginRight: "8px",
                }}
              />
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                style={{
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Health Insurance Form
              </Typography>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="text-blue"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="Birthday"
                  type="date"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="Social Security Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="ssn"
                  value={formData.ssn}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="Phone Number"
                  type="tel"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel htmlFor="employmentStatus">
                    Employment Status
                  </InputLabel>
                  <Select
                    name="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleChange}
                    label="Employment Status"
                    required
                  >
                    <MenuItem value="Employed">Employed</MenuItem>
                    <MenuItem value="Self-Employed">Self-Employed</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="Monthly Income"
                  type="number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="monthlyIncome"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            {/* Family Members Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "#00428c",
                "&:hover": {
                  boxShadow: 4,
                },
                borderRadius: 2,
                padding: "3rem 1rem", // Padding around the box
                marginBottom: 4, // Space below the component
              }}
            >
              <Typography
                variant="h6"
                component="h6"
                gutterBottom
                sx={{
                  color: "#ffffff", // Text color
                  fontWeight: "bold", // Bold font for emphasis
                  textAlign: "center", // Center align the text
                }}
              >
                Need to Add your Family Members?
              </Typography>
              <Button
                variant="outlined"
                onClick={addFamilyMember}
                sx={{
                  mt: 2,
                  bgcolor: "white", // Background color
                  color: "#00428c", // Text color
                  border: "none",
                }}
              >
                Add Member
              </Button>
            </Box>

            {/* Display Added Family Members */}
            <Box sx={{ mt: 3 }}>
              {formData.familyMembers.length > 0 &&
                formData.familyMembers.map((member, index) => (
                  <Grid item xs={12} sx={{ mb: 2 }}>
                    <Paper
                      elevation={3}
                      sx={{
                        padding: 2,
                        display: "flex",
                        alignItems: "center",
                        borderRadius: 2,
                        boxShadow: 2,
                        padding: 2,
                        bgcolor: "white",
                        "&:hover": {
                          boxShadow: 4,
                        },
                      }}
                    >
                      <Grid container spacing={2} alignItems="center">
                        <Grid
                          item
                          xs={2}
                          display="flex"
                          justifyContent="center"
                        >
                          <AccountCircle
                            sx={{ fontSize: 40, color: "#00428c" }}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={3}
                          display="flex"
                          justifyContent="center"
                        >
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold", color: "#00428c" }}
                          >
                            {member.firstName}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={3}
                          display="flex"
                          justifyContent="center"
                        >
                          <Typography variant="body1" sx={{ color: "#555" }}>
                            {member.ssn}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          display="flex"
                          justifyContent="center"
                        >
                          <Typography variant="body1" sx={{ color: "#555" }}>
                            {new Date(member.birthday).toLocaleDateString()}{" "}
                            {/* Format birthday if needed */}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))}
            </Box>

            <Dialog
              open={open}
              onClose={handleClose}
              maxWidth="md"
              PaperProps={{
                sx: { borderRadius: 4, boxShadow: 6, p: 1.5 },
              }}
              fullWidth
            >
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent>
                <Grid container spacing={2}>
                  <Typography
                    variant="h6"
                    component="h6"
                    gutterBottom
                    className="text-blue"
                  >
                    Add Family Member
                  </Typography>
                  {formData.familyMembers.map(
                    (member, index) =>
                      currentMemberIndex !== null &&
                      currentMemberIndex === index && (
                        <Grid container spacing={2} key={index}>
                          <Grid item xs={12} sm={6} md={6}>
                            <TextField
                              label="First Name"
                              variant="outlined"
                              fullWidth
                              margin="normal"
                              name="firstName"
                              value={member.firstName}
                              onChange={(e) => handleMemberChange(index, e)}
                              required
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <TextField
                              label="Last Name"
                              variant="outlined"
                              fullWidth
                              margin="normal"
                              name="lastName"
                              value={member.lastName}
                              onChange={(e) => handleMemberChange(index, e)}
                              required
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <TextField
                              label="Social Security Number"
                              variant="outlined"
                              fullWidth
                              margin="normal"
                              name="ssn"
                              value={member.ssn}
                              onChange={(e) => handleMemberChange(index, e)}
                              required
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <TextField
                              label="Birthday"
                              type="date"
                              variant="outlined"
                              fullWidth
                              margin="normal"
                              name="birthday"
                              value={member.birthday}
                              onChange={(e) => handleMemberChange(index, e)}
                              required
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <FormControl
                              fullWidth
                              variant="outlined"
                              margin="normal"
                            >
                              <InputLabel>Gender</InputLabel>
                              <Select
                                name="gender"
                                value={member.gender}
                                onChange={(e) => handleMemberChange(index, e)}
                                label="Gender"
                                required
                              >
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <TextField
                              label="Relationship"
                              variant="outlined"
                              fullWidth
                              margin="normal"
                              name="relationship"
                              value={member.relationship}
                              onChange={(e) => handleMemberChange(index, e)}
                              required
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <FormControl
                              fullWidth
                              variant="outlined"
                              margin="normal"
                            >
                              <InputLabel>Citizenship Status</InputLabel>
                              <Select
                                name="citizenshipStatus"
                                value={member.citizenshipStatus}
                                onChange={(e) => handleMemberChange(index, e)}
                                label="Citizenship Status"
                                required
                              >
                                <MenuItem value="Citizen">Citizen</MenuItem>
                                <MenuItem value="Immigrant">Immigrant</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <FormControl
                              fullWidth
                              variant="outlined"
                              margin="normal"
                            >
                              <InputLabel>Application Status</InputLabel>
                              <Select
                                name="applicationStatus"
                                value={member.applicationStatus}
                                onChange={(e) => handleMemberChange(index, e)}
                                label="Application Status"
                                required
                              >
                                <MenuItem value="Applying">Applying</MenuItem>
                                <MenuItem value="Not Applying">
                                  Not Applying
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                      )
                  )}
                </Grid>
              </DialogContent>
              <DialogActions sx={{ p: 2 }}>
                <Button
                  onClick={handleSave}
                  variant="contained"
                  className="bg-blue"
                >
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          type="submit"
          sx={{ mt: 5 }}
          className="bg-blue"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
