import type { Lesson } from "./course";

export const foundationLessons: Lesson[] = [
  {
    id: "reading-marx", number: 1, moduleId: "foundations", title: "How to read Marx", eyebrow: "Start here · no prior knowledge", duration: 12,
    description: "Learn to follow a critique: reconstruct an argument, watch its categories move, and suspend neither curiosity nor judgment.",
    objectives: ["Distinguish critique from a list of opinions", "Identify a category, its conditions, and its effects", "Use the original text alongside interpretation"],
    sections: [
      { heading: "Critique begins with the familiar", paragraphs: ["Marx does not begin Capital with a definition of capitalism or a vision of an alternative society. He begins with the commodity: something ordinary enough to seem self-explanatory. His method is to take a familiar form, ask what social relations make it possible, and trace the contradictions that appear when those relations develop.", "A critique is therefore more than disagreement. It examines the assumptions and historical conditions inside an apparently natural category—such as price, wage, or capital—and shows what that category both reveals and conceals."] },
      { heading: "Three voices to keep apart", paragraphs: ["When studying, separate Marx’s own formulation, a later interpreter’s reconstruction, and your own assessment. The course labels primary readings and marks disputed questions. This matters because phrases such as ‘Marxism says’ often compress incompatible traditions into one doctrine.", "Read actively: write the claim in your own words, identify the evidence offered, and ask what would count against it. A difficult sentence is not automatically profound; a clear objection is not automatically a refutation."] },
      { heading: "A spiral, not a straight line", paragraphs: ["Categories return in new contexts. The commodity introduced in Chapter 1 looks different after labour-power, circulation, and competition have been developed. Do not treat early definitions as the whole theory. Keep a running glossary and allow later chapters to revise your first understanding."] }
    ],
    example: { title: "A practical reading ritual", body: "Before reading, write what you think a wage pays for. After the lesson on labour-power, return to that sentence. The change in your answer is evidence of conceptual learning, not just completed pages." },
    distinction: "A critique of political economy is not simply an economic forecast or a moral denunciation. It investigates how economic forms work and what relations they express.",
    source: { label: "Marx, Preface to the first German edition of Capital, Volume I (1867)", url: "https://www.marxists.org/archive/marx/works/1867-c1/p1.htm" },
    furtherReading: { label: "Marx/Engels Library and study guides", url: "https://www.marxists.org/archive/marx/works/" },
    quiz: [
      { question: "What makes an argument a critique in Marx’s sense?", options: ["It rejects every existing institution", "It examines a category’s assumptions and social conditions", "It relies only on moral outrage", "It predicts exact future dates"], answer: 1, explanation: "Critique analyzes the conditions and internal tensions of apparently self-evident forms." },
      { question: "Why revisit early chapters after later ones?", options: ["The first chapters are unrelated", "Later developments deepen and qualify the first categories", "Marx asks readers to memorize them", "Only the final chapter matters"], answer: 1, explanation: "Capital develops categories through successive determinations rather than treating first definitions as exhaustive." }
    ]
  },
  {
    id: "materialism-history", number: 2, moduleId: "foundations", title: "Historical materialism", eyebrow: "Foundations · social explanation", duration: 16,
    description: "Examine the relation between material production, social relations, institutions, and historical change without reducing everything to economics.",
    objectives: ["Define forces and relations of production", "Explain the base–superstructure metaphor carefully", "Recognize materialist explanation as historical, not mechanical"],
    sections: [
      { heading: "Production is social", paragraphs: ["People must produce the means of life, but never as isolated individuals. They enter relations of cooperation, ownership, command, and distribution. Marx calls the developing means and capacities of production ‘productive forces’; the patterned relations through which production occurs are ‘relations of production.’", "A mode of production names a historically specific combination of these forces and relations. It is an analytical concept, not a claim that every society follows an identical timetable."] },
      { heading: "Base and superstructure", paragraphs: ["In the 1859 Preface, Marx describes the totality of relations of production as society’s economic structure, on which legal and political forms arise and to which forms of consciousness correspond. This is a research orientation: explain institutions and ideas in relation to material social life, rather than treating ideas as wholly self-moving.", "The metaphor becomes crude if it means that every poem, law, or election is instantly determined by an economic fact. Marx’s own historical writing attends to political struggle, contingency, and the relative autonomy of institutions."] },
      { heading: "Contradiction and transformation", paragraphs: ["Historical change becomes especially consequential when developing productive capacities strain existing property and social relations. Yet conflict does not guarantee a single outcome. It sets problems that people contest through organizations, states, ideas, and collective action. Materialism studies those real conditions and struggles; it does not remove human agency."] }
    ],
    example: { title: "Why did factory law matter?", body: "A machine can lengthen possible output, but law, collective organization, and custom help determine the working day. Technology and class relations must be analyzed together rather than treating machinery as an independent historical actor." },
    distinction: "‘Economic’ does not mean only money or individual self-interest. It concerns the social organization of producing and reproducing life.",
    source: { label: "Marx, Preface to A Contribution to the Critique of Political Economy (1859)", url: "https://www.marxists.org/archive/marx/works/1859/critique-pol-economy/preface.htm" },
    quiz: [
      { question: "Relations of production refer primarily to…", options: ["Personal friendships only", "Social relations through which production is organized", "The chemical properties of tools", "Weather patterns"], answer: 1, explanation: "Ownership, cooperation, control, and distribution are examples of social relations of production." },
      { question: "The strongest reading of base and superstructure is…", options: ["Every idea has one immediate economic cause", "Institutions are irrelevant", "Material social relations shape the field of institutions and ideas", "Technology mechanically fixes all events"], answer: 2, explanation: "The metaphor guides explanation without requiring simplistic one-to-one causation." }
    ]
  },
  {
    id: "dialectics", number: 3, moduleId: "foundations", title: "Dialectics without mystery", eyebrow: "Foundations · method", duration: 15,
    description: "Use dialectics to study relations, processes, and internally generated tensions—not as a universal formula that replaces evidence.",
    objectives: ["Analyze a thing through its relations", "Distinguish contradiction from simple logical error", "Connect abstract categories to concrete history"],
    sections: [
      { heading: "Relations before isolated things", paragraphs: ["A wage, a machine, or a sum of money cannot be fully understood in isolation. Each acquires a social function within relations. Money becomes capital only in a definite process; a machine becomes fixed capital within a particular circuit. Dialectical analysis follows these changing relations instead of assigning permanent essences to objects."] },
      { heading: "Contradiction as real tension", paragraphs: ["A contradiction here is not merely saying both ‘A’ and ‘not A’ in the same respect. It is a tension generated by a social form: for example, capital depends on labour while seeking to reduce labour costs. Opposed tendencies belong to the same process and can drive adaptation, conflict, or crisis.", "The existence of tension does not tell us its resolution in advance. Empirical investigation remains necessary."] },
      { heading: "From abstract to concrete", paragraphs: ["Marx’s presentation often begins with a simple, abstract form and progressively adds relations until a richer concrete whole appears. ‘Abstract’ does not mean unreal; it means isolated from some determinations. The concrete is the synthesis of many relations, not just whatever can be touched."] }
    ],
    example: { title: "One workplace, two imperatives", body: "A firm may introduce coordination that increases collective productive power while intensifying managerial control. Cooperation and domination are not mutually exclusive descriptions; their combination is precisely what requires analysis." },
    distinction: "Dialectics is not the slogan ‘thesis, antithesis, synthesis.’ That formula is often attributed to Marx but is a poor substitute for his actual analyses.",
    source: { label: "Marx, Afterword to the second German edition of Capital, Volume I (1873)", url: "https://www.marxists.org/archive/marx/works/1867-c1/p3.htm" },
    quiz: [
      { question: "What is a real contradiction in dialectical analysis?", options: ["Any spelling mistake", "An opposed tendency generated within a relation or process", "A disagreement between two readers only", "A reason to abandon evidence"], answer: 1, explanation: "Dialectical contradictions are tensions in the object of study, not just formal logical mistakes." },
      { question: "Why can an abstract category be useful?", options: ["It is always superior to reality", "It isolates relations so their development can be traced", "It needs no empirical support", "It eliminates history"], answer: 1, explanation: "Abstraction can isolate real relations before reconstructing a more determinate whole." }
    ]
  },
  {
    id: "class-class-struggle", number: 4, moduleId: "foundations", title: "Class and class struggle", eyebrow: "Foundations · social relations", duration: 17,
    description: "Understand class as a relation to production and power, while leaving room for organization, identity, and historical contingency.",
    objectives: ["Define capitalist and wage-labour relations", "Distinguish class position from income bracket", "Explain why organization matters"],
    sections: [
      { heading: "Class is relational", paragraphs: ["In Marx’s analysis, classes are not simply statistical groups ranked by income. They are constituted through relations to the conditions of production. Capitalists own or control capital and organize production for valorization; wage workers must sell their labour-power because they lack independent access to sufficient means of production.", "Actual societies contain managers, small producers, unpaid carers, tenants, public employees, and many intermediate or combined positions. A relational map can be complex without abandoning the central wage-labour–capital relation."] },
      { heading: "Struggle is not an optional add-on", paragraphs: ["The length of the working day, wages, workplace control, and access to public goods are contested. Class struggle ranges from everyday resistance and strikes to law and political organization. It does not occur only when workers consciously declare a shared program.", "Collective organization can turn a structurally shared position into collective capacity. No automatic mechanism guarantees unity: divisions of occupation, nation, race, gender, and political allegiance shape historical outcomes."] },
      { heading: "Class analysis and other dominations", paragraphs: ["Marx’s work emphasizes exploitation in capitalist production, but later Marxist traditions have examined how class relations intersect with colonialism, racialization, gender, and ecological extraction. These are not best treated as rival single causes. The task is to explain their concrete combinations without assuming that one vocabulary exhausts every experience."] }
    ],
    example: { title: "Same salary, different relation", body: "Two people earning the same amount may occupy different class relations if one lives by selling labour-power and the other controls a business and appropriates profit. Income alone misses ownership and authority." },
    distinction: "Exploitation in Capital is a specific account of surplus labour and surplus value. It should not be reduced to low wages, rude managers, or any unequal exchange.",
    source: { label: "Marx & Engels, Manifesto of the Communist Party (1848)", url: "https://www.marxists.org/archive/marx/works/1848/communist-manifesto/" },
    quiz: [
      { question: "Class in Marx’s political economy is primarily…", options: ["A lifestyle category", "A relation within social production", "A measure of education only", "A fixed personality type"], answer: 1, explanation: "Class analysis centers ownership, control, and the sale or purchase of labour-power." },
      { question: "Does a shared class position automatically produce political unity?", options: ["Yes, always", "No; organization and other social relations shape collective action", "Only during elections", "Only outside workplaces"], answer: 1, explanation: "Structural position and conscious collective organization are related but not identical." }
    ]
  },
  {
    id: "commodity", number: 5, moduleId: "value", title: "The commodity", eyebrow: "Volume I · Chapter 1", duration: 18,
    description: "Start Capital where Marx starts: with use-value, exchange-value, and the commodity as a historically specific social form.",
    objectives: ["Distinguish use-value from value", "Explain why exchange requires commensurability", "Identify the commodity as both useful and social"],
    sections: [
      { heading: "A double character", paragraphs: ["A commodity is an object or service produced for exchange. As use-value, it satisfies some want; its usefulness is realized in use or consumption. As a bearer of exchange-value, it stands in quantitative relations with other commodities. A coat can keep someone warm and also exchange for a quantity of linen.", "Use-value is necessary for a commodity, but usefulness alone does not explain a stable exchange ratio. Marx therefore asks what common social substance allows qualitatively different products to be compared."] },
      { heading: "What exchange abstracts from", paragraphs: ["In exchange, concrete differences among products and among the labours that made them are set aside. Marx argues that their common character as products of human labour in the abstract underlies value. Value is not a physical ingredient detectable by chemistry; it is a social relation expressed through exchange.", "The argument concerns capitalist commodity production, not an assertion that every useful thing in every society must carry a price or embody value in this technical sense."] },
      { heading: "Private labour, social validation", paragraphs: ["Commodities are produced by privately organized labours that must prove themselves socially necessary through exchange. A producer may spend many hours making something, but if nobody wants it or the labour is socially wasted, those hours do not automatically count as value. The market therefore does more than register pre-existing facts: it validates or fails to validate private labour as part of society’s total labour."] }
    ],
    example: { title: "Handmade does not mean more valuable", body: "If a new method can make a chair in two hours, taking twenty hours by an inefficient method does not make the chair worth ten times as much. Socially necessary labour, not merely individual effort, regulates value." },
    distinction: "Price is a money expression and market outcome; value is Marx’s category for the social labour relation regulating exchange. They are related, not interchangeable.",
    source: { label: "Capital I, Chapter 1: Commodities", url: "https://www.marxists.org/archive/marx/works/1867-c1/ch01.htm" },
    quiz: [
      { question: "What are the commodity’s two factors at the opening of Capital?", options: ["Supply and demand", "Use-value and value", "Profit and rent", "Money and credit"], answer: 1, explanation: "Marx begins by analyzing usefulness and the value expressed in exchange relations." },
      { question: "Does every hour individually spent on a product create value?", options: ["Yes, regardless of social need", "Only if the producer owns a factory", "No; labour must count as socially necessary", "Only when paid in cash"], answer: 2, explanation: "Private labour receives social validation through commodity exchange and socially necessary conditions." }
    ]
  },
  {
    id: "labour-value", number: 6, moduleId: "value", title: "Labour and value", eyebrow: "Volume I · Chapters 1 & 7", duration: 20,
    description: "Untangle concrete and abstract labour, socially necessary labour time, and the distinction between value creation and value transfer.",
    objectives: ["Contrast concrete and abstract labour", "Define socially necessary labour time", "Explain how means of production enter value"],
    sections: [
      { heading: "Two aspects of labour", paragraphs: ["Concrete labour is labour in a particular useful form: tailoring, coding, baking. It produces use-values and is irreducibly diverse. Abstract labour is labour considered as expenditure of human productive capacity without regard to its concrete form; it is the social abstraction through which Marx analyzes value.", "These are not two separate activities performed one after another. They are two aspects of the same labour under commodity production."] },
      { heading: "Socially necessary labour time", paragraphs: ["The magnitude of value is determined by labour time socially necessary to produce a use-value under normal conditions, with average skill and intensity. Changes in productivity alter this magnitude: if the labour required per unit falls, the value per unit falls, other things equal.", "This is not an empirical stopwatch theory of each transaction. It identifies a regulating social relation behind changing exchange ratios and prices."] },
      { heading: "Creating and transferring", paragraphs: ["In production, living labour adds new value while the value of used-up means of production is transferred to the product. A machine does not add its entire value to one item; depreciation transfers a portion. Raw material value likewise reappears in the product.", "This distinction becomes central when Marx separates constant capital from variable capital. It also clarifies why increasing productivity can reduce unit value while increasing total output and surplus value."] }
    ],
    example: { title: "A bakery’s oven", body: "Flour’s value passes into bread as it is used. The oven transfers value gradually through wear. The baker’s current labour both preserves these values in useful products and adds new value." },
    distinction: "The labour theory of value here is not the claim that physical labour alone creates every use-value. Nature and existing means of production contribute materially to wealth.",
    source: { label: "Capital I, Chapter 1, Sections 1–2", url: "https://www.marxists.org/archive/marx/works/1867-c1/ch01.htm" },
    furtherReading: { label: "Capital I, Chapter 7: Labour-process and valorization", url: "https://www.marxists.org/archive/marx/works/1867-c1/ch07.htm" },
    quiz: [
      { question: "Concrete and abstract labour are…", options: ["Two aspects of the same labour", "Manual and digital jobs", "Paid and unpaid work only", "Two competing theories of price"], answer: 0, explanation: "Useful particular labour and labour as abstract social expenditure coexist in commodity production." },
      { question: "How does an used-up machine contribute value?", options: ["By creating unlimited new value", "By transferring value gradually through depreciation", "By setting wages", "By eliminating labour"], answer: 1, explanation: "Means of production transfer their existing value; they are not the source of new value in Marx’s account." }
    ]
  },
  {
    id: "money-capital", number: 7, moduleId: "value", title: "From money to capital", eyebrow: "Volume I · Chapters 3–6", duration: 19,
    description: "Follow money’s functions and discover why the circuit M–C–M′ requires a very special commodity: labour-power.",
    objectives: ["Identify money’s main functions", "Contrast C–M–C with M–C–M′", "Explain the problem of surplus value in circulation"],
    sections: [
      { heading: "Money is more than a convenient token", paragraphs: ["Marx develops money through the functions of measure of values, medium of circulation, and money proper—hoarding, means of payment, and world money. These functions emerge from generalized commodity exchange; money is not merely a clever invention that removes every contradiction of barter.", "Because money can store value and postpone purchase, it also makes separation between sale and purchase possible. That separation matters for later crisis analysis."] },
      { heading: "Two different circuits", paragraphs: ["In C–M–C, a commodity is sold to buy another: the aim is use-value. In M–C–M′, money is advanced to buy commodities and sell for more money. The aim is an increment, M′ minus M. The second circuit has no self-evident stopping point and gives capital its dynamic form.", "The capitalist is not simply anyone possessing money. Money functions as capital when it is thrown into this self-expanding movement."] },
      { heading: "The general formula’s puzzle", paragraphs: ["If commodities exchange at their values, equal exchange alone cannot explain an overall increment. If some sellers systematically overcharge others, redistribution may enrich one party but does not explain surplus value for the class as a whole.", "Marx’s solution is that the capitalist buys a commodity whose consumption creates more value than its own value: labour-power. The explanation therefore moves from circulation into production without denying that realization in exchange remains necessary."] }
    ],
    example: { title: "Buying to use versus buying to increase", body: "Selling vegetables to buy shoes is oriented toward use. Advancing money to buy materials and labour-power in order to sell output for more money is oriented toward valorization." },
    distinction: "M′ = M + ΔM names the form of self-expanding value. It does not yet explain where ΔM comes from; labour-power and production provide that explanation.",
    source: { label: "Capital I, Chapter 4: The general formula for capital", url: "https://www.marxists.org/archive/marx/works/1867-c1/ch04.htm" },
    lab: "circuit",
    quiz: [
      { question: "What distinguishes M–C–M′ from C–M–C?", options: ["It uses coins only", "Its driving aim is an increment of money", "It excludes commodities", "It occurs only online"], answer: 1, explanation: "The advance of money for more money gives capital its characteristic circuit." },
      { question: "Why does equal exchange pose a problem for explaining aggregate surplus value?", options: ["It makes all prices zero", "Simple resale at value does not itself create an aggregate increment", "It abolishes money", "It prevents all trade"], answer: 1, explanation: "Marx seeks a source of new value, not merely redistribution through unequal exchange." }
    ]
  },
  {
    id: "fetishism", number: 8, moduleId: "value", title: "Commodity fetishism", eyebrow: "Volume I · Chapter 1, Section 4", duration: 16,
    description: "See how relations between people appear as relations between things, and why this appearance is socially real rather than a simple mistake.",
    objectives: ["Define commodity fetishism", "Explain the social reality of appearances", "Connect fetishism to later forms such as interest-bearing capital"],
    sections: [
      { heading: "Things seem to speak for themselves", paragraphs: ["In commodity society, producers relate to one another through the exchange of products. Their social relations consequently appear as objective properties and movements of things: prices rise, money commands, capital ‘earns.’ Fetishism names this inversion in which definite relations among people take the fantastic form of relations among things.", "The point is not that consumers are superficial or love shopping too much. Even a highly critical person must navigate prices and wages as objective constraints."] },
      { heading: "Appearance is not mere illusion", paragraphs: ["A price really can determine whether a household eats or a firm survives. Marx’s critique does not dismiss these appearances as hallucinations. It asks how they are produced and what they conceal. Social relations become objectively present in forms that seem independent of the people reproducing them.", "This gives ideology critique a precise task: not only correcting false beliefs, but explaining why social practice continually generates plausible appearances."] },
      { heading: "Beyond the commodity", paragraphs: ["Later volumes deepen fetishistic forms. In interest-bearing capital, money appears to breed money simply by being lent. In the ‘trinity formula,’ profit, rent, and wages appear as naturally separate revenues generated by capital, land, and labour. Tracing these forms back to social production is one thread connecting the three volumes."] }
    ],
    example: { title: "‘The market decided’", body: "The phrase can obscure the investment choices, ownership rights, policy frameworks, and labour relations behind an outcome. Markets have real coercive effects, but their apparent impersonality is itself socially organized." },
    distinction: "Fetishism is not a synonym for consumerism, superstition, or personal vanity. It is a form of objectivity arising from social relations mediated by things.",
    source: { label: "Capital I, Chapter 1: The fetishism of commodities", url: "https://www.marxists.org/archive/marx/works/1867-c1/ch01.htm#S4" },
    furtherReading: { label: "Capital III, Chapter 48: The trinity formula", url: "https://www.marxists.org/archive/marx/works/1894-c3/ch48.htm" },
    quiz: [
      { question: "Commodity fetishism describes…", options: ["A preference for luxury goods", "Social relations appearing as properties and relations of things", "Any false advertising", "Collecting rare objects"], answer: 1, explanation: "The concept concerns the objective social form through which human relations appear." },
      { question: "Why is fetishism not just a mistaken opinion?", options: ["Because prices and money exert real constraints produced by social practice", "Because commodities are alive", "Because criticism is impossible", "Because everyone agrees about value"], answer: 0, explanation: "The appearances are grounded in actual social relations, not merely individual confusion." }
    ]
  }
];
