import type { Category, Project, SortField, SortOrder } from '../types/project';

export function filterBySearch(projects: Project[], query: string): Project[] {
  const normalizedQuery = query.trim().toLocaleLowerCase('tr');
  if (!normalizedQuery) return projects;

  return projects.filter((project) => {
    const inTitle = project.title.toLocaleLowerCase('tr').includes(normalizedQuery);
    const inDescription = project.description.toLocaleLowerCase('tr').includes(normalizedQuery);
    const inTech = project.tech.some((item) => item.toLocaleLowerCase('tr').includes(normalizedQuery));
    return inTitle || inDescription || inTech;
  });
}

export function filterByCategory(projects: Project[], category: Category | 'all'): Project[] {
  if (category === 'all') return projects;
  return projects.filter((project) => project.category === category);
}

export function sortProjects(projects: Project[], field: SortField, order: SortOrder): Project[] {
  const sorted = [...projects].sort((a, b) => {
    if (field === 'year') return a.year - b.year;
    return a.title.localeCompare(b.title, 'tr');
  });

  return order === 'desc' ? sorted.reverse() : sorted;
}

export function applyFilters(
  projects: Project[],
  search: string,
  category: Category | 'all',
  sortField: SortField,
  sortOrder: SortOrder,
): Project[] {
  let result = filterBySearch(projects, search);
  result = filterByCategory(result, category);
  result = sortProjects(result, sortField, sortOrder);
  return result;
}
