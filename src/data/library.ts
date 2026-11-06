export type SourceChapter = { number: number; title: string; url: string };
export type SourceVolume = {
  id: string;
  numeral: string;
  title: string;
  subtitle: string;
  publication: string;
  editorialNote: string;
  contentsUrl: string;
  chapters: SourceChapter[];
};

const chapter = (base: string, number: number, title: string): SourceChapter => ({
  number,
  title,
  url: `${base}/ch${String(number).padStart(2, "0")}.htm`,
});

const v1Titles = [
  "Commodities", "Exchange", "Money, or the circulation of commodities", "The general formula for capital", "Contradictions in the general formula of capital", "The buying and selling of labour-power", "The labour-process and the process of producing surplus-value", "Constant capital and variable capital", "The rate of surplus-value", "The working day", "Rate and mass of surplus-value", "The concept of relative surplus-value", "Co-operation", "Division of labour and manufacture", "Machinery and modern industry", "Absolute and relative surplus-value", "Changes of magnitude in the price of labour-power and in surplus-value", "Various formulae for the rate of surplus-value", "The transformation of the value of labour-power into wages", "Time-wages", "Piece-wages", "National differences of wages", "Simple reproduction", "Conversion of surplus-value into capital", "The general law of capitalist accumulation", "The secret of primitive accumulation", "Expropriation of the agricultural population from the land", "Bloody legislation against the expropriated", "Genesis of the capitalist farmer", "Reaction of the agricultural revolution on industry", "Genesis of the industrial capitalist", "Historical tendency of capitalist accumulation", "The modern theory of colonisation"
];

const v2Titles = [
  "The circuit of money-capital", "The circuit of productive capital", "The circuit of commodity-capital", "The three formulas of the circuit", "The time of circulation", "The costs of circulation", "The turnover time and number of turnovers", "Fixed capital and circulating capital", "The aggregate turnover of the capital advanced", "Theories of fixed and circulating capital: the Physiocrats and Adam Smith", "Theories of fixed and circulating capital: Ricardo", "The working period", "The time of production", "The time of circulation", "Effect of turnover time on magnitude of advanced capital", "The turnover of variable capital", "The circulation of surplus-value", "Introduction to aggregate social capital", "Former presentations of the subject", "Simple reproduction", "Accumulation and reproduction on an expanded scale"
];

const v3Titles = [
  "Cost-price and profit", "The rate of profit", "The relation of the rate of profit to the rate of surplus-value", "The effect of turnover on the rate of profit", "Economy in the employment of constant capital", "The effect of price fluctuations", "Supplementary remarks", "Different compositions of capitals and resulting differences in rates of profit", "Formation of a general rate of profit and transformation of values into prices of production", "Equalisation of the general rate of profit through competition", "Effects of general wage fluctuations on prices of production", "Supplementary remarks", "The law as such", "Counteracting influences", "Exposition of the internal contradictions of the law", "Commercial capital", "Commercial profit", "The turnover of merchant’s capital", "Money-dealing capital", "Historical facts about merchant’s capital", "Interest-bearing capital", "Division of profit: rate of interest", "Interest and profit of enterprise", "Externalisation of relations of capital in interest-bearing capital", "Credit and fictitious capital", "Accumulation of money-capital and its influence on the interest rate", "The role of credit in capitalist production", "Medium of circulation and capital", "Component parts of bank capital", "Money-capital and real capital I", "Money-capital and real capital II", "Money-capital and real capital III", "The medium of circulation in the credit system", "The currency principle and English bank legislation", "Precious metal and rate of exchange", "Pre-capitalist relationships", "Introduction to ground-rent", "Differential rent: general remarks", "First form of differential rent", "Second form of differential rent", "Differential rent II: constant price of production", "Differential rent II: falling price of production", "Differential rent II: rising price of production", "Differential rent also on the worst cultivated soil", "Absolute ground-rent", "Building site rent, rent in mining, price of land", "Genesis of capitalist ground-rent", "Transformation of surplus-profit into ground-rent", "The Trinity Formula", "Reproduction and circulation", "Distribution relations and production relations", "Classes"
];

export const sourceVolumes: SourceVolume[] = [
  {
    id: "volume-1", numeral: "I", title: "The Process of Production of Capital",
    subtitle: "Commodities, surplus value, wages, and accumulation",
    publication: "First published in German, 1867 · English edition, 1887",
    editorialNote: "Published during Marx’s lifetime. The linked English text is the Moore–Aveling translation edited by Engels, with later transcription and proofing notes supplied by the archive.",
    contentsUrl: "https://www.marxists.org/archive/marx/works/1867-c1/",
    chapters: v1Titles.map((title, index) => chapter("https://www.marxists.org/archive/marx/works/1867-c1", index + 1, title)),
  },
  {
    id: "volume-2", numeral: "II", title: "The Process of Circulation of Capital",
    subtitle: "Circuits, turnover, and social reproduction",
    publication: "Edited by Friedrich Engels · first published 1885",
    editorialNote: "Constructed from Marx’s manuscripts and edited by Engels. Read the formulas as a development of Volume I, not as a detachable equilibrium model.",
    contentsUrl: "https://www.marxists.org/archive/marx/works/1885-c2/",
    chapters: v2Titles.map((title, index) => chapter("https://www.marxists.org/archive/marx/works/1885-c2", index + 1, title)),
  },
  {
    id: "volume-3", numeral: "III", title: "The Process of Capitalist Production as a Whole",
    subtitle: "Profit, competition, credit, rent, and revenues",
    publication: "Edited by Friedrich Engels · first published 1894",
    editorialNote: "Edited by Engels from manuscripts written across two decades and published after Marx’s death. Editorial construction and unfinished sections matter when interpreting the text.",
    contentsUrl: "https://www.marxists.org/archive/marx/works/1894-c3/",
    chapters: v3Titles.map((title, index) => chapter("https://www.marxists.org/archive/marx/works/1894-c3", index + 1, title)),
  },
];

export const companionTexts = [
  { title: "Manifesto of the Communist Party", year: "1848", description: "Class struggle, historical development, and political organization in Marx and Engels’s most concise programmatic text.", url: "https://www.marxists.org/archive/marx/works/1848/communist-manifesto/" },
  { title: "Preface to A Contribution to the Critique of Political Economy", year: "1859", description: "The classic compact statement of historical materialism and Marx’s own account of his research path.", url: "https://www.marxists.org/archive/marx/works/1859/critique-pol-economy/preface.htm" },
  { title: "Critique of the Gotha Programme", year: "1875", description: "Distribution, transition, equal right, and political emancipation beyond a narrow economic reading.", url: "https://www.marxists.org/archive/marx/works/1875/gotha/" },
  { title: "Theses on Feuerbach", year: "1845", description: "Eleven compact theses on practice, sensuous activity, and changing circumstances.", url: "https://www.marxists.org/archive/marx/works/1845/theses/theses.htm" },
];
