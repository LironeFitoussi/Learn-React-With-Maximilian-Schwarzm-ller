const BlogPostPage = ({ params: { slug } }) => {
    
    return (
        <div>
            <h1>Blog Post {slug}</h1>
            <p>This is the content of the blog post.</p>
        </div>
    );
};

export default BlogPostPage;