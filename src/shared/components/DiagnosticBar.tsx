interface BarProps {
  health: number;
  //number from 0 - 1
}

export default function DiagnosticBar(props: BarProps) {
  const healthPerc = props.health * 100;
  const healthRound = Math.round(healthPerc * 100) / 100;
  const healthPercStr = `${healthRound}%`;
  return (
    <div>
      {healthPercStr}
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-500 rounded-full h-2.5"
          style={{ width: healthPercStr }}
        ></div>
      </div>
    </div>
  );
}
