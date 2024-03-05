import SignIn from "../Components/SignIn"



const Authentication = ({loginForm, setLoginForm}) => {

    return (
        <>
            <SignIn loginForm={loginForm} setLoginForm={setLoginForm} />
        </>
    )
}

export default Authentication