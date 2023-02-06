export default function AuthForm({ children }) {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" />
      {children}
    </form>
  );
}
