export default function ReviewCard({ review }) {
  return (
    <div className="bg-white border border-gray-100 p-8 h-full flex flex-col">
      {/* Elegant quote mark */}
      <div className="text-5xl text-accent-300 font-display leading-none mb-4">"</div>
      
      {/* Testimonial text */}
      <p className="text-gray-600 leading-relaxed flex-grow mb-6 italic">
        {review.text}
      </p>
      
      {/* Author info */}
      <div className="pt-6 border-t border-gray-100">
        <p className="font-medium text-gray-900">{review.name}</p>
        <p className="text-sm text-gray-500 mt-1">
          {review.treatment} • {review.location}
        </p>
      </div>
    </div>
  );
}
