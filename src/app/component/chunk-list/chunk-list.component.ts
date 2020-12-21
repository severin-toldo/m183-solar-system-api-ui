import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-chunk-list',
  templateUrl: './chunk-list.component.html',
  styleUrls: ['./chunk-list.component.scss']
})
export class ChunkListComponent {

  @Input() public list: any[];
  @Input() public displayPropertyName: string;
  @Input() public chunkSize = 3;

  @Output() public onClick = new EventEmitter<any>();


  constructor() {
  }

  public chunkArray(): any[] {
    let arrayLength = this.list.length;
    let tmpArray = [];

    for (let index = 0; index < arrayLength; index += this.chunkSize) {
      const chunk: any[] = this.list.slice(index, index + this.chunkSize);

      if (chunk.length !== this.chunkSize) {
        chunk.push(null);
      }

      tmpArray.push(chunk);
    }

    return tmpArray;
  }

  public onElementClick(element: any): void {
    this.onClick.emit(element);
  }
}
