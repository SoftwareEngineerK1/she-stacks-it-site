type PageAction = {
  title: string;
  description: string;
  endpoint?: string;
};

export default function SignUp() {
  const action: PageAction = {
    title: "Sign Up",
    description: "Create a myPAW account for the university portal.",
    endpoint: "/api/auth-sign-up"
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
