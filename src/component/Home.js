import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { db } from '../firebase-config';
import { collection,  onSnapshot } from 'firebase/firestore';

function Home() {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, 'posts'), (snapshort) => {
            const posts = snapshort.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            setPost(posts);
        })

    }, []);
    return (
        <div className="home">
            <h1>Tech Blogs</h1>
            <div id="blog-by">Ashish</div>
            {posts.map((post, index) => (
                <div className="post" key={'post-${index}'}>
                    <Link to={'post/${post.id}'}>
                        <h3>{post.title}</h3>
                    </Link>

                    <p>{post.subTitle}</p>
                </div>
            ))}
        </div>
    )
}

export default Home; 