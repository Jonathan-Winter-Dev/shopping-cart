export default function ErrorDisplay({ errorMessage }) {
  return (
    <div className="errorContainer">
      <h1>Oops! Something's not working.</h1>
      <p>{errorMessage}</p>
    </div>
  );
}
