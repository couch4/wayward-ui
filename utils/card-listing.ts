export const arrayFromStringList = (str: string) => {
  if (!str) return [];
  return str.split(",");
};

export const getOptionLabel = (
  name: string,
  options: any[],
  selectedFilters: string[],
) => {
  let title = `<span class="label-main">${name}</span>`;
  const selectedLabels: any[] = options.filter((option: any) =>
    selectedFilters.includes(option.filterGuid),
  );
  if (selectedLabels.length > 0) {
    title = `<span class="label-main">${name}</span>
    <span class="label-sub">${selectedLabels
      .map((label) => label.name)
      .join(", ")}</span>`;
  }

  return title;
};
