import { ThumbsDown, ThumbsUp } from "lucide-react";

const PostCard = ({ post }) => {
    return (
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{post.title}</h2>
        <p className="text-gray-600 leading-relaxed mb-6">{post.body}</p>
  
        <div className="mb-4">
          <span className="text-sm font-semibold text-gray-700 mr-2">Tags:</span>
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
  
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <div className="flex gap-4">

            <span className="flex items-center gap-2">
              <ThumbsUp size={18} className="text-blue-600"/> {post.reactions.likes}
            </span>
  
            <span className="flex items-center gap-2">
              <ThumbsDown size={18} className="text-gray-600" /> {post.reactions.dislikes} 
            </span>
          </div>
  
          <span className="text-gray-400">{post.views} views</span>
        </div>
      </div>
    );
  };

  export default PostCard;