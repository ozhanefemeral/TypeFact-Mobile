import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get(`https://sixteenactivities.herokuapp.com/api/blogs/all`)
  }

  getArticleById(id) {
    return this.http.get(`https://sixteenactivities.herokuapp.com/api/blogs/${id}`)
  }
}
