export default function GridLayout({ children }) {
  return (
    <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {children}
    </div>
  );
}
