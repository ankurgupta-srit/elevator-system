const FloorButtons = ({ handleCall }: { handleCall: (floor: number, direction: string) => void }) => (
  <div className="flex flex-wrap gap-2">
    {Array.from({ length: FLOORS }, (_, i) => (
      <div key={i + 1} className="flex flex-col items-center">
        <div className="text-sm mb-1">Floor {i + 1}</div>
        <div className="flex gap-1">
          <button className="px-2 py-1 bg-blue-600 text-white rounded" onClick={() => handleCall(i + 1, 'up')}>⬆️</button>
          <button className="px-2 py-1 bg-red-600 text-white rounded" onClick={() => handleCall(i + 1, 'down')}>⬇️</button>
        </div>
      </div>
    ))}
  </div>
);
