import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import me from "../images/Dogs/3B3EEF13-C393-40A1-8FA4-F2A10FA0CBA5_1_105_c.jpeg?url";

interface FeatureProjectProps {
  className?: string; // Changed from classNames to className
  imageUrl?: string;
  title?: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
}

export default function FeatureProject({
  className = "", // Changed from classNames to className
  imageUrl = me,
  title = "Featured Project",
  description = "Short project description here.",
  linkText = "Learn More",
  linkUrl = "#",
}: FeatureProjectProps) {
  return (
    <motion.div
      className={`relative flex flex-col h-full bg-gradient-to-br from-black via-indigo-950 to-purple-950 rounded-lg overflow-hidden shadow-lg border ${className}`}
      whileHover={{ scale: 1.03 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
      </div>
      <div className="h-[60%]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between p-4 h-[40%]">
        <div>
          <h2 className="text-lg font-bold text-white mb-2">{title}</h2>
          <p className="text-purple-100 text-sm mb-1">{description}</p>
        </div>
        <a
          href={linkUrl}
          className="inline-flex items-center text-white text-sm font-semibold hover:underline mt-2"
        >
          {linkText}
          <ArrowUpRight size={16} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
}
