import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { ArrowRight, Check, Pause, Play, RotateCcw, Scale, TriangleAlert } from "lucide-react";

type LabId = "surplus" | "circuit" | "reproduction" | "profit";
const labs: { id: LabId; label: string; formula: string }[] = [
  { id: "surplus", label: "Surplus value", formula: "s / v" },
  { id: "circuit", label: "Capital circuit", formula: "M—C … P" },
  { id: "reproduction", label: "Social reproduction", formula: "I(v+s) = IIc" },
  { id: "profit", label: "Profit & turnover", formula: "s / (c+v)" },
];

function SliderField({ id, label, value, min, max, step = 1, unit = "", onChange }: { id: string; label: string; value: number; min: number; max: number; step?: number; unit?: string; onChange: (value: number) => void }) {
  return <label className="slider-field" htmlFor={id}><span>{label}<output htmlFor={id}>{value.toLocaleString()}{unit}</output></span><input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} /><small><i>{min}{unit}</i><i>{max}{unit}</i></small></label>;
}

function SurplusLab() {
  const [c, setC] = useState(200);
  const [v, setV] = useState(100);
  const [hours, setHours] = useState(8);
  const [necessary, setNecessary] = useState(4);
  const safeNecessary = Math.min(necessary, hours - 1);
  const s = Math.round(v * ((hours - safeNecessary) / safeNecessary));
  const product = c + v + s;
  const rate = (s / v) * 100;
  const profitRate = (s / (c + v)) * 100;
  const reset = () => { setC(200); setV(100); setHours(8); setNecessary(4); };
  return (
    <div className="lab-workspace">
      <div className="lab-controls"><p className="eyebrow">Workshop inputs</p><h2>Divide the working day.</h2><p>Hold the value of labour-power constant, then change necessary and surplus labour. This simplified model assumes transferred constant capital equals c.</p><SliderField id="constant-capital" label="Constant capital · c" value={c} min={0} max={1000} step={50} onChange={setC} /><SliderField id="variable-capital" label="Variable capital · v" value={v} min={50} max={500} step={25} onChange={setV} /><SliderField id="working-hours" label="Working day" value={hours} min={4} max={12} unit=" h" onChange={(value) => { setHours(value); if (necessary >= value) setNecessary(value - 1); }} /><SliderField id="necessary-hours" label="Necessary labour" value={safeNecessary} min={1} max={hours - 1} unit=" h" onChange={setNecessary} /><button type="button" className="text-button focus-ring" onClick={reset}><RotateCcw size={16} />Reset example</button></div>
      <div className="lab-visual" aria-live="polite">
        <div className="time-diagram"><div className="time-labels"><span>One working day · {hours} hours</span><span>{hours - safeNecessary} h surplus</span></div><div className="time-bar"><span className="necessary" style={{ width: `${(safeNecessary / hours) * 100}%` }}>Necessary · {safeNecessary} h</span><span className="surplus" style={{ width: `${((hours - safeNecessary) / hours) * 100}%` }}>Surplus · {hours - safeNecessary} h</span></div></div>
        <div className="formula-large"><span>c + v + s</span><strong>{c} + {v} + {s} = {product}</strong><small>total product value</small></div>
        <div className="lab-metrics"><div><small>New value · v + s</small><strong>{v + s}</strong></div><div><small>Surplus value · s</small><strong>{s}</strong></div><div><small>Rate of surplus value</small><strong>{rate.toFixed(0)}%</strong></div><div><small>Rate of profit</small><strong>{profitRate.toFixed(1)}%</strong></div></div>
        <p className="model-note"><Scale size={17} />The rate of surplus value uses <b>s/v</b>; the rate of profit uses <b>s/(c+v)</b>. Same surplus value, different denominator.</p>
      </div>
    </div>
  );
}

const stages = [
  { symbol: "M", name: "Money-capital", text: "Money is advanced. Its function is not merely payment: it must return enlarged for the circuit to count as capitalist valorization.", question: "What must be purchased?" },
  { symbol: "C", name: "Commodities", text: "Means of production and labour-power are bought. Their specific combination prepares both useful production and value expansion.", question: "What happens inside production?" },
  { symbol: "… P …", name: "Productive capital", text: "Labour transfers the value of used means of production and creates new value. Surplus labour produces surplus value.", question: "Has surplus value yet been realized?" },
  { symbol: "C′", name: "Commodity-capital", text: "Output now bears c + v + s in commodity form. Inventory can embody value while still failing to find a buyer.", question: "What must sale accomplish?" },
  { symbol: "M′", name: "Money-capital enlarged", text: "Sale realizes value and surplus value in money. The increment can be consumed or accumulated, beginning another circuit.", question: "What conditions allow repetition?" },
];

function CircuitLab() {
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setStage((value) => (value + 1) % stages.length), 1500);
    return () => window.clearInterval(timer);
  }, [playing]);
  return (
    <div className="circuit-lab-full">
      <div className="circuit-lab-head"><div><p className="eyebrow">One capital, changing forms</p><h2>Advance the circuit.</h2><p>Click any stage or play the sequence. The arrows are necessary transformations, not guaranteed outcomes.</p></div><button type="button" className="secondary-button focus-ring" onClick={() => setPlaying((value) => !value)}>{playing ? <><Pause size={17} />Pause</> : <><Play size={17} />Play circuit</>}</button></div>
      <div className="circuit-track" role="tablist" aria-label="Capital circuit stages">{stages.map((item, index) => <div key={item.symbol}><button role="tab" aria-selected={stage === index} type="button" className={`circuit-node focus-ring ${stage === index ? "active" : ""} ${index < stage ? "visited" : ""}`} onClick={() => { setStage(index); setPlaying(false); }}><span>{item.symbol}</span><small>{item.name}</small></button>{index < stages.length - 1 && <ArrowRight className="track-arrow" size={22} aria-hidden="true" />}</div>)}</div>
      <div className="circuit-stage-detail" role="tabpanel"><span>{stages[stage].symbol}</span><div><p className="eyebrow">Form {stage + 1} · {stages[stage].name}</p><h3>{stages[stage].question}</h3><p>{stages[stage].text}</p></div><button type="button" className="primary-button focus-ring" onClick={() => setStage((stage + 1) % stages.length)}>Next form<ArrowRight size={17} /></button></div>
    </div>
  );
}

function ReproductionLab() {
  const [oneC, setOneC] = useState(4000);
  const [oneV, setOneV] = useState(1000);
  const [oneS, setOneS] = useState(1000);
  const [twoC, setTwoC] = useState(2000);
  const [twoV, setTwoV] = useState(500);
  const [twoS, setTwoS] = useState(500);
  const supply = oneV + oneS;
  const difference = supply - twoC;
  const balanced = difference === 0;
  const reset = () => { setOneC(4000); setOneV(1000); setOneS(1000); setTwoC(2000); setTwoV(500); setTwoS(500); };
  return (
    <div className="reproduction-lab">
      <div className="reproduction-intro"><div><p className="eyebrow">Simple reproduction · two departments</p><h2>Can the social product replace itself?</h2><p>Adjust each department’s c, v, and s. Smooth simple reproduction requires <b>I(v+s) = IIc</b>, alongside the appropriate material goods.</p></div><div className="preset-buttons"><button type="button" className="secondary-button focus-ring" onClick={reset}>Balanced example</button><button type="button" className="text-button focus-ring" onClick={() => setTwoC((value) => value + 500)}>Create a shortfall</button></div></div>
      <div className="departments">
        <section className="department"><div className="department-head"><span>I</span><div><h3>Means of production</h3><p>Total value · {(oneC + oneV + oneS).toLocaleString()}</p></div></div><SliderField id="one-c" label="Department I · c" value={oneC} min={1000} max={6000} step={100} onChange={setOneC} /><SliderField id="one-v" label="Department I · v" value={oneV} min={500} max={3000} step={100} onChange={setOneV} /><SliderField id="one-s" label="Department I · s" value={oneS} min={500} max={3000} step={100} onChange={setOneS} /></section>
        <div className={`exchange-balance ${balanced ? "balanced" : "unbalanced"}`}><span>I(v+s)</span><strong>{supply.toLocaleString()}</strong><i>{balanced ? "=" : difference > 0 ? ">" : "<"}</i><span>IIc</span><strong>{twoC.toLocaleString()}</strong><div role="status">{balanced ? <><Check size={18} />Value condition met</> : <><TriangleAlert size={18} />Gap · {Math.abs(difference).toLocaleString()}</>}</div></div>
        <section className="department"><div className="department-head"><span>II</span><div><h3>Means of consumption</h3><p>Total value · {(twoC + twoV + twoS).toLocaleString()}</p></div></div><SliderField id="two-c" label="Department II · c" value={twoC} min={500} max={5000} step={100} onChange={setTwoC} /><SliderField id="two-v" label="Department II · v" value={twoV} min={500} max={3000} step={100} onChange={setTwoV} /><SliderField id="two-s" label="Department II · s" value={twoS} min={500} max={3000} step={100} onChange={setTwoS} /></section>
      </div>
      <p className="model-note"><Scale size={17} />A balance is a condition, not a forecast. The model does not prove markets automatically coordinate private production or guarantee the right material composition.</p>
    </div>
  );
}

function ProfitLab() {
  const [c, setC] = useState(400);
  const [v, setV] = useState(100);
  const [s, setS] = useState(100);
  const [turnovers, setTurnovers] = useState(2);
  const [averageRate, setAverageRate] = useState(20);
  const profitRate = (s / (c + v)) * 100;
  const surplusRate = (s / v) * 100;
  const annualSurplus = s * turnovers;
  const productionPrice = c + v + ((c + v) * averageRate) / 100;
  return (
    <div className="lab-workspace profit-lab">
      <div className="lab-controls"><p className="eyebrow">Appearance and denominator</p><h2>One surplus, several rates.</h2><p>Compare surplus value with variable capital and with total capital advanced. Then repeat the cycle to examine annual mass.</p><SliderField id="profit-c" label="Constant capital · c" value={c} min={0} max={1000} step={50} onChange={setC} /><SliderField id="profit-v" label="Variable capital · v" value={v} min={50} max={500} step={25} onChange={setV} /><SliderField id="profit-s" label="Surplus value · s" value={s} min={25} max={500} step={25} onChange={setS} /><SliderField id="turnovers" label="Turnovers per year" value={turnovers} min={1} max={6} onChange={setTurnovers} /><SliderField id="average-rate" label="Average profit rate" value={averageRate} min={0} max={50} unit="%" onChange={setAverageRate} /></div>
      <div className="lab-visual"><div className="rate-comparison"><div><span>Rate of surplus value</span><strong>{surplusRate.toFixed(0)}%</strong><div><i style={{ width: `${Math.min(surplusRate, 100)}%` }} /></div><small>s / v = {s} / {v}</small></div><div><span>Rate of profit</span><strong>{profitRate.toFixed(1)}%</strong><div><i style={{ width: `${Math.min(profitRate, 100)}%` }} /></div><small>s / (c + v) = {s} / {c + v}</small></div></div><div className="lab-metrics"><div><small>Surplus per cycle</small><strong>{s}</strong></div><div><small>Annual surplus mass</small><strong>{annualSurplus}</strong></div><div><small>Annual rate of surplus value</small><strong>{surplusRate * turnovers}%</strong></div><div><small>Illustrative production price</small><strong>{productionPrice.toFixed(0)}</strong></div></div><div className="formula-large"><span>k + p̄</span><strong>{c + v} + {(((c + v) * averageRate) / 100).toFixed(0)} = {productionPrice.toFixed(0)}</strong><small>cost price + average profit</small></div><p className="model-note"><Scale size={17} />The production-price example assumes c and v are both consumed in one cycle and uses the selected average rate. It is an illustration, not a solution to the transformation debate.</p></div>
    </div>
  );
}

export default function Labs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get("tab") as LabId | null;
  const active: LabId = labs.some((lab) => lab.id === requested) ? requested! : "surplus";
  return (
    <div className="page-container labs-page">
      <header className="page-intro split-intro"><div><p className="eyebrow">Economic labs</p><h1>Put the categories<br /><em>in motion.</em></h1></div><div className="intro-aside"><p>These are deliberately simplified teaching models. Change one relation at a time, inspect the result, and read the assumption note before applying a category to reality.</p><span className="lab-warning"><TriangleAlert size={17} />Models clarify mechanisms; they do not replace evidence.</span></div></header>
      <div className="lab-tabs" role="tablist" aria-label="Choose an economic model">{labs.map((lab, index) => <button type="button" role="tab" aria-selected={active === lab.id} key={lab.id} className={`lab-tab focus-ring ${active === lab.id ? "active" : ""}`} onClick={() => setSearchParams({ tab: lab.id })}><span>0{index + 1}</span><strong>{lab.label}</strong><small>{lab.formula}</small></button>)}</div>
      <div className="lab-panel" role="tabpanel">{active === "surplus" && <SurplusLab />}{active === "circuit" && <CircuitLab />}{active === "reproduction" && <ReproductionLab />}{active === "profit" && <ProfitLab />}</div>
    </div>
  );
}
