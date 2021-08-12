import * as fromHistory from './history.actions';

describe('loadHistorys', () => {
  it('should return an action', () => {
    expect(fromHistory.loadHistorys().type).toBe('[History] Load Historys');
  });
});
