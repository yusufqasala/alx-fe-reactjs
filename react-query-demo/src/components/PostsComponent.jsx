import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};

const PostsComponent = () => {
    const {
        data,
        error,
        isLoading,
        isError,
        refetch,
        isFetching,
    } = useQuery("posts", fetchPosts, {
        staleTime: 5000, // Data is considered fresh for 5 seconds
        cacheTime: 60000, // Cached data is kept for 1 minute after becoming stale
        refetchOnWindowFocus: false, // Disable refetch on window focus
        keepPreviousData: true, // Keep previous data while fetching new data
    });

    if (isLoading) return <p>Loading posts...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={refetch} disabled={isFetching}>
                {isFetching ? "Refreshing..." : "Refetch Posts"}
            </button>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;
