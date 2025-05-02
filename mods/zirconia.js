var modName = "mods/zirconia.js";

if(enabledMods.includes("mods/code_library.js")) {
    // Base Zirconia
    elements.zirconia = {
        color: "#8c8c8c", // A metallic gray color
        behavior: behaviors.SOLID, // Behaves like a solid
        tempHigh: 1400, // Melting point
        stateHigh: "molten_zirconia", // Turns to molten zirconia when heated above 1400°C
        category: "solids",
        state: "solid",
        density: 5600, // Density in kg/m³
        hardness: 0.8, // Hardness value for breaking
        reactions: {
            "water": { // Reaction with water
                elem2: "dihydrogen_zirconide_oxide", // Creates H2Zi2O
                chance: 0.5, // 50% chance for the reaction to occur
            },
        },
    };

    // Molten Zirconia
    elements.molten_zirconia = {
        color: "#ffcc99", // A glowing molten orange
        behavior: behaviors.LIQUID, // Behaves like a liquid
        tempLow: 1400, // Solidifies back to zirconia when cooled below 1400°C
        stateLow: "zirconia",
        category: "liquids",
        state: "liquid",
        density: 5200, // Density of molten zirconia
    };

    // Dihydrogen Zirconide Oxide (H2Zi2O)
    elements.dihydrogen_zirconide_oxide = {
        color: "#cfcfcf", // A light gray color
        behavior: behaviors.POWDER, // Behaves like a powder
        category: "powders",
        state: "solid",
        density: 3800, // Density in kg/m³
    };
} else {
    alert(`The mods/code_library.js mod is required and has been automatically inserted (reload for this to take effect).`);
    enabledMods.splice(enabledMods.indexOf(modName), 0, "mods/code_library.js");
    localStorage.setItem("enabledMods", JSON.stringify(enabledMods));
};
