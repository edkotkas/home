import { Component, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @Output() blockClicker = new EventEmitter<any>()

  private cross: string = ' cross'
  private oval: string = ' oval'
  private symbol: string

  private gridSize: number = 3

  private blocks = Array(9).fill("")
  private filledBlocks = Array(9).fill("")

  private maxHeight = window.innerHeight
  private maxWidth = window.innerWidth

  constructor() {
    if (this.blocks.length != this.getBlocks()){
      this.blocks = Array(this.getBlocks()).fill("")
      this.filledBlocks = Array(this.getBlocks()).fill("")
    }
  }

  ngOnInit() {
    this.blockClicker.subscribe(event => {
      if(this.gameWon() === false
        && !this.filledBlocks[event.block].includes(this.cross)
        && !this.filledBlocks[event.block].includes(this.oval)) {

        this.swapSymbol()
        this.filledBlocks[event.block] = this.symbol
      }

      if (this.gameWon() === true) {
        this.filledBlocks = this.filledBlocks.map(f =>  f === this.symbol ? f += ' win' : f)
      }
    })
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

  gameWon() {
    let horiz: any = []
    let verti: any = []
    for(let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize; j++) {
        horiz.push(this.checkFilled(i * this.gridSize + j))
      }
      if (!horiz.includes(false)) {
        return true
      }
      horiz = []
    }
    for(let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize ; j++) {
        verti.push(this.checkFilled(j * this.gridSize + i))
      }
      if (!verti.includes(false)) {
        return true
      }
      verti = []
    }

    let diagOne: any = []
    for(let i = 0; i < this.getBlocks(); i+=4) {
        diagOne.push(this.checkFilled(i))
    }
    if(!diagOne.includes(false)){
      return true
    }
    diagOne = []

    let diagTwo: any = []
    for(let i = 2; i < this.gridSize * 2; i+=2) {
      console.log(i)
      diagTwo.push(this.checkFilled(i))
    }
    if (!diagTwo.includes(false)) {
      return true
    }
    diagTwo = []

    return false
  }

  checkFilled(i) {
    return this.filledBlocks[i].includes(this.symbol)
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

  clickBlock(event) {
    this.blockClicker.emit(event)
  }
}
