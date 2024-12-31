import NonDashboardNavbar from "@/components/NonDashboardNavbar"
import Landing from "@/app/(nondashboard)/landing/page";
import Footer from "@/components/Footer";


export default function App() {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <div className="nondashboard-layout__main">
        <Landing/>
      </div>
      <Footer/>
    </div>
  );
}
