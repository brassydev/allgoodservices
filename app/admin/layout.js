"use client"
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactsIcon from "@mui/icons-material/Contacts";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import {usePathname} from 'next/navigation'
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const pathName = usePathname();
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from local storage
    router.push("/admin/login"); // Redirect to login page
  };
  // Function to determine if the link is active
  const isActive = (linkPath) => {
    return pathName === linkPath ? "isActive" : "";
  };
  if(pathName == '/admin/login' || pathName == '/admin/register' ){
    return children;
  }
  return (
    <div className="row">
      <div className="col-md-2">
        {/* Left-side Navbar */}
        <nav style={{textAlign: "center"}} className="admin-sidebar">
            <Link href={'/'} className="mb-5 mt-0">
                <img
                  src="/images/logo.png"
                  alt="all good financial services"
                  height="60px"
                />
            </Link>
            <Link className={`d-flex admin-sidebar-link pt-5 ${isActive('/admin/dashboard')}`} href={'/admin/dashboard'}>
              <DashboardIcon />
              <b style={{ paddingLeft: '0.5rem' }}>Dashboard</b>
            </Link>
            <Link className={`d-flex admin-sidebar-link ${isActive('/admin/contact')}`} href={'/admin/contact'}>
              <ContactsIcon />
              <b style={{ paddingLeft: '0.5rem' }}>Contact Forms</b>
            </Link>
            <Link className={`d-flex admin-sidebar-link ${isActive('/admin/healthinsurance')}`} href={'/admin/healthinsurance'}>
              <HealthAndSafetyIcon />
              <b style={{ paddingLeft: '0.5rem' }}>Health Insurance Forms</b>
            </Link>
            <div onClick={()=>handleLogout()} className="logout-container">
                <LogoutIcon />
                  <b style={{paddingLeft: '0.5rem'}}>Logout</b>
            </div>
        </nav>
      </div>
      <div className="col-md-10">{children}</div>
    </div>
    
  );
}
