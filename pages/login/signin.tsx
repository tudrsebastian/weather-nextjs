import type { NextPage } from "next";
import Input from "../../components/Input/Input";

const signin: NextPage = () => {


    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
                    Sign in
                </h1>
                <Input />

            </div>
            )
        </div>

    )
}

export default signin;