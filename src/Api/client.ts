import { httpClient } from './httpClient';

export async function searchBooks(value: string, index: number) {
  return httpClient.get(`/books/v1/volumes?q=${value}&maxResults=40&startIndex=${index}`);
}
