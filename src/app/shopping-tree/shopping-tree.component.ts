import { Component, OnInit } from '@angular/core';

@Component( {
    selector: 'app-shopping-tree',
    templateUrl: './shopping-tree.component.html',
    styleUrls: ['./shopping-tree.component.css']
} )
export class ShoppingTreeComponent implements OnInit {

    nodes = [
        {
            id: 1,
            name: 'root1',
            children: [
                { id: 2, name: 'child1' },
                { id: 3, name: 'child2' }
            ]
        },
        {
            id: 4,
            name: 'root2',
            children: [
                { id: 5, name: 'child2.1' },
                {
                    id: 6,
                    name: 'child2.2',
                    children: [
                        { id: 7, name: 'subsub' }
                    ]
                }, {
                    id: 8,
                    name: 'child2.3',
                    children: [
                        { id: 9, name: 'sandeep' }]
                }
            ]
        }
    ];
    options = {};
    constructor() { }

    ngOnInit() {
    }

}
