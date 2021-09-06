import {QuoteService} from './Quote.service';

describe('QuoteService', () => {
  let service: QuoteService;

  beforeEach(() => {
    service = new QuoteService();
    service.addNewQuote('This is my first post');
  });

  it('should create a post in an array', () => {
    expect(service.quoteList.length).toBeGreaterThanOrEqual(1);
  });

  it('should remove a created post from the array of posts', () => {
    service.removeQuote(0);
    expect(service.quoteList.length).toBeLessThan(1);
  });

  it('should increase posts array length', () => {
    expect(service.getQuote().length).toBeGreaterThanOrEqual(1);
  });

  it('should decrease posts array length', () => {
    service.removeQuote(0);
    expect(service.getQuote().length).toBeLessThan(1);
  });

  it('should  return post array from promise', () => {
    service.fetchQuotesFromServer().then((resolve: any[]) => {
      expect(resolve.length).toBeGreaterThanOrEqual(1);
    });
  });

});
