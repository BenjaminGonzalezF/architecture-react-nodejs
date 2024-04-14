import { useState, useEffect } from "react";
import { addUser } from "../../services/users.service";
export default function CreateUsers() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [number, setNumber] = useState("");

    const [alertMessage, setAlertMessage] = useState("");

    useEffect(() => {
        handleGenerateNumbers();
    }, []);

    const handleSubmit = async (event) => {  
        event.preventDefault();
        try {
            const result = await addUser(name, password, role);
            console.log(result);
            setAlertMessage(result.message);
        } catch (error) {
            setAlertMessage("Error: " + error);
        }
    };

    const handleGenerateNumbers = () => {
        const number = "+569 " + Math.floor(Math.random() * 100000000);
        setNumber(number);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col m-4 justify-center items-center bg-slate-200 p-5 gap-2">
                    <label>Nombre:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <label>Contraseña:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label>Rol:</label>
                    <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
                    <label>Número de celular</label>
                    <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} readOnly/>
                    <button type="button" onClick={handleGenerateNumbers} className="bg-blue-500 text-white hover:bg-blue-400 rounded-sm p-1">
                        No es su numero? Click aqui
                    </button>
                    <button type="submit" className="bg-green-500 text-white hover:bg-green-400 rounded-sm p-1">
                        Create User
                    </button>
                </div>
            </form>
            {alertMessage && <h3 className="text-green-500">{alertMessage}</h3>}
        </>
    );
}
