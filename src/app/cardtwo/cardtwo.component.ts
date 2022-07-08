

import { Component, ChangeDetectionStrategy, OnChanges, OnInit, Renderer2, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList, Input, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
import { trigger, state, AnimationBuilder, style, animate, transition } from '@angular/animations';
import { flipState } from '../animation/jokercard.animation';
// import { discard } from '../animation/discard.animation'
// import Constants = require("../../util/Constants");
// import { animate } from '@angular/animations';
import { keyframes } from '@angular/animations';
// import { style } from '@angular/animations';
@Component({
  selector: 'cardtwo',
  templateUrl: './cardtwo.component.html',
  styleUrls: ['./cardtwo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    flipState,
    // discard
  ],
})
export class CardtwoComponent implements OnInit {
  cardArray1 = [['44', '22'], ['3', '35'], ['23', '18'], ['48', '15'], ['33', '5'], ['32', '1', '10']];
  public cardArray2: Array<string> = [''];
  public ind = 0;
  public open_cards = '4';
  public temp_open_card = this.open_cards;
  public jokerCard = 53;
  public temcardArray: any = [];
  public selectcard: boolean = false;
  public c: any;
  public id: any;
  private opencardContainer: any;
  public flip = 'flip_inact';

  @ViewChildren('card')
  card!: QueryList<ElementRef<any>>;


  constructor(public elRef: ElementRef<any>, public discardanimationbuilder: AnimationBuilder) {
  }
  ngOnInit(): void {
    // console.log(this.open_cards.length);

    // // this.flip='flip_active'
    // console.log(this.opencardContainer);
    console.log("init")
  }
  ngAfterViewInit() {
    console.log("After view init");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("onchanges")
  }
  drop(event: CdkDragDrop<string[]>, cardplace: string, i: any) {

    if (event.previousContainer === event.container) {
      moveItemInArray(this.cardArray1[i], event.previousIndex, event.currentIndex);
      console.log("muthu", event);
    } else {
      console.log('muthu', event);
      if (cardplace == 'playercard') {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );

        this.removePlayerEmptyArray();
        this.temcardArray = [];
        console.log(this.cardArray2);
      }

      if (cardplace == 'createGroup' && this.cardArray1.length < 6) {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
        this.removePlayerEmptyArray();
        this.createGroup();
      }
      this.c = this.card.toArray();
      console.log("id array", this.c);

    }
  }

  createGroup() {
    for (let j = 0; j < this.cardArray2.length; j++) {
      if (this.cardArray2[j] === '') {
        const index = this.cardArray2.indexOf('');
        // console.log('muthu',index);
        this.cardArray2.splice(index, 1);
      }
    }
    this.cardArray1.push(this.cardArray2);
    this.cardArray2 = [''];

  }



  removePlayerEmptyArray() {
    let emptyArrRemove = this.cardArray1.filter(element => {
      if (Object.keys(element).length !== 0) {
        return true;
      }
      return false;
    });
    this.cardArray1 = emptyArrRemove;
  }
  updown(elem: any, span: any) {
    elem.style.top = '-10px';
    span.style.backgroundColor = '#000'
    span.style.opacity = '0.2'
  }
  downcard(elem: any, span: any) {
    elem.style.top = '0px';
    span.style.backgroundColor = '#000'
    span.style.opacity = '0'
  }
  public carda: any;
  public offSet: any;
  selectedCard(event: any, i: any, j: any) {
    console.log('id', i);
    let elem = window.document.getElementById('card_id_' + i + j + event) as HTMLElement;
    let spanelem = window.document.getElementById('card_id_0' + i + j + event) as HTMLElement;
    // this.carda=elem;
    this.offSet = elem.getBoundingClientRect()
    console.log('offset', this.offSet.top, this.offSet.left);
    if (this.temcardArray.length === 0) {
      this.temcardArray.push(event);
      console.log(this.temcardArray);

      this.updown(elem, spanelem);
    } else {

      const index = this.temcardArray.indexOf(event);
      //  console.log(index);
      if (index == -1) {

        this.temcardArray.push(event);
        console.log(this.temcardArray);
        this.updown(elem, spanelem);
        return;

      } else {
        this.temcardArray.splice(index, 1);
        console.log(this.temcardArray);

        this.downcard(elem, spanelem);
      }

    }
  }
  public discardAnim = 'inact';
  disCard() {
    let element = window.document.getElementById('openCardTem') as HTMLElement;
    this.discardAnimation(element);
    console.log("opencard", this.temcardArray[0], this.open_cards)

    if (this.temcardArray.length !== 0 && this.temcardArray.length == 1) {

      this.open_cards = this.temcardArray[0];
      for (let i = 0; i < this.cardArray1.length; i++) {
        for (let j = 0; j < this.cardArray1[i].length; j++) {
          if (this.temcardArray == this.cardArray1[i][j]) {
            const index = this.cardArray1[i].indexOf(this.temcardArray[0]);
            console.log('index', index);
            this.cardArray1[i].splice(index, 1);


          }
        }
      }
    }
    this.removePlayerEmptyArray();
    this.temcardArray = [];
  }

  discardAnimation(element: any) {
    this.temp_open_card = this.temcardArray[0]
    // let openCardTem=window.document.getElementById('opencardTem') as HTMLElement;
    let cardX = this.offSet.top;
    let cardY = this.offSet.left;
    // console.log("position",cardx,cardy)
    let discardAnimationFactory = this.discardanimationbuilder.build([
      animate(500, keyframes([
        style({

          top: cardX + 'px',
          left: cardY + 'px',
          // index:5,
          'z-index': 5,
          opacity: 1
        }),
        style({
          top: '20px',
          left: '500px',
          'z-index': 5,
          // index:10,
          opacity: 1
        }),
        style({
          // top:'20px',
          // left:'500px',

          // index:10,
          opacity: 0,
          'z-index': 0
        })
      ]))

    ]);
    const selectedcard = discardAnimationFactory.create(element);
    selectedcard.play();

    selectedcard.onDone(() => {

      // this.open_cards=card_open;
      // selectedcard.destroy;
    });

  }

  changePosition() {

  }
  joker() {
    this.jokerCard = 48;
    // setTimeout(()=>{
    this.flip = 'flip_active';
    console.log('flip', this.flip)
    // },8000);
  }
}
