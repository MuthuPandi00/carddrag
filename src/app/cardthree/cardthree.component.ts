import { Component, OnInit, Renderer2, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
@Component({
  selector: 'cardthree',
  templateUrl: './cardthree.component.html',
  styleUrls: ['./cardthree.component.css']
})
export class CardthreeComponent implements OnInit, AfterViewInit {
  cardArray1 = ['44', '22', '3', '35', '23', '18', '48', '15', '33', '5', '32', '1', '10'];
  public cardArray2: Array<any> = [''];
  public open_cards = ['4'];
  public temcardArray: any = [];
  public selectcard = [false, false, false, false, false, false, false, false, false, false];
  public c: any;
  @ViewChildren('card')
  card!: QueryList<ElementRef<any>>;
  // public element=document.getElementById('card')

  constructor(public elRef: ElementRef<any>) {
  }
  ngOnInit(): void {
    console.log(this.open_cards.length);
  }
  ngAfterViewInit() {
    //  this.card.nativeElement.style.backgroundColor='green';
    this.c = this.card.toArray();
    console.log("id array", this.c);
  }
  ngOnChanges(data: any) {

    this.c = this.card.toArray();

  }

  drop(event: CdkDragDrop<any>, cardplace: string) {
    // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    if (event.previousContainer === event.container) {
      moveItemInArray(this.cardArray1, event.previousIndex, event.currentIndex);
      console.log("muthu", event);
    } else {
      console.log('muthu', event);
      if (cardplace !== 'createGroup') {
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

    }
  }

  createGroup() {
    for (let j = 0; j < this.cardArray2.length; j++) {
      if (this.cardArray2[j] === '') {
        const index = this.cardArray2.indexOf('');
        console.log('muthu', index);
        this.cardArray2.splice(index, 1);
      }
    }
    this.cardArray1.push(this.cardArray2[0]);
    this.cardArray2 = [''];
    console.log('cardarray', this.cardArray1);
  }



  removePlayerEmptyArray() {
    let emptyArrRemove = this.cardArray1.filter(element => {
      if (Object.keys(element).length !== 0) {
        return true;
      }
      return false;
    });
    this.cardArray1 = emptyArrRemove;
    // this.c=this.card.toArray();
  }
  updown(i: any) {
    this.selectcard[i] = !this.selectcard[i];
    // console.log(i,'','',this.selectcard);
    if (this.selectcard[i]) {
      this.c[i].nativeElement.style.top = '-10px';
      this.c[i].nativeElement.style.opacity = '0.5';

    } else {
      this.c[i].nativeElement.style.top = '0px';
      this.c[i].nativeElement.style.opacity = '1';
    }
  }
  public carda: any;
  selectedCard(event: any, i: any) {
    this.updown(i)
    // this.carda=event;
    console.log('event', i);
    console.log("temp", this.temcardArray.length);
    if (this.temcardArray.length === 0) {
      this.temcardArray.push(event);
      console.log('temp', this.temcardArray);
      return;
      // this.cardselected.nativeElement.backgroundColor='green'
      // this.selectcard=!this.selectcard;
      // this.updown(i);
    } else {
      // this.selectcard=!this.selectcard;
      for (let i = 0; i < this.temcardArray.length; i++) {
        if (this.temcardArray[i] === event) {
          const index = this.temcardArray.indexOf(event);
          this.temcardArray.splice(index, 1);
          console.log('temp', this.temcardArray);
          return;
        }

      }
      // this.updown(i);
      this.temcardArray.push(event);
      console.log('temp', this.temcardArray);
      return;
      // this.selectcard=!this.selectcard;
      // this.selectcard[i]=!this.selectcard[i];
      // this.updown(i);

    }
  }


  disCard() {
    if (this.temcardArray.length !== 0 && this.temcardArray.length == 1) {
      this.open_cards.pop();
      this.open_cards.push(this.temcardArray)
      for (let i = 0; i < this.cardArray1.length; i++) {
        // for(let j=0;j<this.cardArray1[i].length;j++)
        // {
        if (this.temcardArray == this.cardArray1[i]) {
          const index = this.cardArray1.indexOf(this.temcardArray[0]);
          console.log(index);
          this.cardArray1.splice(index, 1);
          this.c = this.card.toArray()
        }
        // }
      }
    }
    // this.c=this.card.toArray();
    this.removePlayerEmptyArray();
    this.temcardArray = [];
  }



  changePosition() {
    //  this.elName.nativeElement.style.top ='10px';
  }

}
