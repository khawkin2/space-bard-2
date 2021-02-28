export const preloadTemplates = async function() {
	const templatePaths = [
		"systems/space-bard-2/templates/actors/parts/actor-header.html",
		"systems/space-bard-2/templates/actors/parts/actor-attributes.html",
		"systems/space-bard-2/templates/actors/parts/actor-skills.html"
		// Add paths to "systems/space-bard-2/templates"
	];

	return loadTemplates(templatePaths);
}
