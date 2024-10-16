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
      <main className="dashboard-content">
        <section id="insurance-forms" className="mt-5">
          <h2 className="text-blue">Health Insurance Form Submissions</h2>
          <table className="admin_table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Social Security No</th>
                <th>Date</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {insuranceForms.length > 0 ? (
                insuranceForms.map((form) => (
                  <tr key={form._id}>
                    <td>
                      {form.firstName || "N/A"}
                      {form.lastName || "N/A"}
                    </td>
                    <td>{form.email}</td>
                    <td>{form.phone}</td>
                    <td>{form.ssn}</td>
                    <td>
                      {form.createdAt
                        ? new Date(form.createdAt).toLocaleDateString()
                        : "No date"}
                    </td>
                    <td>
                      <button className="btn btn-success">View</button>
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
      </main>
    </>
  );
}
