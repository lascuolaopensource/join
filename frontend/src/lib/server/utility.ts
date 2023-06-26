export const serializeNonPOJOs = (value: object | null) => {
	return structuredClone(value);
};
