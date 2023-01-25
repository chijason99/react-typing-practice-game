import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="errorPage">
      <h1>Opps, Something is wrong.</h1>
      <p>Sorry, an unexpected error occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
