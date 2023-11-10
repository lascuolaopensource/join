export function removeEmptyFilesFromFormData(formData: FormData): FormData {
	const newFormData = new FormData();
	for (const [key, value] of formData.entries()) {
		if (value instanceof File && value.size === 0) continue;
		else newFormData.append(key, value);
	}
	return newFormData;
}
