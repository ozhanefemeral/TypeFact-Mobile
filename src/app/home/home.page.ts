import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../article.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  
  articles: any[] = [];

  constructor(private articleService: ArticleService) {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getArticles().subscribe((data: any[]) => {
      data.forEach(element => {
        element.image = "https://sixteenactivities.herokuapp.com" + element.image
      });

      this.articles = data;
    });
  }

  ngOnInit() {
  }
}
