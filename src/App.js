
import Home from './Home';
import Blog from './Blog';
import Detail from './Detail';
import { useState, useEffect } from 'react';
import modelPosts from './ModelPost';



function Header() {
  return (
    <div>
          <a href="/"><i className="fa-solid fa-house" href="/"> home</i></a>
    </div>
  );
}


function App() {  
  //state of page is displayed
  const [state, setState] = useState('home');

  //state get the post is chosen
  const [post, setPost] = useState({});

  //state of posts
  const [posts, setPosts] = useState(() => {
    const storagePosts = JSON.parse(localStorage.getItem('posts'));
    return storagePosts ?? modelPosts;
  });

  // useEffect(() => {
  //   console.log(1);
  //   //clear func
  //   return () => {
  //     localStorage.removeItem('posts');
  //   }
  // }, [])
  // const setJsonPosts = item => {
  //   setPosts(pre => {
  //     const newPosts = [...pre];
  //     newPosts[item.id-1] = item;
  //     localStorage.setItem('posts', JSON.stringify(newPosts));
  //     return newPosts;
  //   });
  // }

  //handle click on the name of post in Home
  const handleClickOnPostHome = (item) => {
    setState('detail');
    setPost(item);
  };

  //handle click on button Edit in Home
  const handleClickEditHome = (item) => {
    setState('edit');
    setPost(item);
  };

  //handle click on button Add Post in Home
  const handleClickOnAddHome = () => {
    setState('add');
  }

  //handle click on button Delete in Home
  const handleClickOnDeleteHome = (item) => {
    if (window.confirm("Do you want to delete this post?")) {
    setPosts(pre => {
      const newPosts = [...pre];
      newPosts.splice(item.id-1, 1);
      localStorage.setItem('posts', JSON.stringify(newPosts));
      return newPosts;
    });
    }
  }

  //handle click on button Edit in Blog
  const handleClickOnEditPost = (item) => {
    setPosts(pre => {
      const newPosts = [...pre];
      newPosts[item.id-1] = item;
      localStorage.setItem('posts', JSON.stringify(newPosts));
      return newPosts;
    });
    setState('home');
  }

  //handle click on button Add in Blog
  const handleClickOnAddPost = (item) => {
    item.id = posts.length + 1;
    setPosts(pre => {
      const newPosts = [...pre, item];
      localStorage.setItem('posts', JSON.stringify(newPosts));
      return newPosts;
    })
    setState('home');
  }

  
  return (
    <div className="container p-5 my-5 border">
    <Header />
    {(state === 'home') && <Home 
                onClickOnPostHome={handleClickOnPostHome}
                onClickEditHome={handleClickEditHome}
                onClickOnAddHome={handleClickOnAddHome}
                onClickDeleteHome={handleClickOnDeleteHome}
                posts={posts}
    />}
    {(state === 'detail') && <Detail 
                                post={post}
                              />}
    {(state === 'edit') && <Blog 
                          post={post}
                          status={state}
                          onClickOnEdit={handleClickOnEditPost}

    />}
    {(state === 'add') && <Blog 
                          post={{}}
                          status={state}
                          onClickOnEdit={handleClickOnAddPost}

    />}
    </div>
  );
}

export default App;

