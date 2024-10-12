import mongoose from "mongoose";

const ContactFormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true, // This adds `createdAt` and `updatedAt` fields
  }
);

// Check if the model already exists, to avoid recompiling the model during hot reloading.
export default mongoose.models.ContactForm ||
  mongoose.model("ContactForm", ContactFormSchema);
