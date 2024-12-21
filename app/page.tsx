import NonDashboardNavbar from "@/components/NonDashboardNavbar"
import Landing from "@/app/(nondashboard)/landing/page";

export default function App() {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <div className="nondashboard-layout__main">
        <Landing/>
      </div>
    </div>
  );
}
