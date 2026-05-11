import { Project } from '../types';

export async function getGithubRepos(username: string): Promise<Project[]> {
  // Obtenemos los repositorios de GitHub (ordenados por fecha de actualización, los 6 más recientes)
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
    next: { revalidate: 3600 } // ISR: se revalida cada hora para que sea súper rápido el tiempo de carga
  });

  if (!res.ok) {
    console.error('Error fetching GitHub repos:', res.statusText);
    return [];
  }

  const data = await res.json();

  return data.map((repo: any) => {
    // Asignar imágenes específicas según el nombre del repo
    let customImage = `https://opengraph.githubassets.com/1/${username}/${repo.name}`;
    let customDescription = repo.description;

    if (repo.name === 'Portfolio') {
      customImage = '/projects/portfolio_cover.png';
      customDescription = 'Portfolio web personal desarrollado con Next.js, React y Tailwind CSS. Diseñado con un enfoque moderno y cinemático para mostrar mis proyectos.';
    }
    else if (repo.name === 'Proyecto-IA') {
      customImage = '/projects/ai_project_cover.png';
    }
    else if (repo.name === 'Proyecto-Final') {
      customImage = '/projects/final_project_cover.png';
    }

    return {
      id: repo.id.toString(),
      title: repo.name,
      description: customDescription || 'Sin descripción disponible.',
      url: repo.html_url,
      language: repo.language,
      imageUrl: customImage
    };
  });
}
