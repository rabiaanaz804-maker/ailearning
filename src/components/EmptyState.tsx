export default function EmptyState({ message }: { message: string }) {
  return (
    <div className="card text-center">
      <h3 className="text-xl font-bold text-white mb-2">No Data Found</h3>
      <p className="text-gray-300">{message}</p>
    </div>
  );
}
