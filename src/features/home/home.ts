import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    imports: [CommonModule, FormsModule],
    templateUrl: './home.html',
    styleUrl: './home.css',
})
export class Home {
    protected password = signal("");
    protected allowAccess = signal(false);
    private correctPassword = "SSDM2026%!";
    
    login() {
        if (this.password() == this.correctPassword) {
            this.allowAccess.set(true);
        }
    }
}
