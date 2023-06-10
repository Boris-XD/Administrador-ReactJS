import { Form, useNavigate } from "react-router-dom"
import FormClient from "../components/FormClient";

export const action = () =>
{
    console.log("Enviando informacion del formulario");

    return null;
}

const NewClient = () => {
    
  const navigate = useNavigate();

    return (
      <>
        <h1 className="font-black text-4xl text-blue-900">New Client</h1>
        <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>

        <div className="flex justify-end">
          <button
            className="bg-blue-800 text-white px-3 py-1 font-bold"
            onClick={() => navigate(-1)}
          >
            Return
          </button>
        </div>

        <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
            <Form
                method="post"
            >
                <FormClient />
                <input
                    type="submit"
                    className="mt-5 w-full bg-blue-800 p-3 font-bold text-white text-lg"
                    value="Client Register"
                />
            </Form>
        </div>
      </>    
    )
}

export default NewClient