import { useEffect } from "react";
function Nopage() {
  useEffect(() => {
    document.title = '404 - El Golea Restaurant';
  }, []);
    return (
      <div className="container-fluid w-full">
        <main className="d-flex flex-column justify-content-center align-items-center py-5">
          <h1 className="display-1 fw-bolder text-dark">404</h1>
          <div className=" text-dark display-6">Oops! Page Not Found</div>
        </main>
      </div>
    )
  }
  export default Nopage;