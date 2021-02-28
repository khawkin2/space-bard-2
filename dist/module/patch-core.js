/*import { _getInitiativeFormula } from "./combat.js";
//import { _preProcessDiceFormula } from "./dice.js";
//import "./misc/vision-permission.js";
//import { ActorSB2 } from "./actor/entity.js";
//import { addCombatTrackerContextOptions } from "./combat.js";

const FormApplication_close = FormApplication.prototype.close;

export async function PatchCore() {

  // Patch TokenHUD.getData to show resource bars even if their value is 0
  const TokenHUD_getData = TokenHUD.prototype.getData;
  TokenHUD.prototype.getData = function () {
    const data = TokenHUD_getData.call(this);
    const bar1 = this.object.getBarAttribute("bar1");
    const bar2 = this.object.getBarAttribute("bar2");
    return mergeObject(data, {
      displayBar1: bar1 != null && bar1.attribute != null && bar1.value != null,
      displayBar2: bar2 != null && bar2.attribute != null && bar2.value != null,
    });
    };

  if (isMinimumCoreVersion("0.7.7") && !isMinimumCoreVersion("0.7.8")) {
    //Override null values throwing warnings
    const Roll_replaceFormulaData = Roll.replaceFormulaData;
    Roll.replaceFormulaData = function (formula, data, { missing, warn = false } = {}) {
      let dataRgx = new RegExp(/@([a-z.0-9_-]+)/gi);
      return formula.replace(dataRgx, (match, term) => {
        let value = getProperty(data, term);
        if (value !== undefined) return String(value).trim();
        if (warn) ui.notifications.warn(game.i18n.format("DICE.WarnMissingData", { match }));
        if (missing !== undefined) return String(missing);
        else return match;
      });
    };

    //Override null values not being treated as 0 for Roll#total
    const Roll__safeEval = Roll.prototype._safeEval;
    Roll.prototype._safeEval = function (expression) {
      const src = "with (sandbox) { return " + expression + "}";
      const evl = new Function("sandbox", src);
      const evld = evl(this.constructor.MATH_PROXY);
      return evld === null ? 0 : evld;
    };
    }

    // Patch, patch, patch
    CONFIG.Combat.initiative.formula = "1d20 + @data.core.init.value + @data.core.init.value/100";
    Combat.prototype._getInitiativeFormula = _getInitiativeFormula;

}*/
