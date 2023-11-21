import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SentenceValidatorService {

  /**
   * Se optienen tanto las frases validas, como invalidas del formulario
   */
  validateSentences(sentences: string[]): { valid: string[], invalid: string[] } {
    /**
     * Se inicializan los arrays para almacenar las frases validas e invalidas
     */
    const validSentences: string[] = [];
    const invalidSentences: string[] = [];

    /**
     * Expresión regular para almacenar frases válidas e invalidas
    */
    const regex = /\b(I|You|He|She|It|We|They)\s+(am|is|are)\s+/i;

    for (const sentence of sentences) {
      /**
       * Verificar condiciones:
       * 1. comienza con mayuscula
       * 2.Sigue la estructura de afirmativo presente
       * 3. Termina en punto
       */
      const isValid = (
        sentence.charAt(0).toUpperCase() === sentence.charAt(0) &&
        regex.test(sentence) &&
        sentence.trim().charAt(sentence.length - 1) === '.'
      );

      /**
       * Se agg la frase al arrays que corresponde
      */
      if (isValid) {
        validSentences.push(sentence);
      } else {
        invalidSentences.push(sentence);
      }

    }

    /**
     * Redirige al resultado con los datos
     */
    return { valid: validSentences, invalid: invalidSentences };
  }
}
