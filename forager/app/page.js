import DashboardPage from './dashboard/page';  // Use relative path
import Sandbox from './sandbox/page';  // Use relative path
import "./page.css";

export default function Home() {
  return (
    <div className="container">
      <DashboardPage />
    </div>
  );
}

