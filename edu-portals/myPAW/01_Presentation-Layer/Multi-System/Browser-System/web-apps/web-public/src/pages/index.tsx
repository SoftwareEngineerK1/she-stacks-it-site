import { Link } from "react-router-dom";

export default function Index() {
  return (
    <section className="mypaw-card mypaw-hero">
      <div className="mypaw-badge">Production Path: /edu-portals/myPAW</div>
      <h1>Your campus, in one place.</h1>
      <p className="mypaw-muted">
        myPAW is a university student portal starter for OneCard, Dining,
        Parking, Housing, Notifications, and Account access.
      </p>

      <div className="mypaw-grid">
        <div className="mypaw-card">
          <h2>OneCard</h2>
          <p className="mypaw-muted">Digital identity, barcode status, replacements, and campus access.</p>
        </div>
        <div className="mypaw-card">
          <h2>Dining</h2>
          <p className="mypaw-muted">Meal plan, Dining Dollars, Doc Dollars, and Tiger Meals.</p>
        </div>
        <div className="mypaw-card">
          <h2>Parking</h2>
          <p className="mypaw-muted">Permits, citations, appeal tracking, and lot availability.</p>
        </div>
        <div className="mypaw-card">
          <h2>Housing</h2>
          <p className="mypaw-muted">Residence status, mail, laundry, and housing support.</p>
        </div>
      </div>

      <Link className="mypaw-button" to="/sign-up">Create myPAW Account</Link>
    </section>
  );
}
