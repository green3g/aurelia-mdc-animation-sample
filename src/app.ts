import './app.css';

export class App {
  public items: string[];

  constructor() {
    this.items = [];
    setInterval(() => this.items.push(new Date().toString()), 2000);
  }
}
