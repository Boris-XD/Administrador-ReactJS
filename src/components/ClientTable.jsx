import React from 'react'
import { useNavigate } from 'react-router-dom';

const ClientTable = ({ client }) => {
    const { nombre, empresa, email, telefono, id } = client;
    const navigate = useNavigate();
    return (
        <tr className='border-b'>
            <td className='p-6 space-y-2'>
                <p className="text-2xl text-gray-800">{nombre}</p>
                <p>{empresa}</p>
            </td>
            <td className='p-6'>
                <p className="text-gray-600"><span className="text-gray-800 font-bold">Email: </span>{email}</p>
                <p className="text-gray-600"><span className="text-gray-800 font-bold">Tel: </span>{telefono}</p>
            </td>
            <td className='p-6 flex gap-3'>
                <button
                    className="text-blue-600 hover:text-blue-800 font-blod text-xs"
                    onClick={() => navigate(`client/${id}/edit`)}
                >
                    Editar
                </button>
                <button className="text-red-600 hover:text-red-800 font-blod text-xs">
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default ClientTable