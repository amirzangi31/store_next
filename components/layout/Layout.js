import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";

function Layout({ children, font }) {



  const router = useRouter();
  const [showNandF, setShowNandF] = useState(true);
  useEffect(() => {
    if (router.pathname.includes("admin")) {
      setShowNandF(false);
    }
  }, [router.pathname]);

  useEffect(() => {}, []);
  return (
    <>
      {showNandF && <Navbar font={font}  />}

      <ToastContainer />
      <main className={`${font}`} style={{ minHeight: "calc(100vh - 450px)" }}>
        {children}
      </main>

      {showNandF && <Footer font={font} />}
    </>
  );
}

export default Layout;
