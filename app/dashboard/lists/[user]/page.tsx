export default function users({ params }: any) {
  return (
    <div>
      <h3 className="p-3 bg-slate-300 w-full ">User Details</h3>
      <h2>This is the details of Mr:{params.user}</h2>
    </div>
  );
}
