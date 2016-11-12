import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tictactwo',
  templateUrl: './tictactwo.component.html',
  styleUrls: ['./tictactwo.component.css']
})

export class TictactwoComponent implements OnInit {

  @Output() blockClicker = new EventEmitter<any>()

  private cross: string = ' cross'
  private oval: string = ' oval'
  private clicked: string = ' clicked'
  private symbol: string

  private gridSize: number = 3

  private blocks = Array(9).fill("")
  private filledBlocks = Array(9).fill("")

  private maxHeight = window.innerHeight
  private maxWidth = window.innerWidth

  ngOnInit() {
  }

  fillBlock(event) {
    let fill = this.isFilled(event.block) && this.allBlocksFilled()
      ? this.endGame()
      : this.udpateBlock(event.block)
  }

  udpateBlock(block) {
    this.swapSymbol()
    this.filledBlocks[block] = this.symbol + this.clicked
    console.log(this.isWinningMove())
  }

  endGame() {
    this.filledBlocks.filter(f =>  f === this.symbol ? f += ' win' : f == "" ? f : f += " lose")
  }

  keyUp(event) {
    if(event.code === 'KeyR') {
      this.reset()
    }
  }

  reset() {
    this.blocks = Array(this.getBlocks()).fill("")
    this.filledBlocks = Array(this.getBlocks()).fill("")
  }

  getBlocks() {
    return this.gridSize * this.gridSize
  }

  allBlocksFilled() {
    return this.filledBlocks
      .filter(f => f.includes(this.clicked)).length === this.filledBlocks.length
  }

  isWinningMove() {

  }

  isFilled(block) {
    return this.filledBlocks[block].includes(this.clicked)
  }

  onResize() {
    this.maxWidth = window.innerWidth
    this.maxHeight = window.innerHeight
  }

  getMaxSymbolSize() {
    let min = this.maxWidth < this.maxHeight
      ? this.maxWidth : this.maxHeight

    return (min - (min / 3)) / 3
  }

  swapSymbol() {
    this.symbol = this.symbol == this.cross ? this.oval : this.cross
  }
}
