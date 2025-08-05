const EventLog = ({ logs }: { logs: string[] }) => (
  <div className="h-[700px] overflow-y-auto bg-gray-100 p-2 text-sm border">
    {logs.map((log, idx) => (
      <div key={idx} className="mb-1">{log}</div>
    ))}
  </div>
);
