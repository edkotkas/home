import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TictactwoComponent } from './tictactwo/tictactwo.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { AppsComponent } from './apps/apps.component';

@NgModule({
  declarations: [
    AppComponent,
    TictactwoComponent,
    LoadingScreenComponent,
    MenuComponent,
    HomeComponent,
    PortfolioComponent,
    BlogComponent,
    AppsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
