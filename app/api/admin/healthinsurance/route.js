import dbConnect from "@/lib/dbConnect";
import HealthInsuranceForm from "@/models/HealthInsuranceForm";

export async function GET() {
  try {
    await dbConnect();

    const forms = await HealthInsuranceForm.find(); // Fetch all form data from DB

    return new Response(JSON.stringify({ success: true, data: forms }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching contact form data:", error); // Log error
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
