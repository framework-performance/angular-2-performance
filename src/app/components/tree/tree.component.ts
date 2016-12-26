import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {INode} from "../../models/node.models";

@Component({
  selector: 'ngrx-tree',
  template: `
      <ul>
        <li *ngFor="let node of nodes;let index = index">
              <ngrx-node
                  (onSelectNode)="selectNode($event,index)" 
                  [node]="node"></ngrx-node>
              <ngrx-tree 
                  (onSelectTreeNode)="selectNode($event,index)" 
                  [nodes]="node.nodes"></ngrx-tree>
        </li>
      </ul>
  `,
  styleUrls: ['./tree.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeComponent {
  @Input() nodes: Array<INode>;
  @Output() onSelectTreeNode = new EventEmitter();

  selectNode(nodePath = [], index = 0) {
    this.onSelectTreeNode.emit([...nodePath, index]);
  }
}
