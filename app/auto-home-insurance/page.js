"use client"; // This marks the file as a Client Component
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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
import PageBanner from "@/components/PageBanner";

export default function HealthInsuranceForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    drivers: [],
    cars: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentMemberIndex, setCurrentMemberIndex] = useState(null);
  const [openDriverModal, setOpenDriverModal] = useState(false);
  const [openCarModal, setOpenCarModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //For Drivers
  const handleDriverDelete = (index) => {
    const updatedDrivers = formData.drivers.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      drivers: updatedDrivers,
    });
  };

  const handleDriverEdit = (index) => {
    setCurrentMemberIndex(index); // Set the index of the family member being edited
    setOpenDriverModal(true); // Open the modal
  };

  const handleDriverChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMembers = [...formData.drivers];
    updatedMembers[currentMemberIndex] = {
      ...updatedMembers[currentMemberIndex],
      [name]: value,
    };
    setFormData((prev) => ({
      ...prev,
      drivers: updatedMembers,
    }));
  };

  const addDrivers = () => {
    if (formData.drivers.length < 5) {
      setFormData((prev) => {
        const updatedDrivers = [
          ...prev.drivers,
          {
            name: "",
            birthday: "",
            dl_num: "",
            dl_state: "",
          },
        ];

        // Set the current member index based on the updated array length
        setCurrentMemberIndex(updatedDrivers.length - 1);

        return {
          ...prev,
          drivers: updatedDrivers,
        };
      });

      setOpenDriverModal(true); // Open modal after adding the member
    } else {
      alert("You can add up to 5 Driver only.");
    }
  };

  const handleDriverClose = () => {
    console.log("csacas");
    const currentMember = formData.drivers[formData.drivers.length - 1];

    // Check if all required fields are filled for the current member
    const allFieldsFilled =
      currentMember.firstName ||
      currentMember.lastName ||
      currentMember.phone ||
      currentMember.email;
    console.log(allFieldsFilled);

    if (!allFieldsFilled) {
      if (formData.drivers.length > 0) {
        // Remove the last family member from the array
        const updatedDrivers = [...formData.drivers];
        updatedDrivers.pop(); // Remove the last member from the array
        setFormData((prevData) => ({
          ...prevData,
          drivers: updatedDrivers, // Update the family members array
        }));
      }
    }

    setOpenDriverModal(false); // Close the dialog
  };

  const handleDriverSave = () => {
    if (formData.drivers.length > 0) {
      const currentMember = formData.drivers[formData.drivers.length - 1];

      // Check if all required fields are filled for the current member
      const allFieldsFilled =
        currentMember.name &&
        currentMember.birthday &&
        currentMember.dl_num &&
        currentMember.dl_state;
      if (!allFieldsFilled) {
        toast.error(
          "Please fill in all fields for the current drivers before saving.",
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
    setOpenDriverModal(false); // Close modal after saving
  };

  //For Cars
  const handleCarDelete = (index) => {
    const updatedCars = formData.cars.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      cars: updatedCars,
    });
  };

  const handleCarEdit = (index) => {
    setCurrentMemberIndex(index); // Set the index of the family member being edited
    setOpenCarModal(true); // Open the modal
  };

  const handleCarChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMembers = [...formData.cars];
    updatedMembers[currentMemberIndex] = {
      ...updatedMembers[currentMemberIndex],
      [name]: value,
    };
    setFormData((prev) => ({
      ...prev,
      cars: updatedMembers,
    }));
  };

  const addCars = () => {
    if (formData.cars.length < 5) {
      setFormData((prev) => {
        const updatedCars = [
          ...prev.cars,
          {
            vine_num: "",
          },
        ];

        // Set the current member index based on the updated array length
        setCurrentMemberIndex(updatedCars.length - 1);

        return {
          ...prev,
          cars: updatedCars,
        };
      });

      setOpenCarModal(true); // Open modal after adding the member
    } else {
      alert("You can add up to 5 Cars only.");
    }
  };

  const handleCarClose = () => {
    console.log("csacas");
    const currentMember = formData.cars[formData.cars.length - 1];

    // Check if all required fields are filled for the current member
    const allFieldsFilled = currentMember.vine_num;
    console.log(allFieldsFilled);

    if (!allFieldsFilled) {
      if (formData.cars.length > 0) {
        // Remove the last family member from the array
        const updatedCars = [...formData.cars];
        updatedCars.pop(); // Remove the last member from the array
        setFormData((prevData) => ({
          ...prevData,
          cars: updatedCars, // Update the family members array
        }));
      }
    }

    setOpenCarModal(false); // Close the dialog
  };

  const handleCarSave = () => {
    if (formData.cars.length > 0) {
      const currentMember = formData.cars[formData.cars.length - 1];

      // Check if all required fields are filled for the current member
      const allFieldsFilled = currentMember.vine_num;
      if (!allFieldsFilled) {
        toast.error(
          "Please fill in all fields for the current Cars before saving.",
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
    setOpenCarModal(false); // Close modal after saving
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const res = await fetch("/api/auto_home_insurance_form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsLoading(false);
        toast.success(
          "Auto/Home Insurance Application submitted successfully!",
          {
            style: {
              border: "1px solid #4BB543",
              padding: "16px",
              color: "#4BB543",
            },
            iconTheme: {
              primary: "#4BB543",
              secondary: "#FFFAEE",
            },
          }
        );
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          drivers: [],
          cars: [],
        });
      } else {
        setIsLoading(false);
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
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageBanner
        title={"Auto/Home Insurance"}
        imageUrl={"/images/page_banner.jpg"}
      />
      <Container sx={{ mt: 5, position: "relative", mb: 10 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <div style={{ textAlign: "center" }}>
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
                  Auto/Home Insurance Application
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
              </Grid>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  mt: 5,
                  pl: 5,
                  pr: 5,
                  fontWeight: 600,
                  float: "left",
                }}
                className="bg-blue"
                disabled={isLoading} // Disable the button when isLoading is true
              >
                {isLoading ? "Loading..." : "Submit Application"}
              </Button>
            </Grid>
            {/* Drivers Section */}
            <Grid item xs={12} sm={3} md={3}>
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
                  padding: "1.5rem 1rem", // Padding around the box
                  marginTop: "3rem",
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
                  Need to Add your Drivers?
                </Typography>
                <Button
                  variant="outlined"
                  onClick={addDrivers}
                  sx={{
                    mt: 2,
                    bgcolor: "white", // Background color
                    color: "#00428c", // Text color
                    border: "none",
                    fontWeight: 600,
                  }}
                >
                  Add Drivers
                </Button>
              </Box>

              {/* Display Added Family Members */}
              <Box sx={{ mt: 3 }}>
                {formData.drivers.length > 0 &&
                  formData.drivers.map((driver, index) => (
                    <Grid key={index} item xs={12} sx={{ mb: 2 }}>
                      <Paper
                        elevation={3}
                        sx={{
                          padding: 2,
                          display: "flex",
                          alignItems: "center",
                          borderRadius: 2,
                          boxShadow: 2,
                          bgcolor: "white",
                          "&:hover": {
                            boxShadow: 4,
                          },
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                          spacing={2}
                          alignItems="center"
                        >
                          <div
                            item
                            xs={2}
                            display="flex"
                            justifyContent="center"
                          >
                            <AccountCircle
                              sx={{ fontSize: 40, color: "#00428c" }}
                            />
                          </div>
                          <div
                            item
                            xs={3}
                            display="flex"
                            justifyContent="center"
                          >
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: "bold", color: "#00428c" }}
                            >
                              {driver.name}
                            </Typography>
                          </div>
                          <div
                            item
                            xs={3}
                            display="flex"
                            justifyContent="center"
                          >
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: "bold", color: "#00428c" }}
                            >
                              {driver.dl_num}
                            </Typography>
                          </div>
                          {/* Edit Button */}
                          <div
                            item
                            xs={2}
                            display="flex"
                            justifyContent="center"
                          >
                            <IconButton onClick={() => handleDriverEdit(index)}>
                              <EditIcon color="primary" />
                            </IconButton>
                          </div>
                          {/* Delete Button */}
                          <div
                            item
                            xs={2}
                            display="flex"
                            justifyContent="center"
                          >
                            <IconButton
                              onClick={() => handleDriverDelete(index)}
                            >
                              <DeleteIcon color="error" />
                            </IconButton>
                          </div>
                        </div>
                      </Paper>
                    </Grid>
                  ))}
              </Box>
              <Dialog
                open={openDriverModal}
                onClose={handleDriverClose}
                maxWidth="md"
                PaperProps={{
                  sx: { borderRadius: 4, boxShadow: 6, p: 1.5 },
                }}
                fullWidth
              >
                <IconButton
                  aria-label="close"
                  onClick={handleDriverClose}
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
                      Add Drivers
                    </Typography>
                    {formData.drivers.map(
                      (driver, index) =>
                        currentMemberIndex !== null &&
                        currentMemberIndex === index && (
                          <Grid container spacing={2} key={index}>
                            <Grid item xs={12} sm={6} md={6}>
                              <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="name"
                                value={driver.name}
                                onChange={(e) => handleDriverChange(index, e)}
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
                                value={driver.birthday}
                                onChange={(e) => handleDriverChange(index, e)}
                                required
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                              <TextField
                                label="Driving Lisence Number"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="dl_num"
                                value={driver.dl_num}
                                onChange={(e) => handleDriverChange(index, e)}
                                required
                              />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                              <TextField
                                label="Driving Lisence State"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="dl_state"
                                value={driver.dl_state}
                                onChange={(e) => handleDriverChange(index, e)}
                                required
                              />
                            </Grid>
                          </Grid>
                        )
                    )}
                  </Grid>
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                  <Button
                    onClick={handleDriverSave}
                    variant="contained"
                    className="bg-blue"
                  >
                    Save
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>

            {/* Cars Section */}
            <Grid item xs={12} sm={3} md={3}>
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
                  padding: "1.5rem 1rem", // Padding around the box
                  marginTop: "3rem",
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
                  Need to Add your<br></br> Cars?
                </Typography>
                <Button
                  variant="outlined"
                  onClick={addCars}
                  sx={{
                    mt: 2,
                    bgcolor: "white", // Background color
                    color: "#00428c", // Text color
                    border: "none",
                    fontWeight: 600,
                  }}
                >
                  Add Cars
                </Button>
              </Box>

              {/* Display Added Family Members */}
              <Box sx={{ mt: 3 }}>
                {formData.cars.length > 0 &&
                  formData.cars.map((car, index) => (
                    <Grid key={index} item xs={12} sx={{ mb: 2 }}>
                      <Paper
                        elevation={3}
                        sx={{
                          padding: 2,
                          display: "flex",
                          alignItems: "center",
                          borderRadius: 2,
                          boxShadow: 2,
                          bgcolor: "white",
                          "&:hover": {
                            boxShadow: 4,
                          },
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                          spacing={2}
                          alignItems="center"
                        >
                          <div
                            item
                            xs={2}
                            display="flex"
                            justifyContent="center"
                          >
                            <AccountCircle
                              sx={{ fontSize: 40, color: "#00428c" }}
                            />
                          </div>
                          <div
                            item
                            xs={3}
                            display="flex"
                            justifyContent="center"
                          >
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: "bold", color: "#00428c" }}
                            >
                              {car.vine_num}
                            </Typography>
                          </div>
                          {/* Edit Button */}
                          <div
                            item
                            xs={2}
                            display="flex"
                            justifyContent="center"
                          >
                            <IconButton onClick={() => handleCarEdit(index)}>
                              <EditIcon color="primary" />
                            </IconButton>
                          </div>
                          {/* Delete Button */}
                          <div
                            item
                            xs={2}
                            display="flex"
                            justifyContent="center"
                          >
                            <IconButton onClick={() => handleCarDelete(index)}>
                              <DeleteIcon color="error" />
                            </IconButton>
                          </div>
                        </div>
                      </Paper>
                    </Grid>
                  ))}
              </Box>
              <Dialog
                open={openCarModal}
                onClose={handleCarClose}
                maxWidth="md"
                PaperProps={{
                  sx: { borderRadius: 4, boxShadow: 6, p: 1.5 },
                }}
                fullWidth
              >
                <IconButton
                  aria-label="close"
                  onClick={handleCarClose}
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
                      Add Cars
                    </Typography>
                    {formData.cars.map(
                      (car, index) =>
                        currentMemberIndex !== null &&
                        currentMemberIndex === index && (
                          <Grid container spacing={2} key={index}>
                            <Grid item xs={12} sm={6} md={6}>
                              <TextField
                                label="Vine Number"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="vine_num"
                                value={car.vine_num}
                                onChange={(e) => handleCarChange(index, e)}
                                required
                              />
                            </Grid>
                          </Grid>
                        )
                    )}
                  </Grid>
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                  <Button
                    onClick={handleCarSave}
                    variant="contained"
                    className="bg-blue"
                  >
                    Save
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
