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
  private symbol: string = this.cross

  private gridSize: number = 3

  private blocks = Array(this.gridSize * this.gridSize).fill("")
  private filledBlocks = this.blocks

  private maxHeight = window.innerHeight
  private maxWidth = window.innerWidth

  private running: boolean = true

  ngOnInit() {
  }

  tryFill(event) {
    this.running
      ? this.canFillBlock(event.block) && !this.isCombo()
        ? this.fillBlock(event.block)
        : this.isWinningMove(event.block)
      : false
  }

  isWinningMove(block) {
    return this.isCombo()
      ? this.endGame(block)
      : !this.canFillBlock(block)
        ? this.allBlocksFilled()
          ? this.fillAllBlocks()
          : false
        : this.fillAllBlocks()
  }

  canFillBlock(block) {
    return !this.allBlocksFilled() && !this.isFilled(block)
  }

  fillBlock(block) {
    this.swapSymbol()
    this.setBlock(block, this.symbol)
    this.isWinningMove(block)
  }

  setBlock(block, symbol) {
    this.filledBlocks[block] = symbol
  }


  endGame(block) {
    let winningBlock = this.getSymbol(block)
    this.fillBlocksResult(winningBlock, ' win')
    this.fillBlocksResult(this.getOpponent(winningBlock), ' lose')
    this.running = false
  }

  getSymbol(block) {
    return this.getBlock(block).includes(this.cross) ? this.cross : this.oval
  }

  getOpponent(symbol) {
    return symbol.includes(this.cross) ? this.oval : this.cross
  }

  fillBlocksResult(block, result) {
    this.filledBlocks = this.filledBlocks.map(f => f.includes(block) ? f += result : f)
  }

  fillAllBlocks() {
    console.log('i got hit')
    this.filledBlocks = this.filledBlocks.map(f => f += ' tie')
    return true
  }

  isKeyR(event) {
    return event.code === 'KeyR'
      ? this.reset()
      : false
  }

  reset() {
    this.blocks = Array(this.getBlocks()).fill("")
    this.filledBlocks = Array(this.getBlocks()).fill("")
    this.running = true
  }

  getBlocks() {
    return this.gridSize * this.gridSize
  }

  allBlocksFilled() {
    return this.filledBlocks.filter(f => f === "").length === 0
  }

  isCombo() {
    let comboBase = Array(this.gridSize).fill(0)

    let diagonalLeft = comboBase
      .map((c, i) => this.filledBlocks[i * this.gridSize + i])
      .filter(d => d.includes(this.symbol)).length == this.gridSize

    let diagonalRight = comboBase
      .map((c, i) => this.filledBlocks[(this.gridSize - 1) * i + (this.gridSize - 1)])
      .filter(d => d.includes(this.symbol)).length == this.gridSize

    let horizontals = comboBase.fill(comboBase)
      .map((c, i) => c.map((ic, ii) => this.filledBlocks[i * this.gridSize + ii]).filter(d => d.includes(this.symbol)).length == this.gridSize)
      .filter(c => c === true).length > 0

    let verticals = comboBase.fill(comboBase)
      .map((c, i) => c.map((ic, ii) => this.filledBlocks[ii * this.gridSize + i]).filter(d => d.includes(this.symbol)).length == this.gridSize)
      .filter(c => c === true).length > 0

    return diagonalRight || diagonalLeft || horizontals || verticals
  }

  getBlock(id) {
    return this.filledBlocks[id]
  }

  isFilled(block) {
    return this.getBlock(block) !== ""
  }

  onResize() {
    this.maxWidth = window.innerWidth
    this.maxHeight = window.innerHeight
  }

  getMaxSymbolSize() {
    let min = Math.min(this.maxWidth, this.maxHeight)
    return (min - (min / 3)) / 3
  }

  swapSymbol() {
    this.symbol = this.symbol == this.cross ? this.oval : this.cross
  }
}
