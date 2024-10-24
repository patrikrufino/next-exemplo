import { notFound } from 'next/navigation';

interface Post {
  title: string;
  body: string;
}

const PostDetail = async ({ params }: { params: { id: string } }) => {
  try {
    const filter = await params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${filter.id}`);

    if (!res.ok) {
      notFound();
    }

    const post: Post = await res.json();

    return (
      <div className="container m-auto p-4 max-w-screen-md">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  } catch (error) {
    console.error(error); // Handle any errors gracefully
  }
};

export default PostDetail;