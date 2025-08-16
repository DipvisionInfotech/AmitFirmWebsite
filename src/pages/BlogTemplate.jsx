import { useParams } from "react-router-dom";
import { blogsData } from "../data/blogsData";

export default function BlogTemplate() {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return <h1 className="text-center text-2xl mt-20">Blog not found 😢</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-72 object-cover rounded-xl mb-6"
      />
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
