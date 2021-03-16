import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PokemonService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [NoopAnimationsModule]
  }));

  it('should be created', () => {
    const service: PokemonService = TestBed.get(PokemonService);
    expect(service).toBeTruthy();
  });
});
