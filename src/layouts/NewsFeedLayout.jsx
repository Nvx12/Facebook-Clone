import NewsFeed from "../pages/NewsFeed";
import Navbar from "../Components/Navbar"
import LeftSidebar from "../Components/LeftSidebar";
import RightSidebar from "../Components/RightSidebar";


const NewsFeedLayout = () => {
    return (
        <>
            <div className="w-full h-full flex flex-col">
                <Navbar />
                <div className="flex">
                    <LeftSidebar />
                    <div className="w-[42.5rem] m-auto">
                        <NewsFeed />
                    </div>
                    <RightSidebar />
                </div>
            </div>
        </>
    )
}

export default NewsFeedLayout;

