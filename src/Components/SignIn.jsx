import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/fb.svg"
import { Button, Label, TextInput } from "flowbite-react";


const SignIn = ({ loginForm, setLoginForm }) => {


    const navigate = useNavigate();

    const { email, password } = loginForm;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value
        });
    };

    const fakeLogin = () => {
        setTimeout(() => {
            navigate("/newsfeed");
            setLoginForm({
                ...loginForm,
                loggedIn: true
            })
        }, 1000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fakeLogin();
    }

    return (
        <div className="flex pl-40 pr-40 justify-between ">
            <div className="flex max-w-m mt-40 flex-col gap-2">
                <img className="w-80 h-60" src={logo} alt="Facebook" />
                <p className="text-2xl font-semibold">Facebook helps you connect and share with the people in your life.</p>
            </div>
            <form className="flex max-w-m mt-40 flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Your email" />
                    </div>
                    <TextInput className="w-80 h-10" id="email" name="email" type="email" placeholder="name@test.com" value={email} onChange={handleChange} required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Your password" />
                    </div>
                    <TextInput id="password" name="password" type="password" value={password} onChange={handleChange} required />
                </div>
                <Button type="submit" onClick={handleSubmit} className="bg-blue-800">Sign in</Button>
            </form>

        </div>
    )
}

export default SignIn