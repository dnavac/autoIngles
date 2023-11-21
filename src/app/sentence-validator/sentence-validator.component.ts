import { Component } from '@angular/core';
import { SentenceValidatorService } from '../sentence-validator.service';

@Component({
  selector: 'app-sentence-validator',
  templateUrl: './sentence-validator.component.html',
  styleUrls: ['./sentence-validator.component.scss']
})
export class SentenceValidatorComponent {
  sentence: string = '';
  validationResult: { valid: string[], invalid: string[] } = { valid: [], invalid: [] };

  constructor(private sentenceValidatorService: SentenceValidatorService) {}

  onSubmit() {
    const sentences = this.sentence.split('\n').map(sentence => sentence.trim());
    this.validationResult = this.sentenceValidatorService.validateSentences(sentences);
  }
}
