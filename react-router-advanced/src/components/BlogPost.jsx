import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Extract 'id' from the URL

  return (
    <div>
      <h1>Blog Post</h1>
      <p>You&apos;re viewing the blog post with ID: {id}</p>
    </div>
  );
};

export default BlogPost;
