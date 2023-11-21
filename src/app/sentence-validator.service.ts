import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SentenceValidatorService {
  validateSentences(sentences: string[]): { valid: string[], invalid: string[] } {
    const validSentences: string[] = [];
    const invalidSentences: string[] = [];

    const regex = /\b(I|You|He|She|It|We|They)\s+(am|is|are)\s+/i;

    for (const sentence of sentences) {
      const isValid = (
        sentence.charAt(0).toUpperCase() === sentence.charAt(0) &&
        regex.test(sentence) &&
        sentence.trim().charAt(sentence.length - 1) === '.'
      );

      if (isValid) {
        validSentences.push(sentence);
      } else {
        invalidSentences.push(sentence);
      }
    }

    return { valid: validSentences, invalid: invalidSentences };
  }
}
