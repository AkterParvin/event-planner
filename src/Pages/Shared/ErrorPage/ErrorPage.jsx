import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate(-1);
    }
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <section className="border-2 border-sky-400 rounded-xl shadow-xl shadow-slate-600 p-16 flex justify-center items-center flex-col">
                    <h2 className="text-5xl my-6 font-bold text-indigo-800">Opppsss!!!</h2>
                    <button onClick={handleClick} className="btn btn-primary">Go back</button>
                </section>
            </div>

        </div>
    );
};

export default ErrorPage;