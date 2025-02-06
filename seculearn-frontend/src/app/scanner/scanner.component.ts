import { Component } from '@angular/core';
import { materialImports } from '../common.imports';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScanService } from '../services/scan.service';

@Component({
  selector: 'app-scanner',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, materialImports],
  templateUrl: './scanner.component.html',
  styleUrl: './scanner.component.css',
})
export class ScannerComponent {
  ip: string = "127.0.0.1";
  scanResult!: any;

  constructor(private service: ScanService) {}

  scan() {
    this.service.scan(this.ip).subscribe((data) => {
      this.scanResult = data;
      console.log("Scan Result:", data);
    });
  }
}
