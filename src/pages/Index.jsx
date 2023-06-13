import { useLoaderData } from "react-router-dom"
import ClientTable from "../components/ClientTable";
import { getClients } from "../api/clients";

export function loader(){
    const clients = getClients();
    // return clients;
};

const Index = () => {
    const clients = useLoaderData()
    
  return (
    <>
        <h1 className="font-black text-4xl text-blue-900">Clients</h1>
        <p className="mt-3">Manage your clients</p>
        {
            clients.length ? (
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-blue-800 text-white">
                        <tr>
                            <th className="p-2">Client</th>
                            <th className="p-2">Contact</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clients.map(client => (
                                <ClientTable
                                    client={client}
                                    key={client.id}
                                />
                            ))
                        }
                    </tbody>
                </table>
            ) : (
                <p className="text-center mt-10">There isn't clients</p>
            )
        }
    </>
  )
}

export default Index