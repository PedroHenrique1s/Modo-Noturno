import { Component } from '@angular/core';
import { ETheme } from './enums/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public icon:string = ETheme.ICON_LUA;
  public textTheme:string = ETheme.TEXT_LUA;

  public toggle(){
    const theme =  document.body.classList.toggle('dark-theme');

    if(theme){
      this.textTheme = ETheme.TEXT_SOL;
      return this.icon = ETheme.ICON_SOL;
    }

    this.textTheme = ETheme.TEXT_LUA;
    return (this.icon= ETheme.ICON_LUA);
  }
}
