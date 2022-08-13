export const getWorkoutForDay = (day: string | undefined) => {
	if (!day) {
		return null;
	}
	return "workout";
};
