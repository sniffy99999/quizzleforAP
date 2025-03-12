
//(“Document: DOMContentLoaded Event - Web APIs | MDN,” 2023)
const questionPool = {
    "In a predator-prey relationship, the predator is an organism that eats another organism (the prey).": {
        "q1": {
            question: "Which of the following would be considered a top predator in the tundra?",
            options: ["Arctic fox", "Arctic hare", "Mosquitoes", "Caribou"],
            correctAnswer: "Arctic fox",
            difficulty: "easy"
        },
        "q2": {
            question: "In the savanna, which would be most likely considered prey?",
            options: ["Lions", "Hyenas", "Cheetahs", "Gazelles"],
            correctAnswer: "Gazelles",
            difficulty: "easy"
        }
    },
    "Symbiosis is a close and long-term interaction between two species in an ecosystem. Types of symbiosis include mutualism, commensalism, and parasitism.": {
        "q3": {
            question: "A robin is a bird that collects small sticks that have fallen on the ground and uses them to build a nest in a tree to lay its eggs. This type of relationship is best described by:",
            options: ["Mutualism", "Commensalism", "Parasitism", "Predation"],
            correctAnswer: "Commensalism",
            difficulty: "hard"
        },
        "q4": {
            question: "The remora is a common fish that follows large sharks and eats parasites off the shark’s skin. This type of relationship is best described by:",
            options: ["Mutualism", "Commensalism", "Parasitism", "Predation"],
            correctAnswer: "Mutualism",
            difficulty: "easy"
        },
        "q5": {
            question: "A tick is commonly found in white-tailed deer around the United States. The tick climbs the long grasses to get onto the deer that pass by to feed on the blood. This type of relationship is best described by:",
            options: ["Mutualism", "Commensalism", "Parasitism", "Predation"],
            correctAnswer: "Parasitism",
            difficulty: "easy"
        }
    },
    "Competition can occur within or between species in an ecosystem where there are limited resources. Resource partitioning— using the resources in different ways, places, or at different times—can reduce the negative impact of competition on survival.": {
        "q6": {
            question: "The woodpeckers of North America have many species that can live in the same forest, with each species eating a different diet than others. This is an example of:",
            options: ["Interspecific Competition", "Intraspecific Competition", "Resource Partitioning", "Carrying Capacity"],
            correctAnswer: "Resource Partitioning",
            difficulty: "hard"
        }
    },
    "A biome contains characteristic communities of plants and animals that result from, and are adapted to, its climate.": {
        "q7": {
            question: "An area that contains plants and animals that are adapted to its environment is called:",
            options: ["Biome", "Habitat", "Natural Territory", "Wilderness"],
            correctAnswer: "Biome",
            difficulty: "easy"
        }
    },
    "Major terrestrial biomes include taiga, temperate rainforests, temperate seasonal forests, tropical rainforests, shrubland, temperate grassland, savanna, desert, and tundra.": {
        "q8": {
            question: "Which forest biome has short growing seasons with significant variations in daylight hours?",
            options: ["Temperate rainforest", "Desert", "Tropical rainforest", "Taiga"],
            correctAnswer: "Taiga",
            difficulty: "hard"
        },
        "q9": {
            question: "Which biome experiences poor soil quality and uniform temperatures all year round?",
            options: ["Temperate rainforest", "Desert", "Tropical rainforest", "Taiga"],
            correctAnswer: "Tropical rainforest",
            difficulty: "hard"
        },
        "q10": {
            question: "Which biome experiences a rainy and dry season and is home to large grazing animals?",
            options: ["Temperate rainforest", "Desert", "Tropical rainforest", "Savanna"],
            correctAnswer: "Savanna",
            difficulty: "easy"
        },
        "q11": {
            question: "Which biome experiences poor soil quality and low annual rainfall?",
            options: ["Temperate rainforest", "Desert", "Tropical rainforest", "Savanna"],
            correctAnswer: "Desert",
            difficulty: "easy"
        
        }    
    },
    "The global distribution of nonmineral terrestrial natural resources, such as water and trees for lumber, varies because of some combination of climate, geography, latitude and altitude, nutrient availability, and soil. ": {
        "q12": {
            question: "The variation between biomes in the world is primarily due to:",
            options: ["Human population density variations around the world", "Climate, latitude, soil type, and nutrient availability", "High and low tides, ocean currents, and trade winds", "Seismic activity resulting in earthquakes and volcanic eruptions"],
            correctAnswer: "Climate, latitude, soil type, and nutrient availability",
            difficulty: "hard"
            }
    },
    "The worldwide distribution of biomes is dynamic; the distribution has changed in the past and may again shift because of global climate changes. ": {
        "q13": {
            question: "Areas such as the chaparrals in California are experiencing issues with large-scale fires caused by climate change. This is an indicator of:",
            options: ["Desertification", "Increased human development", "Loss of biodiversity", "Acid Rain"],
            correctAnswer: "Desertification",
            difficulty: "hard"
            }
    },
    "Freshwater biomes include streams, rivers, ponds, and lakes. These freshwater biomes are a vital resource for drinking water.": {
        "q14": {
            question: "Lakes and ponds are essential for:",
            options: ["Electricity generation", "Fossil Fuel mining", "Salt Manufacturing", "Drinking water"],
            correctAnswer: "Drinking water",
            difficulty: "hard"
            }
    },
    "Marine biomes include oceans, coral reefs, marshland, and estuaries. Algae in marine biomes supply a large portion of the Earth’s oxygen, and also take in carbon dioxide from the atmosphere.": {
        "q15": {
            question: "The algae in marine biomes are primarily responsible for:",
            options: ["Food for human consumption", "The El Nino effect", "Oxygen production", "Fossil fuel production"],
            correctAnswer: "Oxygen production",
            difficulty: "easy"
            }
    },
    "The global distribution of nonmineral marine natural resources, such as different types of fish, varies because of some combination of salinity, depth, turbidity, nutrient availability, and temperature.": {
         "q16": {   
            question: "Salinity, depth, turbidity, and temperature are most likely to affect populations such as:",
            options: ["Fish", "Whales", "Snakes", "Sea birds"],
            correctAnswer: "Fish",
            difficulty: "hard"
            }
    },
    "The carbon cycle is the movement of atoms and molecules containing the element carbon between sources and sinks. ": {
        "q17": {   
           question: "An example of a carbon sink includes: ",
           options: ["Industrial factories", "Car emissions", "Oceans", "Cellular respiration of plants"],
           correctAnswer: "Oceans",
           difficulty: "hard"
        },
        "q18": {
            question: "An example of a carbon source includes:",
            options: ["Old growth forests", "Forest fires", "Mangrove forests", "Soils in the Boreal Forest"],
            correctAnswer: "Forest fires",
            difficulty: "easy"
        
        }  
   },
   "Some of the reservoirs in which carbon compounds occur in the carbon cycle hold those compounds for long periods of time, while some hold them for relatively short periods of time.  ": {
        "q19": {
            question: "Which of the following examples store carbon for a geologically long time?",
            options: ["Ocean Water", "Sea Grasses", "Photosynthesis of mosses", "Sedimentary Rocks"],
            correctAnswer: "Sedimentary Rocks",
            difficulty: "easy"
        }
    },
    "Carbon cycles between photosynthesis and cellular respiration in living things.  ": {
        "q20": {
            question: "Photosynthesis and cellular respiration are significant components of the carbon cycle. Which of the following best explains this process?",
            options: ["Photosynthesis by producers removes carbon dioxide from the atmosphere, while cellular respiration returns Carbon dioxide to the atmosphere.", "Both photosynthesis and carbon dioxide convert carbon molecules into carbon dioxide that plants can absorb into their roots.", "Photosynthesis by herbivores traps carbon dioxide from the air, while cellular respirate converts oxygen into carbon dioxide.", "None of these are correct"],
            correctAnswer: "Photosynthesis by producers removes carbon dioxide from the atmosphere, while cellular respiration returns Carbon dioxide to the atmosphere.",
            difficulty: "hard"
        }
    },
    "Plant and animal decomposition have led to the storage of carbon over millions of years. The burning of fossil fuels quickly moves that stored carbon into atmospheric carbon, in the form of carbon dioxide.  ": {
        "q21": {
            question: "How does the combustion of fossil fuels affect the carbon cycle?",
            options: ["It removes carbon from the air and sequesters it in fossil fuels.", "It prevents carbon from being cycled through the carbon cycle.", "It reduces atmospheric carbon levels by converting it into carbon dioxide.", "It quickly releases sequestered carbon into the atmosphere."],
            correctAnswer: "It quickly releases sequestered carbon into the atmosphere.",
            difficulty: "hard"
        }
    },
    "The nitrogen cycle is the movement of atoms and molecules containing the element nitrogen between sources and sinks. ": {
        "q22": {
            question: "Which of the following best describes the nitrogen cycle?",
            options: ["The movement of nitrogen molecules between plants and animals.", "The movement of nitrogen molecules between the atmosphere and the ocean.", "The movement of nitrogen molecules between sources and sinks in the environment.", "The movement of nitrogen molecules from the soil directly to the atmosphere without involving living organisms."],
            correctAnswer: "The movement of nitrogen molecules between sources and sinks in the environment.",
            difficulty: "hard"
        }
    },
    "Most of the reservoirs in which nitrogen compounds occur in the nitrogen cycle hold those compounds for relatively short periods of time. ": {
        "q23": {
            question: "Which of the following is true about nitrogen reservoirs and the nitrogen cycle?",
            options: ["Nitrogen compounds in reservoirs are held for millions of years.", "Most nitrogen reservoirs hold nitrogen compounds for relatively short periods of time. ", "Nitrogen reservoirs primarily exist in the form of fossil fuels and are rarely cycled.", "The nitrogen cycle does not involve reservoirs; nitrogen compounds are continuously cycled without being stored."],
            correctAnswer: "Most nitrogen reservoirs hold nitrogen compounds for relatively short periods of time.",
            difficulty: "hard"
        }
    },
    "Nitrogen fixation is the process in which atmospheric nitrogen is converted into a form of nitrogen (primarily ammonia) that is available for uptake by plants and that can be synthesized into plant tissue.  ": {
        "q24": {
            question: "What is nitrogen fixation?",
            options: ["The process of converting nitrogen in plant tissue back into atmospheric nitrogen.", "The process of converting atmospheric nitrogen into a usable form, such as ammonia, for plant uptake", "The process of plants directly absorbing atmospheric nitrogen without conversion.", "The process of releasing nitrogen from decaying plant material into the atmosphere."],
            correctAnswer: "The process of converting atmospheric nitrogen into a usable form, such as ammonia, for plant uptake",
            difficulty: "hard"
        }
    },
    "The atmosphere is the major reservoir of nitrogen. ": {
        "q25": {
            question: "The largest nitrogen reservoir is:",
            options: ["The ocean.", "Sedimentary Rocks ", "Living matter", "Atmosphere"],
            correctAnswer: "Atmosphere",
            difficulty: "easy"
        }
    },
    "The phosphorus cycle is the movement of atoms and molecules containing the element phosphorus between sources and sinks.   ": {
        "q26": {
            question: "What is the phosphorus cycle?",
            options: ["The movement of phosphorus atoms and molecules exclusively between living organisms and the atmosphere.", "The movement of phosphorus atoms and molecules between sources and sinks in the environment, including soil, rocks, water, and organisms. ", "The cycling of phosphorus atoms directly between the ocean and the atmosphere, bypassing terrestrial ecosystems.", "The process by which phosphorus atoms are permanently removed from the environment through geological activity."],
            correctAnswer: "The movement of phosphorus atoms and molecules between sources and sinks in the environment, including soil, rocks, water, and organisms.",
            difficulty: "hard"
        }
    },
    "The major reservoirs of phosphorus in the phosphorus cycle are rock and sediments that contain phosphorus-bearing minerals.   ": {
        "q27": {
            question: "The primary storage of phosphorus is in:",
            options: ["The atmosphere.", "The ocean ", "Rocks", "Algae."],
            correctAnswer: "Rocks.",
            difficulty: "easy"
        }
    },
    "There is no atmospheric component in the phosphorus cycle, and the limitations this imposes on the return of phosphorus from the ocean to land make phosphorus naturally scarce in aquatic and many terrestrial ecosystems. In undisturbed ecosystems, phosphorus is the limiting factor in biological systems.  ": {
        "q28": {
            question: "Which of the following cycles has no atmospheric component?",
            options: ["Nitrogen.", "Water ", "Carbon", "Phosphorus."],
            correctAnswer: "Phosphorus.",
            difficulty: "easy"
        }
    },
    "The oceans are the primary reservoir of water at the Earth’s surface, with ice caps and groundwater acting as much smaller reservoirs.  ": {
        "q29": {
            question: "What is the primary reservoir of water?",
            options: ["Oceans.", "Streams, Rivers, Ponds.", "Glaciers", "Groundwater."],
            correctAnswer: "Glaciers",
            difficulty: "easy"
        }
    },
    "Primary productivity is the rate at which solar energy (sunlight) is converted into organic compounds via photosynthesis over a unit of time.   ": {
        "q30": {
            question: "Which of the following biomes would have the highest levels of primary productivity?",
            options: ["Savanna.", "Temperate Grassland", "Tropical Rainforest", "Desert"],
            correctAnswer: "Savanna",
            difficulty: "easy"
        }
    },
    "Net primary productivity is the rate of energy storage by photosynthesizers in a given area, after subtracting the energy lost to respiration.   ": {
        "q31": {
            question: "What is the gross primary productivity of a forest with a net primary productivity of 45000 kcal/m2/year and a respiration rate of 25000 kcal/m2/year?",
            options: ["70000 kcal/m2/year", "20000 kcal/m2/year", "45000 kcal/m2/year", "90000 kcal/m2/year"],
            correctAnswer: "70000 kcal/m2/year",
            difficulty: "hard"
        }
    },
    "Most red light is absorbed in the upper 1m of water, and blue light only penetrates deeper than 100m in the clearest water.   ": {
        "q32": {
            question: "How does the absorption of red and blue light in aquatic ecosystems affect photosynthesis?",
            options: ["Red light penetrates deeper than blue light, allowing photosynthesizers to thrive at depths greater than 100m.", "Most red light is absorbed within the upper 1m of water, and blue light penetrates deeper, requiring photosynthesizers to adapt to low light conditions at greater depths.", "Blue light is entirely absorbed in the upper 1m of water, leaving only red light for photosynthesis at greater depths.", "Photosynthesizers in aquatic ecosystems rely on ultraviolet light at depths greater than 100m to perform photosynthesis."],
            correctAnswer: "Most red light is absorbed within the upper 1m of water, and blue light penetrates deeper, requiring photosynthesizers to adapt to low light conditions at greater depths.",
            difficulty: "hard"
        }
    },
    "All ecosystems depend on a continuous inflow of high-quality energy in order to maintain their structure and function of transferring matter between the environment and organisms via biogeochemical cycles.  ": {
        "q33": {
            question: "Why is a continuous inflow of high-quality energy essential for ecosystems?",
            options: ["It allows ecosystems to convert matter into energy for environmental storage.", "It sustains the structure and function of ecosystems by driving the transfer of matter through biogeochemical cycles.", "It ensures that energy is stored indefinitely within organisms, preventing its loss from the system.", "It eliminates the need for organisms to participate in biogeochemical cycles."],
            correctAnswer: "It sustains the structure and function of ecosystems by driving the transfer of matter through biogeochemical cycles.",
            difficulty: "hard"
        }
    },
    "In terrestrial and near-surface marine communities, energy flows from the sun to producers in the lowest trophic levels and then upward to higher trophic levels.  ": {
        "q34": {
            question: "Which of the following is in the correct order of trophic levels?",
            options: ["Producers -> Detrivores -> Decomposers -> Herbivores", "Autotrophs -> Producers -> Herbivores -> Carnivores", "Producers -> Secondary Consumers -> Primary Consumers -> Tertiary Consumers", "Producers -> Herbivores -> Carnivores -> Decomposers"],
            correctAnswer: "Producers -> Herbivores -> Carnivores -> Decomposers",
            difficulty: "easy"
        }
    },
    "The 10% rule approximates that in the transfer of energy from one trophic level to the next, only about 10% of the energy is passed on.   ": {
        "q35": {
            question: "If an ecosystem has 60,000KJ of energy available at the producer level. How much would be available for the tertiary consumers?",
            options: ["60,000KJ", "6000KJ", "600KJ", "60KJ"],
            correctAnswer: "60KJ",
            difficulty: "easy"
        }
    },
    "The loss of energy that occurs when energy moves from lower to higher trophic levels can be explained through the laws of thermodynamics. ": {
        "q36": {
            question: "How does energy change as it moves up the trophic levels in a food chain?",
            options: ["Energy remains constant as it moves up the food web, each level receiving all from the previous level.", "Some energy is lost to the environment as heat.", "Energy increases as it moves from lower to higher trophic levels.", "Energy is conserved at the trophic level by photosynthesis in each trophic level."],
            correctAnswer: "Some energy is lost to the environment as heat.",
            difficulty: "easy"
        }
    },
    "A food web is a model of an interlocking pattern of food chains that depicts the flow of energy and nutrients in two or more food chains.  ": {
        "q37": {
            question: "What does a food web represent in a habitat?",
            options: ["A single food chain shows the flow of energy.", "A predator-prey relationship that is balanced by the carrying capacity. ", "An energy flow diagram where energy moves from producers to primary consumers.", "An interconnected system of multiple food chains that show the flow of energy."],
            correctAnswer: "An interconnected system of multiple food chains that show the flow of energy.",
            difficulty: "easy"
        }
    },
    "Biodiversity in an ecosystem includes genetic, species, and habitat diversity.  ": {
        "q38": {
            question: "Biodiversity can be measured in:",
            options: ["Indicator species and endemic species", "The number of habitats and their pollution levels.", "The number of species and genetic diversity.", "The amount of biotic and abiotic factors found in habitat."],
            correctAnswer: "The number of species and genetic diversity.",
            difficulty: "easy"
        }
    },
    "Ecosystems that have a larger number of species are more likely to recover from disruptions.   ": {
        "q39": {
            question: "A habitat that is more stable is more likely to be:",
            options: ["Small with few established organisms.", "Large with few established organisms.", "Small with many different species.", "Large with many different species."],
            correctAnswer: "Large with many different species.",
            difficulty: "easy"
        }
    },
    "Loss of habitat leads to a loss of specialist species, followed by a loss of generalist species. It also leads to reduced numbers of species that have large territorial requirements.  ": {
        "q40": {
            question: "Which species is more threatened by rapid changes to the environment?",
            options: ["Generalist species", "r-selected species", "Specialist species", "K-Selected species."],
            correctAnswer: "Specialist species",
            difficulty: "hard"
        }
    },
    "Species richness refers to the number of different species found in an ecosystem. ": {
        "q41": {
            question: "The number of different species in an environment is called:",
            options: ["Species richness", "Species eveness", "Genetic Diversity", "Ecosystem succession"],
            correctAnswer: "Species richness",
            difficulty: "hard"
        }
    },
    "There are four categories of ecosystem services: provisioning, regulating, cultural, and supporting.": {
        "q42": {
            question: "Which of the following is an example of ecosystem provisioning?",
            options: ["The scenic beauty of a hike in a forest", "Flood mitigation by wetlands", "Wood harvested for building materials", "Pollination of agricultural crops by bees"],
            correctAnswer: "Wood harvested for building materials",
            difficulty: "hard"
        },
        "q43": {
            question: "Which of the following is an example of ecosystem regulation?",
            options: ["The scenic beauty of a hike in a forest", "Flood mitigation by wetlands", "Wood harvested for building materials", "Pollination of agricultural crops by bees"],
            correctAnswer: "Flood mitigation by wetlands",
            difficulty: "hard"
        },
        "q44": {
            question: "Which of the following is an example of cultural ecosystem services?",
            options: ["The scenic beauty of a hike in a forest", "Flood mitigation by wetlands", "Wood harvested for building materials", "Pollination of agricultural crops by bees"],
            correctAnswer: "The scenic beauty of a hike in a forest",
            difficulty: "easy"
        },
        "q45": {
            question: "Which of the following is an example of supporting ecological services?",
            options: ["The scenic beauty of a hike in a forest", "Flood mitigation by wetlands", "Wood harvested for building materials", "Pollination of agricultural crops by bees"],
            correctAnswer: "Soil formation and nutrient cycling",
            difficulty: "easy"
        
        }    
    },
    "Anthropogenic activities can disrupt ecosystem services, potentially resulting in economic and ecological consequences.": {
        "q46": {
            question: "Which of the following is an anthropogenic activity?",
            options: ["Volcanic Eruptions", "Forest Fire caused by a lightning strike", "Combustion of fossil fuels for industry", "The migration patterns of the humpback whales"],
            correctAnswer: "Combustion of fossil fuels for industry",
            difficulty: "hard"
        }
    },
    "Island biogeography is the study of the ecological relationships and distribution of organisms on islands, and of these organisms’ community structures.": {
        "q47": {
            question: "Which island would most likely have the lowest level of biodiversity?",
            options: ["Small and near the mainland", "Large and near mainland", "Small and far from the mainland", "Large and far from the mainland"],
            correctAnswer: "Large and near mainland",
            difficulty: "easy"
        }
    },
    "Islands have been colonized in the past by new species arriving from elsewhere. ": {
        "q48": {
            question: "Islands have been colonized in the past by new species arriving from elsewhere. This process is known as:",
            options: ["Island biogeography", "Ecological sucession", "Invasive species introduction", "Adaptive radiation"],
            correctAnswer: "Island biogeography",
            difficulty: "easy"
        }
    },
    "Ecological tolerance can apply to individuals and to species": {
        "q49": {
            question: "An animal living in a range of abiotic factors is called:",
            options: ["Ecological tolerance", "Ecological succession", "Eutrophication", "Deforestation caused by slash and burn"],
            correctAnswer: "Ecological tolerance",
            difficulty: "hard"
        }
    },
    "Succession in a disturbed ecosystem will affect the total biomass, species richness, and net productivity over time.": {
        "q50": {
            question: "Biodiversity overtime after a disturbance will tend to:",
            options: ["Decrease", "Increase", "Remain the same", "Increase initially, then decrease"],
            correctAnswer: "Inchrease",
            difficulty: "easy"
        }
    },
    "Specialist species tend to be advantaged in habitats that remain constant, while generalist species tend to be advantaged in habitats that are changing.": {
        "q51": {
            question: "A rapidly changing environment is more likely to be habituated by:",
            options: ["Specialist Species", "Generalist Species", "Endemic Species", "Keystone Species"],
            correctAnswer: "Generalist Species",
            difficulty: "hard"
        }
    },
    "K-selected species tend to be large, have few offspring per reproduction event, live in stable environments, expend significant energy for each offspring, mature after many years of extended youth and parental care, have long life spans/life expectancy, and reproduce more than once in their lifetime. Competition for resources in K-selected species’ habitats is usually relatively high. ": {
        "q52": {
            question: "An animal that has parental care, long life expectancy and have high competition in their habitat is most likely to be:",
            options: ["Specialist Species", "Generalist Species", "K-Selected Species", "r-Selected Species"],
            correctAnswer: "K-Selected Species",
            difficulty: "hard"
        }
    },
    "r-selected species tend to be small, have many offspring, expend or invest minimal energy for each offspring, mature early, have short life spans, and may reproduce only once in their lifetime. Competition for resources in r-selected species’ habitats is typically relatively low.  ": {
        "q53": {
            question: "An animal that may only reproduce once in their life tends to be small and invest little in each offspring tend to be:",
            options: ["Specialist Species", "Generalist Species", "K-Selected Species", "r-Selected Species"],
            correctAnswer: "r-Selected Species",
            difficulty: "easy"
        }
    },
    "Biotic potential refers to the maximum reproductive rate of a population in ideal conditions. ": {
        "q54": {
            question: "What does biotic potential refer to?",
            options: ["The maximum reproductive rate of a population in ideal conditions.", "The ability of a population to adapt to changing environmental conditions.", "The actual number of offspring produced under natural conditions.", "The impact of environmental factors that limit population growth."],
            correctAnswer: "The maximum reproductive rate of a population in ideal conditions.",
            difficulty: "hard"
        }
    },
    "Many species have reproductive strategies that are not uniquely r-selected or K-selected, or they change in different conditions at different times.  ": {
        "q55": {
            question: "A type two survivorship curve corresponds best to:",
            options: ["K-Strategist", "r-Strategist", "neither K or R or may change", "keystone"],
            correctAnswer: "neither K or R or may change",
            difficulty: "hard"
        }
    },
    "K-selected species are typically more adversely affected by invasive species than r-selected species, which are minimally affected by invasive species. Most invasive species are r-selected species": {
        "q56": {
            question: "Which type of species are more adversely affected by invasive species?",
            options: ["K-Strategist", "r-Strategist", "keystone", "all of these"],
            correctAnswer: "K-Strategist",
            difficulty: "hard"
        }
    },
    "A survivorship curve is a line that displays the relative survival rates of a cohort—a group of individuals of the same age—in a population, from birth to the maximum age reached by any one cohort member. There are Type I, Type II, and Type III curves. ": {
        "q57": {
            question: "A type one survivorship curve corresponds best to:",
            options: ["K-Strategist", "r-Strategist", "keystone", "neither K or R may chaange"],
            correctAnswer: "K-Strategist",
            difficulty: "easy"
        }
    },
    "Survivorship curves differ for K-selected and r-selected species, with K-selected species typically following a Type I or Type II curve and r-selected species following a Type III curve. ": {
        "q58": {
            question: "A type three survivorship curve corresponds best to:",
            options: ["K-Strategist", "r-Strategist", "keystone", "neither K or R may chaange"],
            correctAnswer: "r-Strategist",
            difficulty: "easy"
        }
    },
    "When a population exceeds its carrying capacity (carrying capacity can be denoted as K), overshoot occurs. There are environmental impacts of population overshoot, including resource depletion.": {
        "q59": {
            question: "What happens when a population exceeds its carrying capacity (K)?",
            options: ["The population stabilizes without any environmental impact.", "Overshoot occurs, potentially leading to resource depletion and environmental stress", "The population decreases immediately due to predator activity.", "The carrying capacity increases to accommodate the population."],
            correctAnswer: "Overshoot occurs, potentially leading to resource depletion and environmental stress",
            difficulty: "hard"
        }
    },
    "A major ecological effect of population overshoot is dieback of the population (often severe to catastrophic) because the lack of available resources leads to famine, disease, and/or conflict.": {
        "q60": {
            question: "After a population reaches the carrying capacity, which of the following is most likely to occur?",
            options: ["The population continues to grow, although at a much slower rate.", "The population continues to grow exponentially until there is no more space.", "The population experiences dieback from a lack of resources.", "The population decreases and continues to decrease until extinction."],
            correctAnswer: "The population experiences dieback from a lack of resources.",
            difficulty: "hard"
        }
    },
    "Population growth is limited by environmental factors, especially by the available resources and space. Population growth is limited by environmental factors, especially by the available resources and space. ": {
        "q61": {
            question: "What primarily limits population growth?",
            options: ["The ability of a population to reproduce quickly.", "The amount of energy a species can produce.", "Environmental factors, such as available resources and space.", "The genetic diversity within the population."],
            correctAnswer: "Environmental factors, such as available resources and space.",
            difficulty: "easy"
        }
    },
    "Resource availability and the total resource base are limited and finite over all scales of time.  ": {
        "q62": {
            question: "Why is resource availability considered limited and finite over all scales of time?",
            options: ["Because resources regenerate instantly regardless of use.", "Because the Earth's total resource base cannot sustain unlimited growth.", "Because technological advances eliminate the need for resources,", "Because human consumption has no impact on resource depletion."],
            correctAnswer: "Because the Earth's total resource base cannot sustain unlimited growth.",
            difficulty: "easy"
        }
    },
    " When the resources needed by a population for growth are abundant, population growth usually accelerates. ": {
        "q63": {
            question: "When resources are plentiful, population growth tends to:",
            options: ["Decrease", "Remain constant", "Increase", "Unable to determine"],
            correctAnswer: "Increase",
            difficulty: "easy"
        }
    },
    "When the resource base of a population shrinks, the increased potential for unequal distribution of resources will ultimately result in increased mortality, decreased fecundity, or both, resulting in population growth declining to, or below, carrying capacity. ": {
        "q64": {
            question: "When resources are scarce, population growth tends to:",
            options: ["Decrease", "Remain constant", "Increase", "Unable to determine"],
            correctAnswer: "Decrease",
            difficulty: "easy"
        }
    },
    "Population growth rates can be interpreted from age structure diagrams by the shape of the structure.  ": {
        "q65": {
            question: "How can population growth rates be interpreted from age structure diagrams?",
            options: ["By analyzing the shape of the diagram, which indicates the relative proportion of different age groups.", "By calculating the total population size.", "By observing the geographical distribution of individuals", "By examining the genetic traits of the population."],
            correctAnswer: "By analyzing the shape of the diagram, which indicates the relative proportion of different age groups.",
            difficulty: "hard"
        }
    },
    "A rapidly growing population will, as a rule, have a higher proportion of younger people compared to stable or declining populations": {
        "q66": {
            question: "A rapidly growing population will have an age structure diagram of:",
            options: ["A diagram with a broad base that narrows sharply toward the top", "A rectangular-shaped diagram with equal proportions across all age groups.", "A diagram with a narrow base and a wider top.", "Inverted pyramid shape with more elderly than younger individuals."],
            correctAnswer: "A diagram with a broad base that narrows sharply toward the top",
            difficulty: "hard"
        }
    },
    "Total fertility rate (TFR) is affected by the age at which females have their first child, educational opportunities for females, access to family planning, and government acts and policies.  ": {
        "q67": {
            question: "The total fertility rate is most affected by:",
            options: ["access to food and water", "access to shelter and employment", "access to family planning and education for women", "access to a high quality of life by safe labor conditions"],
            correctAnswer: "access to family planning and education for women",
            difficulty: "easy"
        }
    },
    "If fertility rate is at replacement levels, a population is considered relatively stable.  ": {
        "q68": {
            question: "If fertility level is at the replacement level, the population is considered to be:",
            options: ["growing", "decreasing", "remaining stable", "increasing then decreasing in a cyclical pattern"],
            correctAnswer: "remaining stable",
            difficulty: "easy"
        }
    },
    "Factors associated with infant mortality rates include whether mothers have access to good healthcare and nutrition. Changes in these factors can lead to changes in infant mortality rates over time. ": {
        "q69": {
            question: "Factors associated with a lower infant mortality rates include:",
            options: ["Access to good healthcare and nutrition ", "A lower educational level of the parents", "The climate of the region", "Little to no access to prenatal care"],
            correctAnswer: "Access to good healthcare and nutrition ",
            difficulty: "easy"
        }
    },
    "Birth rates, infant mortality rates, and overall death rates, access to family planning, access to good nutrition, access to education, and postponement of marriage all affect whether a human population is growing or declining.  ": {
        "q70": {
            question: "Which factors influence whether a human population is growing or declining?",
            options: ["Birth rates, infant mortality rates, overall death rates, access to family planning, and postponement of marriage.", "Access to good nutrition, access to education, and cultural traditions.", "Access to family planning, access to good nutrition, access to education, and postponement of marriage.", "All of these."],
            correctAnswer: "All of these.",
            difficulty: "hard"
        }
    },







};


const topics = {
    1: "In a predator-prey relationship, the predator is an organism that eats another organism (the prey).",
    2: "Symbiosis is a close and long-term interaction between two species in an ecosystem. Types of symbiosis include mutualism, commensalism, and parasitism.",
    3: "Competition can occur within or between species in an ecosystem where there are limited resources. Resource partitioning— using the resources in different ways, places, or at different times—can reduce the negative impact of competition on survival.",
    4: "A biome contains characteristic communities of plants and animals that result from, and are adapted to, its climate.",
    5: "Major terrestrial biomes include taiga, temperate rainforests, temperate seasonal forests, tropical rainforests, shrubland, temperate grassland, savanna, desert, and tundra.",
    6: "The global distribution of nonmineral terrestrial natural resources, such as water and trees for lumber, varies because of some combination of climate, geography, latitude and altitude, nutrient availability, and soil.",
    7: "The worldwide distribution of biomes is dynamic; the distribution has changed in the past and may again shift because of global climate changes.",
    8: "Freshwater biomes include streams, rivers, ponds, and lakes. These freshwater biomes are a vital resource for drinking water. ",
    9: "Marine biomes include oceans, coral reefs, marshland, and estuaries. Algae in marine biomes supply a large portion of the Earth’s oxygen, and also take in carbon dioxide from the atmosphere.",
    10: "The global distribution of nonmineral marine natural resources, such as different types of fish, varies because of some combination of salinity, depth, turbidity, nutrient availability, and temperature.",
    11: "The carbon cycle is the movement of atoms and molecules containing the element carbon between sources and sinks.",
    12: "Some of the reservoirs in which carbon compounds occur in the carbon cycle hold those compounds for long periods of time, while some hold them for relatively short periods of time. ",
    13: "Carbon cycles between photosynthesis and cellular respiration in living things. ",
    14: "Plant and animal decomposition have led to the storage of carbon over millions of years. The burning of fossil fuels quickly moves that stored carbon into atmospheric carbon, in the form of carbon dioxide. ",
    15: "Most of the reservoirs in which nitrogen compounds occur in the nitrogen cycle hold those compounds for relatively short periods of time. ",
    16: "Nitrogen fixation is the process in which atmospheric nitrogen is converted into a form of nitrogen (primarily ammonia) that is available for uptake by plants and that can be synthesized into plant tissue. ",
    17: "The atmosphere is the major reservoir of nitrogen.",
    18: "The phosphorus cycle is the movement of atoms and molecules containing the element phosphorus between sources and sinks. ",
    19: "The major reservoirs of phosphorus in the phosphorus cycle are rock and sediments that contain phosphorus-bearing minerals. ",
    20: "There is no atmospheric component in the phosphorus cycle, and the limitations this imposes on the return of phosphorus from the ocean to land make phosphorus naturally scarce in aquatic and many terrestrial ecosystems. In undisturbed ecosystems, phosphorus is the limiting factor in biological systems.",
    21: "The oceans are the primary reservoir of water at the Earth’s surface, with ice caps and groundwater acting as much smaller reservoirs.",
    22: "Primary productivity is the rate at which solar energy (sunlight) is converted into organic compounds via photosynthesis over a unit of time. ",
    23: "Net primary productivity is the rate of energy storage by photosynthesizers in a given area, after subtracting the energy lost to respiration. ",
    24: "Most red light is absorbed in the upper 1m of water, and blue light only penetrates deeper than 100m in the clearest water. ",
    25: "All ecosystems depend on a continuous inflow of high-quality energy in order to maintain their structure and function of transferring matter between the environment and organisms via biogeochemical cycles. ",
    26: "The 10% rule approximates that in the transfer of energy from one trophic level to the next, only about 10% of the energy is passed on. ",
    27: "The loss of energy that occurs when energy moves from lower to higher trophic levels can be explained through the laws of thermodynamics.",
    28: "A food web is a model of an interlocking pattern of food chains that depicts the flow of energy and nutrients in two or more food chains. ",
    29: "Biodiversity in an ecosystem includes genetic, species, and habitat diversity. ",
    30: "Loss of habitat leads to a loss of specialist species, followed by a loss of generalist species. It also leads to reduced numbers of species that have large territorial requirements. ",
    31: "Species richness refers to the number of different species found in an ecosystem.",
    32: "There are four categories of ecosystem services: provisioning, regulating, cultural, and supporting.",
    33: "Anthropogenic activities can disrupt ecosystem services, potentially resulting in economic and ecological consequences.",
    34: "Island biogeography is the study of the ecological relationships and distribution of organisms on islands, and of these organisms’ community structures.",
    35: "Islands have been colonized in the past by new species arriving from elsewhere. ",
    36: " An animal living in a range of abiotic factors is called:",
    37: "Succession in a disturbed ecosystem will affect the total biomass, species richness, and net productivity over time.",
    38: "Specialist species tend to be advantaged in habitats that remain constant, while generalist species tend to be advantaged in habitats that are changing.",
    39: "K-selected species tend to be large, have few offspring per reproduction event, live in stable environments, expend significant energy for each offspring, mature after many years of extended youth and parental care, have long life spans/life expectancy, and reproduce more than once in their lifetime. Competition for resources in K-selected species’ habitats is usually relatively high. ",
    40: "r-selected species tend to be small, have many offspring, expend or invest minimal energy for each offspring, mature early, have short life spans, and may reproduce only once in their lifetime. Competition for resources in r-selected species’ habitats is typically relatively low. ",
    41: "Biotic potential refers to the maximum reproductive rate of a population in ideal conditions.",
    42: "Many species have reproductive strategies that are not uniquely r-selected or K-selected, or they change in different conditions at different times. ",
    43: "K-selected species are typically more adversely affected by invasive species than r-selected species, which are minimally affected by invasive species. Most invasive species are r-selected species",
    44: "A survivorship curve is a line that displays the relative survival rates of a cohort—a group of individuals of the same age—in a population, from birth to the maximum age reached by any one cohort member. There are Type I, Type II, and Type III curves. ",
    45: "Survivorship curves differ for K-selected and r-selected species, with K-selected species typically following a Type I or Type II curve and r-selected species following a Type III curve.",
    46: "When a population exceeds its carrying capacity (carrying capacity can be denoted as K), overshoot occurs. There are environmental impacts of population overshoot, including resource depletion.",
    47: "A major ecological effect of population overshoot is dieback of the population (often severe to catastrophic) because the lack of available resources leads to famine, disease, and/or conflict.",
    48: "Population growth is limited by environmental factors, especially by the available resources and space. ",
    49: "Resource availability and the total resource base are limited and finite over all scales of time. ",
    50: " When the resources needed by a population for growth are abundant, population growth usually accelerates. ",
    51: "When the resource base of a population shrinks, the increased potential for unequal distribution of resources will ultimately result in increased mortality, decreased fecundity, or both, resulting in population growth declining to, or below, carrying capacity",
    52: "Population growth rates can be interpreted from age structure diagrams by the shape of the structure. ",
    53: "A rapidly growing population will, as a rule, have a higher proportion of younger people compared to stable or declining populations",
    54: "Total fertility rate (TFR) is affected by the age at which females have their first child, educational opportunities for females, access to family planning, and government acts and policies. ",
    55: "If fertility rate is at replacement levels, a population is considered relatively stable. ",
    56: "Factors associated with infant mortality rates include whether mothers have access to good healthcare and nutrition. Changes in these factors can lead to changes in infant mortality rates over time.",
    57: "Birth rates, infant mortality rates, and overall death rates, access to family planning, access to good nutrition, access to education, and postponement of marriage all affect whether a human population is growing or declining. ",
};  