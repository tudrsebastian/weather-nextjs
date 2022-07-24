import { SetStateAction, useCallback, useState } from "react";
import { useAuth } from "../AuthProvider/AuthContext";
import { useRouter } from "next/router";
const Input = () => {
    const [loginData, setLoginData] = useState('johndoe@gmail.com')
    const { login } = useAuth();
    const router = useRouter();

    const onSubmit = useCallback((data: string) => {
        login(data);
    }, [login])

    const handleChange = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
        e.preventDefault();
        setLoginData(e.target.value)

    };
    const handleSubmit = useCallback(() => {

        onSubmit(loginData);
        router.push('/')
    }, [onSubmit, loginData, router])
    return (
        <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-2">
                <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                    onChange={handleChange}
                    type="email"
                    name='email'
                    id='email'
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>

            <div className="mt-6">
                <button type='submit' className="w-full px-4 py-2 tracking-wide zztext-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Login
                </button>
            </div>
        </form>
    )

}

export default Input;