"use client";
import { useEffect, useState } from "react";

export default function AdminContact() {
  const [insuranceForms, setInsuranceForms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsurance = async () => {
      try {
        const response = await fetch("/api/admin/healthinsurance");
        const data = await response.json();
        if (data.success) {
          setInsuranceForms(data.data); // Assuming data is returned as { success: true, data: [...] }
        } else {
          console.error("Error fetching contacts:", data.error);
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInsurance();
  }, []);

  return (
    <>
      <section id="insurance-forms">
        <h2 className="text-blue">Health Insurance Form Submissions</h2>
        <table className="admin_table">
          <thead>
            <tr>
              <th>Policy Holder</th>
              <th>Plan Type</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {insuranceForms.length > 0 ? (
              insuranceForms.map((form) => (
                <tr key={form._id}>
                  <td>{form.firstName || "N/A"}</td>
                  <td>{form.lastName || "N/A"}</td>
                  <td>
                    {form.createdAt
                      ? new Date(form.createdAt).toLocaleDateString()
                      : "No date"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No insurance forms available</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </>
  );
}
