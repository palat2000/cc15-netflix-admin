export default function Loading() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="border-4 border-l-red-400 border-r-red-400 border-b-red-400 border-t-primary w-12 h-12 rounded-full animate-spin"></div>
    </div>
  );
}
