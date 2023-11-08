import { Injectable } from '@angular/core';

type RegexRules = {
  [key: string]: RegExp;
};

@Injectable({
  providedIn: 'root'
})
export class SentenceValidatorService {
  regexRules: RegexRules = {
    'F ==> I am C': /^I am [a-z0-9 ]+$/,
    'F ==> You are C': /^You are [a-z0-9 ]+$/,
    'F ==> He is C': /^He is [a-z0-9 ]+$/,
    'F ==> She is C': /^She is [a-z0-9 ]+$/,
    'F ==> It is C': /^It is [a-z0-9 ]+$/,
    'F ==> We are C': /^We are [a-z0-9 ]+$/,
    'F ==> They are C': /^They are [a-z0-9 ]+$/,
    'F ==> [A-Z][a-z]+ is C': /^[A-Z][a-z]+ is [a-z0-9 ]+$/,
    'F ==> The [a-z]+ is C': /^The [a-z]+ is [a-z0-9 ]+$/,
    'F ==> The [a-z]+s are C': /^The [a-z]+s are [a-z0-9 ]+$/,
    'C ==>  [a-z0-9 ]+': /^[a-z0-9 ]+$/,
  };

  validateSentence(sentence: string): string {
    for (const rule in this.regexRules) {
      if (Object.prototype.hasOwnProperty.call(this.regexRules, rule)) {
        if (this.regexRules[rule].test(sentence)) {
          return 'Válido';
        }
      }
    }

    return 'Inválido';
  }
}
