type PageAction = {
  title: string;
  description: string;
  endpoint?: string;
};

export default function GetProfile() {
  const action: PageAction = {
    title: "Get Profile",
    description: "View the authenticated user profile connected to myPAW.",
    endpoint: "/api/get-profile"
  };

  return (
    <section className="mypaw-card">
      <div className="mypaw-badge">myPAW Account</div>
      <h2>{action.title}</h2>
      <p className="mypaw-muted">{action.description}</p>

      <form className="mypaw-form">
        <label>
          Email
          <input type="email" placeholder="student@example.edu" />
        </label>

        <label>
          Password / Secure Value
          <input type="password" placeholder="Enter secure value" />
        </label>

        <button className="mypaw-button" type="button">
          Continue
        </button>
      </form>

      <p className="mypaw-muted">
        API route: <strong>{action.endpoint}</strong>
      </p>
    </section>
  );
}
