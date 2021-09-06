import {first} from 'rxjs/operators';
import {DashboardHeroComponent} from './dashboard-hero.component';
import {Hero} from '../../model/hero';


describe('DashboardHeroComponent class test', () => {
  it('raises the selected event when clicked', () => {
    const comp = new DashboardHeroComponent();
    const hero: Hero = {id: 42, name: 'Test'};
    comp.hero = hero;

    comp.selected.pipe(first()).subscribe((selectedHero: Hero) => expect(selectedHero).toBe(hero));
    comp.click();
  });
});
