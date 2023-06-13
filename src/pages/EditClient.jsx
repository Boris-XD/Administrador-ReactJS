import { Form, useLoaderData, useParams } from 'react-router-dom'
import { getClient } from '../api/clients';
import FormClient from '../components/FormClient';

export const loader = async ({params}) => {
    const { clientId } = params;
    const data = await getClient(clientId)
    return data;
}

const EditClient = () => {

    const client = useLoaderData();
    console.log(client)
    return (
        <div className='space-y-8'>
            <h1 className="text-center font-black text-4xl text-blue-900 pb-7">Edit Client</h1>
            <Form
                method='PATCH'
            >
                <FormClient cliente={client}/>
                <input
                        type="submit"
                        className="mt-5 w-full bg-blue-800 p-3 font-bold text-white text-lg"
                        value="Save Register"
                    />
            </Form>
        </div>
    )
}

export default EditClient