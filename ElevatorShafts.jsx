const ElevatorShafts = ({ elevators }: { elevators: any[] }) => (
  <div className="grid grid-cols-5 gap-4">
    <div className="flex flex-col-reverse justify-start h-[600px]">
      {Array.from({ length: FLOORS }, (_, i) => (
        <div key={i + 1} className="h-[60px] border-b text-center text-sm flex items-center justify-center">
          Floor {i + 1}
        </div>
      ))}
    </div>
    {elevators.map((elevator) => (
      <div key={elevator.id} className="relative h-[600px] border bg-gray-100">
        <div
          className="absolute w-full h-[60px] bg-blue-500 text-white flex flex-col items-center justify-center rounded shadow-md transition-all duration-1000"
          style={{ bottom: `${(elevator.currentFloor - 1) * FLOOR_HEIGHT}px` }}
        >
          <div>E{elevator.id + 1}</div>
          <div className="text-xs">
            {elevator.status === 'idle' ? '🟢 Idle' : elevator.direction === 'up' ? '⬆️ Moving Up' : '⬇️ Moving Down'}
          </div>
        </div>
      </div>
    ))}
  </div>
);
