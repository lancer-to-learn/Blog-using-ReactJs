import {useState} from 'react'

function Detail({post}) {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(post.comments);
    const storagePosts = JSON.parse(localStorage.getItem('posts'));

    const handleOnClick = (comment) => {
        
        setComments((prev) => {
            const newComments = prev ? [...prev, comment] : [comment];
            storagePosts[post.id-1].comments = newComments;
            localStorage.setItem('posts', JSON.stringify(storagePosts));
            return newComments;
        })
        setComment('');
    }
    
    return(
        <div>
        <h1>{post.title}</h1>
        <div className="container p-5 my-5 bg-dark text-white">
            <p>{post.content}</p>
        </div>
        <div className="container p-5 my-5 bg-primary text-white">
            <h4>Comments</h4>
            <input id="comment" name="comment" type="text" placeholder="Write comment" 
            onChange={e => setComment(e.target.value)} value={comment} required/>
            <button type="button" className="btn edit" onClick={() => handleOnClick(comment)}>Post</button>
        <div>
            { comments && comments.map((comment, index) => (
                <li key={index}>{comment}</li>
            ))}
        </div>
        </div>
    </div>
    );
  }
export default Detail;

