import mongoose from "mongoose";

const FamilyMemberSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  ssn: { type: String, required: true },
  birthday: { type: Date, required: true },
  gender: { type: String, required: true },
  relationship: { type: String, required: true },
  citizenshipStatus: {
    type: String,
    enum: ["Citizen", "Immigrant"],
    required: true,
  },
  applicationStatus: {
    type: String,
    enum: ["Applying", "Not Applying"],
    required: true,
  },
});

const HealthInsuranceFormSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthday: { type: Date, required: true },
    ssn: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    employmentStatus: {
      type: String,
      enum: ["Employed", "Self-Employed"],
      required: true,
    },
    monthlyIncome: { type: Number, required: true },
    familyMembers: [FamilyMemberSchema],
  },
  {
    timestamps: true, // This adds `createdAt` and `updatedAt` fields
  }
);

// Check if the model already exists, to avoid recompiling the model during hot reloading.
export default mongoose.models.HealthInsuranceForm ||
  mongoose.model("HealthInsuranceForm", HealthInsuranceFormSchema);
