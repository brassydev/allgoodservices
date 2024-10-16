"use client";
import { useEffect, useState } from "react";

export default function AdminContact() {
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

  return (
    <>
      <main className="dashboard-content">
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
      </main>
    </>
  );
}
