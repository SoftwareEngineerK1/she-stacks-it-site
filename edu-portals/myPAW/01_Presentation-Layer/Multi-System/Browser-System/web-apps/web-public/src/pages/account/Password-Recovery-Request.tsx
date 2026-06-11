type PageAction = {
  title: string;
  description: string;
  endpoint?: string;
};

export default function PasswordRecoveryRequest() {
  const action: PageAction = {
    title: "Password Recovery Request",
    description: "Send a password recovery link to the account email address.",
    endpoint: "/api/password-recovery-request"
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
