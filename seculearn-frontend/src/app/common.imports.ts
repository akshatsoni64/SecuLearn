import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

const materialImports = [
  MatToolbarModule,
  MatSidenavModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatExpansionModule,
  MatGridListModule,
  MatCardModule,
  MatChipsModule,
  MatRadioModule,
  MatTooltipModule,
  MatInputModule,
  MatFormFieldModule,
];

const routerImports = [RouterLink, RouterLinkActive, RouterOutlet];

export { materialImports, routerImports };
