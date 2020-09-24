import ActorSheetSB2 from "./base.js";

/**
 * An Actor sheet for player character type actors.
 * Extends the base ActorSheet5e class.
 * @type {ActorSheetSB2}
 */
export default class ActorSheetSB2Character extends ActorSheetSB2 {
    /**
 * Define default rendering options for the NPC sheet
 * @return {Object}
 */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["space-bard-2", "sheet", "actor", "character"],
            width: 720,
            height: 680
        });
    }

}
