import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleService } from "../article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  private articleId: String;
  private article: Object;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramsMap => {
      this.articleId = paramsMap['params']['id'];
      this.articleService.getArticleById(this.articleId)
        .subscribe((data: Object) => {
          console.log(data);
          this.article = data;
        })
    });
  }

}
