//// Namespace Configuration Values
export const SB2 = {};

//// ASCII Artwork
//SB2E.ASCII = `_______________________________
//______      ______ _____ _____ 
//|  _  \\___  |  _  \\  ___|  ___|
//| | | ( _ ) | | | |___ \\| |__  
//| | | / _ \\/\\ | | |   \\ \\  __| 
//| |/ / (_>  < |/ //\\__/ / |___ 
//|___/ \\___/\\/___/ \\____/\\____/
//_______________________________`;


///**
// * The set of Ability Scores used within the system
// * @type {Object}
// */
//SB2E.combat_attributes = {
//    "melee": "SB2E.AbilityStr",
//    "ranged": "SB2E.AbilityDex",
//    "tech": "SB2E.AbilityCon",
//    "authoriy": "SB2E.AbilityInt",
//    "weave": "SB2E.AbilityWis",
//    "constitution": "SB2E.AbilityCha",
//    "reflex": "SB2E.AbilityCha"
//};

///* -------------------------------------------- */

///**
// * Character alignment options
// * @type {Object}
// */
//SB2E.alignments = {
//    'lg': "SB2E.AlignmentLG",
//    'ng': "SB2E.AlignmentNG",
//    'cg': "SB2E.AlignmentCG",
//    'ln': "SB2E.AlignmentLN",
//    'tn': "SB2E.AlignmentTN",
//    'cn': "SB2E.AlignmentCN",
//    'le': "SB2E.AlignmentLE",
//    'ne': "SB2E.AlignmentNE",
//    'ce': "SB2E.AlignmentCE"
//};


//SB2E.weaponProficiencies = {
//    "sim": "SB2E.WeaponSimpleProficiency",
//    "mar": "SB2E.WeaponMartialProficiency"
//};

//SB2E.toolProficiencies = {
//    "art": "SB2E.ToolArtisans",
//    "disg": "SB2E.ToolDisguiseKit",
//    "forg": "SB2E.ToolForgeryKit",
//    "game": "SB2E.ToolGamingSet",
//    "herb": "SB2E.ToolHerbalismKit",
//    "music": "SB2E.ToolMusicalInstrument",
//    "navg": "SB2E.ToolNavigators",
//    "pois": "SB2E.ToolPoisonersKit",
//    "thief": "SB2E.ToolThieves",
//    "vehicle": "SB2E.ToolVehicle"
//};


///* -------------------------------------------- */

///**
// * This Object defines the various lengths of time which can occur
// * @type {Object}
// */
//SB2E.timePeriods = {
//    "inst": "SB2E.TimeInst",
//    "turn": "SB2E.TimeTurn",
//    "round": "SB2E.TimeRound",
//    "minute": "SB2E.TimeMinute",
//    "hour": "SB2E.TimeHour",
//    "day": "SB2E.TimeDay",
//    "month": "SB2E.TimeMonth",
//    "year": "SB2E.TimeYear",
//    "perm": "SB2E.TimePerm",
//    "spec": "SB2E.Special"
//};


///* -------------------------------------------- */

///**
// * This describes the ways that an ability can be activated
// * @type {Object}
// */
//SB2E.abilityActivationTypes = {
//    "none": "SB2E.None",
//    "action": "SB2E.Action",
//    "bonus": "SB2E.BonusAction",
//    "reaction": "SB2E.Reaction",
//    "minute": SB2E.timePeriods.minute,
//    "hour": SB2E.timePeriods.hour,
//    "day": SB2E.timePeriods.day,
//    "special": SB2E.timePeriods.spec,
//    "legendary": "SB2E.LegAct",
//    "lair": "SB2E.LairAct",
//    "crew": "SB2E.VehicleCrewAction"
//};

///* -------------------------------------------- */


//SB2E.abilityConsumptionTypes = {
//    "ammo": "SB2E.ConsumeAmmunition",
//    "attribute": "SB2E.ConsumeAttribute",
//    "material": "SB2E.ConsumeMaterial",
//    "charges": "SB2E.ConsumeCharges"
//};


///* -------------------------------------------- */

//// Creature Sizes
//SB2E.actorSizes = {
//    "tiny": "SB2E.SizeTiny",
//    "sm": "SB2E.SizeSmall",
//    "med": "SB2E.SizeMedium",
//    "lg": "SB2E.SizeLarge",
//    "huge": "SB2E.SizeHuge",
//    "grg": "SB2E.SizeGargantuan"
//};

//SB2E.tokenSizes = {
//    "tiny": 1,
//    "sm": 1,
//    "med": 1,
//    "lg": 2,
//    "huge": 3,
//    "grg": 4
//};

///* -------------------------------------------- */

///**
// * Classification types for item action types
// * @type {Object}
// */
//SB2E.itemActionTypes = {
//    "mwak": "SB2E.ActionMWAK",
//    "rwak": "SB2E.ActionRWAK",
//    "msak": "SB2E.ActionMSAK",
//    "rsak": "SB2E.ActionRSAK",
//    "save": "SB2E.ActionSave",
//    "heal": "SB2E.ActionHeal",
//    "abil": "SB2E.ActionAbil",
//    "util": "SB2E.ActionUtil",
//    "other": "SB2E.ActionOther"
//};

///* -------------------------------------------- */

//SB2E.itemCapacityTypes = {
//    "items": "SB2E.ItemContainerCapacityItems",
//    "weight": "SB2E.ItemContainerCapacityWeight"
//};

///* -------------------------------------------- */

///**
// * Enumerate the lengths of time over which an item can have limited use ability
// * @type {Object}
// */
//SB2E.limitedUsePeriods = {
//    "sr": "SB2E.ShortRest",
//    "lr": "SB2E.LongRest",
//    "day": "SB2E.Day",
//    "charges": "SB2E.Charges"
//};


///* -------------------------------------------- */

///**
// * The set of equipment types for armor, clothing, and other objects which can ber worn by the character
// * @type {Object}
// */
//SB2E.equipmentTypes = {
//    "light": "SB2E.EquipmentLight",
//    "medium": "SB2E.EquipmentMedium",
//    "heavy": "SB2E.EquipmentHeavy",
//    "bonus": "SB2E.EquipmentBonus",
//    "natural": "SB2E.EquipmentNatural",
//    "shield": "SB2E.EquipmentShield",
//    "clothing": "SB2E.EquipmentClothing",
//    "trinket": "SB2E.EquipmentTrinket",
//    "vehicle": "SB2E.EquipmentVehicle"
//};


///* -------------------------------------------- */

///**
// * The set of Armor Proficiencies which a character may have
// * @type {Object}
// */
//SB2E.armorProficiencies = {
//    "lgt": SB2E.equipmentTypes.light,
//    "med": SB2E.equipmentTypes.medium,
//    "hvy": SB2E.equipmentTypes.heavy,
//    "shl": "SB2E.EquipmentShieldProficiency"
//};


///* -------------------------------------------- */

///**
// * Enumerate the valid consumable types which are recognized by the system
// * @type {Object}
// */
//SB2E.consumableTypes = {
//    "ammo": "SB2E.ConsumableAmmunition",
//    "potion": "SB2E.ConsumablePotion",
//    "poison": "SB2E.ConsumablePoison",
//    "food": "SB2E.ConsumableFood",
//    "scroll": "SB2E.ConsumableScroll",
//    "wand": "SB2E.ConsumableWand",
//    "rod": "SB2E.ConsumableRod",
//    "trinket": "SB2E.ConsumableTrinket"
//};

///* -------------------------------------------- */

///**
// * The valid currency denominations supported by the 5e system
// * @type {Object}
// */
//SB2E.currencies = {
//    "pp": "SB2E.CurrencyPP",
//    "gp": "SB2E.CurrencyGP",
//    "ep": "SB2E.CurrencyEP",
//    "sp": "SB2E.CurrencySP",
//    "cp": "SB2E.CurrencyCP",
//};

///* -------------------------------------------- */


//// Damage Types
//SB2E.damageTypes = {
//    "acid": "SB2E.DamageAcid",
//    "bludgeoning": "SB2E.DamageBludgeoning",
//    "cold": "SB2E.DamageCold",
//    "fire": "SB2E.DamageFire",
//    "force": "SB2E.DamageForce",
//    "lightning": "SB2E.DamageLightning",
//    "necrotic": "SB2E.DamageNecrotic",
//    "piercing": "SB2E.DamagePiercing",
//    "poison": "SB2E.DamagePoison",
//    "psychic": "SB2E.DamagePsychic",
//    "radiant": "SB2E.DamageRadiant",
//    "slashing": "SB2E.DamageSlashing",
//    "thunder": "SB2E.DamageThunder"
//};

///* -------------------------------------------- */

//SB2E.distanceUnits = {
//    "none": "SB2E.None",
//    "self": "SB2E.DistSelf",
//    "touch": "SB2E.DistTouch",
//    "ft": "SB2E.DistFt",
//    "mi": "SB2E.DistMi",
//    "spec": "SB2E.Special",
//    "any": "SB2E.DistAny"
//};

///* -------------------------------------------- */


///**
// * Configure aspects of encumbrance calculation so that it could be configured by modules
// * @type {Object}
// */
//SB2E.encumbrance = {
//    currencyPerWeight: 50,
//    strMultiplier: 15,
//    vehicleWeightMultiplier: 2000 // 2000 lbs in a ton
//};

///* -------------------------------------------- */

///**
// * This Object defines the types of single or area targets which can be applied
// * @type {Object}
// */
//SB2E.targetTypes = {
//    "none": "SB2E.None",
//    "self": "SB2E.TargetSelf",
//    "creature": "SB2E.TargetCreature",
//    "ally": "SB2E.TargetAlly",
//    "enemy": "SB2E.TargetEnemy",
//    "object": "SB2E.TargetObject",
//    "space": "SB2E.TargetSpace",
//    "radius": "SB2E.TargetRadius",
//    "sphere": "SB2E.TargetSphere",
//    "cylinder": "SB2E.TargetCylinder",
//    "cone": "SB2E.TargetCone",
//    "square": "SB2E.TargetSquare",
//    "cube": "SB2E.TargetCube",
//    "line": "SB2E.TargetLine",
//    "wall": "SB2E.TargetWall"
//};


///* -------------------------------------------- */


///**
// * Map the subset of target types which produce a template area of effect
// * The keys are SB2E target types and the values are MeasuredTemplate shape types
// * @type {Object}
// */
//SB2E.areaTargetTypes = {
//    cone: "cone",
//    cube: "rect",
//    cylinder: "circle",
//    line: "ray",
//    radius: "circle",
//    sphere: "circle",
//    square: "rect",
//    wall: "ray"
//};


///* -------------------------------------------- */

//// Healing Types
//SB2E.healingTypes = {
//    "healing": "SB2E.Healing",
//    "temphp": "SB2E.HealingTemp"
//};


///* -------------------------------------------- */


///**
// * Enumerate the denominations of hit dice which can apply to classes
// * @type {Array.<string>}
// */
//SB2E.hitDieTypes = ["d6", "d8", "d10", "d12"];


///* -------------------------------------------- */

///**
// * Character senses options
// * @type {Object}
// */
//SB2E.senses = {
//    "bs": "SB2E.SenseBS",
//    "dv": "SB2E.SenseDV",
//    "ts": "SB2E.SenseTS",
//    "tr": "SB2E.SenseTR"
//};


///* -------------------------------------------- */

///**
// * The set of skill which can be trained
// * @type {Object}
// */
//SB2E.skills = {
//    "acr": "SB2E.SkillAcr",
//    "ani": "SB2E.SkillAni",
//    "arc": "SB2E.SkillArc",
//    "ath": "SB2E.SkillAth",
//    "dec": "SB2E.SkillDec",
//    "his": "SB2E.SkillHis",
//    "ins": "SB2E.SkillIns",
//    "itm": "SB2E.SkillItm",
//    "inv": "SB2E.SkillInv",
//    "med": "SB2E.SkillMed",
//    "nat": "SB2E.SkillNat",
//    "prc": "SB2E.SkillPrc",
//    "prf": "SB2E.SkillPrf",
//    "per": "SB2E.SkillPer",
//    "rel": "SB2E.SkillRel",
//    "slt": "SB2E.SkillSlt",
//    "ste": "SB2E.SkillSte",
//    "sur": "SB2E.SkillSur"
//};


///* -------------------------------------------- */

//SB2E.spellPreparationModes = {
//    "always": "SB2E.SpellPrepAlways",
//    "atwill": "SB2E.SpellPrepAtWill",
//    "innate": "SB2E.SpellPrepInnate",
//    "pact": "SB2E.PactMagic",
//    "prepared": "SB2E.SpellPrepPrepared"
//};

//SB2E.spellUpcastModes = ["always", "pact", "prepared"];


//SB2E.spellProgression = {
//    "none": "SB2E.SpellNone",
//    "full": "SB2E.SpellProgFull",
//    "half": "SB2E.SpellProgHalf",
//    "third": "SB2E.SpellProgThird",
//    "pact": "SB2E.SpellProgPact",
//    "artificer": "SB2E.SpellProgArt"
//};

///* -------------------------------------------- */

///**
// * The available choices for how spell damage scaling may be computed
// * @type {Object}
// */
//SB2E.spellScalingModes = {
//    "none": "SB2E.SpellNone",
//    "cantrip": "SB2E.SpellCantrip",
//    "level": "SB2E.SpellLevel"
//};

///* -------------------------------------------- */


///**
// * Define the set of types which a weapon item can take
// * @type {Object}
// */
//SB2E.weaponTypes = {
//    "simpleM": "SB2E.WeaponSimpleM",
//    "simpleR": "SB2E.WeaponSimpleR",
//    "martialM": "SB2E.WeaponMartialM",
//    "martialR": "SB2E.WeaponMartialR",
//    "natural": "SB2E.WeaponNatural",
//    "improv": "SB2E.WeaponImprov",
//    "siege": "SB2E.WeaponSiege"
//};


///* -------------------------------------------- */

///**
// * Define the set of weapon property flags which can exist on a weapon
// * @type {Object}
// */
//SB2E.weaponProperties = {
//    "amm": "SB2E.WeaponPropertiesAmm",
//    "hvy": "SB2E.WeaponPropertiesHvy",
//    "fin": "SB2E.WeaponPropertiesFin",
//    "fir": "SB2E.WeaponPropertiesFir",
//    "foc": "SB2E.WeaponPropertiesFoc",
//    "lgt": "SB2E.WeaponPropertiesLgt",
//    "lod": "SB2E.WeaponPropertiesLod",
//    "rch": "SB2E.WeaponPropertiesRch",
//    "rel": "SB2E.WeaponPropertiesRel",
//    "ret": "SB2E.WeaponPropertiesRet",
//    "spc": "SB2E.WeaponPropertiesSpc",
//    "thr": "SB2E.WeaponPropertiesThr",
//    "two": "SB2E.WeaponPropertiesTwo",
//    "ver": "SB2E.WeaponPropertiesVer"
//};


//// Spell Components
//SB2E.spellComponents = {
//    "V": "SB2E.ComponentVerbal",
//    "S": "SB2E.ComponentSomatic",
//    "M": "SB2E.ComponentMaterial"
//};

//// Spell Schools
//SB2E.spellSchools = {
//    "abj": "SB2E.SchoolAbj",
//    "con": "SB2E.SchoolCon",
//    "div": "SB2E.SchoolDiv",
//    "enc": "SB2E.SchoolEnc",
//    "evo": "SB2E.SchoolEvo",
//    "ill": "SB2E.SchoolIll",
//    "nec": "SB2E.SchoolNec",
//    "trs": "SB2E.SchoolTrs"
//};

//// Spell Levels
//SB2E.spellLevels = {
//    0: "SB2E.SpellLevel0",
//    1: "SB2E.SpellLevel1",
//    2: "SB2E.SpellLevel2",
//    3: "SB2E.SpellLevel3",
//    4: "SB2E.SpellLevel4",
//    5: "SB2E.SpellLevel5",
//    6: "SB2E.SpellLevel6",
//    7: "SB2E.SpellLevel7",
//    8: "SB2E.SpellLevel8",
//    9: "SB2E.SpellLevel9"
//};

//// Spell Scroll Compendium UUIDs
//SB2E.spellScrollIds = {
//    0: 'Compendium.SB2E.items.rQ6sO7HDWzqMhSI3',
//    1: 'Compendium.SB2E.items.9GSfMg0VOA2b4uFN',
//    2: 'Compendium.SB2E.items.XdDp6CKh9qEvPTuS',
//    3: 'Compendium.SB2E.items.hqVKZie7x9w3Kqds',
//    4: 'Compendium.SB2E.items.DM7hzgL836ZyUFB1',
//    5: 'Compendium.SB2E.items.wa1VF8TXHmkrrR35',
//    6: 'Compendium.SB2E.items.tI3rWx4bxefNCexS',
//    7: 'Compendium.SB2E.items.mtyw4NS1s7j2EJaD',
//    8: 'Compendium.SB2E.items.aOrinPg7yuDZEuWr',
//    9: 'Compendium.SB2E.items.O4YbkJkLlnsgUszZ'
//};

///**
// * Define the standard slot progression by character level.
// * The entries of this array represent the spell slot progression for a full spell-caster.
// * @type {Array[]}
// */
//SB2E.SPELL_SLOT_TABLE = [
//    [2],
//    [3],
//    [4, 2],
//    [4, 3],
//    [4, 3, 2],
//    [4, 3, 3],
//    [4, 3, 3, 1],
//    [4, 3, 3, 2],
//    [4, 3, 3, 3, 1],
//    [4, 3, 3, 3, 2],
//    [4, 3, 3, 3, 2, 1],
//    [4, 3, 3, 3, 2, 1],
//    [4, 3, 3, 3, 2, 1, 1],
//    [4, 3, 3, 3, 2, 1, 1],
//    [4, 3, 3, 3, 2, 1, 1, 1],
//    [4, 3, 3, 3, 2, 1, 1, 1],
//    [4, 3, 3, 3, 2, 1, 1, 1, 1],
//    [4, 3, 3, 3, 3, 1, 1, 1, 1],
//    [4, 3, 3, 3, 3, 2, 1, 1, 1],
//    [4, 3, 3, 3, 3, 2, 2, 1, 1]
//];

///* -------------------------------------------- */

//// Polymorph options.
//SB2E.polymorphSettings = {
//    keepPhysical: 'SB2E.PolymorphKeepPhysical',
//    keepMental: 'SB2E.PolymorphKeepMental',
//    keepSaves: 'SB2E.PolymorphKeepSaves',
//    keepSkills: 'SB2E.PolymorphKeepSkills',
//    mergeSaves: 'SB2E.PolymorphMergeSaves',
//    mergeSkills: 'SB2E.PolymorphMergeSkills',
//    keepClass: 'SB2E.PolymorphKeepClass',
//    keepFeats: 'SB2E.PolymorphKeepFeats',
//    keepSpells: 'SB2E.PolymorphKeepSpells',
//    keepItems: 'SB2E.PolymorphKeepItems',
//    keepBio: 'SB2E.PolymorphKeepBio',
//    keepVision: 'SB2E.PolymorphKeepVision'
//};

///* -------------------------------------------- */

///**
// * Skill, ability, and tool proficiency levels
// * Each level provides a proficiency multiplier
// * @type {Object}
// */
//SB2E.proficiencyLevels = {
//    0: "SB2E.NotProficient",
//    1: "SB2E.Proficient",
//    0.5: "SB2E.HalfProficient",
//    2: "SB2E.Expertise"
//};

///* -------------------------------------------- */

///**
// * The amount of cover provided by an object.
// * In cases where multiple pieces of cover are
// * in play, we take the highest value.
// */
//SB2E.cover = {
//    0: 'SB2E.None',
//    .5: 'SB2E.CoverHalf',
//    .75: 'SB2E.CoverThreeQuarters',
//    1: 'SB2E.CoverTotal'
//}

///* -------------------------------------------- */


//// Condition Types
//SB2E.conditionTypes = {
//    "blinded": "SB2E.ConBlinded",
//    "charmed": "SB2E.ConCharmed",
//    "deafened": "SB2E.ConDeafened",
//    "diseased": "SB2E.ConDiseased",
//    "exhaustion": "SB2E.ConExhaustion",
//    "frightened": "SB2E.ConFrightened",
//    "grappled": "SB2E.ConGrappled",
//    "incapacitated": "SB2E.ConIncapacitated",
//    "invisible": "SB2E.ConInvisible",
//    "paralyzed": "SB2E.ConParalyzed",
//    "petrified": "SB2E.ConPetrified",
//    "poisoned": "SB2E.ConPoisoned",
//    "prone": "SB2E.ConProne",
//    "restrained": "SB2E.ConRestrained",
//    "stunned": "SB2E.ConStunned",
//    "unconscious": "SB2E.ConUnconscious"
//};

//// Languages
//SB2E.languages = {
//    "common": "SB2E.LanguagesCommon",
//    "aarakocra": "SB2E.LanguagesAarakocra",
//    "abyssal": "SB2E.LanguagesAbyssal",
//    "aquan": "SB2E.LanguagesAquan",
//    "auran": "SB2E.LanguagesAuran",
//    "celestial": "SB2E.LanguagesCelestial",
//    "deep": "SB2E.LanguagesDeepSpeech",
//    "draconic": "SB2E.LanguagesDraconic",
//    "druidic": "SB2E.LanguagesDruidic",
//    "dwarvish": "SB2E.LanguagesDwarvish",
//    "elvish": "SB2E.LanguagesElvish",
//    "giant": "SB2E.LanguagesGiant",
//    "gith": "SB2E.LanguagesGith",
//    "gnomish": "SB2E.LanguagesGnomish",
//    "goblin": "SB2E.LanguagesGoblin",
//    "gnoll": "SB2E.LanguagesGnoll",
//    "halfling": "SB2E.LanguagesHalfling",
//    "ignan": "SB2E.LanguagesIgnan",
//    "infernal": "SB2E.LanguagesInfernal",
//    "orc": "SB2E.LanguagesOrc",
//    "primordial": "SB2E.LanguagesPrimordial",
//    "sylvan": "SB2E.LanguagesSylvan",
//    "terran": "SB2E.LanguagesTerran",
//    "cant": "SB2E.LanguagesThievesCant",
//    "undercommon": "SB2E.LanguagesUndercommon"
//};

//// Character Level XP Requirements
//SB2E.CHARACTER_EXP_LEVELS = [
//    0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
//    120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000]
//    ;

//// Challenge Rating XP Levels
//SB2E.CR_EXP_LEVELS = [
//    10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
//    20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
//];

//// Configure Optional Character Flags
//SB2E.characterFlags = {
//    "powerfulBuild": {
//        name: "SB2E.FlagsPowerfulBuild",
//        hint: "SB2E.FlagsPowerfulBuildHint",
//        section: "Racial Traits",
//        type: Boolean
//    },
//    "savageAttacks": {
//        name: "SB2E.FlagsSavageAttacks",
//        hint: "SB2E.FlagsSavageAttacksHint",
//        section: "Racial Traits",
//        type: Boolean
//    },
//    "elvenAccuracy": {
//        name: "SB2E.FlagsElvenAccuracy",
//        hint: "SB2E.FlagsElvenAccuracyHint",
//        section: "Racial Traits",
//        type: Boolean
//    },
//    "halflingLucky": {
//        name: "SB2E.FlagsHalflingLucky",
//        hint: "SB2E.FlagsHalflingLuckyHint",
//        section: "Racial Traits",
//        type: Boolean
//    },
//    "initiativeAdv": {
//        name: "SB2E.FlagsInitiativeAdv",
//        hint: "SB2E.FlagsInitiativeAdvHint",
//        section: "Feats",
//        type: Boolean
//    },
//    "initiativeAlert": {
//        name: "SB2E.FlagsAlert",
//        hint: "SB2E.FlagsAlertHint",
//        section: "Feats",
//        type: Boolean
//    },
//    "jackOfAllTrades": {
//        name: "SB2E.FlagsJOAT",
//        hint: "SB2E.FlagsJOATHint",
//        section: "Feats",
//        type: Boolean
//    },
//    "observantFeat": {
//        name: "SB2E.FlagsObservant",
//        hint: "SB2E.FlagsObservantHint",
//        skills: ['prc', 'inv'],
//        section: "Feats",
//        type: Boolean
//    },
//    "reliableTalent": {
//        name: "SB2E.FlagsReliableTalent",
//        hint: "SB2E.FlagsReliableTalentHint",
//        section: "Feats",
//        type: Boolean
//    },
//    "remarkableAthlete": {
//        name: "SB2E.FlagsRemarkableAthlete",
//        hint: "SB2E.FlagsRemarkableAthleteHint",
//        abilities: ['str', 'dex', 'con'],
//        section: "Feats",
//        type: Boolean
//    },
//    "weaponCriticalThreshold": {
//        name: "SB2E.FlagsCritThreshold",
//        hint: "SB2E.FlagsCritThresholdHint",
//        section: "Feats",
//        type: Number,
//        placeholder: 20
//    }
//};

//// Configure allowed status flags
//SB2E.allowedActorFlags = [
//    "isPolymorphed", "originalActor"
//].concat(Object.keys(SB2E.characterFlags));
