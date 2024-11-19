import React from "react";
import PostsComponent from "./components/PostsComponent";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a QueryClient instance
const queryClient = new QueryClient();

const App = () => {
    return (
        // Provide the QueryClient to the application
        <QueryClientProvider client={queryClient}>
            <div>
                <h1>React Query Demo</h1>
                <PostsComponent />
            </div>
        </QueryClientProvider>
    );
};

export default App;
