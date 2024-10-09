"use client";  // This marks the file as a Client Component
import React, { useState } from 'react';
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
} from '@mui/material';

export default function HealthInsuranceForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    ssn: '',
    address: '',
    email: '',
    phone: '',
    employmentStatus: 'Employed',
    monthlyIncome: '',
    familyMembers: [], // Store family members here
  });

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
    updatedMembers[index] = {
      ...updatedMembers[index],
      [name]: value,
    };
    setFormData((prev) => ({
      ...prev,
      familyMembers: updatedMembers,
    }));
  };

  const addFamilyMember = () => {
    if (formData.familyMembers.length < 8) {
      setFormData((prev) => ({
        ...prev,
        familyMembers: [...prev.familyMembers, {
          firstName: '',
          lastName: '',
          ssn: '',
          birthday: '',
          gender: 'Male',
          relationship: '',
          citizenshipStatus: 'Citizen',
          applicationStatus: 'Applying',
        }],
      }));
    } else {
      alert('You can add up to 8 family members only.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/health_insurance_form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Form submitted successfully!');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          birthday: '',
          ssn: '',
          address: '',
          email: '',
          phone: '',
          employmentStatus: 'Employed',
          monthlyIncome: '',
          familyMembers: [],
        });
      } else {
        alert('Error submitting form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Health Insurance Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
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
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
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
          <Grid item xs={6}>
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
          <Grid item xs={6}>
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
          <Grid item xs={6}>
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
          <Grid item xs={6}>
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
          <Grid item xs={6}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Employment Status</InputLabel>
              <Select
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
                required
              >
                <MenuItem value="Employed">Employed</MenuItem>
                <MenuItem value="Self-Employed">Self-Employed</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
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

        {/* Family Members Section */}
        <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
          Family Members
        </Typography>
        {formData.familyMembers.map((member, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
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
            <Grid item xs={6}>
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
            <Grid item xs={6}>
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
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={member.gender}
                  onChange={(e) => handleMemberChange(index, e)}
                  required
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel>Citizenship Status</InputLabel>
                <Select
                  name="citizenshipStatus"
                  value={member.citizenshipStatus}
                  onChange={(e) => handleMemberChange(index, e)}
                  required
                >
                  <MenuItem value="Citizen">Citizen</MenuItem>
                  <MenuItem value="Immigrant">Immigrant</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel>Application Status</InputLabel>
                <Select
                  name="applicationStatus"
                  value={member.applicationStatus}
                  onChange={(e) => handleMemberChange(index, e)}
                  required
                >
                  <MenuItem value="Applying">Applying</MenuItem>
                  <MenuItem value="Not Applying">Not Applying</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        ))}

        <Button variant="outlined" onClick={addFamilyMember} sx={{ mt: 2 }}>
          Add Member
        </Button>

        <Button variant="contained" type="submit" sx={{ mt: 4 }}>
          Submit
        </Button>
      </form>
    </Container>
  );
}
