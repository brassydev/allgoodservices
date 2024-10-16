// lib/authMiddleware.js
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const authMiddleware = (Component) => {
  const Auth = (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true); // Loading state

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/admin/login"); // Redirect to login if not authenticated
      } else {
        setIsLoading(false); // Token exists, stop loading
      }
    }, [router]);

    // Show loading state while checking token
    if (isLoading) {
      return <div>Loading...</div>; // You can replace this with a loading spinner or similar
    }

    return <Component {...props} />; // Render the component if authenticated
  };

  return Auth;
};

export default authMiddleware;
