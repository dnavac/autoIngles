import { Component } from '@angular/core';
import { SentenceValidatorService } from '../sentence-validator.service';

@Component({
  selector: 'app-sentence-validator',
  templateUrl: './sentence-validator.component.html',
  styleUrls: ['./sentence-validator.component.scss']
})
export class SentenceValidatorComponent {
  sentence: string = '';
  validationResult: string = '';

  constructor(private sentenceValidatorService: SentenceValidatorService) {}

  onSubmit() {
    this.validationResult = this.sentenceValidatorService.validateSentence(this.sentence);
  }
}
