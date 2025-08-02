import React from "react";

interface PostcardProps {
  src: string;
  caption: string;
  rotation?: number;
  isPinned?: boolean;
}

const Postcard: React.FC<PostcardProps> = ({
  src,
  caption,
  rotation = 0,
  isPinned = true,
}) => {
  return (
    <div
      className="relative inline-block group cursor-pointer transition-all duration-300 hover:scale-105"
      style={{
        transform: `rotate(${rotation}deg)`,
        zIndex: 10,
      }}
    >
      {/* Pin */}
      {isPinned && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full shadow-lg relative">
            <div className="absolute inset-1 bg-pink-300 rounded-full"></div>
            <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full opacity-70"></div>
          </div>
        </div>
      )}

      {/* Postcard */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden border-4 border-white relative">
        {/* Image */}
        <div className="w-72 h-84 bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
          {src.includes(".svg") ? (
            <div className="text-6xl opacity-50">🎨</div>
          ) : src.includes("placeholder") ? (
            <div className="text-gray-400 text-center p-4">
              <div className="text-4xl mb-2">📷</div>
              <div className="text-sm">Photo placeholder</div>
            </div>
          ) : (
            <img
              src={src}
              alt={caption}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-200/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-200/30 to-transparent"></div>
        </div>

        {/* Caption */}
        <div className="p-4 bg-gradient-to-r from-pink-50 to-blue-50">
          <p className="text-center text-gray-700 font-medium">{caption}</p>
        </div>

        {/* Postcard texture overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(0,0,0,0.03) 10px,
              rgba(0,0,0,0.03) 20px
            )`,
          }}
        ></div>
      </div>

      {/* Shadow */}
      <div
        className="absolute inset-0 bg-black opacity-20 rounded-lg transform translate-y-2 -z-10 blur-sm"
        style={{
          transform: `rotate(${rotation}deg) translateY(8px)`,
        }}
      ></div>
    </div>
  );
};

export default Postcard;
