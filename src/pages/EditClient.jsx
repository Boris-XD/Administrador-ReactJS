import { Form, redirect, useActionData, useLoaderData, useNavigate } from 'react-router-dom'
import { getClient, updateClient } from '../api/clients';
import FormClient from '../components/FormClient';
import Errors from '../components/Errors';

export const loader = async ({params}) => {
    const { clientId } = params;
    const data = await getClient(clientId)
    return data;
}

export const action = async ({ request, params }) =>
{
    const { clientId } = params;
    const formData = await request.formData()
    const datos = Object.fromEntries(formData);
    const email = formData.get("email");

    // Validation
    const errores = [];
    if(Object.values(datos).includes('')){
        errores.push("All fields are must be completed");
    }

    // validate Email
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if(!regex.test(datos.email)){
      errores.push("Email field isn't valid");
    }
    
    // Return Errrors
    if(Object.keys(errores).length){
      return errores;
    }

    await updateClient(clientId, datos);
    
    return redirect("/");
}

const EditClient = () => {

    const navigate = useNavigate();
    const errores = useActionData();
    const client = useLoaderData();

    return (
        <div className='space-y-8'>
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
                {
                    errores?.length && errores.map((error, i) => <Errors key={i}>{error}</Errors>)
                }
                <Form
                    method='PATCH'
                    noValidate
                >
                    <FormClient cliente={client}/>
                    <input
                            type="submit"
                            className="mt-5 w-full bg-blue-800 p-3 font-bold text-white text-lg"
                            value="Save Register"
                        />
                </Form>
            </div>
        </div>
    )
}

export default EditClient