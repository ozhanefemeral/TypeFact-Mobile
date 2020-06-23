import { Component, OnInit } from '@angular/core';
import { MemeService } from "../meme.service";

@Component({
  selector: 'app-memes',
  templateUrl: './memes.page.html',
  styleUrls: ['./memes.page.scss'],
})

export class MemesPage implements OnInit {
  meme: Object;
  nsfw: Boolean = false;
  selectedType: String = "Everyone";
  reactions: Object[] = [
    { emoji: "😂", value: "funny", isReacted: false },
    { emoji: "😔", value: "sad", isReacted: false },
    { emoji: "😎", value: "cool", isReacted: false },
    { emoji: "😡", value: "angry", isReacted: false },
    { emoji: "💩", value: "tard", isReacted: false },
    { emoji: "🧠", value: "brain", isReacted: false },
    { emoji: "💗", value: "heart", isReacted: false }
  ];

  constructor(private memeService: MemeService) { }

  ngOnInit() { }

  getRandomMeme() {
    this.memeService.getRandomMeme(this.selectedType, this.nsfw)
      .subscribe((data: Object) => {
        this.meme = data;
        this.meme["image"] = "https://sixteenactivities.herokuapp.com/api/memes/" + this.meme["image"];
        this.resetReactions();
      })
  }

  react(index: any) {
    const isReacted = this.reactions[index]["isReacted"];

    this.memeService.giveReaction(this.meme["_id"], this.reactions[index]["value"], isReacted)
      .subscribe((data: Object) => {
        this.meme["reactions"] = data["reactions"];
        this.reactions[index]["isReacted"] = !isReacted;
      })
  }

  resetReactions() {
    this.reactions.forEach(element => {
      element["isReacted"] = false;
    });
  }

}
