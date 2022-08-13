export const eachDay = {
	monday: [
		"DB Goblet Squats",
		"DB Walking Lunges",
		"DB RDLs",
		"DB Blugarian Split Squat",
		"Standing DB Calve Raises",
	],

	tuesday: [
		"Single Arm DB Rows",
		"DB Shurgs",
		"Pull Ups",
		"Seated Incline DB Curls",
		"Alternating DB Curls",
		"Alternating DB Hammer Curls",
	],

	wednesday: [
		"Flat DB Bench",
		"Incline DB Press",
		"[Replace me]",
		"DB Arnold Press",
		"DB Lateral Raises",
		"Seated DB Overhead Extension",
		"DB Tricep Kickback",
		"Wighted / Bodyweight Dips",
	],

	thursday: [
		"DB Goblet Squats",
		"DB Walking Lunges",
		"DB RDLs",
		"DB Blugarian Split Squat",
		"Standing DB Calve Raises",
	],

	friday: [
		"Pull Ups",
		"Incline DB Press",
		"Single Arm DB Rows",
		"DB Pullovers",
		"Incline DB Chest Fly",
		"Incline DB Close Grip Press",
	],

	saturday: [
		"DB Military Press",
		"DB Lateral Raise",
		"DB Bent Over Rear Delt Fly X DB Front Raise (replace)",
		"DB Overhead Extension",
		"Alternating DB Curls",
		"Alternating Hammer Curls",
	],
};

export const getWorkoutForDay = (day: string | undefined) => {
	if (!day) {
		return [];
	}
	if (eachDay[day as keyof typeof eachDay]) {
		return eachDay[day as keyof typeof eachDay];
	} else {
		return [];
	}
};
