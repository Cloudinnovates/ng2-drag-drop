import { Component } from '@angular/core';

@Component({
    selector: 'cross-module-drop-demo',
    templateUrl: 'app/cross-module/drop/drop.component.html',
    styles: [`
    div.scroll-list {
      overflow: auto;
      max-height: 70vh;
    }

    .drag-over {
      border: #ff525b dashed 2px;
    }

    .drag-hint {
      border: #ffc100 dashed 2px;
    }

    .drag-target-border {
      border: #00bfff dashed 2px;
    }

    .drag-target-border-green {
      border: #3c763d dashed 2px;
    }
  `
    ]
})
export class CrossModuleDropDemoComponent {

    vegetables = [
        {name: 'Carrot', type: 'vegetable'},
        {name: 'Onion', type: 'vegetable'},
        {name: 'Potato', type: 'vegetable'},
        {name: 'Capsicum', type: 'vegetable'}];

    fruits = [
        {name: 'Apple', type: 'fruit'},
        {name: 'Orange', type: 'fruit'},
        {name: 'Mango', type: 'fruit'},
        {name: 'Banana', type: 'fruit'}];

    droppedFruits = [];
    droppedVegetables = [];
    droppedItems = [];
    fruitDropEnabled = true;
    dragEnabled = true;

    onFruitDrop(e: any) {
        this.droppedFruits.push(e.dragData);
        this.removeItem(e.dragData, this.fruits);
    }

    onVegetableDrop(e: any) {
        this.droppedVegetables.push(e.dragData);
        this.removeItem(e.dragData, this.vegetables);
    }

    onAnyDrop(e: any) {
        this.droppedItems.push(e.dragData);

        if (e.dragData.type === 'vegetable') {
            this.removeItem(e.dragData, this.vegetables);
        } else {
            this.removeItem(e.dragData, this.fruits);
        }
    }

    removeItem(item: any, list: Array<any>) {
        let index = list.map(function (e) {
            return e.name
        }).indexOf(item.name);
        list.splice(index, 1);
    }
}
