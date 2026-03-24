import type { Project } from '../types/project';

const API_URL = '/data/projects.json';

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Projeler yüklenemedi. HTTP: ${response.status}`);
    }

    const data: Project[] = await response.json();
    return data;
  } catch (error: unknown) {
    console.error('Veri çekme hatası:', error);
    throw error;
  }
}
