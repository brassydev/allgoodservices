import mongoose from "mongoose";

const DriversSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthday: { type: Date, required: true },
  dl_num: { type: String, required: true },
  dl_state: { type: String, required: true },
});
const CarsSchema = new mongoose.Schema({
  vine_num: { type: String, required: true },
});

const AutoHomeInsuranceFormSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    drivers: [DriversSchema],
    cars: [CarsSchema],
  },
  {
    timestamps: true, // This adds `createdAt` and `updatedAt` fields
  }
);

// Check if the model already exists, to avoid recompiling the model during hot reloading.
export default mongoose.models.AutoHomeInsuranceForm ||
  mongoose.model("AutoHomeInsuranceForm", AutoHomeInsuranceFormSchema);
