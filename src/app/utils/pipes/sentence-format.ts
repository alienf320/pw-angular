import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sentenceFormat' })
export class SentenceFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    // Remove single quotes and double quotes using a regular expression
    const textWithoutQuotes = value.replace(/['"]/g, '');

    // Split the input string into sentences based on periods (.)
    const sentences = textWithoutQuotes.split('. ');

    // Capitalize the first letter of each sentence
    const capitalizedSentences = sentences.map((sentence) => {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    });

    // Join the sentences back into a single string
    return capitalizedSentences.join('. ');
  }
}
