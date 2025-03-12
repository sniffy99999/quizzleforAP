
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
            options: ["The ocean", "Sedimentary Rocks ", "Living matter", "Atmosphere"],
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
            options: ["The atmosphere", "The ocean ", "rocks", "algae"],
            correctAnswer: "rocks",
            difficulty: "easy"
        }
    },
    "There is no atmospheric component in the phosphorus cycle, and the limitations this imposes on the return of phosphorus from the ocean to land make phosphorus naturally scarce in aquatic and many terrestrial ecosystems. In undisturbed ecosystems, phosphorus is the limiting factor in biological systems.  ": {
        "q28": {
            question: "Which of the following cycles has no atmospheric component?",
            options: ["Nitrogen", "Water ", "Carbon", "Phosphorus"],
            correctAnswer: "Phosphorus.",
            difficulty: "easy"
        }
    },
    "The oceans are the primary reservoir of water at the Earth’s surface, with ice caps and groundwater acting as much smaller reservoirs.  ": {
        "q29": {
            question: "What is the primary reservoir of water?",
            options: ["Oceans", "Streams, Rivers, Ponds.", "Glaciers", "Groundwater"],
            correctAnswer: "Ocean",
            difficulty: "easy"
        }
    },
    "Primary productivity is the rate at which solar energy (sunlight) is converted into organic compounds via photosynthesis over a unit of time.   ": {
        "q30": {
            question: "Which of the following biomes would have the highest levels of primary productivity?",
            options: ["Savanna.", "Temperate Grassland", "Tropical Rainforest", "Desert"],
            correctAnswer: "Tropical Rainforest",
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
            options: ["The scenic beauty of a hike in a forest", "Flood mitigation by wetlands", "Wood harvested for building materials", "Soil formation and nutrient cycling"],
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
            options: ["Island biogeography", "Ecological succession", "Invasive species introduction", "Adaptive radiation"],
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
    "Population growth can be affected by both density-independent factors, such as major storms, fires, heat waves, or droughts, and density-dependent factors, such as access to clean water and air, food availability, disease transmission, or territory size.   ": {
        "q71": {
            question: "Which of the following factors can affect population growth?",
            options: ["Density-independent factors like storms and droughts, and density-dependent factors like food availability and disease transmission. ", "Only density-independent factors such as wildfires and heatwaves.", "Only density-dependent factors such as territory size and access to clean water.", "Only the size of the population and the birth rate."],
            correctAnswer: "Density-independent factors like storms and droughts, and density-dependent factors like food availability and disease transmission. ",
            difficulty: "hard"
        }
    },
    "The rule of 70 states that dividing the number 70 by the percentage population growth rate approximates the population’s doubling time.  ": {
        "q72": {
            question: "How long does a population take to double if it's growth rate is 10%?",
            options: ["7 years", "35 years", "2 years", "18 years"],
            correctAnswer: "7 years",
            difficulty: "easy"
        }
    },
    "The demographic transition refers to the transition from high to lower birth and death rates in a country or region as development occurs and that country moves from a preindustrial to an industrialized economic system. This transition is typically demonstrated through a four-stage demographic transition model (DTM) ": {
        "q73": {
            question: "What does the demographic transition describe?",
            options: ["The natural growth of a population without any external influences.", "The replacement of rural areas with urban centers as a country industrializes.", "The rapid decline of a population due to sudden environmental changes.", "The shift from high to low birth and death rates as a country develops from a preindustrial to an industrialized economic system."],
            correctAnswer: "The shift from high to low birth and death rates as a country develops from a preindustrial to an industrialized economic system.",
            difficulty: "hard"
        }
    },
    "Characteristics of developing countries include higher infant mortality rates and more children in the workforce than developed countries. ": {
        "q74": {
            question: "A developing country would have the following characteristics of:",
            options: ["Higher life expectancy", "Less children in the workforce", "Lower total fertility rate", "Higher infant mortality rate"],
            correctAnswer: "Higher infant mortality rate",
            difficulty: "easy"
        }
    },
    "Convergent boundaries can result in the creation of mountains, island arcs, earthquakes, and volcanoes. ": {
        "q75": {
            question: "Which of the following can result in the creation of mountains?",
            options: ["Divergent Boundary", "Convergent Boundary", "Transform Boundary", "All of these"],
            correctAnswer: "Convergent Boundary",
            difficulty: "easy"
        }
    },
    "Divergent boundaries can result in seafloor spreading, rift valleys, volcanoes, and earthquakes.  ": {
        "q76": {
            question: "Which of the following results in seafloor spreading?",
            options: ["Divergent Boundary", "Convergent Boundary", "Transform Boundary", "All of these"],
            correctAnswer: "Divergent Boundary",
            difficulty: "easy"
        }
    },
    "Transform boundaries can result in earthquakes.  ": {
        "q77": {
            question: "The sliding of plates laterally that can result in earthquakes occurs in which of the following?",
            options: ["Divergent Boundary", "Convergent Boundary", "Transform Boundary", "All of these"],
            correctAnswer: "Transform Boundary",
            difficulty: "easy"
        }
    },
    "An earthquake occurs when stress overcomes a locked fault, releasing stored energy.  ": {
        "q78": {
            question: "Which of the following occurs when stress overcomes a locked fault, releasing stored energy?",
            options: ["Hurricanes", "Tornados", "Floods", "Earthquakes"],
            correctAnswer: "Earthquakes",
            difficulty: "easy"
        }
    },
    "Soils are formed when parent material is weathered, transported, and deposited. ": {
        "q79": {
            question: "What processes are involved in the formation of soils?",
            options: ["Chemical erosion, melting, and cooling", "Weathering, transportation, and deposition", "Sedimentation, evaporation, and crystallization", "Compaction, pressure, and volcanic activity"],
            correctAnswer: "Weathering, transportation, and deposition",
            difficulty: "hard"
        }
    },
    "Soils are generally categorized by horizons based on their composition and organic material.  ": {
        "q80": {
            question: "Which of the following soil horizons would be most likely to be a habitat for Earthworms?",
            options: ["O-Horizon", "B-Horizon", "C-Horizon", "All of these would be likely"],
            correctAnswer: "O-Horizon",
            difficulty: "hard"
        }
    },
    "Soils can be eroded by winds or water. Protecting soils can protect water quality as soils effectively filter and clean water that moves through them. ": {
        "q81": {
            question: "How does protecting soils benefit water quality?",
            options: ["Soils prevent evaporation of water.", "Soils filter and clean water as it moves through them.", "Soils increase the salinity of water, making it cleaner.", "Soils absorb all water to prevent erosion."],
            correctAnswer: "Soils filter and clean water as it moves through them.",
            difficulty: "hard"
        }
    },
    "Water holding capacity—the total amount of water soil can hold—varies with different soil types. Water retention contributes to land productivity and fertility of soils. ": {
        "q82": {
            question: "Which soil type retains the most water?",
            options: ["Clay", "Sand.", "Silt", "Organic Matter"],
            correctAnswer: "Clay",
            difficulty: "easy"
        }
    },
    "The particle size and composition of each soil horizon can affect the porosity, permeability, and fertility of the soil.  ": {
        "q83": {
            question: "Which of the following has the highest particle size? ",
            options: ["Clay", "Sand", "Silt", "All of these have the same particle size"],
            correctAnswer: "Sand",
            difficulty: "easy"
        }
    },
    "The atmosphere is made up of major gases, each with its own relative abundance. ": {
        "q84": {
            question: "Which gas makes up the largest component of the atmosphere? ",
            options: ["Carbon Dioxide", "Oxygen", "Carbon Monoxide", "Nitrogen"],
            correctAnswer: "Nitrogen",
            difficulty: "easy"
        }
    },
    "The layers of the atmosphere are based on temperature gradients and include the troposphere, stratosphere, mesosphere, thermosphere, and exosphere.  ": {
        "q85": {
            question: "This layer of the atmosphere contains the ozone layer? ",
            options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
            correctAnswer: "Stratosphere",
            difficulty: "easy"
        },
         "q86": {
        question: "This layer of the atmosphere is the closest to the Earth’s surface?",
        options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermospehre"],
        correctAnswer: "Troposhere",
        difficulty: "easy"
         }
    },
    "Global wind patterns primarily result from the most intense solar radiation arriving at the equator, resulting in density differences and the Coriolis effect. ": {
        "q87": {
            question: "What is the primary cause of global wind patterns? ",
            options: ["The rotation of the Earth creating magnetic fields", "Unequal solar radiation at the equator, resulting in density differences and the Coriolis effect", "Tectonic plate movements altering atmospheric currents", "Ocean currents driving air movements in the atmosphere"],
            correctAnswer: "Unequal solar radiation at the equator, resulting in density differences and the Coriolis effect",
            difficulty: "hard"
        }
    },
    "Characteristics of a given watershed include its area, length, slope, soil, vegetation types, and divides with adjoining watersheds. ": {
        "q88": {
            question: "Which of the following are characteristics of a given watershed? ",
            options: ["Elevation, climate, temperature, and wildlife diversity", "Area, length, slope, soil, vegetation types, and divides with adjoining watersheds", "River flow speed, water clarity, and depth", "Precipitation patterns, cloud cover, and humidity"],
            correctAnswer: "Area, length, slope, soil, vegetation types, and divides with adjoining watersheds",
            difficulty: "hard"
        }
    },
    "Incoming solar radiation (insolation) is the Earth’s main source of energy and is dependent on season and latitude.  ": {
        "q89": {
            question: "Earth’s main source of energy is from: ",
            options: ["The sun", "Geothermal", "Wind energy", "Tidal energy"],
            correctAnswer: "The sun",
            difficulty: "easy"
        }
    },
    "The highest solar radiation per unit area is received at the equator and decreases toward the poles.   ": {
        "q89": {
            question: "Which biome receives the most solar radiation intensity? ",
            options: ["Tundra", "Taiga", "Deciduous Forest", "Rainforest"],
            correctAnswer: "Rainforest",
            difficulty: "easy"
        }
    },
    "The solar radiation received at a location on the Earth’s surface varies seasonally, with the most radiation received during the location’s longest summer day and the least on the shortest winter day.  ": {
        "q90": {
            question: "Which of the following would experience the shortest day in December? ",
            options: ["London, England", "Sydney, Australia", "New York, USA", "Nuuk, Greenland"],
            correctAnswer: "Nuuk, Greenland",
            difficulty: "easy"
        }
    },
    "The tilt of Earth’s axis of rotation causes the Earth’s seasons and the number of hours of daylight in a particular location on the Earth’s surface ": {
        "q91": {
            question: "What is the reason why the Earth experiences seasons? ",
            options: ["The movement of tectonic plates", "Coriolis Effect", "The tilt of the Earth", "The Earth’s spin on its axis"],
            correctAnswer: "The tilt of the Earth",
            difficulty: "easy"
        }
    },
    "Weather and climate are affected not only by the sun’s energy but by geologic and geographic factors, such as mountains and ocean temperature.  ": {
        "q92": {
            question: "Which factors affect weather and climate in addition to the sun’s energy?",
            options: ["Cloud composition and precipitation frequency", "Atmospheric oxygen levels and wind speed", "Geologic and geographic factors, such as mountains and ocean temperature", "Seasonal changes and daylight savings adjustments"],
            correctAnswer: "Geologic and geographic factors, such as mountains and ocean temperature",
            difficulty: "easy"
        }
    },
    "A rain shadow is a region of land that has become drier because a higher elevation area blocks precipitation from reaching the land. ": {
        "q93": {
            question: "What is a rain shadow?",
            options: ["A region that experiences frequent rainfall due to its proximity to large bodies of water", "A forested area that receives consistent rainfall throughout the year ", "A region of land that becomes drier because a higher elevation area blocks precipitation from reaching the land ", "An area of low elevation that is shielded from wind and rain"],
            correctAnswer: "A region of land that becomes drier because a higher elevation area blocks precipitation from reaching the land",
            difficulty: "easy"
        }
    },
    "El Niño and La Niña are phenomena associated with changing ocean surface temperatures in the Pacific Ocean. These phenomena can cause global changes to rainfall, wind, and ocean circulation patterns. ": {
        "q94": {
            question: "What are El Niño and La Niña phenomena associated with, and how do they impact global weather patterns?",
            options: ["Changes in the Earth's axial tilt, affecting seasonal weather patterns globally", "Variations in solar radiation, leading to temperature shifts across the planet", "Shifting ocean surface temperatures in the Pacific Ocean, causing global changes to rainfall, wind, and ocean circulation patterns ", "Movements of tectonic plates, influencing regional wind patterns and rainfall"],
            correctAnswer: "Shifting ocean surface temperatures in the Pacific Ocean, causing global changes to rainfall, wind, and ocean circulation patterns",
            difficulty: "hard"
        }
    },
    "El Niño and La Niña are influenced by geological and geographic factors and can affect different locations in different ways. ": {
        "q95": {
            question: "What factors influence El Niño and La Niña, and how can they affect different locations?",
            options: ["Only ocean temperature, leading to consistent weather patterns worldwide", "Geological and geographic factors, causing varying effects on different locations", "Solar radiation and Earth's tilt, with no regional variation in impacts ", "Air pressure differences and the Coriolis effect, causing global climate cooling"],
            correctAnswer: "Geological and geographic factors, causing varying effects on different locations",
            difficulty: "hard"
        }
    },
    "The largest human use of freshwater is for irrigation (70%).  ": {
        "q96": {
            question: "What is the largest use for freshwater?",
            options: ["Fabrication in Industry", "Irrigation for agriculture", "Cooling of nuclear plants", "Cooking and bathing in households"],
            correctAnswer: "Irrigation for agriculture",
            difficulty: "easy"
        }
    },
    "Types of irrigation include drip irrigation, flood irrigation, furrow irrigation, drip irrigation, and spray irrigation.  ": {
        "q97": {
            question: "Which of the following irrigation techniques is the most efficient?",
            options: ["drip irrigation", "flood irrigation", "furrow irrigation", "spray irrigation"],
            correctAnswer: "drip irrigation",
            difficulty: "easy"
        }
    },
    "Waterlogging occurs when too much water is left to sit in the soil, which raises the water table of groundwater and inhibits plants’ ability to absorb oxygen through their roots.   ": {
        "q98": {
            question: "What occurs when too much water sits on the soil?",
            options: ["flood irrigation", "pesticide resistance", "slash and burn", "waterlogging"],
            correctAnswer: "waterlogging",
            difficulty: "easy"
        }
    },
    "The tragedy of the commons suggests that individuals will use shared resources in their own self-interest rather than in keeping with the common good, thereby depleting the resources.  ": {
        "q99": {
            question: "Which of the following is an example of tragedy of the commons?",
            options: ["insects developing resistance to pesticides", "farmers growing corn crops ", "mining in private land", "overfishing"],
            correctAnswer: "overfishing",
            difficulty: "easy"
        }
    },
    "Clearcutting can be economically advantageous but leads to soil erosion, increased soil and stream temperatures, and flooding.  ": {
        "q100": {
            question: "Which of the following is a negative consequence of clear cutting?",
            options: ["increased profits", "increased biodiversity", "increased soil erosion", "decreased run-off"],
            correctAnswer: "increased soil erosion",
            difficulty: "easy"
        }
    },
    "Furrow irrigation involves cutting furrows between crop rows and filling them with water. This system is inexpensive, but about 1/3 of the water is lost to evaporation and runoff. ": {
        "q101": {
            question: "Which of the following irrigation techniques involves making trenches in the crops and filling them with water?",
            options: ["flood irrigation", "furrow irrigation", "drip irrigation", "spray irrigation"],
            correctAnswer: "furrow irrigation",
            difficulty: "easy"
        }
    },
    "Flood irrigation involves flooding an agricultural field with water. This system sees about 20% of the water lost to evaporation and runoff. This can also lead to waterlogging of the soil. ": {
        "q102": {
            question: "Which of the following irrigation techniques can increase the chance of waterlogging the soil?",
            options: ["flood irrigation", "furrow irrigation", "drip irrigation", "spray irrigation"],
            correctAnswer: "flood irrigation",
            difficulty: "easy"
        }
    },
    "Spray irrigation involves pumping ground water into spray nozzles across an agricultural field. This system is more efficient than flood and furrow irrigation, with only 1/4 or less of the water lost to evaporation or runoff. However, spray systems are more expensive than flood and furrow irrigation, and also requires energy to run.  ": {
        "q103": {
            question: "Which of the following irrigation techniques involves extensive pipes and fixtures to implement?",
            options: ["flood irrigation", "furrow irrigation", "drip irrigation", "spray irrigation"],
            correctAnswer: "spray irrigation",
            difficulty: "easy"
        }
    },
    "Drip irrigation uses perforated hoses to release small amounts of water to plant roots. This system is the most efficient, with only about 5% of water lost to evaporation and runoff. However, this system is expensive and so is not often used.  ": {
        "q103": {
            question: "Which of the following is the most efficient form of irrigation?",
            options: ["flood irrigation", "furrow irrigation", "drip irrigation", "spray irrigation"],
            correctAnswer: "drip irrigation",
            difficulty: "easy"
        }
    },
    "Salinization occurs when the salts in groundwater remain in the soil after the water evaporates. Over time, salinization can make soil toxic to plants. ": {
        "q104": {
            question: "What occurs in agricultural crops when they are irrigated, and the water evaporates overtime?",
            options: ["acidification", "pesticide resistance", "erosion", "salination"],
            correctAnswer: "salination",
            difficulty: "easy"
        }
    },
    "Aquifers can be severely depleted if overused for agricultural irrigation, as has happened to the Ogallala Aquifer in the central United States. ": {
        "q105": {
            question: "What can be severely depleted if overused for agricultural irrigation?",
            options: ["aquifers", "bays", "oceans", "glaciers"],
            correctAnswer: "aquifers",
            difficulty: "easy"
        }
    },
    "One consequence of using common pest-control methods such as pesticides, herbicides, fungicides, rodenticides, and insecticides is that organisms can become resistant to them through artificial selection. Pest control decreases crop damage by pest and increases crop yields.  ": {
        "q106": {
            question: "What is the disadvantage of using pesticides and herbicides?",
            options: ["all of these can occur ", "increased genetic diversity within the crops", "increased crop yields", "pests can become resistant to the pesticides"],
            correctAnswer: "pests can become resistant to the pesticides",
            difficulty: "easy"
        }
    },
    "Crops can be genetically engineered to increase their resistance to pests and diseases. However, using genetically engineered crops in planting or other ways can lead to loss of genetic diversity of that particular crop. ": {
        "q107": {
            question: "A disadvantage of GMO crops is that:",
            options: ["increased resistance to pests and diseases", "increased crop yields", "decreased genetic diversity", "increased pesticide usage"],
            correctAnswer: "decreased genetic diversity",
            difficulty: "hard"
        }
    },
    "Methods of meat production include concentrated animal feeding operations (CAFOs), also called feedlots, and free-range grazing. ": {
        "q108": {
            question: "Which of the following has the highest cost efficiency?",
            options: ["all of these are equal in efficiency", "organic farming", "free-range", "concentrated animal feeding operations (CAFOs)"],
            correctAnswer: "concentrated animal feeding operations (CAFOs)",
            difficulty: "hard"
        }
    },
    "Meat production is less efficient than agriculture; it takes approximately 20 times more land to produce the same amount of calories from meat as from plants. ": {
        "q109": {
            question: "Which of the following food-sources has the highest carbon footprint?",
            options: ["beef ", "corn", "chicken", "wheat"],
            correctAnswer: "beef",
            difficulty: "easy"
        }
    },
    "Forests contain trees that absorb pollutants and store carbon dioxide. The cutting and burning of trees releases carbon dioxide and contributes to climate change. ": {
        "q110": {
            question: "Cutting and burning of trees releases what gas into the atmosphere?",
            options: ["Mercury", "Sulfuric Oxide", "Oxygen", "Carbon Dioxide"],
            correctAnswer: "Carbon Dioxide ",
            difficulty: "easy"
        }
    },
    "The Green Revolution started a shift to new agricultural strategies and practices in order to increase food production, with both positive and negative results. Some of these strategies and methods are mechanization, genetically modified organisms (GMOs), fertilization, irrigation, and the use of pesticides.  ": {
        "q111": {
            question: "Which of the following is part of the green revolution?",
            options: ["reduced use of fertilizers", "reduced use of pesticides", "genetically modified organisms (GMOs)", "All of these are part of the Green Revolution"],
            correctAnswer: "genetically modified organisms (GMOs)",
            difficulty: "easy"
        }
    },
    "Mechanization of farming can increase profits and efficiency for farms. It can also increase reliance on fossil fuels.  ": {
        "q112": {
            question: "Which of the following increases the reliance on fossil fuels?",
            options: ["mechanization of farming", "crop rotation",  "cover crops”, “polycropping"],
            correctAnswer: "Mechanization of farming",
            difficulty: "easy"
        }
    },
    "Agricultural practices that can cause environmental damage include tilling, slashand-burn farming, and the use of fertilizers. ": {
        "q113": {
            question: "Which of the following agricultural practice does not increase soil erosion?",
            options: ["tilling", "slash-and-burn farming", "cover crops”, “all of these decrease soil erosion"],
            correctAnswer: "cover crops",
            difficulty: "easy"
        }
    },
    "Concentrated animal feeding operation (CAFOs) are used as a way to quickly get livestock ready for slaughter. They tend to be crowded, and animals are fed grains or feed that are not as suitable as grass. Additionally, feedlots generate a large amount of organic waste, which can contaminate ground and surface water. The use of feedlots are less expensive than other methods, which can keep costs to consumers down. ": {
        "q114": {
            question: "Which of the following is a benefit to Concentrated animal feeding operation(CAFOs)?",
            options: ["increased animal welfare ", "increased use of antibiotics", "meat is less expensive for the consumer", "generation of organic waste that can run-off into surface waters"],
            correctAnswer: "meat is less expensive for the consumer",
            difficulty: "easy"
        }
    },
    "Free range grazing allows animals to graze on grass during their entire lifecycle. Meat from free range animals tends to be free from antibiotics and other chemicals used in feedlots. Organic waste from these animals acts as fertilizer. Free range grazing requires large areas of land and the meat produced is more expensive for consumers.  ": {
        "q115": {
            question: "What type of grazing allows animals to graze on grass during their entire lifecycle?",
            options: ["organic", "free-range", "cage-free", "all of these can occur"],
            correctAnswer: "free-range",
            difficulty: "easy"
        }
    },
    "Overgrazing occurs when too many animals feed on a particular area of land. Overgrazing causes loss of vegetation, which leads to soil erosion.   ": {
        "q116": {
            question: "What occurs when too many animals feed on a particular area of land?",
            options: ["overgrazing", "reduced run-off", "decreased compaction of soil", "all of these can occur"],
            correctAnswer: "overgrazing",
            difficulty: "hard"
        }
    },
    "Overgrazing can cause desertification. Desertification is the degradation of low precipitation regions toward being increasingly arid until they become deserts.  ": {
        "q117": {
            question: "Which of the following can cause desertification?",
            options: ["overgrazing", "reduced run-off", "reversal of climate change", "all of these can"],
            correctAnswer: "overgrazing",
            difficulty: "hard"
        }
    },
    "Less consumption of meat could reduce CO2, methane, and N2O emissions; conserve water; reduce the use of antibiotics and growth hormones; and improve topsoil.  ": {
        "q118": {
            question: "Which of the following could reduce CO2, methane, and N2O emissions; conserve water; reduce the use of antibiotics and growth hormones; and improve topsoil.",
            options: ["decreased consumption of produce", "increased consumption of dairy", "less consumption of meat", "all of these can"],
            correctAnswer: "less consumption of meat ",
            difficulty: "easy"
        }
    },
    "Overfishing has led to the extreme scarcity of some fish species, which can lessen biodiversity in aquatic systems and harm people who depend on fishing for food and commerce.  ": {
        "q119": {
            question: "Which of the following can decrease biodiversity in aquatic systems?",
            options: ["enforcing speed limits for boats", "increased conservation", "overfishing", "all of these can"],
            correctAnswer: "overfishing",
            difficulty: "easy"
        }
    },
    "As the more accessible ores are mined to depletion, mining operations are forced to access lower grade ores. Accessing these ores requires increased use of resources that can cause increased waste and pollution.   ": {
        "q120": {
            question: "Which of the following is a consequence of mining?",
            options: ["increased soil erosion", "leeching of heavy metals", "increased carbon dioxide being emitted into the air", "all of these"],
            correctAnswer: "all of these",
            difficulty: "easy"
        }
    },
    "Surface mining is the removal of large portions of soil and rock, called overburden, in order to access the ore underneath. An example is strip mining, which removes the vegetation from an area, making the area more susceptible to erosion.  ": {
        "q121": {
            question: "Which type of mining is the removal of large portions of soil and rock?",
            options: ["surface mining", "pit mining", "strip mining", "placer mining"],
            correctAnswer: "strip mining",
            difficulty: "easy"
        }
    },
    "Mining wastes include the soil and rocks that are moved to gain access to the ore and the waste, called slag and tailings that remain when the minerals have been removed from the ore. Mining helps to provide low cost energy and material necessary to make products. The mining of coal can destroy habitats, contaminate ground water, and release dust particles and methane.  ": {
        "q122": {
            question: "Which of the following is a benefit of mining?",
            options: ["releases dust particles", "increased contamination of ground water", "increases habitat loss", "provides low cost energy"],
            correctAnswer: "provides low cost energy",
            difficulty: "easy"
        }
    },
    "As coal reserves get smaller, due to a lack of easily accessible reserves, it becomes necessary to access coal through subsurface mining, which is very expensive. ": {
        "q123": {
            question: "Which type of mining has the highest cost?",
            options: ["subsurface mining", "pit mining", "strip mining", "placer mining"],
            correctAnswer: "subsurface mining",
            difficulty: "easy"
        }
    },
    "Urbanization can lead to depletion of resources and saltwater intrusion in the hydrologic cycle.  ": {
        "q124": {
            question: "Overuse of groundwater near coastal waters can cause:",
            options: ["melting of permafrost", "saltwater intrusion", "methane release", "all of these"],
            correctAnswer: "saltwater intrusion",
            difficulty: "hard"
        }
    },
    "Urbanization, through the burning of fossil fuels and landfills, affects the carbon cycle by increasing the amount of carbon dioxide in the atmosphere.  ": {
        "q125": {
            question: " What does the burning of fossil fuels contribute most significantly to the atmosphere?",
            options: ["nitrous Oxide", "methane", "carbon dioxide", "water vapor"],
            correctAnswer: "carbon dioxide",
            difficulty: "hard"
        }
    },
    "Impervious surfaces are human-made structures—such as roads, buildings, sidewalks, and parking lots—that do not allow water to reach the soil, leading to flooding. ": {
        "q126": {
            question: " A new developer wants to reduce flooding in the local neighborhood. Which of the following would be the best surface for driveways to reduce flooding?",
            options: ["concrete", "asphalt", "gravel", "plastic lining"],
            correctAnswer: "gravel",
            difficulty: "hard"
        }
    },
    "Urban sprawl is the change in population distribution from high population density areas to low density suburbs that spread into rural lands, leading to potential environmental problems. ": {
        "q127": {
            question: "What is the change in population distribution from high-population-density areas to low-density suburbs that spread into rural lands, leading to potential environmental problems?",
            options: ["desertification", "urban heat island effect", "urban sprawl", "rain-shadow effect"],
            correctAnswer: "urban sprawl",
            difficulty: "easy"
        }
    },
    "Ecological footprints compare resource demands and waste production required for an individual or a society.": {
        "q128": {
            question: "Which of the following actions can reduce an individual’s ecological footprint?",
            options: ["eat more meat products", "walk to work", "purchase more products to stimulate the economy", "buy more plastic bottles"],
            correctAnswer: "walk to work",
            difficulty: "easy"
        }
    },
    "Sustainability refers to humans living on Earth and their use of resources without depletion of the resources for future generations. Environmental indicators that can guide humans to sustainability include biological diversity, food production, average global surface temperatures, and CO2 concentrations, human population, and resource depletion.": {
        "q129": {
            question: "Which of the following would increase the sustainability of the Earth for future generations?",
            options: ["increase consumption of meat and dairy products", "increased urban sprawl", "larger carbon footprint per individual", "lower human population"],
            correctAnswer: "lower human population",
            difficulty: "hard"
        }
    },
    "Sustainable yield is the amount of a renewable resource that can be taken without reducing the available supply.": {
        "q130": {
            question: "What is the amount of a renewable resource that can be taken without reducing the available supply?",
            options: ["carbon footprint", "sustainable yield", "unsupported yield", "by-catch"],
            correctAnswer: "sustainable yield",
            difficulty: "hard"
        }
    },
    "Methods to increase water infiltration include replacing traditional pavement with permeable pavement, planting trees, increasing the use of public transportation, and building up, not out.": {
        "q131": {
            question: "Which of the following could be used to increase water infiltration?",
            options: ["cutting down trees beside roadways", "building out, not up", "using permeable pavement", "all of these"],
            correctAnswer: "using permeable pavement",
            difficulty: "hard"
        }
    },
    "Integrated pest management (IPM) is a combination of methods used to effectively control pest species while minimizing disruption to the environment. These methods include biological, physical, and limited chemical methods such as biocontrol, intercropping, crop rotation, and natural predators of the pests.": {
        "q132": {
            question: "Which of the following is part of integrated pest management (IPM)?",
            options: ["reducing crop rotation", "building bat houses for natural predators", "monocropping", "use of pesticides"],
            correctAnswer: "building bat houses for natural predators",
            difficulty: "hard"
        }
    },
    "The use of integrated pest management (IPM) reduces the risk that pesticides pose to wildlife, water supplies, and human health.": {
        "q133": {
            question: "The use of integrated pest management (IPM) reduces the risk for all of these EXCEPT:",
            options: ["wildlife", "water supplies", "human health", "air quality"],
            correctAnswer: "air quality",
            difficulty: "easy"
        }
    },
    "Integrated pest management (IPM) minimizes disruptions to the environment and threats to human health but can be complex and expensive.": {
        "q134": {
            question: "What is a drawback to integrated pest management (IPM)?",
            options: ["increased pesticide use", "increased crop yield", "easy to implement", "expensive"],
            correctAnswer: "expensive",
            difficulty: "easy"
        }
    },
    "The goal of soil conservation is to prevent soil erosion. Different methods of soil conservation include contour plowing, windbreaks, perennial crops, terracing, no-till agriculture, and strip cropping.": {
        "q135": {
            question: "Which of the following agricultural techniques reduce soil erosion?",
            options: ["contour plowing", "terracing", "no-till agriculture", "all of these"],
            correctAnswer: "all of these",
            difficulty: "easy"
        }
    },
    "Strategies to improve soil fertility include crop rotation and the addition of green manure and limestone.": {
        "q136": {
            question: "Which of the following can increase soil fertility?",
            options: ["crop rotation", "addition of green manure", "addition of limestone", "all of these"],
            correctAnswer: "all of these",
            difficulty: "easy"
        }
    },
    "Rotational grazing is the regular rotation of livestock between different pastures in order to avoid overgrazing in a particular area.": {
        "q137": {
            question: "What is the regular rotation of livestock between different pastures in order to avoid overgrazing in a particular area:",
            options: ["contour plowing", "rotational grazing", "terracing farming", "all of these"],
            correctAnswer: "rotational grazing",
            difficulty: "easy"
        }
    },
    "Aquaculture has expanded because it is highly efficient, requires only small areas of water, and requires little fuel.": {
        "q138": {
            question: "What has expanded because it is highly efficient, requires only small areas of water, and requires little fuel?",
            options: ["polycropping", "beef farming", "aquaculture", "all of these"],
            correctAnswer: "aquaculture",
            difficulty: "easy"
        }
    },
    "Aquaculture can contaminate wastewater, and fish that escape may compete or breed with wild fish. The density of fish in aquaculture can lead to increases in diseases incidences, which can be transmitted to wildfish.": {
        "q139": {
            question: "What is a negative consequence to aquaculture?",
            options: ["contaminating nearby waters", "increasing disease incidences", "outcompeting wildfish", "all of these"],
            correctAnswer: "all of these",
            difficulty: "easy"
        }
    },
    "Some of the methods for mitigating deforestation include reforestation, using and buying wood harvested by ecologically sustainable forestry techniques, and reusing wood. ": {
        "q140": {
            question: "Which of the following practices mitigates deforestation?",
            options: ["reforestation", "slash-and-burn",  "selective cutting", "no-till agriculture"],
            correctAnswer: "reforestation", 
            difficulty: "easy"
        }
    },
    "Methods to protect forests from pathogens and insects include integrated pest management (IPM) and the removal of affected trees. ": {
        "q141": {
            question: "Which of the following is a method to protect forests from pathogens?",
            options: ["applying fertilizers", "planting new trees", "removal of affected trees", "all of these"],
            correctAnswer: "removal of affected trees",
            difficulty: "easy"
        }
    },
    "Prescribed burn is a method by which forests are set on fire under controlled conditions in order to reduce the occurrence of natural fires. ": {
        "q142": {
            question: "Which of the following reduces the severity of natural fires?",
            options: ["applied fertilizers", "prescribed burns", "decreased campfire regulations ", "all of these"],
            correctAnswer: "prescribed burns",
            difficulty: "easy"
        }
    },
    "Non-renewable energy sources are those that exist in a fixed amount and involve energy transformation that cannot be easily replaced. ": {
        "q143": {
            question: "Which of the following is a non-renewable energy source?",
            options: ["uranium deposits", "wood",  "solar", "hydroelectric"],
            correctAnswer: "uranium deposits",
            difficulty: "easy"
        }
    },
    "Renewable energy sources are those that can be replenished naturally, at or near the rate of consumption, and reused.": {
        "q144": {
            question: "Which of the following is a renewable energy source?",
            options: ["uranium deposits", "oil",  "solar", "coal"],
            correctAnswer: "solar",
            difficulty: "easy"
        }
    },
    "The use of energy resources is not evenly distributed between developed and developing countries.": {
        "q145": {
            question: "Which of the following countries use higher levels of energy per individual?",
            options: ["developing", "developed", "both countries use the same", "it is unknown"],
            correctAnswer: "developed",
            difficulty: "easy"
        }
    },
    "The most widely used sources of energy globally are fossil fuels.": {
        "q146": {
            question: "What is the most widely used source of energy worldwide?",
            options: ["fossil fuels", "wood", "solar", "hydroelectric"],
            correctAnswer: "fossil fuels",
            difficulty: "easy"
        }
    },
    "As the world becomes more industrialized, the demand for energy increases.": {
        "q147": {
            question: " As the world becomes more industrialized, the demand for energy will:",
            options: ["increase", "decrease", "remain the same", "is unknown"],
            correctAnswer: "increase", 
            difficulty: "easy"
        }
    },
    "Availability, price, and governmental regulations influence which energy sources people use and how they use them.": {
        "q148": {
            question: "Which of the following influence which energy sources people use and how they use them?",
            options: ["availability", "price", "governmental regulations", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Wood is commonly used as a field in the forms of firewood and charcoal. It is often used in developing countries because it is easily accessible.": {
        "q149": {
            question: "Which of the following is commonly used in developing countries for heating and cooking?",
            options: ["uranium deposits", "biomass", "coal", "solar"],
            correctAnswer: "biomass",
            difficulty: "easy"
        }
    },
    "Peat is partially decomposed organic material that can be burned for fuel.": {
        "q150": {
            question: "Which of the following is partially decomposed organic matter that can be burned for fuel?",
            options: ["uranium deposits", "methane", "coal", "peat"],
            correctAnswer: "peat",
            difficulty: "easy"
        }
    },
    "Three types of coal used for fuel are lignite, bituminous, and anthracite. Heat, pressure, and depth of burial contribute to the development of various coal types and their qualities.": {
        "q151": {
            question: "Which of the following types of coal has the highest grade for energy generation?",
            options: ["lignite", "bituminous", "anthracite", "all of these"],
            correctAnswer: "anthracite",
            difficulty: "easy"
        }
    },
    "Natural gas, the cleanest of the fossil fuels, is mostly methane.": {
        "q152": {
            question: "Natural gas contains mostly:",
            options: ["methane", "octane", "butane", "carbon dioxide"],
            correctAnswer: "methane",
            difficulty: "easy"
        }
    },
    "Crude oil can be recovered from tar sands, which are a combination of clay, sand, water and bitumen.": {
        "q153": {
            question: "Where can crude oil be recovered from?",
            options: ["hydroelectric dams", "tar sands", "windmills", "solar panels"],
            correctAnswer: "tar sands",
            difficulty: "easy"
        }
    },
    "Cogeneration occurs when a fuel source is used to generate both useful heat and electricity.": {
        "q154": {
            question: "What occurs when a fuel source is used to generate both useful heat and electricity?",
            options: ["cogeneration", "hybrid", "bioluminescence", "all of these"],
            correctAnswer: "cogeneration",
            difficulty: "easy"
        }

    },
    "The combustion of fossil fuels is a chemical reaction between the fuel and oxygen that yields carbon dioxide and water and releases energy.": {
        "q155": {
            question: "Combustion releases predominantly what gas into the atmosphere?",
            options: ["methane", "carbon dioxide", "carbon monoxide", "nitrogen gas"],
            correctAnswer: "carbon dioxide",
            difficulty: "easy"
        }
    },
    "Energy from fossil fuels is produced by burning those fuels to generate heat, which then turns water into steam. That steam turns a turbine, which generates electricity.": {
        "q156": {
            question: "Which energy source is produced by burning those fuels to generate heat, which then turns water into steam. That steam turns a turbine, which generates electricity?",
            options: ["fossil fuels", "solar", "hydroelectric", "geothermal"],
            correctAnswer: "fossil fuels",
            difficulty: "easy"
        }
    },
    "Humans use a variety of methods to extract fossil fuels from the earth for energy generation.": {
        "q157": {
            question: "Which of the following is common reason to extract fossil fuels from the ground?",
            options: ["furnace nuclear powerplants", "energy generation", "mining of precious metals", "all of these"],
            correctAnswer: "energy generation",
            difficulty: "easy"
        }
    },
    "Hydrologic fracturing(fracking) can cause groundwater contamination and the release of volatile organic compounds.": {
        "q158": {
            question: "Which of the following is a potential consequence of hydrologic fracturing(fracking)?",
            options: ["release of mercury vapor", "shifts in the continental plates", "groundwater contamination", "all of these"],
            correctAnswer: "groundwater contamination",
            difficulty: "easy"
        }
    },
    "Nuclear power is generated through fusion, where atoms of U-235, which are stored in the fuel rods, are split into smaller parts after being struck by a neutron. Nuclear fission releases a large amount of heat, which is used to generate steam, which powers a turbine and generates electricity.": {
        "q159": {
            question: "Nuclear power is generated through:",
            options: ["nuclear fusion", "nuclear fission", "chemical reaction", "physical reaction"],
            correctAnswer: "nuclear fusion",
            difficulty: "easy"
        }
    },
    "Radioactivity occurs when the nucleus of a radiative isotope loses energy by emitting radiation.": {
        "q160": {
            question: " Radioactivity occurs when the nucleus of a radiative isotope loses energy by:",
            options: ["carbon dioxide", "radiation", "photons", "lead"],
            correctAnswer: "radiation",
            difficulty: "easy"
        }
    },
    "Uranium-235 remains radioactive for a long time, which leads to the problems associated with the disposal of nuclear waste.": {
        "q161": {
            question: "A problem with the use of Nuclear power is:",
            options: ["minimum levels of energy provided", "radioactivity for workers", "release of sulfur dioxide into the air", "disposal of nuclear waste"],
            correctAnswer: "disposal of nuclear waste",
            difficulty: "easy"
        }
    },
    "Nuclear power generation is a non-renewable energy source. Nuclear power is considered a cleaner energy source because it does not produce air pollutants, but it does release thermal pollution and hazardous solid waste.": {
        "q162": {
            question: "What type of pollution does nuclear power release?",
            options: ["particulate matter", "VOC’s", "thermal pollution", "all of these"],
            correctAnswer: "thermal pollution",
            difficulty: "easy"
        }
    },
    "Three Mile Island, Chernobyl, and Fukushima are three cases where accidents or natural disasters led to the release of radiation. ": {
        "q163": {
            question: "Which of the following is an example of an accidental release of radiation occurred?",
            options: ["B.P Oil Spill", "Love Canal Disaster", "Exxon Valdez", "Chernobyl"],
            correctAnswer: "Chernobyl",
            difficulty: "easy"
        }
    },
    "Burning of biomass processes heat for energy at a relatively low cost, but it also produces carbon dioxide, carbon monoxide, nitrogen oxides, particulates, and volatiles organic compounds. The overharvesting of trees for fuel also causes deforestation ": {
        "q164": {
            question: "Which of the following is released by the burning of biomass?",
            options: ["carbon dioxide", "carbon monoxide”, particulate matter", "all of these"],
            correctAnswer: "all of these",
            difficulty: "easy"
        }
    },
    "Ethanol can be used as a substitute for gasoline. Burning ethanol does not introduce additional carbon into the atmosphere via combustion, but the energy return on energy investment for ethanol is low. ": {
        "q165": {
            question: "Which of the following combustions does not introduce additional carbon into the atmosphere, but the energy return is low?",
            options: ["wood", "diesel", "gasoline", "ethanol"],
            correctAnswer: "ethanol",
            difficulty: "easy"
        }
    },
    "Photovoltaic solar cells capture light energy from the sun and transform is directly into electrical energy. Their use is limited by the availability of sunlight.  ": {
        "q166": {
            question: "Which of the following captures light energy from the sun into electrical energy?",
            options: ["nuclear power", "photovoltaic cells", "hydroelectric", "geothermall"],
            correctAnswer: "photovoltaic cells",
            difficulty: "easy"
        }
    },
    "Active solar energy systems use solar energy to heat a liquid through mechanical and electric equipment to collect and store the energy captured from the sun. ": {
        "q167": {
            question: "Which of the following is required for active solar?",
            options: ["nuclear reaction", "photovoltaic cells", "hydroelectric", "geothermal"],
            correctAnswer: "photovoltaic cells",
            difficulty: "easy"
        }
    },
    "Passive solar energy systems absorb heat directly from the sun without the use of mechanical and electrical equipment, and energy cannot be collected or stored.": {
        "q168": {
            question: "Which of the following energy systems absorb heat directly from the sun without the use of mechanical and electrical equipment?",
            options: ["passive solar", "active solar", "hydroelectric", "geothermal"],
            correctAnswer: "passive solar",
            difficulty: "easy"
        }
    },
    "Solar energy systems have a low environmental impact and produce clean energy, but they can be expensive. Large solar energy farms may negatively impact desert ecosystems.": {
        "q169": {
            question: "Which of the following is a drawback of solar energy?",
            options: ["requires easily accessible materials", "requires little area", "no emissions", "expensive"],
            correctAnswer: "expensive",
            difficulty: "easy"
        }
    },
    "Hydroelectric power can be generated in several ways. Dams built across rivers collect water in reservoirs. The moving water can be used to spin a turbine. Turbines can also be placed in small rivers, where the flowing water spins the turbine.": {
        "q170": {
            question: "Which type of energy involves dams built across rivers to collect water in reservoirs?",
            options: ["geothermal", "hydroelectric", "solar", "tidal"],
            correctAnswer: "hydroelectric",
            difficulty: "easy"
        }
    },
    "Tidal energy uses the energy produce by tidal flows to turn a turbine.": {
        "q171": {
            question: "Tidal energy uses the energy produce by tidal flows to turn a: ",
            options: ["turbine", "generator", "wheel", "cooling tower"],
            correctAnswer: "turbine", 
            difficulty: "easy"
        }
    },
    "Hydroelectric power does not generate air pollution or waste, but construction of the power plants can be expensive, and there may be a loss of or change in habitats following the construction of dams.": {
        "q172": {
            question: "Which of the following is a drawback of hydroelectric power?",
            options: ["expensive", "changes habitats", "blocks fish migration", "all of these"],
            correctAnswer: "all of these",
            difficulty: "easy"
        }
    },
    "Geothermal energy is obtained by using the heat stored in the Earth’s interior to heat up water, which is brought back to the surface as steam. The steam is used to drive an electric generator.": {
        "q173": {
            question: "Which of the following energy sources energy is obtained by using the heat stored in the Earth’s interior to heat up water?",
            options: ["hydroelectric", "tidal", "geothermal", "solar"],
            correctAnswer: "geothermal",
            difficulty: "easy"
        }
    },
    "The cost of accessing geothermal energy can be prohibitively expensive, as is not easily accessible in many parts of the world. In addition, it can cause the release of hydrogen sulfide.": {
        "q174": {
            question: "Which of the following is a drawback of geothermal energy?",
            options: ["releases hydrogen sulfide", "not accessible in many parts of the world", "expensive", "all of these"],
            correctAnswer: "all of these",
            difficulty: "easy"
        }
    },
    "Hydrogen fuel cells are an alternate to non-renewable fuel sources. They use hydrogen as fuel, combining the hydrogen and oxygen in the air to form water and release energy (electricity) In the process. Water is the product (emission) of a fuel cell.": {
        "q175": {
            question: "What is the emission produced from Hydrogen fuel cells?",
            options: ["carbon dioxide", "water", "carbon monoxide", "nitrogen gas"],
            correctAnswer: "water",
            difficulty: "easy"
        }
    },
    "Hydrogen fuel cells have a low environmental impact and produce no carbon dioxide when the hydrogen is produced from water. However, the technology is expensive, and energy is still needed to create the hydrogen gas used in the fuel cell.": {
        "q176": {
            question: "Which of the following energy sources has a low environmental impact and produce no carbon dioxide as is produced from water?",
            options: ["tidal", "solar", "geothermal", "hydrogen fuel cells"],
            correctAnswer: "hydrogen fuel cells", 
            difficulty: "easy"
        }
    },
    "Wind turbines use the kinetic energy of moving air to spin a turbine, which in turn converts the mechanical energy of the turbine into electricity.": {
        "q177": {
            question: "What type of energy do wind turbines use from the moving air to spin a turbine?",
            options: ["potential energy", "kinetic energy", "chemical energy", "nuclear energy"],
            correctAnswer: "kinetic energy",
            difficulty: "easy"
        }
    },
    "Wind energy is a renewable, clean source of energy.  However, birds and bats may be killed if they fly into the spinning turbine blades.": {
        "q178": {
            question: "Which of the following a drawback of wind energy? ",
            options: ["expensive to install", "may be visually unappealing", "birds and bats may be killed by the spinning blades", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Some of the methods for conserving energy around a home include adjusting the thermostat to reduce the use of heat and air conditioning, conserving water, use of energy-efficient appliances, and conservation landscaping.": {
        "q179": {
            question: "Which of the following could conserve energy around the home? ",
            options: ["adjusting the thermostat", "conserving water", "energy-efficient appliances", "all of these"],
            correctAnswer: "all of these",
            difficulty: "easy"
        }
    },
    "Methods for conserving energy on a large scale include improving fuel economy for vehicles, using BEVs (battery electric vehicles) and hybrid vehicles, using public transportation, and implementing green building design features.": {
        "q180": {
            question: "Which of the following could conserve energy on a large scale?",
            options: ["battery electric vehicles (BEVs)", "public transportation", "hybrid vehicles", "all of these"],
            correctAnswer: "all of these",
            difficulty: "easy"
        }
    },
    "Coal combustion releases air pollutants including carbon dioxide, sulfur dioxide, toxic metals, and particulates.": {
        "q181": {
            question: "Which of the following could conserve energy on a large scale?",
            options: ["battery electric vehicles (BEVs)", "public transportation", "hybrid vehicles", "all of these"],
            correctAnswer: "all of these",
            difficulty: "easy"
        }
    },
    "The combustion of fossil fuels releases nitrogen oxides into the atmosphere. They lead to the production of ozone, the formation of photochemical smog, and conversion to nitric acid in the atmosphere, causing acid rain. Other pollutant produces by fossil fuel combustion including carbon monoxide, hydrocarbons, and particulate matter.": {
        "q182": {
            question: "Which of the following does the combustion of fossil fuels release into the atmosphere? ",
            options: ["nitrogen oxides", "carbon monoxide", "particulate matter", "all of these"],
            correctAnswer: "all of these",
            difficulty: "easy"
        }
    },
    "Air quality can be affected through the release of sulfur dioxide during the burning of fossil fuels, mainly diesel fuels.": {
        "q183": {
            question: "Which of the following fuels results in reduced air quality by the release of sulfur dioxide?",
            options: ["hydrogen fuel", "uranium fuel rods", "diesel fuel", "all of these"],
            correctAnswer: "diesel fuel",
            difficulty: "easy"
        }
    },
    " Through the Clean Air Act, the Environmental Protection Agency (EPA) regulated the use of lead, particularly in fuels, which dramatically decreased the amount of lead in the atmosphere.": {
        "q184": {
            question: "Which of the following are regulated by the Clean Air Act and the Environmental Protection Agency (EPA)?",
            options: ["lead", "particulate matter", "carbon monoxide", "all of these"],
            correctAnswer: "all of these",
            difficulty: "easy"
        }
    },
    "Photochemical smog is formed when nitrogen oxides and volatile organic hydrocarbons react with heat and sunlight to produce a variety of pollutants.": {
        "q185": {
            question: "Which of the following is formed when nitrogen oxides and volatile organic hydrocarbons react with heat and sunlight to produce a variety of pollutants?",
            options: ["photochemical smog", "sulfurous smog", "acid rain", "all of these"],
            correctAnswer: "photochemical smog", 
            difficulty: "easy"
        }
    },
    "Nitrogen oxide is produced early in the day. Ozone concentrations peak in the afternoon and are higher in the summer because ozone is produced by chemical reactions between oxygen and sunlight.": {
        "q186": {
            question: "Which of the following would have the highest ozone concentrations?",
            options: ["During the night during the winter", "During the afternoon in the summer", "During the morning in the winter", "During the morning in the summer"],
            correctAnswer: "During the afternoon in the summer", 
            difficulty: "hard"
        }
    },
    "Volatile organic compounds (VOCs), such as formaldehyde and gasoline, evaporate or sublimate at room temperature. Trees are a natural source of VOC’s.": {
        "q187": {
            question: "Which of the following is a source of Volatile Organic Compounds(VOCs)?",
            options: ["formaldehyde", "gasoline", "trees", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "hard"
        }
    },
    "Photochemical smog often forms in urban areas because of the large number of motor vehicles there.": {
        "q188": {
            question: "Which of the following is a source of photochemical smog in urban areas?",
            options: ["motor vehicles", "landfills", "coal powerplants", "all of these"],
            correctAnswer: "motor vehicles", 
            difficulty: "hard"
        }
    },
    "Photochemical smog can be reduced through the reduction of nitrogen oxide and VOCs": {
        "q189": {
            question: "Photochemical smog is produced by:",
            options: ["carbon dioxide", "nitrogen oxide", "mercury", "all of these"],
            correctAnswer: "nitrogen oxide", 
            difficulty: "hard"
        }
    },
    "Photochemical smog can harm human health in several ways, including causing respiratory problems and eye irritation.": {
        "q190": {
            question: "Photochemical smog can harm human health by:",
            options: ["respiratory irritant", "eye irritant", "cancer", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "hard"
        }
    },
    "During a thermal inversion, the normal temperature gradient in the atmosphere is altered as the air temperature at the Earth’s surface is cooler than the air at higher altitudes.": {
        "q191": {
            question: "What is the term for when the normal temperature gradient in the atmosphere is altered as the air temperature at the Earth’s surface is cooler than the air at higher altitudes.",
            options: ["rain shadow effect", "El Nino", "thermal inversion", "all of these"],
            correctAnswer: "thermal inversion", 
            difficulty: "hard"
        }
    },
    "Thermal inversion traps pollution close to the ground, especially smog and particulates.": {
        "q192": {
            question: "Which pollutants are trapped by thermal inversions?",
            options: ["smog", "particulate matter", "ozone", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "hard"
        }
    },
    "CO2 appears naturally in the atmosphere from sources such as respiration, decomposition, and volcanic eruptions.": {
        "q193": {
            question: "Which of the following are natural sources of carbon dioxide?",
            options: ["cellular respiration", "decomposition", "volcanic eruptions", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "hard"
        }
    },
    "Carbon monoxide is an indoor air pollutant that is classified as an asphyxiant.": {
        "q194": {
            question: "Which of the following gasses is a common indoor air pollutant that causes asphyxiation?",
            options: ["nitrogen oxide", "mercury", "ozone", "carbon monoxide"],
            correctAnswer: "carbon monoxide", 
            difficulty: "hard"
        }
    },
    "Indoor air pollutants can come from natural sources, human-made sources, and combustion.": {
        "q195": {
            question: "Which of the following is a source of indoor air pollutants?",
            options: ["natural sources", "human-made sources", "combustion", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "hard"
        }
    },
    "Common natural source indoor air pollutants include radon, mold, and dust.": {
        "q196": {
            question: "Which of the following are a common natural source of indoor air pollutatant?",
            options: ["radon", "mold", "dust", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Common human-made indoor air pollutants indoor air pollutants include insulation, Volatile Organic Compounds (VOCs) from furniture, paneling and carpets; formaldehyde from building materials, furniture upholstery, and carpeting, and lead from paints.": {
        "q197": {
            question: "Which of the following is a common human-made air pollutant?",
            options: ["insulation", "paint", "carpet", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Common combustion air pollutants include carbon monoxide, nitrogen oxides, sulfur dioxide, particulates and tobacco smoke.": {
        "q198": {
            question: "Which of the following is a common combustion air pollutant?",
            options: ["carbon monoxide", "nitrogen oxides", "sulfur dioxide", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Radon-222 is a naturally occurring radioactive gas that is produced by the decay of uranium found in some rocks and soils.": {
        "q199": {
            question: "Which of the following is a naturally occurring radioactive gas that is produced by the decay of uranium found in some rocks and soils.",
            options: ["Mercury", "Carbon monoxide", "Radon-222", "all of these"],
            correctAnswer: "Radon-222", 
            difficulty: "easy"
        }
    },
    "Radon gas can infiltrate homes as it moves up through the soil and enters homes via the basement or cracks in the walls or foundation. It is also dissolved in groundwater that enters the home through a well.": {
        "q200": {
            question: "Which of the following gasses can infiltrate homes as it moves up through the soil and enters homes via the basement or cracks in the walls or foundation.",
            options: ["Mercury vapor", "Carbon monoxide", "Radon gas", "all of these"],
            correctAnswer: "Radon gas", 
            difficulty: "easy"
        }
    },
    "Exposure to radon gas can lead to radon-induced lung cancer, which is the second leading cause of lung cancer in America.": {
        "q201": {
            question: "Which of the following gasses can  can lead to lung cancer, which is the second leading cause of lung cancer in America",
            options: ["Mercury vapor", "Carbon monoxide", "Radon gas", "all of these"],
            correctAnswer: "Radon gas", 
            difficulty: "easy"
        }
    },
    "Methods to reduce air pollutants include regulatory practices, conservation practices and alternative fuels.": {
        "q202": {
            question: "Which of the following can reduce air pollution?",
            options: ["regulatory practices", "conservation practices", "alternative fuels", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "A vapor recovery nozzle is an air pollution control device on a gasoline pump that prevents fumes form escaping into the atmosphere when fueling a motor vehicle.": {
        "q203": {
            question: "Which of the following is an air pollution control device on a gasoline pump that prevents fumes form escaping into the atmosphere when fueling a motor vehicle.",
            options: ["vapor recovery nozzle", "catalytic converter", "scrubbers", "all of these"],
            correctAnswer: "vapor recovery nozzle", 
            difficulty: "easy"
        }
    },
    "A catalytic converter is an air pollution control device for internal combustion engines that converts pollutants Carbon Monoxide, Nox, and hydrocarbons) in exhaust into less harmful molecules (CO2, N2, O2, and H2O).": {
        "q204": {
            question: "Which of the following is an air pollution control device for internal combustion engines that converts pollutants Carbon Monoxide, Nox, and hydrocarbons) in exhaust into less harmful molecules (CO2, N2, O2, and H2O).",
            options: ["vapor recovery nozzle", "catalytic converter", "scrubbers", "all of these"],
            correctAnswer: "catalytic converter", 
            difficulty: "easy"
        }
    },
    "Wet and dry scrubbers are air pollution control devices that remove particulate and/or gasses from industrial exhaust streams.": {
        "q205": {
            question: "Which of the following is an air pollution control devices that remove particulate and/or gasses from industrial exhaust streams?",
            options: ["vapor recovery nozzle", "catalytic converter", "scrubbers", "all of these"],
            correctAnswer: "scrubbers", 
            difficulty: "easy"
        }
    },
    "Methods to reduce air pollution from coal-burning power plants include scrubbers and electrostatic precipitators.": {
        "q206": {
            question: "Which of the following is a way to reduce air pollution from coal-burning powerplants?",
            options: ["electrostatic precipitators", "catalytic converter", "feedback loops", "all of these"],
            correctAnswer: "electrostatic precipitators", 
            difficulty: "easy"
        }
    },
    "Acid rain and deposition is due to nitrogen oxides from motor vehicles and coal-burning power plants. Sulfur dioxides that cause acid deposition come from coal-burning power plants.": {
        "q207": {
            question: "Which of the following causes acid rain and deposition due to nitrogen oxides?",
            options: ["cars", "coal-burning powerplants", "trucks", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Acid deposition mainly affects communities that are downwind from coal-burning power plants.": {
        "q208": {
            question: "Acid deposition mainly affects communities that are:?",
            options: ["downwind", "far", "upwind", "all of these"],
            correctAnswer: "downwind", 
            difficulty: "easy"
        }
    },
    "Acid rain and deposition can lead to the acidification of soils and bodies of water and corrosion of human-made structures.": {
        "q209": {
            question: "Acid rain and deposition can lead to:",
            options: ["acidification of soils", "acidification of bodies of water", "corrosion of human-made structures", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Regional differences in soils and bedrock affect the impact that acid deposition has on the region – such as limestone bedrock’s ability to neutralize the effect of acid raid of lakes and ponds.": {
        "q210": {
            question: "Which of the following has the ability to neutralize the effects of acid rain?",
            options: ["diamond", "limestone", "granite", "basalt"],
            correctAnswer: "limestone", 
            difficulty: "easy"
        }
    },
    "Noise pollution is sound at levels high enough to cause psychological stress and hearing loss.": {
        "q211": {
            question: "Which of the following is sound at levels high enough to cause psychological stress and hearing loss?",
            options: ["noise pollution", "air pollution", "water pollution", "all of these"],
            correctAnswer: "noise pollution", 
            difficulty: "easy"
        }
    },
    "Sources of noise pollution in urban areas include transportation, construction, and domestic and industrial activities.": {
        "q212": {
            question: "Which of the following are sources of noise pollution?",
            options: ["transportation", "construction", "industrial activities", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Some effects of noise pollution on animals in ecological systems include stress, the masking of sounds used to communicate or hunt, damaged hearing and causing changes to migratory routes.": {
        "q213": {
            question: "Which of the following is an effect of noise pollution?",
            options: ["stress", "interruptions to mating calls", "damaged hearing", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "A point source refers to a single, undetectable source of a pollutant, such as a smokestack or waste discharge pipe.": {
        "q214": {
            question: "Which of the following is a point source of a pollution?",
            options: ["a ravine of hog farms", "a smokestack", "a highway", "all of these"],
            correctAnswer: "a smokestack", 
            difficulty: "easy"
        }
    },
    "Nonpoint sources of pollution are diffused and can therefore be difficult to identify, such as pesticide spraying or urban runoff.": {
        "q215": {
            question: "Which of the following is a non-point source of pollution?",
            options: ["a tailpipe of a car into the air", "a chicken coop on a farm running off into a stream", "an industrial zone run-off", "all of these"],
            correctAnswer: "an industrial zone run-off", 
            difficulty: "easy"
        }
    },
    "Organisms have a range of tolerance for various pollutants. Organisms have an optimum range for each factor where they can maintain homeostasis. Outside of this range, organisms may experience psychological stress, limited growth, reduced reproduction and in extreme cases, death.": {
        "q216": {
            question: "Which of the following occurs to organisms when exposed to conditions outside of their range of tolerance?",
            options: ["psychological stress", "limited growth", "limited reproduction", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Coral reefs have been suffering damage due to a variety of factors, including increasing ocean temperature, sediment run-off, and destructive fishing practices.": {
        "q217": {
            question: "Which of the following causes damage to coral reefs?",
            options: ["increased ocean temperature", "sediment run-off", "fishing practicies", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Oil spills in marine waters cause organisms to die from the hydrocarbons in oil. Oil that floats on the surface of water can coat the feathers of birds and fur of marine mammals. Some components of oil sink to the ocean floor, killing some bottom-dwelling organisms.": {
        "q218": {
            question: "Which of the following can coat organisms and sink to the bottom and kill bottom-dwelling organisms?",
            options: ["methylmercury", "trash", "oil", "all of these"],
            correctAnswer: "oil", 
            difficulty: "easy"
        }
    },
    "Oil that washes up on the beach can have economic consequences on the fishing and tourism industry.": {
        "q219": {
            question: "Which of the following is an economic consequence of oil washing up on a beach?",
            options: ["incresed death of wild birds", "reduced tourism", "increased fishing", "all of these"],
            correctAnswer: "reduced tourism", 
            difficulty: "easy"
        }
    },
    "Oceanic dead zones are areas of low oxygen in the world’s oceans caused by increased nutrient pollution.": {
        "q220": {
            question: "Oceanic deadzones are characterized by:",
            options: ["low dissolved oxygen", "decreased nutrient pollution", "increased acidification", "all of these"],
            correctAnswer: "low dissolved oxygen", 
            difficulty: "easy"
        }
    },
    "An oxygen sag curve is a plot of dissolved oxygen levels versus the distance from a source of pollution, usually excess nutrients and biological refuse.": {
        "q221": {
            question: "Which is a plot of dissolved oxygen levels versus the distance from a source of pollution, usually excess nutrients and biological refuse.",
            options: ["turbidity sensor", "methyl mercury diagram", "carbon dioxide graph", "oxygen sag curve"],
            correctAnswer: "oxygen sag curve", 
            difficulty: "easy"
        }
    },
    "Heavy metals used for industry, especially mining and burning of fossil fuels, can reach the groundwater, impacting the drinking water supply.": {
        "q222": {
            question: "Which is a heavy metal that can reach groundwater and contaminate the drinking water supply?",
            options: ["mercury", "nitrates", "phosphates", "all of these"],
            correctAnswer: "mercury", 
            difficulty: "easy"
        }
    },
    "Litter that reaches aquatic ecosystems beside being unsightly, can create intestinal blockage and choking hazards for wildlife and introduce toxic substances to the food chain.": {
        "q223": {
            question: "Which is a consequence to litter in aquatic environments?",
            options: ["intestinal blockage", "choking hazards", "introduced toxic substances", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Increased sediment in waterways can reduce light infiltration, which can affect primary producers, and visual predators. Sediment can also settle, disrupting habitats.": {
        "q224": {
            question: "Which is a consequence to increased sediment in waterways?",
            options: ["reduces light infiltration for plants", "decreased turbidity", "decreased water temperature", "all of these"],
            correctAnswer: "reduces light infiltration for plants", 
            difficulty: "easy"
        }
    },
    "When elemental sources of mercury enter aquatic environments, bacteria in the water and is converted  to highly toxic methylmercury.": {
        "q225": {
            question: "Which is a consequence to increased sediment in waterways?",
            options: ["reduces light infiltration for plants", "decreased turbidity", "decreased water temperature", "all of these"],
            correctAnswer: "reduces light infiltration for plants", 
            difficulty: "easy"
        }
    },
    "When elemental sources of mercury enter aquatic environments, bacteria in the water and is converted to highly toxic methylmercury.": {
        "q226": {
            question: "When elemental sources of mercury enter aquatic environments, bacteria in the water and is converted to highly toxic _____________:",
            options: ["carbonite mercury", "butylmercury", "methylmercury", "particulate mercury"],
            correctAnswer: "methylmercury", 
            difficulty: "easy"
        }
    },
    "Endocrine disruptors are chemicals that can interfere with the endocrine system of animals.": {
        "q227": {
            question: "Which of the following is an endocrine discruptor?",
            options: ["birth control pills", "carbon monoxide", "carbon dioxide", "particulate matter"],
            correctAnswer: "birth control pills", 
            difficulty: "easy"
        }
    },
    "Endocrine disruptors can lead to birth defects, development disorders, and gender imbalances in fish and other species.": {
        "q228": {
            question: "Which of the following are effects of an endocrine disruptor?",
            options: ["birth defects", "developmental disorders", "gender imbalances", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Wetlands are areas where water covers the soil, either part or all of the time.": {
        "q229": {
            question: "Which of the following are areas where water covers the soil, either part of the time or all of the time?",
            options: ["chaparell", "taiga", "wetlands", "all of these"],
            correctAnswer: "wetlands", 
            difficulty: "easy"
        }
    },
    "Wetlands provide a variety of ecological services, including water purification, flood protection, water filtration and habitat.": {
        "q230": {
            question: "Which of the following is an ecological service provided by wetlands?",
            options: ["water purification", "flood protection", "water filtration", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Threats to wetlands and mangroves include commercial developments, dam construction, overfishing, and pollutants from industrial waste.": {
        "q231": {
            question: "Which of the following is a threat to wetlands?",
            options: ["commercial development", "dam contruction", "overfishing", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Eutrophication occurs when a body of water is enriched in nutrients.": {
        "q232": {
            question: "Which of the following is type of water body when a body of water is enriched in nutrients?",
            options: ["Mesotrophic", "Eutrophic", "Oligotrophic", "all of these"],
            correctAnswer: "Eutrophic", 
            difficulty: "easy"
        }
    },
    "The increase in nutrients in eutrophic aquatic environments causes an algae bloom. When the algal bloom dies, microbes digest the algae, alone with the oxygen in the water, leading to a decrease in the dissolved oxygen levels in the water. The lack of dissolved oxygen can result in large die-offs of fish and other aquatic organisms.": {
        "q233": {
            question: "In an eutrophic aquatic environment which of the following is an end result?",
            options: ["increased oxygen levels", "decreased oxygen levels", "decreased pH", "increased mercury levels"],
            correctAnswer: "decreased oxygen levels", 
            difficulty: "easy"
        }
    },
    "Hypoxic waterways are those bodies of water that are low in dissolved oxygen.": {
        "q234": {
            question: "Which of the following is a characteristic of hypoxic waterways?",
            options: ["increased oxygen levels", "decreased oxygen levels", "decreased pH", "increased mercury levels"],
            correctAnswer: "decreased oxygen levels", 
            difficulty: "easy"
        }
    },
    "Compared to eutrophic waters, oligotrophic waterways have very low amounts of nutrients, stable algae populations and high dissolved oxygen.": {
        "q235": {
            question: "Which of the following is a characteristic of oligotrophic waterways?",
            options: ["low amounts of nutrients", "stable algae population", "high dissolved oxygen", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Anthropogenic causes of eutrophication are agricultural runoff and wastewater release.": {
        "q236": {
            question: "Which of the following is an anthropogenic cause of eutrophication?",
            options: ["run-off of fertilizers", "run-off of animal waste", "run off of human waste", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Variations in water temperature affect the concentration of dissolved oxygen because warm water does not contain as much oxygen as cold water.": {
        "q237": {
            question: "Which of the following is conseuquence of increased water temperatures?",
            options: ["decreased dissolved oxygen", "increased dissolved oxygen", "increased pH", "decreased pH"],
            correctAnswer: "decreased dissolved oxygen", 
            difficulty: "easy"
        }
    },
    "Persistent organic pollutants (POPs) do not easily break down in the environment because they are synthetic, carbon-based molecules (such as DDT and PCBs).": {
        "q238": {
            question: "Which of the following is an example of a persistent organic pollutant? ",
            options: ["acid rain", "mercury", "DDT", "all of these"],
            correctAnswer: "DDT", 
            difficulty: "easy"
        }
    },
    "Persistent organic pollutants (POPs) can be toxic to organisms because they are soluble in fat, which allows them to accumulate in organisms’ fatty tissues.": {
        "q239": {
            question: "Where do persistent organic pollutants (POPs) accumulate in organisms? ",
            options: ["muscle tissue", "nervous system", "fatty tissue", "bones"],
            correctAnswer: "fatty tissue", 
            difficulty: "easy"
        }
    },
    "Persistent organic pollutants (POPs) can travel over long distances via wind and water before being redeposited.": {
        "q240": {
            question: "Why are Persistent organic pollutants (POPs) such a problem in environment? ",
            options: ["they tend to bioaccumulate less in larger animals", "they can travel over long distances", "they last a short time", "they do not redeposit "],
            correctAnswer: "they can travel over long distances", 
            difficulty: "easy"
        }
    },
    "Bioaccumulation is the selective absorption and concentration of elements or compounds by cells in living organisms, most commonly fat-soluble compounds.": {
        "q241": {
            question: "What is the selective absorption and concentration of elements or compounds by cells in living organisms, most commonly fat-soluble compounds. ",
            options: ["eutrophication", "bioaccumulation", "anthropogenic combustion", "biomagnification"],
            correctAnswer: "bioaccumulation", 
            difficulty: "easy"
        }
    },
    "Biomagnification is the increase in concentration of substance per unit of body tissues that occurs in successively higher trophic levels of a food chain or food web.": {
        "q242": {
            question: "Bioaccumulation is more of a problem for: ",
            options: ["producers", "primary consummers", "secondary consumers", "tertiary consumers"],
            correctAnswer: "tertiary consumers", 
            difficulty: "easy"
        }
    },
    "Some effects that can occur in an ecosystem when a persistent substance is biomagnified in a food chain include eggshell thinning, and development deformities in top carnivores of the higher trophic levels.": {
        "q243": {
            question: "What is an effect that can occur in ecosystems when persistent substances is biomagnified in a food chain? ",
            options: ["egg shell thinning", "development deformities", "endocrine disruptors", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Humans also experience harmful effects from biomagnification, including issues with the reproductive, nervous and circulatory system.": {
        "q244": {
            question: "What is an effect that can occur in humans due to biomagnification?",
            options: ["reproductive issues", "nervous system issues", "circulatory system issues", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "DDT, mercury, and PCBs are substances that bioaccumulate and have significant environmental impacts.": {
        "q245": {
            question: "Which of the following substances bioaccumulate?",
            options: ["mercury", "PCBS", "DDT", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Solid waste is any discarded material that is not a liquid or gas. It is generated in domestic, industrial, business, and agricultural sectors.": {
        "q246": {
            question: "Which of the following create solid waste?",
            options: ["industrial", "agricultural", "business", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Solid waste is most often disposed of in landfill. Landfills can contaminate groundwater and release harmful gasses.": {
        "q247": {
            question: "Which of the following is a potential consequence of landfills?",
            options: ["release of carbon dioxide", "release of methane", "contamination of ground water", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Electronic waste, or e-waste, is composed of discarded electronic devices including televisions, cell phones and computers.": {
        "q248": {
            question: "Which of the following is e-waste?",
            options: ["animal waste", "cell phones", "grease", "fertilizers"],
            correctAnswer: "cell phones", 
            difficulty: "easy"
        }
    },
    "A sanitary municipal landfill consists of a bottom liner (plastic or clay), a storm water collection system, a leachate collection system, a cap, and methane collection system.": {
        "q249": {
            question: "What does a sanitary landfill consist of:",
            options: ["bottom liner", "storm water collection system", "methane collection system", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Factors in landfill decomposition include the composition of the trash and conditions needed for microbial decomposition of the waste.": {
        "q250": {
            question: "What organism decomposes the landfill's trash?",
            options: ["bacteria", "viruses", "algae", "all of these"],
            correctAnswer: "bacteria", 
            difficulty: "easy"
        }
    },
    "Solid waste can also be disposed of through incineration, where waste is burned at high temperatures. This method significantly reduces the volume of solid waste but releases air pollutants.": {
        "q251": {
            question: "Which of the following ways to dispose of trash results in high levels of air pollution been released?",
            options: ["landfills", "composting", "incineration", "all of these"],
            correctAnswer: "incineration", 
            difficulty: "easy"
        }
    },
    "Some items are not accepted in sanitary landfills and may be disposed of illegally, leading to environmental problems. One example is used rubber tires, which when left in piles can become breeding grounds for mosquitoes that can spread diseases.": {
        "q252": {
            question: "What is a consequence of leaving tires in piles?",
            options: ["breeding ground of mosquitos which spread diseases", "releases harmful methane gases into the atmosphere which is a known green house gas", "it can leach mercury into the nearby waterways contaminating drinking water", "all of these"],
            correctAnswer: "breeding ground of mosquitos which spread diseases", 
            difficulty: "easy"
        }
    },
    "Some countries dispose of their waste by dumping it in the ocean. This practice, alone with other sources of plastic, has left to large floating islands of trash in the oceans. Additionally, wildlife can be come entangled in the waste, as well as ingest it.": {
        "q253": {
            question: "What is a consequence of trash build-up in the ocean?",
            options: ["animals ingesting trash and causing a choking harzard", "animals getting entrapped in the trash", "toxic chemicals can enter animals", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Recycling is a process by which certain solid waste materials are processed and converted into new products.": {
        "q254": {
            question: "What is the process by which certain solid waste materials are processed and converted into new products?",
            options: ["reusing", "reducing", "recyling", "all of these"],
            correctAnswer: "recyling", 
            difficulty: "easy"
        }
    },
    "Recycling is one way to reduce the current global demand on minerals, but this process is energy-intensive and can be costly.": {
        "q255": {
            question: "What is a drawback to recycling?",
            options: ["increases levels of trash", "costly", "reduces the demand on minerals", "all of these"],
            correctAnswer: "costly", 
            difficulty: "easy"
        }
    },
    "Composting is the process of organic matter such as food scraps, paper, and yard waste decomposing. The product of this decomposition can be used as fertilizer. Drawbacks to composting include odor and rodents.": {
        "q256": {
            question: "Which of the following is compostable?",
            options: ["food scraps", "paper", "yard waste", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "E-waste can be reduced by recycling and reuse. E-waste may contain hazardous chemicals, including heavy metals such as lead and mercury which can leach from landfills into groundwater if they are not disposed of properly. ": {
        "q257": {
            question: "Which of the following is a drawback to e-waste?",
            options: ["can be recycled", "can be reused", "contains chemicals", "all of these"],
            correctAnswer: "contains chemicals", 
            difficulty: "easy"
        }
    },
    "Landfills mitigation strategies range from burning waste for energy to restoring habitat on former landfills for use as parks.  ": {
        "q258": {
            question: "Which of the following is a mitigation strategy for landfills",
            options: ["increased composting", "burning waste", "restoring habitat for parks", "all of these"],
            correctAnswer: "restoring habitat for parks", 
            difficulty: "easy"
        }
    },
    "The combustion of gases produced from the decomposition of organic matter and landfills can be used to turn turbines and generate electricity. This process reduces landfill volume.  ": {
        "q259": {
            question: "The combustion of gases from landfills can be used to turn turbines to generate:",
            options: ["drinking water", "electricity", "clean air", "all of these"],
            correctAnswer: "electricity", 
            difficulty: "easy"
        }
    },
    "Primary treatment of sewage is the physical removal of large objects, often through the use of screens and grates, followed by the settling of solid waste in the bottom of a tank. Secondary treatment is a biological process in which bacteria break down organic matter into carbon dioxide and inorganic sludge, which settles in the bottom of a tank. The tank is aerated to increase the rate at which the bacteria break down the organic matter.   ": {
        "q260": {
            question: "The removal of large objects by use of screens and grates is:",
            options: ["primary treatment", "secondary treatment", "tertiary treatment", "all of these"],
            correctAnswer: "primary", 
            difficulty: "easy"
        }
    },
    "Tertiary treatment is the use of ecological or chemical processes to remove any pollutants left in the water after primary and secondary treatment.  ": {
        "q261": {
            question: "Which of the following is tertiary treatment?",
            options: ["removal of large object", "decomposition by bacteria", "removal of excess nutrients", "all of these"],
            correctAnswer: "removal of excess nutrients", 
            difficulty: "easy"
        }
    },
    "Prior to discharge the treated water is exposed to one or more disinfectants (usually chlorine, ozone or UV light) to kill bacteria. ": {
        "q262": {
            question: "Prior to discharge, the treated water is exposed to:",
            options: ["chlorine", "ozone", "UV light ", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Lethal dose 50% (LD 50) is the dose of a chemical that is lethal to 50% of the population of a particular species. ": {
        "q263": {
            question: "Lethal dose 50% is the dose that",
            options: ["is lethal to 100% of the population", "is lethal to 50 individuals of the population", "is lethal to 50% of the population", "all of these"],
            correctAnswer: "is lethal to 50% of the population", 
            difficulty: "easy"
        }
    },
    "A dose response curve describes the effect in an organism or mortality rate in a population based on the dose of a particular toxin or drug. ": {
        "q264": {
            question: "What describes the effect in an organism or mortality rate in a population based on the dose of a particular toxin or drug.",
            options: ["dose response curve", "LD50 graph", "DO concentration plot", "all of these"],
            correctAnswer: "dose response curve", 
            difficulty: "easy"
        }
    },
    "Dysentery is caused by untreated sewage in streams and rivers. ": {
        "q265": {
            question: "Which disease is caused by untreated sewage?",
            options: ["dysentery", "tuberculosis", "malaria", "AIDS"],
            correctAnswer: "dysentery", 
            difficulty: "easy"
        }
    },
    "Mesothelioma is a type of cancer caused mainly by exposure to asbestos. ": {
        "q266": {
            question: "Mesothelioma results from exposure to:",
            options: ["smog", "water contaminated by waste", "asbestos", "mosquitos"],
            correctAnswer: "asbestos", 
            difficulty: "easy"
        }
    },
    "Respiration problems and overall lung function can be impacted by elevated levels of tropospheric ozone period. ": {
        "q267": {
            question: "Which of the following is most likely to cause respiration problems?",
            options: ["mercury", "tropospheric ozone", "water contaminated by waste", "mosquitos"],
            correctAnswer: "tropospheric ozone", 
            difficulty: "easy"
        }
    },
    "Pathogens adapt to take advantage of new opportunities to infect and spread through human populations. ": {
        "q268": {
            question: "Which of the following adapt to take advantage of new opportunities to infect and spready through human populations",
            options: ["reptiles", "small mammals", "large mammals", "pathogens"],
            correctAnswer: "pathogens", 
            difficulty: "easy"
        }
    },
    "As equatorial-type climate zones spread north and south into what are currently subtropical and temperate climate zones, pathogens, infectious diseases, and any associated vectors are spreading into these areas where the disease has not previously been known to occur.": {
        "q269": {
            question: "As climate change causes warmer temperatures in higher latitudes, which of the following infectious diseases are spreading into areas where the disease has not previously been known to occur?",
            options: ["plague", "typhoid fever", "AIDS", "malaria"],
            correctAnswer: "malaria", 
            difficulty: "easy"
        }
    },
    "Poverty-stricken, low-income areas often lack sanitary waste disposal and have contaminated drinking water supplies, leading to havens and opportunities for the spread of infectious diseases.": {
        "q270": {
            question: "Poverty-stricken, low income areas have:",
            options: ["a lack of sanitary waste", "contaminated drinking water", "increased opportunities for spread of infectious diseases", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Plague is a disease carried by organisms infected with the plague bacteria. It is transferred to humans via the bite of an infected organism or through contact with contaminated fluids or tissues.": {
        "q271": {
            question: "Plague is carried by which organism?",
            options: ["bacteria", "fungi", "protist", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Tuberculosis is a bacterial infection that typically attacks the lungs. It is spread by breathing in the bacteria from the bodily fluids of an infected person.": {
        "q272": {
            question: "Tuberculosis is spread by:",
            options: ["bacteria", "fungi", "protist", "all of these"],
            correctAnswer: "bacteria", 
            difficulty: "easy"
        }
    },
    "Malaria is a parasitic disease caused by bites from infected mosquitoes. It is most often found in sub-Saharan Africa.": {
        "q273": {
            question: "Malaria is spread by:",
            options: ["bacteria", "infected mosquitos", "protist", "all of these"],
            correctAnswer: "infected mosquitos", 
            difficulty: "easy"
        }
    },
    "Malaria is a parasitic disease caused by bites from infected mosquitoes. It is most often found in sub-Saharan Africa.": {
        "q274": {
            question: "Which of the following is spread by mosquoitos?",
            options: ["West Nile", "Zika", "Malaria", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "West Nile virus is transmitted to humans via bites from infected mosquitoes.": {
        "q275": {
            question: "West Nile is spread by:",
            options: ["bacteria", "infected mosquitos", "protist", "all of these"],
            correctAnswer: "infected mosquitos", 
            difficulty: "easy"
        }
    },
    "Severe acute respiratory syndrome (SARS) is a form of pneumonia. It is transferred by inhaling or touching infected fluids.": {
        "q276": {
            question: "Which is a form of pneemonia spread by inhaling or touching infected fluids?",
            options: ["Zika", "Severe acute respiratory syndrome (SARS)", "AIDS", "all of these"],
            correctAnswer: "Severe acute respiratory syndrome (SARS)", 
            difficulty: "easy"
        }
    },
    "Middle East respiratory syndrome (MERS) is a viral respiratory illness that is transferred from animals to humans.": {
        "q277": {
            question: "Which is a viral respiratory illness that is transferred from animals to humans?",
            options: ["Zika", "Severe acute respiratory syndrome (SARS)", "AIDS", "Middle East respiratory syndrome (MERS)"],
            correctAnswer: "Middle East respiratory syndrome (MERS)", 
            difficulty: "easy"
        }
    },
    "Zika is a virus caused by bites from infected mosquitoes. It can be transmitted through sexual contact.": {
        "q278": {
            question: "Which is a viral infection caused by bites from mosquitos and can be spread through sexual contact?",
            options: ["Zika", "Severe acute respiratory syndrome (SARS)", "AIDS", "Middle East respiratory syndrome (MERS)"],
            correctAnswer: "Zika", 
            difficulty: "easy"
        }
    },
    "Cholera is a bacterial disease that is contracted from infected water.": {
        "q279": {
            question: "Which is a bacterial disease spread from infected water?",
            options: ["Zika", "Cholera", "AIDS", "Middle East respiratory syndrome (MERS)"],
            correctAnswer: "Cholera", 
            difficulty: "easy"
        }
    },
    "The stratospheric ozone layer is important to the evolution of life on earth and the continued health and survival of life on earth.": {
        "q280": {
            question: "Which layer of the atmosphere contains the ozone layer?",
            options: ["Troposphere", "Stratosphere", "Mesosphere", "Exosphere"],
            correctAnswer: "Stratosphere", 
            difficulty: "easy"
        }
    },
    "Stratospheric ozone depletion is caused by anthropogenic factors, such as chlorofluorocarbons (CFC's), and natural factors, such as the melting of ice crystals in the atmosphere at the beginning of the Antarctic spring.": {
        "q281": {
            question: "Which of the following causes ozone depletion?",
            options: ["Methane", "Carbon Dixoxide", "Chlorofluorocarbons (CFC's)", "mercury vapor"],
            correctAnswer: "Chlorofluorocarbons (CFC's)", 
            difficulty: "easy"
        }
    },
    "A decrease in stratospheric ozone increases the UV rays that reach the earth surface. Exposure to UV rays can lead to skin cancer and cataracts in humans.": {
        "q282": {
            question: "A decrease in stratosphere ozone causes:",
            options: ["an increase in the UV rays that reach the earth surface", "a decrease in the rates of skin cancer", "an increase in the rate of respiratory problems", "all of these"],
            correctAnswer: "an increase in the UV rays that reach the earth surface", 
            difficulty: "easy"
        }
    },
    "Ozone depletion can be mitigated by replacing ozone depleting chemicals with substitutes that do not deplete the ozone layer. Hydrofluorocarbons (HFC's) are one such replacement, but some are strong greenhouse gases.": {
        "q283": {
            question: "What replacement for ozone depleting chemicals can be used but is also a greenhouse gas?",
            options: ["Carbon Dioxide", "Chlorofluorocarbons (CFC's)", "Hydrofluorocarbons (HFC's)", "all of these"],
            correctAnswer: "Hydrofluorocarbons (HFC's)", 
            difficulty: "easy"
        }
    },
    "The principal greenhouse gases are carbon dioxide, methane, water vapor, nitrous oxide, and chlorofluorocarbons (CFC's)": {
        "q284": {
            question: "Which of the following is a greenhouse gas?",
            options: ["carbon Dioxide", "methane", "nitrous oxide", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "While water vapor is a greenhouse gas it doesn't contribute significantly to global climate change because it is a short residence time in the atmosphere.": {
        "q285": {
            question: "Which of the following is a greenhouse gas but doesn't contribue significantly to global climate change because it is short lived in the atmosphere?",
            options: ["Carbon Dioxide", "methane", "nitrous oxide", "water vapor"],
            correctAnswer: "water vapor", 
            difficulty: "easy"
        }
    },
    "The greenhouse effect results in the surface temperature necessary for life on earth to exist.": {
        "q286": {
            question: "Which of the following effects results in surface temperatures necessary for life?",
            options: ["green house effect", "coriolis effect", "El Nino", "El Nina"],
            correctAnswer: "green house effect", 
            difficulty: "easy"
        }
    },
    "Carbon dioxide, which has a global warming potential (GWP) of one, is used as a reference point for the comparison of different greenhouse gases and their impacts on global climate change period chlorofluorocarbons (CFC's) have the highest GWP, followed by the nitrous oxides, then methane.": {
        "q287": {
            question: "Which of the following has a global warming potential(GWP) of one and is used as a reference point for a comparison of green house gases?",
            options: ["methane", "carbon dioxide", "chlorofluorocarbons (CFC's) ", "nitrous oxide"],
            correctAnswer: "carbon dioxide", 
            difficulty: "easy"
        }
    },
    "Global climate change, caused by excess greenhouse gases in the atmosphere, can lead to a variety of environmental problems, including rising sea levels resulting from melting ice sheets and ocean water expansion and disease vectors spreading from the tropics towards the poles. These problems can lead to changes in population dynamics and population movements in response.": {
        "q288": {
            question: "Which of the following is a consequence of global climate change?",
            options: ["rising sea levels from melting ice sheets", "expansions of disease vectors spreading from the tropics to the poles", "increase in severity of weather events ", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "The earth has undergone climate change throughout geologic time, with major shifts in global temperatures causing periods of warming and cooling as recorded with CO2 date data and ice cores.": {
        "q289": {
            question: "Which of the following is true of climate change throughout geologic time?",
            options: ["the temperatures have continually risen over time", "there have been periods of warming and cooling", "the temperatures have continually cooled", "all of these"],
            correctAnswer: "there have been periods of warming and cooling", 
            difficulty: "easy"
        }
    },
    "Effects of climate change include: rising temperature, melting permafrost and sea ice, rising sea levels, and displacement of coastal populations.": {
        "q290": {
            question: "Which of the following is a consequence of global climate change?",
            options: ["rising temperature", "melting permafrost and sea ice", "displacement of coastal populations", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Marine ecosystems are affected by changes in sea level, some positively, such as newly created habitats on now flooded continental shelves, and some negatively, such as deeper communities that may no longer be in the photic zone of seawater.": {
        "q291": {
            question: "Which of the following is a positive change of global climate change?",
            options: ["newly created habitats on now flooded continental shelves", "deeped communities that may no longer be in the photic zone of seawater", "displacement of constal communities", "all of these"],
            correctAnswer: "newly created habitats on now flooded continental shelves", 
            difficulty: "easy"
        }
    },
    "Winds generated by atmospheric circulation help transport heat throughout the earth. Climate change may change circulation patterns, as temperature change may impact Hadley cells and the jet stream.": {
        "q292": {
            question: "As temperatures change from global climate change, which cell may be impacted? ",
            options: ["Hadley", "Polar", "Coriolis", "all of these"],
            correctAnswer: "Hadley", 
            difficulty: "easy"
        }
    },
    "Oceanic currents, or the ocean conveyor belt, carry heat throughout the world. When these currents change, it could have a big impact on global climate, especially in coastal regions.": {
        "q293": {
            question: "Which of the following transports heat throughout the world?",
            options: ["polar vortexs", "ocean currents", "pipelines", "all of these"],
            correctAnswer: "ocean currents", 
            difficulty: "easy"
        }
    },
    "Climate change can affect soil through changes in temperature and rainfall, which can impact soil's viability and potentially increase erosion.": {
        "q294": {
            question: "Climate change can affect soil through:",
            options: ["changes in temperature", "change in rainfall", "increase erosion", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Earth's polar regions are showing faster response times to global climate change because ice and snow in these regions reflect the most energy back out to space, leading to a positive feedback loop.": {
        "q295": {
            question: "Which region in Earth are showing faster response times to global climate change because ice and snow in these regions reflect the most energy back to space?",
            options: ["savanna", "boreal forest", "tundra", "chaparral"],
            correctAnswer: "tundra", 
            difficulty: "easy"
        }
    },
    "As the earth warms, this ice and snow melts, meaning less solar energy is radiated back into space and instead is absorbed by the earth's. This, in turn, causes more warming of the polar regions.": {
        "q296": {
            question: "As the earth warms, this ice and snow melts, meaning less solar energy is radiated back into space and instead is absorbed by the earth. What kind of feedback look does this represent?",
            options: ["negative", "positive", "neutral", "all of these"],
            correctAnswer: "positive", 
            difficulty: "easy"
        }
    },
    "While climate change response time in the Arctic is due to positive feedback loops involving melting sea ice and tundra, and the subsequent release of greenhouse gases like methane.": {
        "q297": {
            question: "Which is a positive feedback loop in the Arctic region?",
            options: ["reduced photosynthesis", "absorption of methane", "melting of sea ice", "all of these"],
            correctAnswer: "melting of sea ice", 
            difficulty: "easy"
        }
    },
    "One consequence to the loss of ice and snow in polar regions is the effect on species that depend on the ice for habitat and food.": {
        "q298": {
            question: "Which species is likely to be harmed by the loss of ice and snow?",
            options: ["mosquitos", "owls", "tuna", "polar bears"],
            correctAnswer: "polar bears", 
            difficulty: "easy"
        }
    },
    "Ocean warming is caused by an increase in greenhouse gases in the atmosphere.": {
        "q299": {
            question: "Which is a cause of ocean warming?",
            options: ["decrease in green house gases in the atmosphere", "increase in greenhouse gasses in the atmosphere", "increase in acid rain", "all of these"],
            correctAnswer: "increase in greenhouse gasses in the atmosphere", 
            difficulty: "easy"
        }
    },
    "Ocean warming can affect marine species in a variety of ways, including loss of habitat, and metabolic and reproductive changes.": {
        "q300": {
            question: "How does ocean warming affect marine species?",
            options: ["loss of habitat", "metabolic changes", "reproductive changes", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Ocean warming is causing coral bleaching, which occurs when the loss of algae within the corals causes the corals to bleach white. Some corals recover and some die.": {
        "q301": {
            question: "What is coral bleaching?",
            options: ["loss of algae in the coral cause the algae to turn white", "increase in algae causes the corals to turn white", "hot waters cause the algae to turn white", "all of these"],
            correctAnswer: "loss of algae in the coral cause the algae to turn white", 
            difficulty: "easy"
        }
    },
    "Ocean acidification is the decrease in pH of the oceans, primarily due to increased CO2 concentrations in the atmosphere, and can be expressed as chemical equations. As more CO2 is released into the atmosphere, the oceans, which absorb a large part of the CO2, become more acidic.": {
        "q302": {
            question: "What is the cause of ocean acidification?",
            options: ["increased CFC's concentrations in the atmosphere", "increased SO2 concentrations in the atmosphere", "increased CO2 concentrations in the atmosphere", "all of these"],
            correctAnswer: "increased CO2 concentrations in the atmosphere", 
            difficulty: "easy"
        }
    },
    "Anthropogenic activities that contribute to ocean acidification are those that lead to increased CO2 concentrations in the atmosphere; Burning of fossil fuels, vehicle emissions, and deforestation.": {
        "q303": {
            question: "What is an anthropogenic activity that contributes to ocean acidication?",
            options: ["burning of fossile fuels", "vehicle emissions", "deforestation", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Ocean acidification damages coral because acidification makes it difficult for them to form shells, due to the loss of calcium carbonate.": {
        "q304": {
            question: "Ocean acidification can result in:",
            options: ["coral bleaching", "weak shells", "fish death", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Invasive species are species that can live, and sometimes thrive, outside of their normal habitat. Invasive species can sometimes be beneficial, but they are considered invasive when they threaten native species. Invasive species are often generalists are selected species and therefore may outcompete native species for resources.": {
        "q305": {
            question: "Which of the following is a trait for invasive species?",
            options: ["often generalist", "outcompete native species", "often lack natural predators", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Invasive species can be controlled through a variety of human interventions. A variety of factors can lead two species becoming threatened with extinction, such as being extensively hunted, having limited diet, being outcompeted by invasive species, or having specific and limited habitat requirements.": {
        "q306": {
            question: "Which of the following can lead to a species becoming threatened?",
            options: ["being extensively hunted", "specialist diet", "being outcompeted by native species", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Not all species will be in danger of extinction when exposed to the same changes in their ecosystem. Species that are able to adapt to changes in their environment or that are able to move to a new environment are less likely to face extinction.": {
        "q307": {
            question: "Species that are better able to adapt to change:",
            options: ["are less likley to become threatened", "are more likely to become threatened", "unable to move to new environments", "all of these"],
            correctAnswer: "are less likley to become threatened", 
            difficulty: "easy"
        }
    },
    "Selective pressures are any factors that change the behaviors and fitness of organisms within an environment.": {
        "q308": {
            question: "Species that are better able to adapt to change:",
            options: ["are less likley to become threatened", "are more likely to become threatened", "unable to move to new environments", "all of these"],
            correctAnswer: "are less likley to become threatened", 
            difficulty: "easy"
        }
    },
    "Species in a given ecosystem compete for resources like territory, food, mates, and habitat and this competition may lead to endangerment or extinction.": {
        "q309": {
            question: "Species compete for:",
            options: ["territory", "food", "mates", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Species in a given ecosystem compete for resources like territory, food, mates, and habitat and this competition may lead to endangerment or extinction.": {
        "q310": {
            question: "Species compete for:",
            options: ["territory", "food", "mates", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Strategies to protect animal populations include criminalizing poaching, protecting animal habitats, and legislation.": {
        "q311": {
            question: "Strategies to reduce poaching are:",
            options: ["criminializing poaching", "protecting animal habitats", "implementing legislation", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "HIPPCO (habitat destruction, invasive species, population growth, pollution, climate change, and over exploitation) describes the main factors leading to a decrease in biodiversity.": {
        "q312": {
            question: "What is a factor that leads to a decrease in biodiversity",
            options: ["habitat destruction", "invasive species", "population growth", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Habitat fragmentation occurs when large habitats are broken into smaller, isolated areas. Causes of habitat fragmentation include the construction of roads and pipelines, clearing for agriculture or development, and logging.": {
        "q313": {
            question: "Which of the following is a cause of fragmentation:",
            options: ["construction of roads and pipelines", "clearing for agriculture", "logging", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "The scale of habitat fragmentation that has an adverse effect on the inhabitants of a given ecosystem will vary from species to species within that ecosystem.": {
        "q314": {
            question: "Identify the term where large habitats are broken into smaller, isolated areas:",
            options: ["habitat fragmentation", "deforesteation", "urban sprawl", "all of these"],
            correctAnswer: "habitat fragmentation", 
            difficulty: "easy"
        }
    },
    "The scale of habitat fragmentation that has an adverse effect on the inhabitants of a given ecosystem will vary from species to species within that ecosystem.": {
        "q315": {
            question: "Identify the term where large habitats are broken into smaller, isolated areas",
            options: ["habitat fragmentation", "deforesteation", "urban sprawl", "all of these"],
            correctAnswer: "habitat fragmentation", 
            difficulty: "easy"
        }
    },
    "Global climate change can cause habitat loss via changes in temperature, precipitation, and sea level rise.": {
        "q316": {
            question: "Global climate change causes habitat loss",
            options: ["habitat fragmentation", "deforesteation", "urban sprawl", "all of these"],
            correctAnswer: "habitat fragmentation", 
            difficulty: "easy"
        }
    },
     "Global climate change can cause habitat loss via changes in temperature, precipitation, and sea level rise.": {
        "q317": {
            question: "Global climate change can cause habitat loss via:",
            options: ["changes in temperature", "changes in precipitation", "sea level rise", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Some organisms have been somewhat or completely domesticated and are now managed for economic returns, such as honeybee colonies and domestic livestock. This domestication can have a negative impact on the biodiversity of that organism.": {
        "q318": {
            question: "An animal that has been domesiticated and managed for economic returns is:",
            options: ["honeybee colonies", "cattle", "sheep", "all of these"],
            correctAnswer: "all of these", 
            difficulty: "easy"
        }
    },
    "Some ways humans can mitigate the impact of loss of biodiversity include creating protected areas, use of habitat corridors, promoting sustainable land use practices, and restoring lost habitats.": {
        "q319": {
            question: "A way humans can mitigate the impact of loss of biodiversity include:",
            options: ["reducing habitat corridors", "creating protected areas", "clearcutting forest", "all of these"],
            correctAnswer: "creating protected areas", 
            difficulty: "easy"
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
    58: "Population growth can be affected by both density-independent factors, such as major storms, fires, heat waves, or droughts, and density-dependent factors, such as access to clean water and air, food availability, disease transmission, or territory size. ",
    59: "The rule of 70 states that dividing the number 70 by the percentage population growth rate approximates the population’s doubling time.",
    60: "The demographic transition refers to the transition from high to lower birth and death rates in a country or region as development occurs and that country moves from a preindustrial to an industrialized economic system. This transition is typically demonstrated through a four-stage demographic transition model (DTM)",
    61: "Characteristics of developing countries include higher infant mortality rates and more children in the workforce than developed countries.",
    62: "Convergent boundaries can result in the creation of mountains, island arcs, earthquakes, and volcanoes. ",
    63: "Divergent boundaries can result in seafloor spreading, rift valleys, volcanoes, and earthquakes. ",
    64: "Transform boundaries can result in earthquakes.",
    65: "An earthquake occurs when stress overcomes a locked fault, releasing stored energy.",
    66: "Soils are formed when parent material is weathered, transported, and deposited.",
    67: "Soils are generally categorized by horizons based on their composition and organic material. ",
    68: " Soils can be eroded by winds or water. Protecting soils can protect water quality as soils effectively filter and clean water that moves through them.",
    69: " Water holding capacity—the total amount of water soil can hold—varies with different soil types. Water retention contributes to land productivity and fertility of soils. ",
    70: "The particle size and composition of each soil horizon can affect the porosity, permeability, and fertility of the soil. ",
    71: "The atmosphere is made up of major gases, each with its own relative abundance. ",
    72: "The layers of the atmosphere are based on temperature gradients and include the troposphere, stratosphere, mesosphere, thermosphere, and exosphere.",
    73: "Global wind patterns primarily result from the most intense solar radiation arriving at the equator, resulting in density differences and the Coriolis effect.",
    74: "Characteristics of a given watershed include its area, length, slope, soil, vegetation types, and divides with adjoining watersheds.",
    75: "Incoming solar radiation (insolation) is the Earth’s main source of energy and is dependent on season and latitude. ",
    76: "The highest solar radiation per unit area is received at the equator and decreases toward the poles. ",
    77: "The tilt of Earth’s axis of rotation causes the Earth’s seasons and the number of hours of daylight in a particular location on the Earth’s surface",
    78: "Weather and climate are affected not only by the sun’s energy but by geologic and geographic factors, such as mountains and ocean temperature. ",
    79: "A rain shadow is a region of land that has become drier because a higher elevation area blocks precipitation from reaching the land.",
    80: "El Niño and La Niña are phenomena associated with changing ocean surface temperatures in the Pacific Ocean. These phenomena can cause global changes to rainfall, wind, and ocean circulation patterns.",
    81: "El Niño and La Niña are influenced by geological and geographic factors and can affect different locations in different ways.",
    82: "The largest human use of freshwater is for irrigation (70%).",
    83: "Types of irrigation include drip irrigation, flood irrigation, furrow irrigation, drip irrigation, and spray irrigation. ",
    84: "Waterlogging occurs when too much water is left to sit in the soil, which raises the water table of groundwater and inhibits plants’ ability to absorb oxygen through their roots. ",
    85: "The tragedy of the commons suggests that individuals will use shared resources in their own self-interest rather than in keeping with the common good, thereby depleting the resources.",
    86: "Clearcutting can be economically advantageous but leads to soil erosion, increased soil and stream temperatures, and flooding. ",
    87: "Furrow irrigation involves cutting furrows between crop rows and filling them with water. This system is inexpensive, but about 1/3 of the water is lost to evaporation and runoff.",
    88: "Flood irrigation involves flooding an agricultural field with water. This system sees about 20% of the water lost to evaporation and runoff. This can also lead to waterlogging of the soil.",
    89: "Spray irrigation involves pumping ground water into spray nozzles across an agricultural field. This system is more efficient than flood and furrow irrigation, with only 1/4 or less of the water lost to evaporation or runoff. However, spray systems are more expensive than flood and furrow irrigation, and also requires energy to run. ",
    90: "Drip irrigation uses perforated hoses to release small amounts of water to plant roots. This system is the most efficient, with only about 5% of water lost to evaporation and runoff. However, this system is expensive and so is not often used. ",
    91: "Salinization occurs when the salts in groundwater remain in the soil after the water evaporates. Over time, salinization can make soil toxic to plants. ",
    92: "Aquifers can be severely depleted if overused for agricultural irrigation, as has happened to the Ogallala Aquifer in the central United States.",
    93: "One consequence of using common pest-control methods such as pesticides, herbicides, fungicides, rodenticides, and insecticides is that organisms can become resistant to them through artificial selection. Pest control decreases crop damage by pest and increases crop yields. ",
    94: "Crops can be genetically engineered to increase their resistance to pests and diseases. However, using genetically engineered crops in planting or other ways can lead to loss of genetic diversity of that particular crop.",
    95: "Methods of meat production include concentrated animal feeding operations (CAFOs), also called feedlots, and free-range grazing.",
    96: "Meat production is less efficient than agriculture; it takes approximately 20 times more land to produce the same amount of calories from meat as from plants. ",
    97: "Forests contain trees that absorb pollutants and store carbon dioxide. The cutting and burning of trees releases carbon dioxide and contributes to climate change.",
    98: "The Green Revolution started a shift to new agricultural strategies and practices in order to increase food production, with both positive and negative results. Some of these strategies and methods are mechanization, genetically modified organisms (GMOs), fertilization, irrigation, and the use of pesticides. ",
    99: "Mechanization of farming can increase profits and efficiency for farms. It can also increase reliance on fossil fuels.",
    100: "Agricultural practices that can cause environmental damage include tilling, slashand-burn farming, and the use of fertilizers.",
    101: "Concentrated animal feeding operation (CAFOs) are used as a way to quickly get livestock ready for slaughter. They tend to be crowded, and animals are fed grains or feed that are not as suitable as grass. Additionally, feedlots generate a large amount of organic waste, which can contaminate ground and surface water. The use of feedlots are less expensive than other methods, which can keep costs to consumers down.",
    102: "Free range grazing allows animals to graze on grass during their entire lifecycle. Meat from free range animals tends to be free from antibiotics and other chemicals used in feedlots. Organic waste from these animals acts as fertilizer. Free range grazing requires large areas of land and the meat produced is more expensive for consumers. ",
    103: "Overgrazing occurs when too many animals feed on a particular area of land. Overgrazing causes loss of vegetation, which leads to soil erosion. ",
    104: "Overgrazing can cause desertification. Desertification is the degradation of low precipitation regions toward being increasingly arid until they become deserts. ",
    105: "Less consumption of meat could reduce CO2, methane, and N2O emissions; conserve water; reduce the use of antibiotics and growth hormones; and improve topsoil.",
    106: "Overfishing has led to the extreme scarcity of some fish species, which can lessen biodiversity in aquatic systems and harm people who depend on fishing for food and commerce.",
    107: "As the more accessible ores are mined to depletion, mining operations are forced to access lower grade ores. Accessing these ores requires increased use of resources that can cause increased waste and pollution. ",
    108: "Surface mining is the removal of large portions of soil and rock, called overburden, in order to access the ore underneath. An example is strip mining, which removes the vegetation from an area, making the area more susceptible to erosion.",
    109: "Mining wastes include the soil and rocks that are moved to gain access to the ore and the waste, called slag and tailings that remain when the minerals have been removed from the ore. Mining helps to provide low cost energy and material necessary to make products. The mining of coal can destroy habitats, contaminate ground water, and release dust particles and methane. ",
    110: "As coal reserves get smaller, due to a lack of easily accessible reserves, it becomes necessary to access coal through subsurface mining, which is very expensive.",
    111: "Urbanization can lead to depletion of resources and saltwater intrusion in the hydrologic cycle. ",
    112: "Urbanization, through the burning of fossil fuels and landfills, affects the carbon cycle by increasing the amount of carbon dioxide in the atmosphere. ",
    113: "Impervious surfaces are human-made structures—such as roads, buildings, sidewalks, and parking lots—that do not allow water to reach the soil, leading to flooding. ",
    114: "Urban sprawl is the change in population distribution from high population density areas to low density suburbs that spread into rural lands, leading to potential environmental problems.",
    115: "Ecological footprints compare resource demands and waste production required for an individual or a society.",
    116: "Sustainability refers to humans living on Earth and their use of resources without depletion of the resources for future generations. Environmental indicators that can guide humans to sustainability include biological diversity, food production, average global surface temperatures, and CO2 concentrations, human population, and resource depletion.",
    117: "Sustainable yield is the amount of a renewable resource that can be taken without reducing the available supply.",
    118: "Methods to increase water infiltration include replacing traditional pavement with permeable pavement, planting trees, increasing the use of public transportation, and building up, not out.",
    119: "Integrated pest management (IPM) is a combination of methods used to effectively control pest species while minimizing disruption to the environment. These methods include biological, physical, and limited chemical methods such as biocontrol, intercropping, crop rotation, and natural predators of the pests.",
    120: "The use of integrated pest management (IPM) reduces the risk that pesticides pose to wildlife, water supplies, and human health.",
    121: "Integrated pest management (IPM) minimizes disruptions to the environment and threats to human health but can be complex and expensive.",
    122: "The goal of soil conservation is to prevent soil erosion. Different methods of soil conservation include contour plowing, windbreaks, perennial crops, terracing, no-till agriculture, and strip cropping.",
    123: "Strategies to improve soil fertility include crop rotation and the addition of green manure and limestone.",
    124: "Rotational grazing is the regular rotation of livestock between different pastures in order to avoid overgrazing in a particular area.",
    125: "Aquaculture has expanded because it is highly efficient, requires only small areas of water, and requires little fuel.",
    126: "Aquaculture can contaminate wastewater, and fish that escape may compete or breed with wild fish. The density of fish in aquaculture can lead to increases in diseases incidences, which can be transmitted to wildfish.",
    127: "Some of the methods for mitigating deforestation include reforestation, using and buying wood harvested by ecologically sustainable forestry techniques, and reusing wood. ",
    128: "Methods to protect forests from pathogens and insects include integrated pest management (IPM) and the removal of affected trees.",
    129: "Prescribed burn is a method by which forests are set on fire under controlled conditions in order to reduce the occurrence of natural fires.",
    130: "Non-renewable energy sources are those that exist in a fixed amount and involve energy transformation that cannot be easily replaced.",
    131: "Renewable energy sources are those that can be replenished naturally, at or near the rate of consumption, and reused.",
    132: "The use of energy resources is not evenly distributed between developed and developing countries.",
    133: "The most widely used sources of energy globally are fossil fuels.",
    134: "As the world becomes more industrialized, the demand for energy increases.",
    135: "Availability, price, and governmental regulations influence which energy sources people use and how they use them.",
    136: "Wood is commonly used as a field in the forms of firewood and charcoal. It is often used in developing countries because it is easily accessible.",
    137: "Peat is partially decomposed organic material that can be burned for fuel.",
    138: "Three types of coal used for fuel are lignite, bituminous, and anthracite. Heat, pressure, and depth of burial contribute to the development of various coal types and their qualities.",
    139: "Natural gas, the cleanest of the fossil fuels, is mostly methane.",
    140: "Crude oil can be recovered from tar sands, which are a combination of clay, sand, water and bitumen.",
    141: "Cogeneration occurs when a fuel source is used to generate both useful heat and electricity.",
    142: "The combustion of fossil fuels is a chemical reaction between the fuel and oxygen that yields carbon dioxide and water and releases energy.",
    143: "Energy from fossil fuels is produced by burning those fuels to generate heat, which then turns water into steam. That steam turns a turbine, which generates electricity.",
    144: "Hydrologic fracturing(fracking) can cause groundwater contamination and the release of volatile organic compounds.",
    145: "Nuclear power is generated through fusion, where atoms of U-235, which are stored in the fuel rods, are split into smaller parts after being struck by a neutron. Nuclear fission releases a large amount of heat, which is used to generate steam, which powers a turbine and generates electricity.",
    146: "Radioactivity occurs when the nucleus of a radiative isotope loses energy by emitting radiation.",
    147: "Uranium-235 remains radioactive for a long time, which leads to the problems associated with the disposal of nuclear waste.",
    148: "Nuclear power generation is a non-renewable energy source. Nuclear power is considered a cleaner energy source because it does not produce air pollutants, but it does release thermal pollution and hazardous solid waste.",
    149: "Three Mile Island, Chernobyl, and Fukushima are three cases where accidents or natural disasters led to the release of radiation. ",
    150: "Burning of biomass processes heat for energy at a relatively low cost, but it also produces carbon dioxide, carbon monoxide, nitrogen oxides, particulates, and volatiles organic compounds. The overharvesting of trees for fuel also causes deforestation",
    151: "Ethanol can be used as a substitute for gasoline. Burning ethanol does not introduce additional carbon into the atmosphere via combustion, but the energy return on energy investment for ethanol is low.",
    152: "Photovoltaic solar cells capture light energy from the sun and transform is directly into electrical energy. Their use is limited by the availability of sunlight. ",
    153: "Active solar energy systems use solar energy to heat a liquid through mechanical and electric equipment to collect and store the energy captured from the sun.",
    154: "Passive solar energy systems absorb heat directly from the sun without the use of mechanical and electrical equipment, and energy cannot be collected or stored.",
    155: "Solar energy systems have a low environmental impact and produce clean energy, but they can be expensive. Large solar energy farms may negatively impact desert ecosystems.",
    156: "Hydroelectric power can be generated in several ways. Dams built across rivers collect water in reservoirs. The moving water can be used to spin a turbine. Turbines can also be placed in small rivers, where the flowing water spins the turbine.",
    157: "Tidal energy uses the energy produce by tidal flows to turn a turbine.",
    158: "Hydroelectric power does not generate air pollution or waste, but construction of the power plants can be expensive, and there may be a loss of or change in habitats following the construction of dams.",
    159: "Geothermal energy is obtained by using the heat stored in the Earth’s interior to heat up water, which is brought back to the surface as steam. The steam is used to drive an electric generator.",
    160: "The cost of accessing geothermal energy can be prohibitively expensive, as is not easily accessible in many parts of the world. In addition, it can cause the release of hydrogen sulfide.",
    161: "Hydrogen fuel cells are an alternate to non-renewable fuel sources. They use hydrogen as fuel, combining the hydrogen and oxygen in the air to form water and release energy (electricity) In the process. Water is the product (emission) of a fuel cell.",
    162: "Hydrogen fuel cells have a low environmental impact and produce no carbon dioxide when the hydrogen is produced from water. However, the technology is expensive, and energy is still needed to create the hydrogen gas used in the fuel cell.",
    163: "Wind turbines use the kinetic energy of moving air to spin a turbine, which in turn converts the mechanical energy of the turbine into electricity.",
    164: "Wind energy is a renewable, clean source of energy.  However, birds and bats may be killed if they fly into the spinning turbine blades.",
    165: "Some of the methods for conserving energy around a home include adjusting the thermostat to reduce the use of heat and air conditioning, conserving water, use of energy-efficient appliances, and conservation landscaping.",
    166: "Methods for conserving energy on a large scale include improving fuel economy for vehicles, using BEVs (battery electric vehicles) and hybrid vehicles, using public transportation, and implementing green building design features.",
    167: "Coal combustion releases air pollutants including carbon dioxide, sulfur dioxide, toxic metals, and particulates.",
    168: "The combustion of fossil fuels releases nitrogen oxides into the atmosphere. They lead to the production of ozone, the formation of photochemical smog, and conversion to nitric acid in the atmosphere, causing acid rain. Other pollutant produces by fossil fuel combustion including carbon monoxide, hydrocarbons, and particulate matter.",
    169: "Air quality can be affected through the release of sulfur dioxide during the burning of fossil fuels, mainly diesel fuels.",
    170: "Through the Clean Air Act, the Environmental Protection Agency (EPA) regulated the use of lead, particularly in fuels, which dramatically decreased the amount of lead in the atmosphere.",
    171: "Photochemical smog is formed when nitrogen oxides and volatile organic hydrocarbons react with heat and sunlight to produce a variety of pollutants.",
    172: "Nitrogen oxide is produced early in the day. Ozone concentrations peak in the afternoon and are higher in the summer because ozone is produced by chemical reactions between oxygen and sunlight.",
    173: "Volatile organic compounds(VOCs), such as formaldehyde and gasoline, evaporate or sublimate at room temperature. Trees are a natural source of VOC’s",
    174: "Photochemical smog often forms in urban areas because of the large number of motor vehicles there.",
    175: "Photochemical smog can be reduced through the reduction of nitrogen oxide and VOCs",
    176: "Photochemical smog can harm human health in several ways, including causing respiratory problems and eye irritation.",
    177: "During a thermal inversion, the normal temperature gradient in the atmosphere is altered as the air temperature at the Earth’s surface is cooler than the air at higher altitudes.",
    178: "Thermal inversion traps pollution close to the ground, especially smog and particulates.",
    179: "CO2 appears naturally in the atmosphere from sources such as respiration, decomposition, and volcanic eruptions",
    180: "Indoor air pollutants can come from natural sources, human-made sources, and combustion.",
    181: "Common natural source indoor air pollutants include radon, mold, and dust.",
    182: "Common human-made indoor air pollutants indoor air pollutants include insulation, Volatile Organic Compounds (VOCs) from furniture, paneling and carpets; formaldehyde from building materials, furniture upholstery, and carpeting, and lead from paints.",
    183: "Common combustion air pollutants include carbon monoxide, nitrogen oxides, sulfur dioxide, particulates and tobacco smoke.",
    184: "Radon-222 is a naturally occurring radioactive gas that is produced by the decay of uranium found in some rocks and soils.",
    185: "Radon gas can infiltrate homes as it moves up through the soil and enters homes via the basement or cracks in the walls or foundation. It is also dissolved in groundwater that enters the home through a well.",
    186: "Exposure to radon gas can lead to radon-induced lung cancer, which is the second leading cause of lung cancer in America.",
    187: "Methods to reduce air pollutants include regulatory practices, conservation practices and alternative fuels.",
    188: "A catalytic converter is an air pollution control device for internal combustion engines that converts pollutants Carbon Monoxide, Nox, and hydrocarbons) in exhaust into less harmful molecules (CO2, N2, O2, and H2O).",
    189: "Wet and dry scrubbers are air pollution control devices that remove particulate and/or gasses from industrial exhaust streams.",
    190: "Methods to reduce air pollution from coal-burning power plants include scrubbers and electrostatic precipitators.",
    191: "Acid rain and deposition is due to nitrogen oxides from motor vehicles and coal-burning power plants. Sulfur dioxides that cause acid deposition come from coal-burning power plants.",
    192: "Acid deposition mainly affects communities that are downwind from coal-burning power plants.",
    193: "Acid rain and deposition can lead to the acidification of soils and bodies of water and corrosion of human-made structures.",
    194: "Regional differences in soils and bedrock affect the impact that acid deposition has on the region – such as limestone bedrock’s ability to neutralize the effect of acid raid of lakes and ponds.",
    195: "Noise pollution is sound at levels high enough to cause psychological stress and hearing loss.",
    196: "Sources of noise pollution in urban areas include transportation, construction, and domestic and industrial activities.",
    197: "Some effects of noise pollution on animals in ecological systems include stress, the masking of sounds used to communicate or hunt, damaged hearing and causing changes to migratory routes.",
    198: "A point source refers to a single, undetectable source of a pollutant, such as a smokestack or waste discharge pipe.",
    199: "Organisms have a range of tolerance for various pollutants. Organisms have an optimum range for each factor where they can maintain homeostasis. Outside of this range, organisms may experience psychological stress, limited growth, reduced reproduction and in extreme cases, death.",
    200: "Coral reefs have been suffering damage due to a variety of factors, including increasing ocean temperature, sediment run-off, and destructive fishing practices.",
    201: "Oil spills in marine waters cause organisms to die from the hydrocarbons in oil. Oil that floats on the surface of water can coat the feathers of birds and fur of marine mammals. Some components of oil sink to the ocean floor, killing some bottom-dwelling organisms.",
    202: "Oil that washes up on the beach can have economic consequences on the fishing and tourism industry.",
    203: "Oceanic dead zones are areas of low oxygen in the world’s oceans caused by increased nutrient pollution.",
    204: "An oxygen sag curve is a plot of dissolved oxygen levels versus the distance from a source of pollution, usually excess nutrients and biological refuse.",
    205: "Heavy metals used for industry, especially mining and burning of fossil fuels, can reach the groundwater, impacting the drinking water supply.",
    206: "Litter that reaches aquatic ecosystems beside being unsightly, can create intestinal blockage and choking hazards for wildlife and introduce toxic substances to the food chain.",
    207: "Increased sediment in waterways can reduce light infiltration, which can affect primary producers, and visual predators. Sediment can also settle, disrupting habitats.",
    208: "When elemental sources of mercury enter aquatic environments, bacteria in the water and is converted to highly toxic methylmercury.",
    209: "Endocrine disruptors are chemicals that can interfere with the endocrine system of animals.",
    210: "Endocrine disruptors can lead to birth defects, development disorders, and gender imbalances in fish and other species",
    211: "Wetlands are areas where water covers the soil, either part of all of the time.",
    212: "Threats to wetlands and mangroves include commercial developments, dam construction, overfishing, and pollutants from industrial waste.",
    213: "Eutrophication occurs when a body of water is enriched in nutrients.",
    214: "The increase in nutrients in eutrophic aquatic environments causes an algae bloom. When the algal bloom dies, microbes digest the algae, alone with the oxygen in the water, leading to a decrease in the dissolved oxygen levels in the water. The lack of dissolved oxygen can result in large die-offs of fish and other aquatic organisms.",
    215: "Hypoxic waterways are those bodies of water that are low in dissolved oxygen.",
    216: "Compared to eutrophic waters, oligotrophic waterways have very low amounts of nutrients, stable algae populations and high dissolved oxygen.",
    217: "Anthropogenic causes of eutrophication are agricultural runoff and wastewater release.",
    218: "Variations in water temperature affect the concentration of dissolved oxygen because warm water does not contain as much oxygen as cold water.",
    219: "Persistent organic pollutants (POPs) do not easily break down in the environment because they are synthetic, carbon-based molecules (such as DDT and PCBs).",
    220: "Persistent organic pollutants (POPs) can be toxic to organisms because they are soluble in fat, which allows them to accumulate in organisms’ fatty tissues.",
    221: "Persistent organic pollutants (POPs) can travel over long distances via wind and water before being redeposited.",
    222: "Bioaccumulation is the selective absorption and concentration of elements or compounds by cells in living organisms, most commonly fat-soluble compounds.",
    223: "Humans also experience harmful effects from biomagnification, including issues with the reproductive, nervous and circulatory system.",
    224: "Solid waste is any discarded material that is not a liquid or gas. It is generated in domestic industrial, business, and agricultural sectors.",
    225: "Solid waste is most often disposed of in landfill. Landfills can contaminate groundwater and release harmful gasses.",
    226: "Electronic waste, or e-waste, is composed of discarded electronic devices including televisions, cell phones and computers.",
    227: "A sanitary municipal landfill consists of a bottom liner (plastic or clay), a storm water collection system, a leachate collection system, a cap, and methane collection system.",
    228: "Solid waste can also be disposed of through incineration, where waste is burned at high temperatures. This method significantly reduces the volume of solid waste but releases air pollutants.",
    229: "Some items are not accepted in sanitary landfills and may be disposed of illegally, leading to environmental problems. One example is used rubber tires, which when left in piles can become breeding grounds for mosquitoes that can spread diseases.",
    230: "Some countries dispose of their waste by dumping it in the ocean. This practice, alone with other sources of plastic, has left to large floating islands of trash in the oceans. Additionally, wildlife can be come entangled in the waste, as well as ingest it.",
    231: "Recycling is a process by which certain solid waste materials are processed and converted into new products.",
    232: "Recycling is one way to reduce the current global demand on minerals, but this process is energy-intensive and can be costly.",
    233: "Composting is the process of organic matter such as food scraps, paper, and yard waste decomposing. The product of this decomposition can be used as fertilizer. Drawbacks to composting include odor and rodents.",
    234: "E-waste can be reduced by recycling and reuse. e-waste may contain hazardous chemicals, including heavy metals such as lead and mercury which can leach from landfills into groundwater if they are not disposed of properly. ",
    255: "Landfills mitigation strategies range from burning waste for energy to restoring habitat on former landfills for use as parks. ",
    256: "The combustion of gases produced from the decomposition of organic matter and landfills can be used to turn turbines and generate electricity. This process reduces landfill volume. ",
    257: "Primary treatment of sewage is the physical removal of large objects, often through the use of screens and grates, followed by the settling of solid waste in the bottom of a tank. Secondary treatment is a biological process in which bacteria break down organic matter into carbon dioxide and inorganic sludge, which settles in the bottom of a tank. The tank is aerated to increase the rate at which the bacteria break down the organic matter. ",
    258: "Tertiary treatment is the use of ecological or chemical processes to remove any pollutants left in the water after primary and secondary treatment.",
    259: "Prior to discharge the treated water is exposed to one or more disinfectants (usually chlorine, ozone or UV light) to kill bacteria.",
    260: "A dose response curve describes the effect in an organism or mortality rate in a population based on the dose of a particular toxin or drug.",
    261: "Dysentery is caused by untreated sewage in streams and rivers.",
    262: "Mesothelioma is a type of cancer caused mainly by exposure to asbestos. ",
    263: "Respiration problems and overall lung function can be impacted by elevated levels of tropospheric ozone period.",
    264: "Pathogens adapt to take advantage of new opportunities to infect and spread through human populations.",
    265: "As equatorial-type climate zones spread north and south into what are currently subtropical and temperate climate zones, pathogens, infectious diseases, and any associated vectors are spreading into these areas where the disease has not previously been known to occur.",
    266: "Poverty-stricken, low-income areas often lack sanitary waste disposal and have contaminated drinking water supplies, leading to havens and opportunities for the spread of infectious diseases.",
    267: "Plague is a disease carried by organisms infected with the plague bacteria. It is transferred to humans via the bite of an infected organism or through contact with contaminated fluids or tissues.",
    268: "Tuberculosis is a bacterial infection that typically attacks the lungs. It is spread by breathing in the bacteria from the bodily fluids of an infected person.",
    269: "Malaria is a parasitic disease caused by bites from infected mosquitoes. It is most often found in sub-Saharan Africa.",
    270: "West Nile virus is transmitted to humans via bites from infected mosquitoes.",
    271: "Severe acute respiratory syndrome SARS is a form of pneumonia. It is transferred by inhaling or touching infected fluids.",
    272: "Zika is a virus caused by bites from infected mosquitoes. It can be transmitted through sexual contact.",
    273: "Cholera is a bacterial disease that is contracted from infected water.",
    274: "The stratospheric ozone layer is important to the evolution of life on earth and the continued health and survival of life on earth.",
    275: "Stratospheric ozone depletion is caused by anthropogenic factors, such as chlorofluorocarbons (CFC's), and natural factors, such as the melting of ice crystals in the atmosphere at the beginning of the Antarctic spring.",
    276: "A decrease in stratospheric ozone increases the UV rays that reach the earth surface. Exposure to UV rays can lead to skin cancer and cataracts in humans.",
    277: "Ozone depletion can be mitigated by replacing ozone depleting chemicals with substitutes that do not deplete the ozone layer. Hydrofluorocarbons (HFC's) are one such replacement, but some are strong greenhouse gases.",
    278: "The principal greenhouse gases are carbon dioxide, methane, water vapor, nitrous oxide, and chlorofluorocarbons (CFC's)",
    279: "While water vapor is a greenhouse gas it doesn't contribute significantly to global climate change because it is a short residence time in the atmosphere.",
    280: "The greenhouse effect results in the surface temperature necessary for life on earth to exist.",
    281: "Carbon dioxide, which has a global warming potential (GWP) of one, is used as a reference point for the comparison of different greenhouse gases and their impacts on global climate change period chlorofluorocarbons (CFC's) have the highest GWP, followed by the nitrous oxides, then methane.",
    282: "Global climate change, caused by excess greenhouse gases in the atmosphere, can lead to a variety of environmental problems, including rising sea levels resulting from melting ice sheets and ocean water expansion and disease vectors spreading from the tropics towards the poles. These problems can lead to changes in population dynamics and population movements in response.",
    283: "The earth has undergone climate change throughout geologic time, with major shifts in global temperatures causing periods of warming and cooling as recorded with CO2 date data and ice cores.",
    284: "Marine ecosystems are affected by changes in sea level, some positively, such as newly created habitats on now flooded continental shelves, and some negatively, such as deeper communities that may no longer be in the photic zone of seawater.",
    285: "Winds generated by atmospheric circulation help transport heat throughout the earth. Climate change may change circulation patterns, as temperature change may impact Hadley cells and the jet stream.",
    286: "Earth's polar regions are showing faster response times to global climate change because ice and snow in these regions reflect the most energy back out to space, leading to a positive feedback loop.",
    287: "One consequence to the loss of ice and snow in polar regions is the effect on species that depend on the ice for habitat and food.",
    288: "Ocean warming is caused by an increase in greenhouse gases in the atmosphere.",
    289: "Ocean warming can affect marine species in a variety of ways, including loss of habitat, and metabolic and reproductive changes.",
    290: "Ocean warming is causing chloral bleaching, which occurs when the loss of algae within the corals causes the corals to bleach white. Some corals recover and some die.",
    291: "Ocean acidification is the decrease in pH of the oceans, primarily due to increased CO2 concentrations in the atmosphere, and can be expressed as chemical equations. As more CO2 is released into the atmosphere, the oceans, which absorb a large part of the CO2, become more acidic.",
    292: "Anthropogenic activities that contribute to ocean acidification are those that lead to increased CO2 concentrations in the atmosphere; Burning of fossil fuels, vehicle emissions, and deforestation.",
    293: "Ocean acidification damages coral because acidification makes it difficult for them to form shells, due to the loss of calcium carbonate.",
    294: "Invasive species can be controlled through a variety of human interventions. A variety of factors can lead two species becoming threatened with extinction, such as being extensively hunted, having limited diet, being outcompeted by invasive species, or having specific and limited habitat requirements.",
    295: "Not all species will be in danger of extinction when exposed to the same changes in their ecosystem. Species that are able to adapt to changes in their environment or that are able to move to a new environment are less likely to face extinction.",
    296: "Selective pressures are any factors that change the behaviors and fitness of organisms within an environment.",
    297: "Species in a given ecosystem compete for resources like territory, food, mates, and habitat and this competition may lead to endangerment or extinction.",
    298: "Strategies to protect animal populations include criminalizing poaching, protecting animal habitats, and legislation.",
    299: "HIPPCO (habitat destruction, invasive species, population growth, pollution, climate change, and over exploitation) describes the main factors leading to a decrease in biodiversity.",
    300: "Habitat fragmentation occurs when large habitats are broken into smaller, isolated areas. Causes of habitat fragmentation include the construction of roads and pipelines, clearing for agriculture or development, and logging.",
    301: "Global climate change can cause habitat loss via changes in temperature, precipitation, and sea level rise.",
    302: "Some organisms have been somewhat or completely domesticated and are now managed for economic returns, such as honeybee colonies and domestic livestock. This domestication can have a negative impact on the biodiversity of that organism.",
    303: "Some ways humans can mitigate the impact of loss of biodiversity include creating protected areas, use of habitat corrdos, promoting sustainable land use practices, and restoring lost habitats.",
};  




let totalQuestions = { easy: 0, hard: 0 };
let correctAnswers = { easy: 0, hard: 0 };

document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById("quiz-form");
    const resultSection = document.getElementById("result-section");
    const nextButton = document.getElementById("next-button");
    const scoreSummary = document.getElementById("score-summary");

    let currentTopicIndex = 0;
    const topicKeys = Object.keys(questionPool);

    Object.values(questionPool).forEach(topic => {
        Object.values(topic).forEach(question => {
            console.log("Initializing question:", question);
            if (question.difficulty === "easy" || question.difficulty === "hard") {
                totalQuestions[question.difficulty]++;
            } else {
                console.error("Invalid difficulty detected:", question);
            }
        });
    });
    console.log("Total Questions:", totalQuestions);

    loadTopic(currentTopicIndex);

    nextButton.addEventListener("click", () => {
        processAnswers();
        if (currentTopicIndex < topicKeys.length - 1) {
            currentTopicIndex++;
            loadTopic(currentTopicIndex);
        } else {
            displayFinalResults();
        }
    });

    function loadTopic(topicIndex) {
        const topicName = topicKeys[topicIndex];
        const questions = questionPool[topicName];
        quizForm.innerHTML = `<h3>${topicName}</h3>`;
        nextButton.disabled = true;

        Object.entries(questions).forEach(([questionKey, data]) => {
            const fieldset = document.createElement("fieldset");
            fieldset.innerHTML = `
                <legend>${data.question}</legend>
                ${data.options.map(option => `
                    <label>
                        <input type="radio" name="${questionKey}" value="${option}" />
                        ${option}
                    </label>
                `).join("")}
            `;
            quizForm.appendChild(fieldset);
        });

        quizForm.onchange = checkAllAnswered;
        checkAllAnswered();
    }

    function checkAllAnswered() {
        const questions = questionPool[topicKeys[currentTopicIndex]];
        const allAnswered = Object.keys(questions).every(questionKey => 
            !!quizForm.querySelector(`input[name="${questionKey}"]:checked`)
        );
        nextButton.disabled = !allAnswered;
    }

    function processAnswers() {
        const formData = new FormData(quizForm);
        const questions = questionPool[topicKeys[currentTopicIndex]];

        let correctForTopic = { easy: 0, hard: 0 };
        Object.entries(questions).forEach(([questionKey, data]) => {
            const userAnswer = formData.get(questionKey);
            console.log(`User Answer: ${userAnswer}, Correct Answer: ${data.correctAnswer}, Difficulty: ${data.difficulty}`);
            if (userAnswer === data.correctAnswer) {
                correctAnswers[data.difficulty]++;
                correctForTopic[data.difficulty]++;
            }
        });
        console.log("Correct Answers So Far:", correctAnswers);

        const feedback = `
            <p>Easy Questions Correct: ${correctAnswers.easy} out of ${totalQuestions.easy}</p>
            <p>Hard Questions Correct: ${correctAnswers.hard} out of ${totalQuestions.hard}</p>
            <p> Total Questions Correct: ${correctAnswers.easy} + ${correctAnswers.hard} </p>
            <p> <canvas id="pie-chart" width="400" height="400"></canvas> </p>
        `;
        resultSection.innerHTML = feedback;



        const topicSummary =pieChartSummary();
        console.log("Pie chart summary:", topicSummary);
        displayPieChart({green: correctAnswers.easy + correctAnswers.hard, red: totalQuestions.easy + totalQuestions.hard - correctAnswers.easy + correctAnswers.hard});
    }

    function displayFinalResults() {
        const canvas = document.getElementById("pie-chart");
        resultSection.style.display = "block";
        console.log("Result section visibility:", getComputedStyle(resultSection).display);
    
    
        console.log("Final correctAnswers before display:", correctAnswers);
        console.log("Total questions:", totalQuestions);
        console.log("Score summary:", scoreSummary);
        console.log("Result section visibility:", getComputedStyle(resultSection).display);
        
        const finalScore = `
            <h3>Final Results:</h3>
            <p>Easy Questions: ${correctAnswers.easy} out of ${totalQuestions.easy}</p>
            <p>Hard Questions: ${correctAnswers.hard} out of ${totalQuestions.hard}</p>
        `;
        console.log("the Final score HTMl:", finalScore);
        scoreSummary.innerHTML = finalScore;
        console.log("Updated Score Summary Inner Html:", scoreSummary.innerHTML)
       
        quizForm.innerHTML = "";
        nextButton.style.display = "none";
    }

    function pieChartSummary() {
        let greenCount = 0;
        let redCount = 0;
        const formData = new FormData(quizForm);

        Object.keys(questionPool).forEach(topickey => {
            const questions = questionPool[topickey];
            let correctCount = 0;
            let totalCount = Object.keys(questions).length;

            Object.entries(questions).forEach(([questionKey, data]) => {
                const userAnswer = formData.get(questionKey);
                console.log(userAnswer + " " + data.correctAnswer);
                if (userAnswer === data.correctAnswer)  {
                    greenCount ++;
                } else {
                    redCount ++;
                }
            });
        });

        return {green: greenCount, red: redCount};
        }

        function displayPieChart(topicSummary) {
            const canvas = document.getElementById("pie-chart");
            if (!canvas) {
                console.error("Canvas element #pie-chart not found.");
                return;
            }
        
            const ctx = canvas.getContext("2d");
            if (!ctx) {
                console.error("Failed to get 2D context for #pie-chart.");
                return;
            }
        
            new Chart(ctx, {
                type: "pie",
                data: {
                    labels: ["Perfect - Green", "Incorrect - Red"],
                    datasets: [{
                        label: "Topic Report",
                        data: [topicSummary.green, topicSummary.red],
                        backgroundColor: ["#4CAF50", "#F44336"]
                    }]
                },
                options: {
                    responsive: false,
                    plugins: {
                        legend: { position: "top" },
                        tooltip: {
                            callbacks: {
                                label: function(tooltipItem) {
                                    const label = tooltipItem.label || "";
                                    const value = tooltipItem.raw || 0;
                                    return `${label}: ${value}`;
                                }
                            }
                        }
                    }
                }
            });
        }
        console.log("Result section visibility:", getComputedStyle(resultSection).display);
        console.log("Pie chart canvas:", document.getElementById("pie-chart"));
    }
);




