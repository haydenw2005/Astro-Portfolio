import { motion } from "framer-motion";

interface FeatureProjectProps {
  className?: string;
  imageUrl?: string;
  title?: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
  cropImage?: boolean;
}

export default function FeatureProject({
  className = "",
  imageUrl,
  title = "Featured Project",
  description = "Short project description here.",
  linkText = "Learn More",
  linkUrl = "#",
  cropImage,
}: FeatureProjectProps) {
  return (
    <motion.div
      className={`relative flex flex-col h-full bg-gradient-to-br from-black via-indigo-950 to-gray-950 rounded-lg overflow-hidden shadow-lg  ${className}`}
      whileHover={{ scale: 1.03 }}
    >
      <a href={linkUrl} target="_blank">
        <div className="absolute inset-0 overflow-hidden">
          <div className="stars"></div>
        </div>
        <div className="h-[50%] p-3 flex justify-center">
          <img
            src={imageUrl}
            alt={title}
            className={`${cropImage ? "w-1/2" : "w-full"} h-full object-cover rounded-lg `}
          />
        </div>
        <div className="flex flex-col justify-between px-4 h-[50%]">
          <div>
            <h2 className="text-lg font-bold text-white mb-2">{title}</h2>
            <p className="text-purple-100 text-sm mb-1">{description}</p>
          </div>
          {/* <a
          href={linkUrl}
          className="inline-flex items-center text-white text-sm font-semibold hover:underline mt-2"
        >
          {linkText} */}
          {/* <ArrowUpRight size={16} className="ml-1" /> */}
        </div>
      </a>
    </motion.div>
  );
}
