import CreatePost from "../Components/CreatePost";
import PostContainer from "../Components/PostContainer";
import Story from "../Components/Story";
import { storiesData } from "../data";


const NewsFeed = () => {
    return (
        <div className="mt-6 w-full h-full pb-5">
            <div className="w-full h-50 flex items-center justify-center space-x-2 overflow-hidden cursor-pointer my-6">
                <div
                    className="w-28 h-48 relative rounded-xl shadow mt-10"
                    style={{
                        backgroundImage: `url('https://random.imagecdn.app/500/400')`,
                    }}
                >
                    <div
                        className="w-full absolute flex justify-center"
                        style={{ bottom: '13%' }}
                    >
                        <button className="focus:outline-none z-40 w-10 h-10 bg-primary rounded-full border-4 border-white">
                            <i className="text-white fas fa-plus"></i>
                        </button>
                    </div>
                    <div className="bg-white z-30 absolute text-center bottom-0 p-2 pt-4 w-full h-auto rounded-b-lg ">
                        <p className="text-gray-700 text-sm font-semibold">Create Story</p>
                    </div>
                </div>
                {storiesData.length
                    ? storiesData.map((story, idx) => <Story key={idx} story={story} />)
                    : null}
            </div>
            <CreatePost />
            <PostContainer />
        </div>
    )
}

export default NewsFeed;

