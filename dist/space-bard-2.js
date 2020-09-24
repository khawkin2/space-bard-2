/**
 * This is your JavaScript entry file for Foundry VTT.
 * Register custom settings, sheets, and constants using the Foundry API.
 * Change this heading to be more descriptive to your system, or remove it.
 * Author: [your name]
 * Content License: [copyright and-or license] If using an existing system
 * 					you may want to put a (link to a) license or copyright
 * 					notice here (e.g. the OGL).
 * Software License: [your license] Put your desired license here, which
 * 					 determines how others may use and modify your system
 */

// Import JavaScript modules
import { SB2 } from './module/config.js';
import { registerSettings } from './module/settings.js';
import { preloadTemplates } from './module/preloadTemplates.js';


// Import Entities
import ActorSB2 from "./module/actor/entity.js";
//import ItemSB2 from "./module/item/entity.js";

// Import Applications
//import AbilityTemplate from "./module/pixi/ability-template.js";
//import AbilityUseDialog from "./module/apps/ability-use-dialog.js";
//import ActorSheetFlags from "./module/apps/actor-flags.js";
import ActorSheetSB2Character from "./module/actor/sheets/character.js";
//import ActorSheetSB2NPC from "./module/actor/sheets/npc.js";
//import ActorSheetSB2Vehicle from "./module/actor/sheets/vehicle.js";
//import ItemSheetSB2 from "./module/item/sheet.js";
//import ShortRestDialog from "./module/apps/short-rest.js";
//import TraitSelector from "./module/apps/trait-selector.js";



/* ------------------------------------ */
/* Initialize system					*/
/* ------------------------------------ */
Hooks.once('init', async function() {
	console.log('space-bard-2 | Initializing space-bard-2');

    // Assign custom classes and constants here
    // Create a namespace within the game global
    game.sb2 = {
        applications: {
            //AbilityUseDialog,
            //ActorSheetFlags,
            ActorSheetSB2Character,
            //ActorSheet5eNPC,
            //ActorSheet5eVehicle,
            //ItemSheet5e,
            //ShortRestDialog,
            //TraitSelector
        },
        //canvas: {
        //    AbilityTemplate
        //},
        config: SB2,
        //dice: dice,

        entities: {
            ActorSB2,
            //ItemSB2,
        },
        //macros: macros,
        //migrations: migrations,
        //rollItemMacro: macros.rollItemMacro
    };

    CONFIG.SB2 = SB2;

    CONFIG.Actor.entityClass = ActorSB2;
	
	// Register custom system settings
	registerSettings();
	
	// Preload Handlebars templates
	await preloadTemplates();

	// Register custom sheets (if any)
	Actors.unregisterSheet("core", ActorSheet);
	Actors.registerSheet("sb2", ActorSheetSB2Character, { types: ["character"], makeDefault: true });

});

/* ------------------------------------ */
/* Setup system							*/
/* ------------------------------------ */
Hooks.once('setup', function() {
	// Do anything after initialization but before
	// ready
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', function() {
	// Do anything once the system is ready
});

// Add any additional hooks if necessary
