import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor(private http: HttpClient) { }

  getRandomMeme(selectedType: String, nsfw: Boolean) {
    let params = new HttpParams().set("nsfw", nsfw.toString()).set("forTypes", selectedType.toString())
    return this.http.get(`https://sixteenactivities.herokuapp.com/api/memes/random`, { params: params })
  }

  giveReaction(memeId, reaction, undo = false) {
    return this.http.post(`https://sixteenactivities.herokuapp.com/api/memes/${memeId}/react`, { reaction, undo })
  }
}
