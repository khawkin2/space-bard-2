
/**
 * Extend the basic ActorSheet class to suppose system-specific logic and functionality.
 * This sheet is an Abstract layer which is not used.
 * @extends {ActorSheet}
 */
export default class ActorSB2 extends Actor {


    /* -------------------------------------------- */

    /**
     * @override
     * TODO: This becomes unnecessary after 0.7.x is released
     */
    initialize() {
        console.log("Initializing Actor " + this.name);
        try {
            this.prepareData();
        } catch (err) {
            console.error(`Failed to initialize data for ${this.constructor.name} ${this.id}:`);
            console.error(err);
        }
    }

    /* -------------------------------------------- */

    /**
     * @override
     * TODO: This becomes unnecessary after 0.7.x is released
     */
    prepareData() {
        super.prepareData();

        console.log("_data");
        console.log(this._data);
        console.log("data");
        console.log(this.data);
        const is07x = !isNewerVersion("0.7.1", game.data.version);
        for (var item in this._data) {
            console.log(item);
        }
        if (is07x) this.data = duplicate(this._data);
        if (!this.data.img) this.data.img = CONST.DEFAULT_TOKEN;
        if (!this.data.name) this.data.name = "New " + this.entity;
        this.prepareBaseData();
        this.prepareEmbeddedEntities();
        if (is07x) this.applyActiveEffects();
        this.prepareDerivedData();
    }
    /* -------------------------------------------- */

    /**
     * @override
     * TODO: This becomes unnecessary after 0.7.x is released
     */
    applyActiveEffects() {
        if (!isNewerVersion("0.7.1", game.data.version)) return super.applyActiveEffects();
    }

    /* -------------------------------------------- */

    /** @override */
    prepareBaseData() {

        console.log(this.data);
        for (let abl of Object.keys(this.data.data.combat_attributes)) {
            console.log(abl);
        }

        // Compute initial ability score modifiers in base data since these may be referenced
        for (let abl of Object.values(this.data.data.combat_attributes)) {
            abl.value = abl.raw + abl.buffs + abl.damage;
            abl.mod = Math.floor((abl.value - 10) / 2);
        }

        // Type-specific base data preparation
        switch (this.data.type) {
            case "character":
                return this._prepareCharacterData(this.data);
            case "npc":
                return this._prepareNPCData(this.data);
            case "vehicle":
                return this._prepareVehicleData(this.data);
        }
    }


    /* -------------------------------------------- */
    /*  Data Preparation Helpers                    */
    /* -------------------------------------------- */

    /**
     * Prepare Character type specific data
     */
    _prepareCharacterData(actorData) {
        /*
        const data = actorData.data;

        // Determine character level and available hit dice based on owned Class items
        const [level, hd] = actorData.items.reduce((arr, item) => {
            if (item.type === "class") {
                const classLevels = parseInt(item.data.levels) || 1;
                arr[0] += classLevels;
                arr[1] += classLevels - (parseInt(item.data.hitDiceUsed) || 0);
            }
            return arr;
        }, [0, 0]);
        data.details.level = level;
        data.attributes.hd = hd;

        // Character proficiency bonus
        data.attributes.prof = Math.floor((level + 7) / 4);

        // Experience required for next level
        const xp = data.details.xp;
        xp.max = this.getLevelExp(level || 1);
        const prior = this.getLevelExp(level - 1 || 0);
        const required = xp.max - prior;
        const pct = Math.round((xp.value - prior) * 100 / required);
        xp.pct = Math.clamped(pct, 0, 100);

        // Inventory encumbrance
        data.attributes.encumbrance = this._computeEncumbrance(actorData);
        */
    }


    /* -------------------------------------------- */

    /** @override */
    prepareDerivedData() {
        const actorData = this.data;
        const data = actorData.data;
        const flags = actorData.flags.sb2 || {};
        const bonuses = getProperty(data, "bonuses.abilities") || {};

        /*
        // Retrieve data for polymorphed actors
        let originalSaves = null;
        let originalSkills = null;
        if (this.isPolymorphed) {
            const transformOptions = this.getFlag('dnd5e', 'transformOptions');
            const original = game.actors?.get(this.getFlag('dnd5e', 'originalActor'));
            if (original) {
                if (transformOptions.mergeSaves) {
                    originalSaves = original.data.data.abilities;
                }
                if (transformOptions.mergeSkills) {
                    originalSkills = original.data.data.skills;
                }
            }
        }
        */

        // Ability modifiers and saves
        const checkBonus = Number.isNumeric(bonuses.check) ? parseInt(bonuses.check) : 0;
        for (let [id, abl] of Object.entries(data.combat_attributes)) {
            abl.mod = Math.floor((abl.value - 10) / 2);
            //abl.prof = (abl.proficient || 0) * data.attributes.prof;
            //abl.saveBonus = saveBonus;
            //abl.checkBonus = checkBonus;
            abl.save = abl.mod /*+ abl.prof + abl.saveBonus*/;

            /*
             * // If we merged saves when transforming, take the highest bonus here.
            if (originalSaves && abl.proficient) {
                abl.save = Math.max(abl.save, originalSaves[id].save);
            }
            */
        }


        this._prepareSkills(actorData, bonuses, checkBonus);

        // Determine Initiative Modifier
        const init = data.core.init;
        //init.mod = data.combat_attributes.reflex.mod;

        //init.total = init.mod + init.value;

        // Prepare spell-casting data
        //data.attributes.spelldc = this.getSpellDC(data.attributes.spellcasting);
        //this._computeSpellcastingProgression(this.data);
    }

    /* -------------------------------------------- */

    /**
     * Prepare skill checks.
     * @param actorData
     * @param bonuses Global bonus data.
     * @param checkBonus Ability check specific bonus.
     * @param originalSkills A transformed actor's original actor's skills.
     * @private
     */
    _prepareSkills(actorData, bonuses, checkBonus) {
        /*
        if (actorData.type === 'vehicle') return;

        const data = actorData.data;
        const flags = actorData.flags.dnd5e || {};

        // Skill modifiers
        const feats = DND5E.characterFlags;
        const athlete = flags.remarkableAthlete;
        const joat = flags.jackOfAllTrades;
        const observant = flags.observantFeat;
        const skillBonus = Number.isNumeric(bonuses.skill) ? parseInt(bonuses.skill) : 0;
        let round = Math.floor;
        for (let [id, skl] of Object.entries(data.skills)) {
            skl.value = parseFloat(skl.value || 0);

            // Apply Remarkable Athlete or Jack of all Trades
            let multi = skl.value;
            if (athlete && (skl.value === 0) && feats.remarkableAthlete.abilities.includes(skl.ability)) {
                multi = 0.5;
                round = Math.ceil;
            }
            if (joat && (skl.value === 0)) multi = 0.5;

            // Compute modifier
            skl.bonus = checkBonus + skillBonus;
            skl.mod = data.abilities[skl.ability].mod;
            skl.prof = round(multi * data.attributes.prof);
            skl.total = skl.mod + skl.prof + skl.bonus;

            // If we merged skills when transforming, take the highest bonus here.
            if (originalSkills && skl.value > 0.5) {
                skl.total = Math.max(skl.total, originalSkills[id].total);
            }

            // Compute passive bonus
            const passive = observant && (feats.observantFeat.skills.includes(id)) ? 5 : 0;
            skl.passive = 10 + skl.total + passive;
        }
        */
    }

    /* -------------------------------------------- */
    /*  Socket Listeners and Handlers
    /* -------------------------------------------- */

    /** @override */
    static async create(data, options = {}) {
        data.token = data.token || {};
        if (data.type === "character") {
            mergeObject(data.token, {
                vision: true,
                dimSight: 30,
                brightSight: 0,
                actorLink: true,
                disposition: 1
            }, { overwrite: false });
        }
        return super.create(data, options);
    }

}