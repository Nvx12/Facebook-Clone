import { Route, Routes } from "react-router-dom";
import { DASHBOARD, MAIN } from "./routes";
import Authentication from "../pages/Authentication";
import NewsFeedLayout from "../layouts/NewsFeedLayout";




const Router = ({ loginForm, setLoginForm }) => {
    const { loggedIn } = loginForm;
    return (
        <Routes>
            <Route path={MAIN} element={<Authentication loginForm={loginForm} setLoginForm={setLoginForm} />} />
            {loggedIn && <Route path={DASHBOARD} element={<NewsFeedLayout />} />}
        </Routes>
    )
}


export default Router;

