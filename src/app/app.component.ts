import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ this was missing


@Component({
  selector: 'app-root',
  standalone: true, // ✅ you probably forgot this too!
  imports: [RouterOutlet, FormsModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UMstores';
}
