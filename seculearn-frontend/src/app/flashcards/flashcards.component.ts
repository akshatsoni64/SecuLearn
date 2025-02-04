import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { FlashcardsService } from '../services/flashcards.service';
import { Flashcard } from '../models/flashcards.models';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.css',
})
export class FlashcardsComponent implements OnInit {
  readonly panelOpenState = signal(false);

  flashcards!: Observable<Flashcard[]>;
  constructor(private service: FlashcardsService) {
    console.log('FlashcardsComponent constructor');
  }

  ngOnInit(): void {
    this.flashcards = this.service.getFlashcards();
  }
}
