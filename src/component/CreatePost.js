
import { db } from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import { useFormInput } from '../hooks';

function CreatePost() {

    const title = useFormInput('');
    const subTitle = useFormInput('');
    const content = useFormInput('');
    // handleSubmit 
    function handleSubmit(event) {
        if (title.value === '' || content.value === '') {
            alert("field shoud not be empty");
            return;
        }
        event.preventDefault();

        const addCollectionRef = collection(db, 'posts')
        addDoc(addCollectionRef, {
            title: title.value,
            content: content.value,
            subTitle: subTitle.value,
            createdAt: new Date()
        })
    }

    return (
        <div className="create-post">
            <h1>Create Post</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label >Title</label>
                    <input {...title} />
                </div>

                <div className="form-field">
                    <label >Sub Title</label>
                    <input {...subTitle} />
                </div>

                <div className="form-field">
                    <label >Content</label>
                    <textarea {...content} />
                </div>
                <button className="create-post-btn"> Create Post</button>
            </form>
        </div>
    )
}

export default CreatePost; 