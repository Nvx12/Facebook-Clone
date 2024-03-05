import Post from "./Post";
import { postData } from '../data'



const PostContainer = (props) => {
    const { postsView } = props;

    return (
        <>
            <div className="mt-4 w-full h-full">
                <div
                    className="grid gap-2"
                >
                    {postData.length ? (
                        postData.map((post, idx) => <Post key={idx} post={post} />)
                    ) : (
                        <p>No posts yet!</p>
                    )}
                </div>
            </div>
        </>
    )

}

export default PostContainer