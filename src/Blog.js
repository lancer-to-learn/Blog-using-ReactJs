import './style.css';
import {useState} from 'react';

function Blog({post, status, onClickOnEdit}) {

  const [newPost, setNewPost] = useState(post);

    return (
    <div>
        <div className="mb-3 mt-3">
          <label className="form-label">Title:</label>
          {/* <input type="text" className="form-control" id="id" hidden name="id" value={post.id}/> */}
          <input type="text" className="form-control" id="title" 
          placeholder="Enter title of post" name="title" defaultValue={newPost.title} 
          onChange={e => setNewPost(() => {
            post.title = e.target.value;
            post.comments = [];
            return post;
          })} required/>
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="comment">Content:</label>
          <textarea className="form-control" rows="5" id="content" name="content" 
          placeholder="Enter content of post" defaultValue={newPost.content} 
          onChange={e => setNewPost(() => {
            post.content = e.target.value;
            return post;
          })} required></textarea>
        </div>
        <div>
        
        {status==='add' && <button type="submit" className="btn add" onClick={() => onClickOnEdit(newPost)}>Post</button> }
        
        {status==='edit' && <button type="submit" className="btn edit" 
        onClick={() => onClickOnEdit(newPost)}>Edit</button>} 
       
        <a className="btn delete" href="/">Cancel</a>
        </div>
    </div>
    );
}

export default Blog;