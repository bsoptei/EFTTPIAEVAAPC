class Main {
  static main() {
    [Controller, View, Game].forEach((component) => component.init());
  }
}
