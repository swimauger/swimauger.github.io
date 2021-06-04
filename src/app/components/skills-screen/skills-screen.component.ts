import { Component, OnInit } from '@angular/core';
import { LanguageColorService } from 'src/app/services/language-color/language-color.service';

@Component({
  selector: 'skills-screen',
  templateUrl: './skills-screen.component.html',
  styleUrls: ['./skills-screen.component.scss']
})
export class SkillsScreenComponent implements OnInit {

  public repos: { [language: string]: any[] } = {};
  public stars: { [language: string ]: any[] } = {
    "TypeScript": Array(5),
    "JavaScript": Array(5),
    "Java": Array(4),
    "Python": Array(4),
    "C++": Array(3)
  };
  public activeBird: string = '';

  constructor(public languageColors: LanguageColorService) { }

  onMouseEnter(language: string) {
    if (window.innerWidth >= 768) {
      this.activeBird = language;
    }
  }

  onMouseLeave() {
    if (window.innerWidth >= 768) {
      this.activeBird = '';
    }
  }

  onClick(language: string) {
    if (window.innerWidth < 768) {
      this.activeBird = this.activeBird === language ? '' : language;
    }
  }

  async ngOnInit(): Promise<void> {
    const response = await fetch('https://api.github.com/users/swimauger/repos');
    const repos = await response.json();

    await Promise.all(repos.map(async (repo: any) => {
      const res = await fetch(repo.contributors_url);
      const contributors = await res.json();
      if (!this.repos[repo.language]) this.repos[repo.language] = [];
      this.repos[repo.language].push({
        name: repo.name,
        language: repo.language,
        url: repo.html_url,
        description: repo.description,
        stars: repo.stargazers_count,
        forks: repo.forks,
        color: this.languageColors.get(repo.language),
        lastUpdated: repo.updated_at,
        isSchoolWork: !!contributors.find((contributor: any) => contributor.login === 'markauge')
      });

      this.repos[repo.language].sort((a: any, b: any) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
      this.repos[repo.language].sort((a: any, b: any) => b.stars - a.stars);
    }));
  }
}
