  // src/app/page.tsx
  import Link from 'next/link';

  interface Post {
    id: number;
    title: string;
  }

  const Home = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="max-w-xs w-full h-auto border border-indigo-900 p-4 cursor-pointer rounded hover:text-indigo-400 hover:bg-gray-900 hover:transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-lg hover:shadow-indigo-500/50"
            >
              <Link href={`/posts/${post.id}`} className="text-lg font-semibold">
                {post.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Home;
