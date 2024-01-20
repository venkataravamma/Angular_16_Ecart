import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  //Optional 2nd argument of @ViewChile()
  //1.read: Use it to read the different token from the queired element
  //2.static: Determines when the query is resolved .
  //  True is when the view is intialized for the first time
  //   False if you want it to be resolved after every change detection
  @ViewChild('searchInput') searchInputEl: ElementRef;

  //inputEL: HTMLInputElement
  updateSearchText() {
    //this.searchText = inputEL.value;
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }

  onSearchTextChanged() {
    // this.searchTextChanged.emit(this.searchText);
  }
}
