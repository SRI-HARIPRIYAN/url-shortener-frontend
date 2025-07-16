import { motion } from "framer-motion";

const SkeletonItem = () => {
  return (
    <motion.div
      className="w-full h-20 rounded-xl bg-gray-200 dark:bg-gray-400 animate-pulse p-4 flex flex-col gap-2"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
    >
      <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-500 rounded-md" />
      <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-500 rounded-md" />
    </motion.div>
  );
};

export function UrlListSkeleton({ count = 5 }) {
  return (
    <div className="space-y-4 px-2">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </div>
  );
}
