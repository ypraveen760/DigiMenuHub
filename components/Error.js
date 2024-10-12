import { useRouteError } from "react-router-dom"

const Error = () => {
    const err=useRouteError();
    console.log(err)
  return (
    <div>
        <h1>404 OPPS.....</h1>
        <h2>Error Occured</h2>
        <h3>{err.status},{err.statusText}</h3>
    </div>
  )
}

export default Error