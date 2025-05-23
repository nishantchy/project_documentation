export default function SummaryTable() {
  return (
    <div className="overflow-x-auto my-4">
      <table className="min-w-[350px] border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Push to main</th>
            <th className="px-4 py-2 border">Build Succeeds?</th>
            <th className="px-4 py-2 border">What Users See</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Yes</td>
            <td className="px-4 py-2 border">Yes</td>
            <td className="px-4 py-2 border">New deployment</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Yes</td>
            <td className="px-4 py-2 border">No</td>
            <td className="px-4 py-2 border">Previous deployment</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
