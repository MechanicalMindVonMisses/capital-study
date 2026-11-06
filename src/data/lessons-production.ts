import type { Lesson } from "./course";

export const productionLessons: Lesson[] = [
  {
    id: "labour-power", number: 9, moduleId: "production", title: "Labour-power for sale", eyebrow: "Volume I · Chapter 6", duration: 18,
    description: "Meet the commodity whose use can create more value than it costs, and examine the historical conditions that make labour-power available for sale.",
    objectives: ["Distinguish labour from labour-power", "Determine the value of labour-power", "Explain the worker’s formal freedom and material compulsion"],
    sections: [
      { heading: "Capacity, not effort itself", paragraphs: ["Labour-power is the capacity to labour—the aggregate of mental and physical capabilities exercised in producing use-values. Labour is the activity; labour-power is what the worker sells for a limited time. The capitalist purchases the capacity, not the worker as a person.", "This distinction resolves the puzzle posed by equal exchange: the capitalist pays for labour-power at its value, then uses that capacity in production."] },
      { heading: "What determines its value?", paragraphs: ["Like other commodities, labour-power’s value is governed by the labour time necessary for its reproduction. In practice this includes the means of subsistence required to maintain the worker and reproduce the working class, shaped by historical and moral elements, training, climate, and social norms.", "Unlike an ordinary machine, the worker’s needs and reproduction are socially negotiated and contested. There is no timeless biological minimum that fixes every wage."] },
      { heading: "Free in a double sense", paragraphs: ["Marx describes the wage worker as free to sell labour-power rather than being enslaved or legally bound to one master, and free of sufficient means of production to produce independently. Formal contractual equality in the market coexists with material pressure to find a buyer.", "The transaction therefore moves from the noisy sphere of exchange into the hidden abode of production, where questions of time, control, and surplus labour become visible."] }
    ],
    example: { title: "A day’s capacity", body: "An employer buys eight hours of labour-power, not a fixed quantity of output. If the worker produces the equivalent of their daily wage in four hours, the remaining working time can produce surplus value." },
    distinction: "The wage appears to pay for ‘work done.’ Marx argues it masks the sale and consumption of labour-power, including the division between necessary and surplus labour.",
    source: { label: "Capital I, Chapter 6: The buying and selling of labour-power", url: "https://www.marxists.org/archive/marx/works/1867-c1/ch06.htm" },
    quiz: [
      { question: "What does the wage worker sell?", options: ["Their entire person permanently", "Labour-power for a definite period", "Only finished commodities", "Ownership of the workplace"], answer: 1, explanation: "Labour-power is the capacity to labour, sold for a limited time." },
      { question: "The value of labour-power is governed by…", options: ["The employer’s generosity", "The labour necessary to reproduce that capacity", "The product’s retail price alone", "A fixed biological constant"], answer: 1, explanation: "Its value includes socially and historically shaped costs of maintenance and reproduction." }
    ]
  },
  {
    id: "surplus-value", number: 10, moduleId: "production", title: "Surplus value", eyebrow: "Volume I · Chapters 7–9", duration: 22,
    description: "Work with c, v, and s to explain exploitation at the level of production, then test the model in an interactive workshop.",
    objectives: ["Distinguish constant and variable capital", "Calculate value added and rate of surplus value", "Contrast necessary and surplus labour time"],
    sections: [
      { heading: "A production account", paragraphs: ["Constant capital (c) is the value of means of production transferred to the product. Variable capital (v) is the value advanced for labour-power. Surplus value (s) is the new value created beyond the equivalent of v. The product’s value can therefore be represented as c + v + s.", "Calling wage capital ‘variable’ does not mean wages fluctuate daily. It means this portion of capital is converted into labour-power whose activity adds new value; constant capital’s value reappears without an increment in the production process."] },
      { heading: "Necessary and surplus labour", paragraphs: ["Necessary labour time is the portion of the working day in which the worker produces the equivalent of their labour-power’s value. Surplus labour time is the remainder, producing surplus value. The rate of surplus value is s/v, also expressible as surplus labour divided by necessary labour.", "For example, if v = 100 and s = 100, the rate is 100%. This is not the same as the profit rate s/(c+v), which compares surplus value with total capital advanced."] },
      { heading: "Exploitation without cheating", paragraphs: ["The exchange of wages can be formally equal while production yields surplus value. Exploitation is therefore not dependent on fraud, an unusually cruel employer, or paying below every legal minimum. It names the capitalist appropriation of unpaid surplus labour under a definite property relation.", "Actual employment also involves bargaining, law, discrimination, unpaid work, and many other mechanisms. The model isolates a central relation rather than describing every injustice."] }
    ],
    example: { title: "Eight hours, divided", body: "Suppose constant capital transfers 200, the daily value of labour-power is 100, and new value created is 200. Then s = 100, product value = 400, and s/v = 100%." },
    distinction: "Surplus value and profit are not identical categories. Volume III develops how surplus value appears as profit and is distributed among capitals.",
    source: { label: "Capital I, Chapter 9: The rate of surplus value", url: "https://www.marxists.org/archive/marx/works/1867-c1/ch09.htm" }, lab: "surplus",
    quiz: [
      { question: "If c = 200, v = 100, and new value added = 180, what is s?", options: ["80", "180", "280", "380"], answer: 0, explanation: "New value is v + s, so s = 180 − 100 = 80." },
      { question: "The rate of surplus value is…", options: ["s/(c+v)", "c/v", "s/v", "profit/revenue"], answer: 2, explanation: "It compares surplus value with variable capital, or surplus labour with necessary labour." }
    ]
  },
  {
    id: "working-day", number: 11, moduleId: "production", title: "The battle over the working day", eyebrow: "Volume I · Chapter 10", duration: 18,
    description: "See absolute surplus value through history: why time becomes a battlefield and why law and collective action enter economic analysis.",
    objectives: ["Define absolute surplus value", "Explain competing claims over labour time", "Connect economic form to law and collective struggle"],
    sections: [
      { heading: "Extending surplus labour", paragraphs: ["Absolute surplus value is produced by lengthening surplus labour time, with necessary labour time unchanged. If the working day extends while the value of labour-power and hourly productivity remain constant, surplus labour increases.", "The working day has physical and social limits, but within them the capitalist’s claim to use purchased labour-power confronts the worker’s claim to preserve health and life. Marx presents a conflict of rights grounded in the exchange relation itself."] },
      { heading: "History inside the equation", paragraphs: ["Chapter 10 draws extensively on factory reports and legislation. It shows that the working day is not fixed by a timeless contract or a technical coefficient. Custom, state power, worker organization, public knowledge, and industrial change shape its actual boundaries.", "The famous factory acts are not incidental background. They demonstrate that capitalist production develops through social contest and regulation, even while competition pressures individual capitals to extend and intensify labour."] },
      { heading: "Time beyond the factory", paragraphs: ["The category remains useful for analyzing overtime, availability demands, fragmented schedules, and unpaid labour connected to employment. Yet contemporary care work and platform work may require additional categories rather than forcing every case into a nineteenth-century factory template.", "Ask who controls time, which time is paid, and how reproductive labour outside paid employment makes the working day possible."] }
    ],
    example: { title: "Two extra hours", body: "If necessary labour is four hours and the day rises from eight to ten hours, surplus labour rises from four to six. In this simplified case, the rate of surplus value moves from 100% to 150%." },
    distinction: "A longer working day does not always raise surplus value in reality. Exhaustion, reduced intensity, wage changes, or lower productivity can complicate the simplified model.",
    source: { label: "Capital I, Chapter 10: The working day", url: "https://www.marxists.org/archive/marx/works/1867-c1/ch10.htm" },
    quiz: [
      { question: "Absolute surplus value initially increases by…", options: ["Shortening the working day", "Extending surplus labour with necessary labour unchanged", "Raising every commodity price", "Eliminating money"], answer: 1, explanation: "The defining movement is an extension of surplus labour time." },
      { question: "Why are factory acts important to Marx’s argument?", options: ["They prove production has no politics", "They show the working day is shaped through law and class struggle", "They abolish wage labour", "They measure machine prices"], answer: 1, explanation: "The historical record reveals economic time as a contested social relation." }
    ]
  },
  {
    id: "machinery-relative-surplus", number: 12, moduleId: "production", title: "Machinery and relative surplus value", eyebrow: "Volume I · Chapters 12–15", duration: 23,
    description: "Analyze cooperation, manufacture, and machinery as ways to raise productivity, shorten necessary labour, and reorganize workplace power.",
    objectives: ["Define relative surplus value", "Connect productivity to the value of labour-power", "Assess technology within class relations"],
    sections: [
      { heading: "Shortening necessary labour", paragraphs: ["Relative surplus value arises when productivity changes reduce necessary labour time while the working day does not lengthen. If productivity rises in industries producing workers’ means of subsistence—or their inputs—the value of labour-power can fall, allowing a greater share of the day to become surplus labour.", "This is a systemic connection, not the claim that every new machine immediately cuts wages in the same workplace. Productivity, prices, wage struggles, and sectoral linkages mediate the result."] },
      { heading: "Collective power under capitalist command", paragraphs: ["Cooperation can create productive powers beyond the sum of isolated workers. Manufacture refines the division of labour; modern industry transforms tools and production through machinery. Under capitalist relations, these collective capacities appear as powers of capital because capital organizes and owns the conditions of production.", "Technology is therefore neither neutral nor inherently oppressive in every context. Its design and effects are shaped by the purposes and relations into which it is introduced."] },
      { heading: "Displacement and countertendencies", paragraphs: ["Marx examines displacement of workers, intensification, new skills, and the expansion of industry. A simplistic ‘machines destroy all jobs forever’ conclusion misses the contradictory dynamics. The critical question is how gains and adjustment costs are distributed, who controls deployment, and how workers can contest it."] }
    ],
    example: { title: "Same day, different division", body: "If necessary labour falls from four to three hours in an eight-hour day, surplus labour rises from four to five. Without adding an hour, the rate of surplus value moves from 100% to about 167%." },
    distinction: "Relative surplus value concerns necessary labour within the day; absolute surplus value concerns extending surplus labour through a longer day. Real processes can combine both.",
    source: { label: "Capital I, Chapter 12: The concept of relative surplus value", url: "https://www.marxists.org/archive/marx/works/1867-c1/ch12.htm" },
    furtherReading: { label: "Capital I, Chapter 15: Machinery and modern industry", url: "https://www.marxists.org/archive/marx/works/1867-c1/ch15.htm" },
    quiz: [
      { question: "Relative surplus value depends principally on…", options: ["Reducing necessary labour through productivity changes", "Making every day longer", "Printing more money", "Avoiding all cooperation"], answer: 0, explanation: "It changes the division of a given working day by reducing necessary labour." },
      { question: "Marx’s analysis treats machinery as…", options: ["Always beneficial in every relation", "Always destroying all employment", "Shaped by and operating within social relations", "Unable to affect skill"], answer: 2, explanation: "Technology’s design and effects are inseparable from ownership, control, and class struggle." }
    ]
  },
  {
    id: "wages", number: 13, moduleId: "accumulation", title: "What wages conceal", eyebrow: "Volume I · Chapters 19–22", duration: 15,
    description: "Investigate the wage form, time wages, piece wages, and why national comparisons require careful historical analysis.",
    objectives: ["Explain the wage as a transformed form", "Distinguish time and piece wages", "Avoid simplistic international wage comparisons"],
    sections: [
      { heading: "The price of labour-power appears as the price of labour", paragraphs: ["On the surface, the wage seems to pay for all labour performed: eight hours of work, eight hours paid. Marx argues that this form conceals the distinction between necessary and surplus labour. The wage actually expresses the value or price of labour-power, transformed into a payment for labour.", "This is another case where an everyday appearance is functional. The wage form makes unpaid surplus labour difficult to perceive even when the employment contract is legally equal."] },
      { heading: "Time and piece", paragraphs: ["Time wages pay by hour, day, or week; piece wages pay by output. Piece rates can appear to reward individual effort while enabling intensification and competition among workers. Yet neither form changes the underlying sale of labour-power.", "Nominal wage, real wage, and the value of labour-power must also be distinguished. A money wage can rise while prices or required effort rise too."] },
      { heading: "National differences", paragraphs: ["Comparing wages across countries requires attention to productivity, intensity, purchasing power, working time, historically developed needs, and the role of public services. A simple currency conversion cannot establish which workers are ‘better off’ or where exploitation is highest."] }
    ],
    example: { title: "A higher nominal paycheck", body: "If wages rise 5% but the cost of the relevant subsistence bundle rises 8%, the real purchasing power has fallen. This still does not by itself give the full value of labour-power without specifying social needs." },
    distinction: "Wages are not the worker’s share of an already naturally divided social pie. The wage form emerges with capitalist production and helps organize its reproduction.",
    source: { label: "Capital I, Chapter 19: Transformation of the value of labour-power into wages", url: "https://www.marxists.org/archive/marx/works/1867-c1/ch19.htm" },
    quiz: [
      { question: "What does the wage form conceal?", options: ["The existence of money", "The division between necessary and surplus labour", "The employer’s name", "All concrete labour"], answer: 1, explanation: "It appears as though all labour is paid, obscuring unpaid surplus labour." },
      { question: "Piece wages fundamentally replace labour-power sales with commodity sales by workers.", options: ["True", "False"], answer: 1, explanation: "Payment by output is still a form of wages for labour-power, not independent commodity production." }
    ]
  },
  {
    id: "reproduction", number: 14, moduleId: "accumulation", title: "Reproduction of the relation", eyebrow: "Volume I · Chapter 23", duration: 17,
    description: "Shift from one production cycle to repeated cycles, showing how workers and capitalists continually reproduce the conditions of wage labour.",
    objectives: ["Define simple reproduction", "Trace wages back to prior production", "Connect individual consumption to class reproduction"],
    sections: [
      { heading: "Repetition changes what we see", paragraphs: ["Viewed once, capitalist production can look like an independent advance by an owner followed by a worker’s consumption. Viewed as a continuing process, workers reproduce both the means of production and the capital relation itself. Their product repeatedly confronts them as capital.", "Simple reproduction means production repeats on the same scale: surplus value is consumed as revenue rather than accumulated. It is an analytical device that reveals the renewal of social relations."] },
      { heading: "Who advances the wage?", paragraphs: ["Across repeated cycles, the variable capital paid this period can be understood as a portion of the value workers produced previously. The capitalist class’s continuing advance rests on past appropriated labour, whatever the historical origin of an individual sum.", "The worker’s personal consumption reproduces labour-power, while productive consumption uses means of production to create new commodities. Both moments belong to capitalist reproduction."] },
      { heading: "Beyond the workplace walls", paragraphs: ["The reproduction of labour-power also depends on households, communities, public institutions, migration, and often unpaid care. Marx provides crucial tools but does not fully develop all these relations in Chapter 23. Social reproduction feminism later expands the field, generating both productive extensions and debates about where value is produced."] }
    ],
    example: { title: "A repeating monthly cycle", body: "The wages spent on food and rent help restore labour-power for next month. At the same time, new output replenishes the employer’s stock and money capital, allowing the relation to restart." },
    distinction: "Reproduction is not merely biological reproduction. It includes the renewal of labour-power, means of production, and the social relations binding them.",
    source: { label: "Capital I, Chapter 23: Simple reproduction", url: "https://www.marxists.org/archive/marx/works/1867-c1/ch23.htm" },
    quiz: [
      { question: "Simple reproduction means…", options: ["Production expands every cycle", "Production repeats on the same scale", "No labour occurs", "Only services are produced"], answer: 1, explanation: "It isolates the renewal of the relation without expanded accumulation." },
      { question: "Why analyze repeated cycles?", options: ["To reveal how the capital relation itself is continually reproduced", "To ignore wages", "To eliminate history", "To treat each day as isolated"], answer: 0, explanation: "Repetition exposes dependencies hidden by a single isolated transaction." }
    ]
  },
  {
    id: "accumulation-reserve", number: 15, moduleId: "accumulation", title: "Accumulation and the reserve army", eyebrow: "Volume I · Chapters 24–25", duration: 21,
    description: "Trace surplus value converted into capital and examine accumulation’s changing demand for labour and production of relative surplus population.",
    objectives: ["Define capitalization of surplus value", "Explain changes in the composition of capital", "Interpret relative surplus population relationally"],
    sections: [
      { heading: "Surplus value becomes capital", paragraphs: ["Expanded reproduction occurs when part of surplus value is converted into additional means of production and labour-power. Accumulation is not simply personal saving from abstinence; in developed capitalist production, it rests on previously appropriated surplus labour.", "The scale of accumulation depends on the mass of surplus value and its division between capitalist consumption and new capital. Competition reinforces the imperative to reinvest."] },
      { heading: "Composition and demand for labour", paragraphs: ["Marx distinguishes the technical composition of production from its value composition and analyzes the organic composition in relation to changes driven by technology. As accumulation raises productivity, demand for labour may grow more slowly than total capital, though sectoral expansion and countertendencies matter.", "The argument is not that investment must always reduce total employment. It examines how accumulation itself generates changing pressures on labour demand."] },
      { heading: "Relative surplus population", paragraphs: ["A reserve of unemployed or underemployed workers is ‘relative’ to the needs of accumulation, not surplus to human need or social usefulness. Its forms can include floating, latent, and stagnant populations, alongside the lowest layers Marx describes using the terminology of his time.", "The reserve affects bargaining power and helps supply labour to expanding sectors. Contemporary analysis should integrate migration, welfare states, informal work, and discrimination rather than treating the category as a fixed headcount."] }
    ],
    example: { title: "Growth with uneven hiring", body: "A firm can double capital and output while less than doubling employment if new technology raises output per worker. The aggregate result still depends on investment and employment elsewhere." },
    distinction: "Unemployment in this theory is not only a mismatch or individual failure. Capitalist accumulation can itself generate populations relative to its fluctuating labour requirements.",
    source: { label: "Capital I, Chapter 25: The general law of capitalist accumulation", url: "https://www.marxists.org/archive/marx/works/1867-c1/ch25.htm" },
    quiz: [
      { question: "Expanded reproduction occurs when…", options: ["All surplus value is consumed", "Part of surplus value becomes additional capital", "Money is hidden permanently", "Production stops"], answer: 1, explanation: "Capitalization of surplus value expands the scale of production." },
      { question: "‘Relative surplus population’ means people are…", options: ["Unnecessary to society", "Surplus relative to accumulation’s labour demand", "Unable to work by definition", "Only agricultural workers"], answer: 1, explanation: "The category is relational to capital’s requirements, not a judgment on human worth." }
    ]
  },
  {
    id: "primitive-accumulation", number: 16, moduleId: "accumulation", title: "So-called primitive accumulation", eyebrow: "Volume I · Chapters 26–33", duration: 20,
    description: "Confront the violent historical separation of producers from means of production and debate whether dispossession belongs only to capitalism’s origins.",
    objectives: ["Define primitive accumulation", "Contrast Marx’s history with an origin myth of frugal saving", "Evaluate arguments about ongoing dispossession"],
    sections: [
      { heading: "Not a peaceful origin story", paragraphs: ["Classical political economy often told an origin story in which frugal, industrious people saved while others spent. Marx replaces this idyll with a history of enclosure, colonial expropriation, coercive legislation, public debt, and the creation of wage labour through separation from land and tools.", "‘Primitive’ means prior in the historical constitution of capitalist relations, not gentle or insignificant. Accumulation through production presupposes producers already separated from independent means of production."] },
      { heading: "Capital and the state arrive together", paragraphs: ["The chapters place state power inside economic history. Law and violence helped transform customary rights, discipline expropriated populations, and construct labour markets. Colonial relations supplied both wealth and coercive systems whose role cannot be reduced to accidental background.", "This history challenges any sharp separation between a political state and an allegedly natural economy."] },
      { heading: "Origin or continuing process?", paragraphs: ["Later theorists, notably Rosa Luxemburg and David Harvey in different ways, have emphasized continuing dispossession and accumulation outside or alongside the wage relation. Others stress that Marx’s concept identifies a specific historical precondition rather than every act of privatization.", "The productive question is not whether to stretch one label over all injustice. It is how ongoing enclosures, debt, land grabs, and assetization interact with surplus value production and class reproduction."] }
    ],
    example: { title: "Enclosure’s double effect", body: "Land can become a capitalist asset while former commoners lose independent subsistence and must seek wages. Private property for some and dispossession for others are two sides of one transformation." },
    distinction: "Primitive accumulation is not merely a large initial fortune. It is the historical production of the capital–wage-labour relation through separation and dispossession.",
    source: { label: "Capital I, Chapter 26: The secret of primitive accumulation", url: "https://www.marxists.org/archive/marx/works/1867-c1/ch26.htm" },
    furtherReading: { label: "Capital I, Chapter 31: Genesis of the industrial capitalist", url: "https://www.marxists.org/archive/marx/works/1867-c1/ch31.htm" },
    quiz: [
      { question: "Primitive accumulation centrally explains…", options: ["How personal virtue creates every fortune", "The separation of producers from means of production", "Why money has serial numbers", "How piece rates are calculated"], answer: 1, explanation: "Marx traces the coercive historical formation of capitalist property and wage labour." },
      { question: "What role does state power play?", options: ["None by definition", "It helps enforce dispossession and new property relations", "It only observes markets", "It eliminates all classes"], answer: 1, explanation: "Law, coercion, and public finance are integral to the history Marx reconstructs." }
    ]
  }
];
