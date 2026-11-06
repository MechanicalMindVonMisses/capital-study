import type { Lesson } from "./course";

export const systemLessons: Lesson[] = [
  {
    id: "circuits-capital", number: 17, moduleId: "circulation", title: "The three circuits of capital", eyebrow: "Volume II · Chapters 1–6", duration: 20,
    description: "Follow money-capital, productive capital, and commodity-capital as changing forms within one interrupted and renewed movement.",
    objectives: ["Trace M–C … P … C′–M′", "Distinguish production time from circulation time", "Identify conditions for continuity"],
    sections: [
      { heading: "Capital as movement", paragraphs: ["Volume II shifts from production considered alone to the unity of production and circulation. Money-capital buys means of production and labour-power; productive capital organizes their combination; commodity-capital must be sold to realize value and surplus value in money form.", "Capital is therefore not a pile of things. It is value passing through forms and requiring continual metamorphosis. A warehouse of unsold goods is not yet realized money-capital."] },
      { heading: "Three perspectives on one process", paragraphs: ["The money-capital circuit emphasizes the advance and return of money. The productive-capital circuit emphasizes reproduction through production. The commodity-capital circuit begins with the total social product and foregrounds the replacement and sale of commodities.", "Each formula reveals dependencies the others can hide. Actual capital requires all phases, and social reproduction requires many individual circuits to interlock."] },
      { heading: "Time and interruption", paragraphs: ["Production time and circulation time are not identical. Storage, transport, sale, and purchase can require resources and time. Delays tie up capital, while speed can release advanced funds and increase annual returns.", "Interruptions also reveal vulnerability. A strike, shipping blockage, collapse in demand, or credit seizure can prevent one metamorphosis and propagate disruption across connected circuits."] }
    ],
    example: { title: "Unsold inventory", body: "A factory may have produced commodities embodying surplus value, but if they remain unsold, that surplus value is not realized in money. Production and realization are distinct yet interdependent moments." },
    distinction: "Circulation does not create surplus value in Marx’s account, but capital cannot complete its circuit or reproduce itself without circulation.",
    source: { label: "Capital II, Chapter 1: The circuit of money-capital", url: "https://www.marxists.org/archive/marx/works/1885-c2/ch01.htm" }, lab: "circuit",
    quiz: [
      { question: "What must happen in C′–M′?", options: ["Labour-power is hired", "Commodity-capital is sold and value realized in money", "Machines are built", "Rent becomes wages"], answer: 1, explanation: "Sale converts commodity-capital back into money form, including realized surplus value." },
      { question: "The three circuits are best understood as…", options: ["Unrelated economic systems", "Different forms and perspectives within capital’s total movement", "Three types of money only", "Stages every society must follow"], answer: 1, explanation: "Money, productive, and commodity capital are functional forms within one reproduction process." }
    ]
  },
  {
    id: "turnover", number: 18, moduleId: "circulation", title: "Turnover and time", eyebrow: "Volume II · Chapters 7–17", duration: 19,
    description: "Examine fixed and circulating capital, turnover time, and why annual surplus value depends on both production and repetition.",
    objectives: ["Distinguish fixed from circulating capital", "Calculate turnovers per year", "Relate turnover to annual surplus value"],
    sections: [
      { heading: "Fixed and circulating are not constant and variable", paragraphs: ["Fixed capital, such as a building or machine, transfers value gradually and is not fully replaced after each circuit. Circulating capital, including raw materials and labour-power advanced, is recovered with each turnover in value terms. These categories concern the mode of value circulation.", "Constant versus variable concerns the role in producing surplus value. A machine is fixed and constant; raw material is circulating and constant; wages are circulating and variable. Confusing the two pairs creates major errors."] },
      { heading: "Turnover time", paragraphs: ["Turnover time combines production time and circulation time. If a capital completes its circuit every three months, it turns over four times in a year under simplified conditions. Faster turnover can reduce capital tied up and increase the annual mass of surplus value produced by a given variable capital.", "The annual rate of surplus value can therefore exceed the rate per production cycle. It incorporates the number of times variable capital is advanced and renewed."] },
      { heading: "Acceleration has limits", paragraphs: ["Transport, communication, inventory management, and credit can shorten turnover. But acceleration may intensify labour, increase logistical fragility, or displace costs elsewhere. Just-in-time systems show both sides: less idle stock and greater exposure to interruption."] }
    ],
    example: { title: "Two cycles, two annual outcomes", body: "If 100 variable capital yields 100 surplus value each cycle, one cycle per year yields annual s = 100. Four cycles yield annual s = 400 with the same per-cycle rate, assuming successful realization." },
    distinction: "Fixed does not mean physically immobile, and circulating does not mean money only. The distinction concerns how value moves through and returns from production.",
    source: { label: "Capital II, Chapter 8: Fixed capital and circulating capital", url: "https://www.marxists.org/archive/marx/works/1885-c2/ch08.htm" },
    furtherReading: { label: "Capital II, Chapter 16: Turnover of variable capital", url: "https://www.marxists.org/archive/marx/works/1885-c2/ch16.htm" },
    quiz: [
      { question: "Which pairing is correct?", options: ["Machine: fixed and constant", "Wages: fixed and variable", "Raw material: fixed and constant", "Machine: circulating and variable"], answer: 0, explanation: "Machinery transfers value gradually and does not create new value in Marx’s account." },
      { question: "If total turnover time is two months, simplified annual turnovers equal…", options: ["2", "6", "12", "24"], answer: 1, explanation: "Twelve months divided by two months per turnover gives six." }
    ]
  },
  {
    id: "social-reproduction", number: 19, moduleId: "circulation", title: "The reproduction schemas", eyebrow: "Volume II · Chapters 20–21", duration: 24,
    description: "Balance two departments of social production and explore why an economy capable of producing wealth can still fail to reproduce itself smoothly.",
    objectives: ["Define Departments I and II", "Use the simple reproduction condition", "Analyze disproportionality without assuming equilibrium"],
    sections: [
      { heading: "The total social product", paragraphs: ["Marx divides social production into Department I, means of production, and Department II, means of consumption. Each department’s annual product value contains c + v + s. Reproduction requires both value replacement and material replacement: the right values must be sold, and the right kinds of use-values must be available.", "Money facilitates exchange but cannot make incompatible material compositions disappear. The schemas provide a rigorous way to examine these interdependencies."] },
      { heading: "Simple reproduction’s condition", paragraphs: ["In the basic two-department schema without accumulation, Department II’s constant capital must be replaced through exchange with Department I’s wages and capitalists’ consumption: I(v + s) = IIc. Department I’s own constant capital is replaced within Department I; Department II’s v and s are consumed within Department II.", "This equality is a condition for smooth simple reproduction, not a prediction that markets automatically achieve it."] },
      { heading: "Expanded reproduction and crisis", paragraphs: ["With accumulation, part of surplus value becomes additional c and v. The schemas become more complex because both departments must expand in mutually compatible proportions. Different investment and consumption decisions can generate disproportionality.", "The schemas do not constitute a complete crisis theory. They demonstrate that aggregate reproduction has demanding conditions and that no invisible law guarantees all private production decisions will cohere."] }
    ],
    example: { title: "A balanced exchange", body: "If Department I has v = 500 and s = 500, while Department II has c = 1,000, the simple reproduction condition is met: I(v+s) = IIc = 1,000." },
    distinction: "The departments classify products by their destination in reproduction, not by whether they are physical or digital, heavy or light, public or private.",
    source: { label: "Capital II, Chapter 20: Simple reproduction", url: "https://www.marxists.org/archive/marx/works/1885-c2/ch20.htm" }, lab: "reproduction",
    quiz: [
      { question: "Department I produces…", options: ["Means of production", "Only luxury goods", "Only financial services", "Wages"], answer: 0, explanation: "Department I supplies means of production used to replace and expand constant capital." },
      { question: "The simple reproduction condition is…", options: ["Ic = II(v+s)", "I(v+s) = IIc", "Iv = IIs", "c+v+s = 0"], answer: 1, explanation: "This exchange allows Department II to replace constant capital and Department I to obtain consumption goods." }
    ]
  },
  {
    id: "profit-prices", number: 20, moduleId: "circulation", title: "Profit and prices of production", eyebrow: "Volume III · Chapters 1–12", duration: 24,
    description: "See how surplus value appears as profit, competition equalizes profit rates, and values are transformed into prices of production.",
    objectives: ["Distinguish surplus value rate from profit rate", "Define cost price and average profit", "Explain why individual prices need not equal individual values"],
    sections: [
      { heading: "Surplus value takes the form of profit", paragraphs: ["To the capitalist, the relevant advance appears as cost price: constant and variable capital consumed. Surplus value then appears as the excess over total capital advanced, not merely over wages. The rate of profit is s/(c+v), while the rate of surplus value is s/v.", "The same surplus value can therefore yield very different rates depending on the denominator. The profit form also obscures exploitation by relating the increment to all capital rather than living labour alone."] },
      { heading: "Competition and average profit", paragraphs: ["Capitals differ in composition and turnover, so producing commodities at their individual values would generate different profit rates. Competition and capital mobility tend to equalize rates across spheres, producing a general or average rate of profit.", "Prices of production equal cost price plus average profit. They are not arbitrary markups, nor identical to each commodity’s individual value. The transformation is intended to explain how value relations operate through competitive surface forms."] },
      { heading: "The transformation debate", paragraphs: ["Marx’s account has generated a long literature about whether and how aggregate equalities can be maintained when inputs and outputs are both expressed in prices. Critics charge inconsistency; defenders offer alternative interpretations, including temporal and single-system approaches.", "Do not treat the issue as either trivially solved or a one-line demolition. The debate concerns the logical and interpretive connection between labour values, prices, and profit, and requires engaging formal reconstructions beyond this introductory course."] }
    ],
    example: { title: "Same s, different appearance", body: "With c = 400, v = 100, s = 100, the surplus value rate is 100%, but the profit rate is 20%. The profit form relates the same increment to total advanced capital." },
    distinction: "Price of production is not simply cost plus whatever profit a firm desires. It includes an average profit formed through intersectoral competition in Marx’s construction.",
    source: { label: "Capital III, Chapter 9: Formation of a general rate of profit and prices of production", url: "https://www.marxists.org/archive/marx/works/1894-c3/ch09.htm" }, lab: "profit",
    quiz: [
      { question: "With c=300, v=100, s=100, the profit rate is…", options: ["100%", "33⅓%", "25%", "400%"], answer: 2, explanation: "Profit rate = s/(c+v) = 100/400 = 25%." },
      { question: "Prices of production equal…", options: ["Individual value only", "Cost price plus average profit", "Wages only", "Market price at every instant"], answer: 1, explanation: "They express cost price plus profit at the general rate, around which market prices fluctuate." }
    ]
  },
  {
    id: "falling-profit-crisis", number: 21, moduleId: "legacies", title: "Profitability, countertendencies, crisis", eyebrow: "Volume III · Chapters 13–15", duration: 23,
    description: "Study the tendency of the rate of profit to fall as an argument with internal countertendencies—not a mechanical timetable for collapse.",
    objectives: ["State the tendency in c, v, and s terms", "List major counteracting influences", "Distinguish tendency, realization problem, and crisis"],
    sections: [
      { heading: "A tendency grounded in accumulation", paragraphs: ["If accumulation raises the mass of constant capital relative to variable capital, a given rate of surplus value can correspond to a falling general rate of profit because total capital advanced grows relative to the labour producing surplus value. This is the abstract form of Marx’s argument.", "The rate of profit can fall even while the mass of profit rises. Confusing rate and mass leads to misleading conclusions about investment and crisis."] },
      { heading: "Counteracting influences", paragraphs: ["Marx himself discusses increasing intensity of exploitation, reduction of wages below labour-power’s value, cheapening of constant capital, relative overpopulation, foreign trade, and the increase of stock capital. These are not external afterthoughts; they belong to the same contradictory process.", "Because countertendencies can dominate for periods, the theory does not supply a monotonically falling line or a date for capitalism’s end. Empirical measurement is also contested: which capital stock, which profit flow, which boundary, and which time scale?"] },
      { heading: "Crisis is overdetermined", paragraphs: ["Profitability interacts with overproduction, disproportionality, credit, asset markets, wages, state policy, and geopolitical conflict. Marx’s crisis discussions are dispersed rather than packaged as one finished model.", "A strong analysis specifies mechanisms and evidence. ‘The rate of profit fell’ is not a universal explanation for every recession, just as ‘confidence fell’ is not a complete alternative."] }
    ],
    example: { title: "Rate versus mass", body: "A capital of 1,000 earning 10% yields 100. A capital of 3,000 earning 6% yields 180. The rate is lower, but the mass of profit is larger." },
    distinction: "A tendency is not an unchecked empirical law. Marx’s formulation explicitly includes counteracting influences and contradictory development.",
    source: { label: "Capital III, Chapter 13: The law as such", url: "https://www.marxists.org/archive/marx/works/1894-c3/ch13.htm" },
    furtherReading: { label: "Capital III, Chapter 14: Counteracting influences", url: "https://www.marxists.org/archive/marx/works/1894-c3/ch14.htm" },
    quiz: [
      { question: "Can profit’s mass rise while its rate falls?", options: ["No, never", "Yes, if total capital and total profit grow sufficiently", "Only when s=0", "Only under barter"], answer: 1, explanation: "Rate and mass are different measures and can move in opposite directions." },
      { question: "Counteracting influences…", options: ["Are central to Marx’s exposition", "Prove crisis is impossible", "Are identical in every period", "Eliminate the need for evidence"], answer: 0, explanation: "Marx develops the tendency together with forces that offset or modify it." }
    ]
  },
  {
    id: "credit-rent", number: 22, moduleId: "legacies", title: "Credit, fictitious capital, and rent", eyebrow: "Volume III · Chapters 21–47", duration: 24,
    description: "Trace surplus value’s distribution into interest, commercial profit, and ground-rent, and examine how claims on future income become tradable assets.",
    objectives: ["Distinguish interest from profit of enterprise", "Explain fictitious capital as capitalized claims", "Identify differential and absolute rent"],
    sections: [
      { heading: "Interest-bearing capital", paragraphs: ["When money-capital is lent, the borrower may use it productively and split gross profit into interest paid to the lender and profit of enterprise retained by the functioning capitalist. Interest appears as a property of money itself, intensifying the fetishistic form M–M′.", "Credit can mobilize idle funds, centralize capital, and accelerate accumulation. It also increases leverage and interdependence, making commitments on future income central to crisis dynamics."] },
      { heading: "Fictitious capital", paragraphs: ["Bonds, shares, and similar securities can trade as capitalized claims on expected future revenues. Their market prices move with expected income and interest rates, not in direct proportion to any existing stock of productive capital. ‘Fictitious’ does not mean the asset cannot yield real money or exert real power.", "The term distinguishes these paper claims and their valuation from capital actually functioning in production. A government bond may represent no corresponding productive asset while remaining a real enforceable claim."] },
      { heading: "Ground-rent", paragraphs: ["Landed property can appropriate a portion of surplus value as rent. Differential rent arises from differences in fertility, location, or productivity of successive investments; absolute rent is connected to the monopoly of landed property and its ability to obstruct capital’s free entry.", "Housing and urban land make these categories especially relevant, but contemporary rents also involve finance, planning, infrastructure, monopoly, and public policy. Avoid treating soil fertility as the only issue."] }
    ],
    example: { title: "Capitalizing a claim", body: "A claim paying 100 annually, capitalized at a 5% interest rate, implies a price of 2,000 under a simplified perpetual-income model. If the rate rises to 10%, the implied price falls to 1,000." },
    distinction: "Interest, rent, and industrial profit are forms through which surplus value is distributed; they are not proof that money and land independently create new value.",
    source: { label: "Capital III, Chapter 25: Credit and fictitious capital", url: "https://www.marxists.org/archive/marx/works/1894-c3/ch25.htm" },
    furtherReading: { label: "Capital III, Chapter 45: Absolute ground-rent", url: "https://www.marxists.org/archive/marx/works/1894-c3/ch45.htm" },
    quiz: [
      { question: "Fictitious capital primarily names…", options: ["Counterfeit banknotes only", "Tradable capitalized claims on future revenues", "All productive machinery", "Unpaid labour time"], answer: 1, explanation: "The category concerns titles and claims whose prices capitalize expected income." },
      { question: "Differential rent is associated with…", options: ["Differences in land productivity or location", "The number of banknotes", "Identical conditions everywhere", "Abolition of landed property"], answer: 0, explanation: "Unequal conditions produce differential surplus profits appropriable as rent." }
    ]
  },
  {
    id: "politics-state", number: 23, moduleId: "legacies", title: "Politics, state, and emancipation", eyebrow: "Beyond Capital · Manifesto & Gotha", duration: 21,
    description: "Connect political economy to organization, political power, transition, and the difficult question of what emancipation could mean.",
    objectives: ["Connect class formation to political organization", "Avoid treating the state as a simple external referee", "Distinguish critique of capitalism from a complete institutional blueprint"],
    sections: [
      { heading: "From economic relation to political movement", paragraphs: ["The Manifesto presents class struggle as political as well as economic. Workers confront not only individual employers but property law, state institutions, and competing political organizations. Building durable collective capacity is therefore a central problem, not a distraction from economic analysis.", "Marx’s historical works show more complexity than the claim that the state always obeys one simple instruction from a unified capitalist class. States mediate conflicts, secure general conditions of accumulation, and possess institutionally specific powers."] },
      { heading: "Transition is not a single lever", paragraphs: ["The Critique of the Gotha Programme discusses distribution, labour certificates, deductions for social funds, and phases of communist society. It challenges the idea that ‘equal right’ automatically abolishes inherited inequalities. It also warns against treating the existing state as an independent educator of society.", "These texts provide principles and criticisms rather than a detailed administrative manual. Later socialist experiences raise questions of democracy, planning, coercion, bureaucracy, and rights that cannot be answered by quotation alone."] },
      { heading: "Emancipation and ecology", paragraphs: ["Marx analyzes both human productive powers and relations to nature, including soil depletion and metabolic rift in later interpretation. Contemporary ecosocialism asks how unlimited accumulation conflicts with finite ecological systems and unequal exposure to harm.", "An emancipatory horizon therefore requires more than changing ownership labels: democratic control, time, care, racial and colonial justice, and ecological reproduction all require institutional imagination and historical evaluation."] }
    ],
    example: { title: "Who plans the transition?", body: "A publicly owned asset can still be governed bureaucratically; a cooperative can still face competitive market pressure. Ownership, control, and the surrounding system must be analyzed separately and together." },
    distinction: "Capital provides a critique of capitalist relations, not a finished constitution or a promise that one event will resolve every domination.",
    source: { label: "Marx, Critique of the Gotha Programme (1875)", url: "https://www.marxists.org/archive/marx/works/1875/gotha/" },
    furtherReading: { label: "Marx & Engels, Manifesto of the Communist Party", url: "https://www.marxists.org/archive/marx/works/1848/communist-manifesto/" },
    quiz: [
      { question: "Capital is best read as…", options: ["A complete administrative blueprint", "A critique of capitalist production and its forms", "A handbook of stock trading", "A refusal of all politics"], answer: 1, explanation: "Its central achievement is critique; political and institutional questions extend beyond it." },
      { question: "The Gotha critique suggests formal equal right…", options: ["Automatically removes every inequality", "Can retain inequalities arising from different circumstances", "Is the same as commodity fetishism", "Eliminates social funds"], answer: 1, explanation: "Equal standards can produce unequal outcomes when needs and conditions differ." }
    ]
  },
  {
    id: "debates-futures", number: 24, moduleId: "legacies", title: "Debates, criticisms, and your next reading", eyebrow: "Capstone · synthesis & independent judgment", duration: 25,
    description: "Complete the path by mapping major debates—value, crisis, class, social reproduction, ecology—and constructing a defensible research question.",
    objectives: ["Identify where interpretation remains contested", "Separate empirical criticism from conceptual criticism", "Build a source-based inquiry of your own"],
    sections: [
      { heading: "Five live debates", paragraphs: ["Value theory asks how abstract labour relates to prices and whether alternative formulations preserve Marx’s claims. Crisis theory weighs profitability, underconsumption, disproportionality, finance, and state action. Class theory examines changing occupational structures and political composition. Social reproduction theory develops unpaid care and labour-power reproduction. Ecological Marxism investigates material throughput, extraction, and metabolic relations.", "These are not decorative controversies after a finished core. They arise from unresolved problems, new historical evidence, and different reconstructions of the core categories."] },
      { heading: "Common criticisms require precision", paragraphs: ["The marginalist challenge questions labour as the basis of price explanation; the transformation problem formalizes difficulties in moving from values to prices; Okishio’s theorem challenges some profitability arguments under specified assumptions; empirical historians question class laws or predictions; liberal and socialist critics raise questions about coercion and planning.", "A fair response identifies assumptions and scope. Some criticisms target Marx directly, others target later interpreters, and still others refute only a simplified version. A criticism can be serious without settling the whole field."] },
      { heading: "Your capstone: make an argument", paragraphs: ["Choose one concrete phenomenon—platform labour, housing costs, logistics disruption, artificial intelligence, care work, or climate policy. Formulate a question, select two primary passages and one critical source, apply a category carefully, and state what evidence would change your conclusion.", "The aim is not to become certain about everything. It is to become capable of reconstructing arguments, detecting hidden assumptions, and making historically informed judgments. That is a more durable completion than a badge."] }
    ],
    example: { title: "A strong capstone question", body: "‘Does algorithmic scheduling increase relative surplus value by reducing necessary labour, or primarily intensify labour and alter turnover? What wage, time, and productivity evidence would distinguish these mechanisms?’" },
    distinction: "Finishing this course means completing a structured introduction and advanced map. Marxism is a living field of research and politics; no website can make its study literally complete.",
    source: { label: "Marx/Engels Library: continue with collected works and study guides", url: "https://www.marxists.org/archive/marx/works/" },
    furtherReading: { label: "Capital III, Chapter 52: Classes — the unfinished final chapter", url: "https://www.marxists.org/archive/marx/works/1894-c3/ch52.htm" },
    quiz: [
      { question: "What is the best response to a serious criticism?", options: ["Dismiss its author’s motives", "Identify its assumptions, target, and evidence", "Repeat a quotation", "Treat every debate as settled"], answer: 1, explanation: "Precise reconstruction allows both fair evaluation and a substantive reply." },
      { question: "What does completing this course certify?", options: ["Every Marxist debate is resolved", "A structured foundation and capacity for further independent study", "Expertise in all socialist history", "A guaranteed political conclusion"], answer: 1, explanation: "The course deliberately ends with research capacities and open questions rather than total certainty." }
    ]
  }
];
