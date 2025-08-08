import { useEffect, useState } from 'react';

export interface GitHubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio?: string;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  twitter_username?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics?: string[];
  homepage?: string | null;
  updated_at: string;
}

interface UseGitHubResult {
  profile: GitHubProfile | null;
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
  topRepos: GitHubRepo[];
}

// Helper: sort repos by stars then forks
function selectTopRepos(repos: GitHubRepo[], limit = 6): GitHubRepo[] {
  return [...repos]
    .sort((a, b) => {
      if (b.stargazers_count === a.stargazers_count) {
        return b.forks_count - a.forks_count;
      }
      return b.stargazers_count - a.stargazers_count;
    })
    .slice(0, limit);
}

export const useGitHub = (username: string = 'devleo10'): UseGitHubResult => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchAll() {
      try {
        setLoading(true);
        setError(null);

        // Optionally use token for higher rate limits
        const headers: Record<string, string> = {};
        const token = (import.meta as any).env?.VITE_GITHUB_TOKEN;
        if (token) headers['Authorization'] = `Bearer ${token}`;

        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, { headers }),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, { headers })
        ]);

        if (!profileRes.ok) throw new Error(`Profile fetch failed: ${profileRes.status}`);
        if (!reposRes.ok) throw new Error(`Repos fetch failed: ${reposRes.status}`);

        const profileData: GitHubProfile = await profileRes.json();
        const reposData: GitHubRepo[] = await reposRes.json();

        if (cancelled) return;
        setProfile(profileData);
        setRepos(reposData);
      } catch (e: any) {
        if (cancelled) return;
        setError(e.message || 'Failed to load GitHub data');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchAll();
    return () => { cancelled = true; };
  }, [username]);

  return { profile, repos, loading, error, topRepos: selectTopRepos(repos) };
};
