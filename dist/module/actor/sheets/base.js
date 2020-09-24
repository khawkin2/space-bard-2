
/**
 * Extend the basic ActorSheet class to suppose system-specific logic and functionality.
 * This sheet is an Abstract layer which is not used.
 * @extends {ActorSheet}
 */
export default class ActorSheetSB2 extends ActorSheet {
    /* -------------------------------------------- */

    /** @override */
    get template() {
        if (!game.user.isGM && this.actor.limited) return "systems/space-bard-2/templates/actors/limited-sheet.html";
        return `systems/space-bard-2/templates/actors/${this.actor.data.type}-sheet.html`;
    }

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            //scrollY: [
            //    ".inventory .inventory-list",
            //    ".features .inventory-list",
            //    ".spellbook .inventory-list"
            //],
            tabs: [{ navSelector: ".tabs", contentSelector: ".sheet-body", initial: "description" }]
        });
    }



    /** @override */
    getData() {

        // Basic data
        let isOwner = this.entity.owner;
        const data = {
            owner: isOwner,
            limited: this.entity.limited,
            options: this.options,
            editable: this.isEditable,
            cssClass: isOwner ? "editable" : "locked",
            isCharacter: this.entity.data.type === "character",
            //isNPC: this.entity.data.type === "npc",
            //isVehicle: this.entity.data.type === 'vehicle',
            config: CONFIG.SB2,
        };

        // The Actor and its Items
        data.actor = duplicate(this.actor.data);
        data.items = this.actor.items.map(i => {
            i.data.labels = i.labels;
            return i.data;
        });
        data.items.sort((a, b) => (a.sort || 0) - (b.sort || 0));
        data.data = data.actor.data;
        data.labels = this.actor.labels || {};
        data.filters = this._filters;

        // Ability Scores
        /*
        for (let [a, abl] of Object.entries(data.actor.data.abilities)) {
            abl.icon = this._getProficiencyIcon(abl.proficient);
            abl.hover = CONFIG.DND5E.proficiencyLevels[abl.proficient];
            abl.label = CONFIG.DND5E.abilities[a];
        }

        // Skills
        if (data.actor.data.skills) {
            for (let [s, skl] of Object.entries(data.actor.data.skills)) {
                skl.ability = CONFIG.DND5E.abilityAbbreviations[skl.ability];
                skl.icon = this._getProficiencyIcon(skl.value);
                skl.hover = CONFIG.DND5E.proficiencyLevels[skl.value];
                skl.label = CONFIG.DND5E.skills[s];
            }
        }

        // Update traits
        this._prepareTraits(data.actor.data.traits);

        // Prepare owned items
        this._prepareItems(data);
        */

        // Return data to the sheet
        return data
    }



    /* -------------------------------------------- */
    /*  Event Listeners and Handlers
    /* -------------------------------------------- */

    /**
     * Activate event listeners using the prepared sheet HTML
     * @param html {HTML}   The prepared HTML object ready to be rendered into the DOM
     */
    activateListeners(html) {

        // Activate Item Filters
        //const filterLists = html.find(".filter-list");
        //filterLists.each(this._initializeFilterItemList.bind(this));
        //filterLists.on("click", ".filter-item", this._onToggleFilter.bind(this));

        // Item summaries
        //html.find('.item .item-name h4').click(event => this._onItemSummary(event));

        // Editable Only Listeners
        if (this.isEditable) {

            // Input focus and update
            const inputs = html.find("input");
            inputs.focus(ev => ev.currentTarget.select());
            inputs.addBack().find('[data-dtype="Number"]').change(this._onChangeInputDelta.bind(this));

            // Ability Proficiency
            //html.find('.ability-proficiency').click(this._onToggleAbilityProficiency.bind(this));

            // Toggle Skill Proficiency
            //html.find('.skill-proficiency').on("click contextmenu", this._onCycleSkillProficiency.bind(this));

            // Trait Selector
            //html.find('.trait-selector').click(this._onTraitSelector.bind(this));

            // Configure Special Flags
            //html.find('.configure-flags').click(this._onConfigureFlags.bind(this));

            // Owned Item management
            //html.find('.item-create').click(this._onItemCreate.bind(this));
            //html.find('.item-edit').click(this._onItemEdit.bind(this));
            //html.find('.item-delete').click(this._onItemDelete.bind(this));
            //html.find('.item-uses input').click(ev => ev.target.select()).change(this._onUsesChange.bind(this));
            //html.find('.slot-max-override').click(this._onSpellSlotOverride.bind(this));
        }

        // Owner Only Listeners
        if (this.actor.owner) {

            // Ability Checks
            //html.find('.ability-name').click(this._onRollAbilityTest.bind(this));


            // Roll Skill Checks
            //html.find('.skill-name').click(this._onRollSkillCheck.bind(this));

            // Item Rolling
            //html.find('.item .item-image').click(event => this._onItemRoll(event));
            //html.find('.item .item-recharge').click(event => this._onItemRecharge(event));
        }

        // Otherwise remove rollable classes
        else {
            html.find(".rollable").each((i, el) => el.classList.remove("rollable"));
        }

        // Handle default listeners last so system listeners are triggered first
        super.activateListeners(html);
    }


    /* -------------------------------------------- */
    /*  Helpers                                     */
    /* -------------------------------------------- */

    /**
     * Handle input changes to numeric form fields, allowing them to accept delta-typed inputs
     * @param event
     * @private
     */
    _onChangeInputDelta(event) {
        const input = event.target;
        const value = input.value;
        if (["+", "-"].includes(value[0])) {
            let delta = parseFloat(value);
            input.value = getProperty(this.actor.data, input.name) + delta;
        } else if (value[0] === "=") {
            input.value = value.slice(1);
        }
    }



}
