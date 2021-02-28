//// Namespace Configuration Values
export const SB2 = {};

//// ASCII Artwork
//SB2.ASCII = `_______________________________
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
SB2.combat_attributes = {
    "melee": "SB2.Attribute_Melee",
    "ranged": "SB2.Attribute_Ranged",
    "tech": "SB2.Attribute_Tech",
    "authoriy": "SB2.Attribute_Auth",
    "weave": "SB2.Attribute_Weave",
    "constitution": "SB2.Attribute_Con",
    "reflex": "SB2.Attribute_Ref"
};

SB2.damage_types = [
    "physical",
    "magical",
    "psychic",
    "true"
]

///* -------------------------------------------- */

///**
// * Character alignment options
// * @type {Object}
// */
//SB2.alignments = {
//    'lg': "SB2.AlignmentLG",
//    'ng': "SB2.AlignmentNG",
//    'cg': "SB2.AlignmentCG",
//    'ln': "SB2.AlignmentLN",
//    'tn': "SB2.AlignmentTN",
//    'cn': "SB2.AlignmentCN",
//    'le': "SB2.AlignmentLE",
//    'ne': "SB2.AlignmentNE",
//    'ce': "SB2.AlignmentCE"
//};


//SB2.weaponProficiencies = {
//    "sim": "SB2.WeaponSimpleProficiency",
//    "mar": "SB2.WeaponMartialProficiency"
//};

//SB2.toolProficiencies = {
//    "art": "SB2.ToolArtisans",
//    "disg": "SB2.ToolDisguiseKit",
//    "forg": "SB2.ToolForgeryKit",
//    "game": "SB2.ToolGamingSet",
//    "herb": "SB2.ToolHerbalismKit",
//    "music": "SB2.ToolMusicalInstrument",
//    "navg": "SB2.ToolNavigators",
//    "pois": "SB2.ToolPoisonersKit",
//    "thief": "SB2.ToolThieves",
//    "vehicle": "SB2.ToolVehicle"
//};


///* -------------------------------------------- */

///**
// * This Object defines the various lengths of time which can occur
// * @type {Object}
// */
//SB2.timePeriods = {
//    "inst": "SB2.TimeInst",
//    "turn": "SB2.TimeTurn",
//    "round": "SB2.TimeRound",
//    "minute": "SB2.TimeMinute",
//    "hour": "SB2.TimeHour",
//    "day": "SB2.TimeDay",
//    "month": "SB2.TimeMonth",
//    "year": "SB2.TimeYear",
//    "perm": "SB2.TimePerm",
//    "spec": "SB2.Special"
//};


///* -------------------------------------------- */

///**
// * This describes the ways that an ability can be activated
// * @type {Object}
// */
//SB2.abilityActivationTypes = {
//    "none": "SB2.None",
//    "action": "SB2.Action",
//    "bonus": "SB2.BonusAction",
//    "reaction": "SB2.Reaction",
//    "minute": SB2.timePeriods.minute,
//    "hour": SB2.timePeriods.hour,
//    "day": SB2.timePeriods.day,
//    "special": SB2.timePeriods.spec,
//    "legendary": "SB2.LegAct",
//    "lair": "SB2.LairAct",
//    "crew": "SB2.VehicleCrewAction"
//};

///* -------------------------------------------- */


//SB2.abilityConsumptionTypes = {
//    "ammo": "SB2.ConsumeAmmunition",
//    "attribute": "SB2.ConsumeAttribute",
//    "material": "SB2.ConsumeMaterial",
//    "charges": "SB2.ConsumeCharges"
//};


///* -------------------------------------------- */

//// Creature Sizes
//SB2.actorSizes = {
//    "tiny": "SB2.SizeTiny",
//    "sm": "SB2.SizeSmall",
//    "med": "SB2.SizeMedium",
//    "lg": "SB2.SizeLarge",
//    "huge": "SB2.SizeHuge",
//    "grg": "SB2.SizeGargantuan"
//};

//SB2.tokenSizes = {
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
//SB2.itemActionTypes = {
//    "mwak": "SB2.ActionMWAK",
//    "rwak": "SB2.ActionRWAK",
//    "msak": "SB2.ActionMSAK",
//    "rsak": "SB2.ActionRSAK",
//    "save": "SB2.ActionSave",
//    "heal": "SB2.ActionHeal",
//    "abil": "SB2.ActionAbil",
//    "util": "SB2.ActionUtil",
//    "other": "SB2.ActionOther"
//};

///* -------------------------------------------- */

//SB2.itemCapacityTypes = {
//    "items": "SB2.ItemContainerCapacityItems",
//    "weight": "SB2.ItemContainerCapacityWeight"
//};

///* -------------------------------------------- */

///**
// * Enumerate the lengths of time over which an item can have limited use ability
// * @type {Object}
// */
//SB2.limitedUsePeriods = {
//    "sr": "SB2.ShortRest",
//    "lr": "SB2.LongRest",
//    "day": "SB2.Day",
//    "charges": "SB2.Charges"
//};


///* -------------------------------------------- */

///**
// * The set of equipment types for armor, clothing, and other objects which can ber worn by the character
// * @type {Object}
// */
//SB2.equipmentTypes = {
//    "light": "SB2.EquipmentLight",
//    "medium": "SB2.EquipmentMedium",
//    "heavy": "SB2.EquipmentHeavy",
//    "bonus": "SB2.EquipmentBonus",
//    "natural": "SB2.EquipmentNatural",
//    "shield": "SB2.EquipmentShield",
//    "clothing": "SB2.EquipmentClothing",
//    "trinket": "SB2.EquipmentTrinket",
//    "vehicle": "SB2.EquipmentVehicle"
//};


///* -------------------------------------------- */

///**
// * The set of Armor Proficiencies which a character may have
// * @type {Object}
// */
//SB2.armorProficiencies = {
//    "lgt": SB2.equipmentTypes.light,
//    "med": SB2.equipmentTypes.medium,
//    "hvy": SB2.equipmentTypes.heavy,
//    "shl": "SB2.EquipmentShieldProficiency"
//};


///* -------------------------------------------- */

///**
// * Enumerate the valid consumable types which are recognized by the system
// * @type {Object}
// */
//SB2.consumableTypes = {
//    "ammo": "SB2.ConsumableAmmunition",
//    "potion": "SB2.ConsumablePotion",
//    "poison": "SB2.ConsumablePoison",
//    "food": "SB2.ConsumableFood",
//    "scroll": "SB2.ConsumableScroll",
//    "wand": "SB2.ConsumableWand",
//    "rod": "SB2.ConsumableRod",
//    "trinket": "SB2.ConsumableTrinket"
//};

///* -------------------------------------------- */

///**
// * The valid currency denominations supported by the 5e system
// * @type {Object}
// */
//SB2.currencies = {
//    "pp": "SB2.CurrencyPP",
//    "gp": "SB2.CurrencyGP",
//    "ep": "SB2.CurrencyEP",
//    "sp": "SB2.CurrencySP",
//    "cp": "SB2.CurrencyCP",
//};

///* -------------------------------------------- */


//// Damage Types
//SB2.damageTypes = {
//    "acid": "SB2.DamageAcid",
//    "bludgeoning": "SB2.DamageBludgeoning",
//    "cold": "SB2.DamageCold",
//    "fire": "SB2.DamageFire",
//    "force": "SB2.DamageForce",
//    "lightning": "SB2.DamageLightning",
//    "necrotic": "SB2.DamageNecrotic",
//    "piercing": "SB2.DamagePiercing",
//    "poison": "SB2.DamagePoison",
//    "psychic": "SB2.DamagePsychic",
//    "radiant": "SB2.DamageRadiant",
//    "slashing": "SB2.DamageSlashing",
//    "thunder": "SB2.DamageThunder"
//};

///* -------------------------------------------- */

//SB2.distanceUnits = {
//    "none": "SB2.None",
//    "self": "SB2.DistSelf",
//    "touch": "SB2.DistTouch",
//    "ft": "SB2.DistFt",
//    "mi": "SB2.DistMi",
//    "spec": "SB2.Special",
//    "any": "SB2.DistAny"
//};

///* -------------------------------------------- */


///**
// * Configure aspects of encumbrance calculation so that it could be configured by modules
// * @type {Object}
// */
//SB2.encumbrance = {
//    currencyPerWeight: 50,
//    strMultiplier: 15,
//    vehicleWeightMultiplier: 2000 // 2000 lbs in a ton
//};

///* -------------------------------------------- */

///**
// * This Object defines the types of single or area targets which can be applied
// * @type {Object}
// */
//SB2.targetTypes = {
//    "none": "SB2.None",
//    "self": "SB2.TargetSelf",
//    "creature": "SB2.TargetCreature",
//    "ally": "SB2.TargetAlly",
//    "enemy": "SB2.TargetEnemy",
//    "object": "SB2.TargetObject",
//    "space": "SB2.TargetSpace",
//    "radius": "SB2.TargetRadius",
//    "sphere": "SB2.TargetSphere",
//    "cylinder": "SB2.TargetCylinder",
//    "cone": "SB2.TargetCone",
//    "square": "SB2.TargetSquare",
//    "cube": "SB2.TargetCube",
//    "line": "SB2.TargetLine",
//    "wall": "SB2.TargetWall"
//};


///* -------------------------------------------- */


///**
// * Map the subset of target types which produce a template area of effect
// * The keys are SB2 target types and the values are MeasuredTemplate shape types
// * @type {Object}
// */
//SB2.areaTargetTypes = {
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
//SB2.healingTypes = {
//    "healing": "SB2.Healing",
//    "temphp": "SB2.HealingTemp"
//};


///* -------------------------------------------- */


///**
// * Enumerate the denominations of hit dice which can apply to classes
// * @type {Array.<string>}
// */
//SB2.hitDieTypes = ["d6", "d8", "d10", "d12"];


///* -------------------------------------------- */

///**
// * Character senses options
// * @type {Object}
// */
//SB2.senses = {
//    "bs": "SB2.SenseBS",
//    "dv": "SB2.SenseDV",
//    "ts": "SB2.SenseTS",
//    "tr": "SB2.SenseTR"
//};


///* -------------------------------------------- */

///**
// * The set of skill which can be trained
// * @type {Object}
// */
//SB2.skills = {
//    "acr": "SB2.SkillAcr",
//    "ani": "SB2.SkillAni",
//    "arc": "SB2.SkillArc",
//    "ath": "SB2.SkillAth",
//    "dec": "SB2.SkillDec",
//    "his": "SB2.SkillHis",
//    "ins": "SB2.SkillIns",
//    "itm": "SB2.SkillItm",
//    "inv": "SB2.SkillInv",
//    "med": "SB2.SkillMed",
//    "nat": "SB2.SkillNat",
//    "prc": "SB2.SkillPrc",
//    "prf": "SB2.SkillPrf",
//    "per": "SB2.SkillPer",
//    "rel": "SB2.SkillRel",
//    "slt": "SB2.SkillSlt",
//    "ste": "SB2.SkillSte",
//    "sur": "SB2.SkillSur"
//};


///* -------------------------------------------- */

//SB2.spellPreparationModes = {
//    "always": "SB2.SpellPrepAlways",
//    "atwill": "SB2.SpellPrepAtWill",
//    "innate": "SB2.SpellPrepInnate",
//    "pact": "SB2.PactMagic",
//    "prepared": "SB2.SpellPrepPrepared"
//};

//SB2.spellUpcastModes = ["always", "pact", "prepared"];


//SB2.spellProgression = {
//    "none": "SB2.SpellNone",
//    "full": "SB2.SpellProgFull",
//    "half": "SB2.SpellProgHalf",
//    "third": "SB2.SpellProgThird",
//    "pact": "SB2.SpellProgPact",
//    "artificer": "SB2.SpellProgArt"
//};

///* -------------------------------------------- */

///**
// * The available choices for how spell damage scaling may be computed
// * @type {Object}
// */
//SB2.spellScalingModes = {
//    "none": "SB2.SpellNone",
//    "cantrip": "SB2.SpellCantrip",
//    "level": "SB2.SpellLevel"
//};

///* -------------------------------------------- */


///**
// * Define the set of types which a weapon item can take
// * @type {Object}
// */
//SB2.weaponTypes = {
//    "simpleM": "SB2.WeaponSimpleM",
//    "simpleR": "SB2.WeaponSimpleR",
//    "martialM": "SB2.WeaponMartialM",
//    "martialR": "SB2.WeaponMartialR",
//    "natural": "SB2.WeaponNatural",
//    "improv": "SB2.WeaponImprov",
//    "siege": "SB2.WeaponSiege"
//};


///* -------------------------------------------- */

///**
// * Define the set of weapon property flags which can exist on a weapon
// * @type {Object}
// */
//SB2.weaponProperties = {
//    "amm": "SB2.WeaponPropertiesAmm",
//    "hvy": "SB2.WeaponPropertiesHvy",
//    "fin": "SB2.WeaponPropertiesFin",
//    "fir": "SB2.WeaponPropertiesFir",
//    "foc": "SB2.WeaponPropertiesFoc",
//    "lgt": "SB2.WeaponPropertiesLgt",
//    "lod": "SB2.WeaponPropertiesLod",
//    "rch": "SB2.WeaponPropertiesRch",
//    "rel": "SB2.WeaponPropertiesRel",
//    "ret": "SB2.WeaponPropertiesRet",
//    "spc": "SB2.WeaponPropertiesSpc",
//    "thr": "SB2.WeaponPropertiesThr",
//    "two": "SB2.WeaponPropertiesTwo",
//    "ver": "SB2.WeaponPropertiesVer"
//};


//// Spell Components
//SB2.spellComponents = {
//    "V": "SB2.ComponentVerbal",
//    "S": "SB2.ComponentSomatic",
//    "M": "SB2.ComponentMaterial"
//};

//// Spell Schools
//SB2.spellSchools = {
//    "abj": "SB2.SchoolAbj",
//    "con": "SB2.SchoolCon",
//    "div": "SB2.SchoolDiv",
//    "enc": "SB2.SchoolEnc",
//    "evo": "SB2.SchoolEvo",
//    "ill": "SB2.SchoolIll",
//    "nec": "SB2.SchoolNec",
//    "trs": "SB2.SchoolTrs"
//};

//// Spell Levels
//SB2.spellLevels = {
//    0: "SB2.SpellLevel0",
//    1: "SB2.SpellLevel1",
//    2: "SB2.SpellLevel2",
//    3: "SB2.SpellLevel3",
//    4: "SB2.SpellLevel4",
//    5: "SB2.SpellLevel5",
//    6: "SB2.SpellLevel6",
//    7: "SB2.SpellLevel7",
//    8: "SB2.SpellLevel8",
//    9: "SB2.SpellLevel9"
//};

//// Spell Scroll Compendium UUIDs
//SB2.spellScrollIds = {
//    0: 'Compendium.SB2.items.rQ6sO7HDWzqMhSI3',
//    1: 'Compendium.SB2.items.9GSfMg0VOA2b4uFN',
//    2: 'Compendium.SB2.items.XdDp6CKh9qEvPTuS',
//    3: 'Compendium.SB2.items.hqVKZie7x9w3Kqds',
//    4: 'Compendium.SB2.items.DM7hzgL836ZyUFB1',
//    5: 'Compendium.SB2.items.wa1VF8TXHmkrrR35',
//    6: 'Compendium.SB2.items.tI3rWx4bxefNCexS',
//    7: 'Compendium.SB2.items.mtyw4NS1s7j2EJaD',
//    8: 'Compendium.SB2.items.aOrinPg7yuDZEuWr',
//    9: 'Compendium.SB2.items.O4YbkJkLlnsgUszZ'
//};

///**
// * Define the standard slot progression by character level.
// * The entries of this array represent the spell slot progression for a full spell-caster.
// * @type {Array[]}
// */
//SB2.SPELL_SLOT_TABLE = [
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
//SB2.polymorphSettings = {
//    keepPhysical: 'SB2.PolymorphKeepPhysical',
//    keepMental: 'SB2.PolymorphKeepMental',
//    keepSaves: 'SB2.PolymorphKeepSaves',
//    keepSkills: 'SB2.PolymorphKeepSkills',
//    mergeSaves: 'SB2.PolymorphMergeSaves',
//    mergeSkills: 'SB2.PolymorphMergeSkills',
//    keepClass: 'SB2.PolymorphKeepClass',
//    keepFeats: 'SB2.PolymorphKeepFeats',
//    keepSpells: 'SB2.PolymorphKeepSpells',
//    keepItems: 'SB2.PolymorphKeepItems',
//    keepBio: 'SB2.PolymorphKeepBio',
//    keepVision: 'SB2.PolymorphKeepVision'
//};

///* -------------------------------------------- */

///**
// * Skill, ability, and tool proficiency levels
// * Each level provides a proficiency multiplier
// * @type {Object}
// */
//SB2.proficiencyLevels = {
//    0: "SB2.NotProficient",
//    1: "SB2.Proficient",
//    0.5: "SB2.HalfProficient",
//    2: "SB2.Expertise"
//};

///* -------------------------------------------- */

///**
// * The amount of cover provided by an object.
// * In cases where multiple pieces of cover are
// * in play, we take the highest value.
// */
//SB2.cover = {
//    0: 'SB2.None',
//    .5: 'SB2.CoverHalf',
//    .75: 'SB2.CoverThreeQuarters',
//    1: 'SB2.CoverTotal'
//}

///* -------------------------------------------- */


//// Condition Types
//SB2.conditionTypes = {
//    "blinded": "SB2.ConBlinded",
//    "charmed": "SB2.ConCharmed",
//    "deafened": "SB2.ConDeafened",
//    "diseased": "SB2.ConDiseased",
//    "exhaustion": "SB2.ConExhaustion",
//    "frightened": "SB2.ConFrightened",
//    "grappled": "SB2.ConGrappled",
//    "incapacitated": "SB2.ConIncapacitated",
//    "invisible": "SB2.ConInvisible",
//    "paralyzed": "SB2.ConParalyzed",
//    "petrified": "SB2.ConPetrified",
//    "poisoned": "SB2.ConPoisoned",
//    "prone": "SB2.ConProne",
//    "restrained": "SB2.ConRestrained",
//    "stunned": "SB2.ConStunned",
//    "unconscious": "SB2.ConUnconscious"
//};

//// Languages
//SB2.languages = {
//    "common": "SB2.LanguagesCommon",
//    "aarakocra": "SB2.LanguagesAarakocra",
//    "abyssal": "SB2.LanguagesAbyssal",
//    "aquan": "SB2.LanguagesAquan",
//    "auran": "SB2.LanguagesAuran",
//    "celestial": "SB2.LanguagesCelestial",
//    "deep": "SB2.LanguagesDeepSpeech",
//    "draconic": "SB2.LanguagesDraconic",
//    "druidic": "SB2.LanguagesDruidic",
//    "dwarvish": "SB2.LanguagesDwarvish",
//    "elvish": "SB2.LanguagesElvish",
//    "giant": "SB2.LanguagesGiant",
//    "gith": "SB2.LanguagesGith",
//    "gnomish": "SB2.LanguagesGnomish",
//    "goblin": "SB2.LanguagesGoblin",
//    "gnoll": "SB2.LanguagesGnoll",
//    "halfling": "SB2.LanguagesHalfling",
//    "ignan": "SB2.LanguagesIgnan",
//    "infernal": "SB2.LanguagesInfernal",
//    "orc": "SB2.LanguagesOrc",
//    "primordial": "SB2.LanguagesPrimordial",
//    "sylvan": "SB2.LanguagesSylvan",
//    "terran": "SB2.LanguagesTerran",
//    "cant": "SB2.LanguagesThievesCant",
//    "undercommon": "SB2.LanguagesUndercommon"
//};

//// Character Level XP Requirements
//SB2.CHARACTER_EXP_LEVELS = [
//    0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
//    120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000]
//    ;

//// Challenge Rating XP Levels
//SB2.CR_EXP_LEVELS = [
//    10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
//    20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
//];

//// Configure Optional Character Flags
//SB2.characterFlags = {
//    "powerfulBuild": {
//        name: "SB2.FlagsPowerfulBuild",
//        hint: "SB2.FlagsPowerfulBuildHint",
//        section: "Racial Traits",
//        type: Boolean
//    },
//    "savageAttacks": {
//        name: "SB2.FlagsSavageAttacks",
//        hint: "SB2.FlagsSavageAttacksHint",
//        section: "Racial Traits",
//        type: Boolean
//    },
//    "elvenAccuracy": {
//        name: "SB2.FlagsElvenAccuracy",
//        hint: "SB2.FlagsElvenAccuracyHint",
//        section: "Racial Traits",
//        type: Boolean
//    },
//    "halflingLucky": {
//        name: "SB2.FlagsHalflingLucky",
//        hint: "SB2.FlagsHalflingLuckyHint",
//        section: "Racial Traits",
//        type: Boolean
//    },
//    "initiativeAdv": {
//        name: "SB2.FlagsInitiativeAdv",
//        hint: "SB2.FlagsInitiativeAdvHint",
//        section: "Feats",
//        type: Boolean
//    },
//    "initiativeAlert": {
//        name: "SB2.FlagsAlert",
//        hint: "SB2.FlagsAlertHint",
//        section: "Feats",
//        type: Boolean
//    },
//    "jackOfAllTrades": {
//        name: "SB2.FlagsJOAT",
//        hint: "SB2.FlagsJOATHint",
//        section: "Feats",
//        type: Boolean
//    },
//    "observantFeat": {
//        name: "SB2.FlagsObservant",
//        hint: "SB2.FlagsObservantHint",
//        skills: ['prc', 'inv'],
//        section: "Feats",
//        type: Boolean
//    },
//    "reliableTalent": {
//        name: "SB2.FlagsReliableTalent",
//        hint: "SB2.FlagsReliableTalentHint",
//        section: "Feats",
//        type: Boolean
//    },
//    "remarkableAthlete": {
//        name: "SB2.FlagsRemarkableAthlete",
//        hint: "SB2.FlagsRemarkableAthleteHint",
//        abilities: ['str', 'dex', 'con'],
//        section: "Feats",
//        type: Boolean
//    },
//    "weaponCriticalThreshold": {
//        name: "SB2.FlagsCritThreshold",
//        hint: "SB2.FlagsCritThresholdHint",
//        section: "Feats",
//        type: Number,
//        placeholder: 20
//    }
//};

//// Configure allowed status flags
//SB2.allowedActorFlags = [
//    "isPolymorphed", "originalActor"
//].concat(Object.keys(SB2.characterFlags));
