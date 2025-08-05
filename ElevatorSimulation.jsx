
const ElevatorSimulation = () => {
  const { elevators, activeFloors, logs, handleCall } = useElevatorLogic();

  return (
    <div className="p-4 grid grid-cols-6 gap-4">
      <div className="col-span-4">
        <h2 className="text-lg font-semibold">Call Elevator</h2>
        <FloorButtons handleCall={handleCall} />
        <ElevatorShafts elevators={elevators} />
      </div>
      <div className="col-span-2">
        <h2 className="text-lg font-semibold mb-2">Event Log</h2>
        <EventLog logs={logs} />
      </div>
    </div>
  );
};

export default ElevatorSimulation;
