interface LoadingProps {
  isLoading?: boolean;
  className?: string;
  altText?: string;
}

const Loader: React.FC<LoadingProps> = ({
  isLoading = false,
  className = "animate-pulse",
  altText = "Loading...",
}) => {
  if (!isLoading) return null;

  return (
    <img
      src="/favicon.ico"
      alt={altText}
      className={className}
    />
  );
};

export default Loader;

