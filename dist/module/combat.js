/* -------------------------------------------- */

/**
 * Override the default Initiative formula to customize special behaviors of the D&D5e system.
 * Apply advantage, proficiency, or bonuses where appropriate
 * Apply the dexterity score as a decimal tiebreaker if requested
 * See Combat._getInitiativeFormula for more detail.
 */
export const _getInitiativeFormula = function (combatant) {
    if (!combatant) return "1d20";
    const init = combatant.actor.data.data.core.init;
    const parts = ["1d20", init.value, init.value / 100];
    return parts.filter((p) => p !== null).join(" + ");
};
