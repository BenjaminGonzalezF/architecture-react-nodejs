import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1>
                Header que sale en todas las páginas porque estoy envolviendo todo en el App.jsx
            </h1>
            <div className="flex gap-4">
                <Link to="/home" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Ir al home
                </Link>
                <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Ir al inicio
                </Link>
            </div>
        </header>
    );
}