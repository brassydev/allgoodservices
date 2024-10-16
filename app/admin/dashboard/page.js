"use client";
import { useEffect, useState } from "react";
import authMiddleware from "@/lib/authMiddleware";

function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [insuranceForms, setInsuranceForms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("/api/admin/contact");
        const data = await response.json();
        if (data.success) {
          setContacts(data.data); // Assuming data is returned as { success: true, data: [...] }
        } else {
          console.error("Error fetching contacts:", data.error);
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      {/* Right-side Dashboard */}
      <main className="dashboard-content">
        <h1 className="text-blue mb-5">Admin Dashboard</h1>
        {/* Dashboard Cards */}
        <div className="dashboard-cards m-2">
          <div className="row">
            <div className="col-md-4">
              <div className="card dashboard-card">
                <h6>Contact Enquires</h6>
                <h1>{contacts.length}</h1>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card dashboard-card">
                <h6>Health Insurance Applications</h6>
                <h1>{insuranceForms.length}</h1>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card dashboard-card">
                <h6>Home/Auto Insurance Applications</h6>
                <h1>{insuranceForms.length}</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Forms Section */}
        <section id="contacts" className="mt-5">
          <h2 className="text-blue">Contact Form Submissions</h2>
          <table className="admin_table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact) => (
                  <tr key={contact._id} className="table-row">
                    <td>{contact.name || "N/A"}</td>
                    <td>{contact.email || "N/A"}</td>
                    <td>{contact.message || "No message provided"}</td>
                    <td>
                      {contact.createdAt
                        ? new Date(contact.createdAt).toLocaleDateString()
                        : "No date"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No contacts available</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {insuranceForms.length > 0 ? (
                insuranceForms.map((form) => (
                  <tr key={form._id} className="table-row">
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
    </div>
  );
}
export default authMiddleware(AdminDashboard);
