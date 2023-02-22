import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  // @ts-ignore
  squares: string[];
  // @ts-ignore
  xIsNext: boolean;
  // @ts-ignore
  winner: string;

  redPieces: number = 12;
  greyPieces: number = 12;

  chosenPiece: number = -1;

  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  startBoard: Array<String> = [
    '&',' ','&',' ','E',' ','@',' ',
    ' ','&',' ','E',' ','@',' ','@',
    '&',' ','&',' ','E',' ','@',' ',
    ' ','&',' ','E',' ','@',' ','@',
    '&',' ','&',' ','E',' ','@',' ',
    ' ','&',' ','E',' ','@',' ','@',
    '&',' ','&',' ','E',' ','@',' ',
    ' ','&',' ','E',' ','@',' ','@'
  ];

  newGame() {
    //this.squares = Array(64).fill(null);
    this.squares = [
      '&',' ','&',' ','E',' ','@',' ',
      ' ','&',' ','E',' ','@',' ','@',
      '&',' ','&',' ','E',' ','@',' ',
      ' ','&',' ','E',' ','@',' ','@',
      '&',' ','&',' ','E',' ','@',' ',
      ' ','&',' ','E',' ','@',' ','@',
      '&',' ','&',' ','E',' ','@',' ',
      ' ','&',' ','E',' ','@',' ','@'
    ];

    // @ts-ignore
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? '&' : '@';
  }

  // (click)="selectPiece(i)"
  selectPiece(pcn: number){ // Wybierz pole/wroga
      this.chosenPiece = pcn;
  }

  // (click)="makeMove(i)"
  makeMove(idx: number) { // Wybierz figure
    if (this.squares[idx]==this.player) {
      let pion = this.chosenPiece;
      wrog: String;
      if(this.squares[idx]=='&')
        //wrog = '@';

      if(idx==pion+7)
      {

      }
      else if(idx==pion+9)
      {

      }
      else if(idx==pion-7)
      {

      }
      else if(idx==pion-9)
      {

      }

      this.xIsNext = !this.xIsNext;
    }
    // @ts-ignore
    this.winner = this.calculateWinner();
  }


  calculateWinner() {
    let red = 0;
    let grey = 0;

    for (let i = 0; i < 64; i++) {
      if(this.squares[i] == '&')
        red++;
      if(this.squares[i] == '@')
        grey++;
    }

    this.redPieces = red;
    this.greyPieces = grey;

    if(grey<0)// & Wygrywa
    {
      return "Red";
    }
    if(red<0)// @ Wygrywa
    {
      return "Grey";
    }
    return null;
  }

  /*calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }*/
}
