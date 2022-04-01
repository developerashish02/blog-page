import { useState } from "react";

function CreatePost() {

    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [content, setContent] = useState("");

    // handleSubmit 
    function handleSubmit(event) {
        event.preventDefault();
        console.log("submit from");
        console.log(title,"tit");
    }

    return (
        <div className="create-post">
            <h1>Create Post</h1>

       <form action="" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label >Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="form-field">
                    <label >Sub Title</label>
                    <input value={subTitle} onChange={(e) => setSubTitle(e.target.value)} />
                </div>

                <div className="form-field">
                    <label >Content</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <button className="create-post-btn"> Create Post</button>
                </form>
        </div>
    )
}

export default CreatePost; 