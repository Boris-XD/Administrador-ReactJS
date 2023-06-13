import { useRouteError } from "react-router-dom"

const ErrorBoundaries = () => {
    
    const error = useRouteError();

    return (
        <div className="space-y-8">
            <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">CRM  - Client</h1>
            <p className="text-center pt-2">Hubo un error</p>
            <p className="text-center pt-2">{ error.message }</p>
        </div>
    )
}

export default ErrorBoundaries