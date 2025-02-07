import { Player } from "./player";

describe('LevelUpComponent', () => {
    let player: Player;

    beforeEach(() => {
      player = new Player(0, 0);
    });

    it('should gain 10 experience point each day', () =>{
      player.newDay();
      expect(player.experience).toBe(10);
    });

    it('should start with 0 in experience and level', () => {
      expect(player.experience).toBe(0);
      expect(player.level).toBe(0);
    });

    it('should win a level when experience equal 100', () => {
      player.experience = 100;
      player.newDay();
      expect(player.level).toBe(1);
    });

    it('should keep the same level', () => {
      player.newDay();
      expect(player.level).toBe(0);
    });

    it('max level should be 10', () => {
      expect(player.level).toBeLessThanOrEqual(10);
    });

    it('should have a level strictly inferior to 11', () => {
      expect(player.level).toBeLessThan(11);
    });

    it('should never have initial experience very high', () => {
      expect(player.experience).toBeLessThan(100);
    });

    it('should never have negative experience', () =>{
      expect(player.experience).toBeGreaterThanOrEqual(0);
    });

    it('should never have negative level', () =>{
      expect(player.level).toBeGreaterThanOrEqual(0);
    });

    it('experience and level should be a valid number', () => {
      expect(player.experience).toBeGreaterThanOrEqual(0);
      expect(player.level).toBeGreaterThanOrEqual(0);
    });

    describe('experience excess', () => {
        it('should keep the experience excess after level up', () => {
          player.experience = 110;
          player.newDay();
          expect(player.level).toBeGreaterThanOrEqual(0);
          expect(player.experience).toBe(10);
        });
    });
});
