import dbConnect from "@/lib/dbConnect";
import AutoHomeInsuranceForm from "@/models/AutoHomeInsuranceForm";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json(); // Parse the incoming request body
    const formData = await AutoHomeInsuranceForm.create(body); // Create and save form data

    return new Response(JSON.stringify({ success: true, data: formData }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function GET() {
  return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json" },
  });
}
