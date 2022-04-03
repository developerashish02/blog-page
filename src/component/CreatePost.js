
import { db } from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';

function CreatePost() {
    // use hooks 
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [content, setContent] = useState('');

    // handle submit 
    function handleSubmit(event) {
        // imput fields not shoud be empty 
        if (title === '' || content === '') {
            alert("field shoud not be empty");
            return;
        }
        // prevent default behaviour from automatically refresh 
        event.preventDefault();
        // get the data and store in firebase 
        const addCollectionRef = collection(db, 'posts')
        addDoc(addCollectionRef, {
            title,
            content,
            subTitle,
            createdAt: new Date()
        })
        alert("Submited Post");

        // clean input  fieldset when form is submited 
        setTitle(() => "");
        setSubTitle(() => "");
        setContent(() => "");
    }
    return (
        <div className="create-post">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit} >
                {/* take title input */}
                <div className="form-field">
                    <label >Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                {/* take SubTitle input */}
                <div className="form-field">
                    <label >Sub Title</label>
                    <input
                        value={subTitle}
                        onChange={(e) => setSubTitle(e.target.value)}
                    />
                </div>
                {/* take content input */}
                <div className="form-field">
                    <label >Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                {/* create post button  */}
                <button className="create-post-btn" > Create Post</button>
            </form>
        </div>
    )
}

export default CreatePost; 