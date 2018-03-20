import { Component, OnInit } from '@angular/core';

@Component( {
    selector: 'app-drag-drop',
    templateUrl: './drag-drop.component.html',
    styleUrls: ['./drag-drop.component.css']
} )
export class DragDropComponent implements OnInit {

    droppedItems = [];
    items = [
        { name: 'Apple', type: 'fruit' },
        { name: 'Carrot', type: 'vegetable' },
        { name: 'Orange', type: 'fruit' }];

    onItemDrop( e: any ) {
        // Get the dropped data here
           this.droppedItems.push( e.dragData );
    }
    constructor() { }

    ngOnInit() {
    }

}
