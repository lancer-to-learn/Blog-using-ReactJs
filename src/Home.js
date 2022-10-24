import './style.css';


function Home({ onClickOnPostHome, onClickEditHome, onClickOnAddHome, onClickDeleteHome, posts }) {
 
    return (
      <div>
        <div>
            <h3 style={{paddingTop: 20}}>Posts</h3>
        </div>
        {posts.map(item => (
            <div key={item.id} className="post">
                <h2 className="link" onClick={() => onClickOnPostHome(item)}>{item.id}. {item.title}</h2>
                <button className="btn edit" onClick={() => onClickEditHome(item)}>Edit</button>
                <button className="btn delete" onClick={() => onClickDeleteHome(item)}>Delete</button>
            </div>
        ))}
        <div className="blog">
        <button className="btn add" onClick={() => onClickOnAddHome()}>Add New Post</button>
    </div>
    </div>
    );
}

export default Home;