class Vehicle {
  public brand: string;
  public model: string;
  public year: number;
  protected speed: number;

  constructor(brand: string, model: string, year: number, speed: number = 0) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.speed = speed;
  }

  public accelerate(amount: number): void {
    this.speed += amount;
    console.log(`Ускорение на ${amount}. Текущая скорость: ${this.speed}`);
  }

  public brake(amount: number): void {
    this.speed -= amount;
    if (this.speed < 0) this.speed = 0;
    console.log(`Замедление на ${amount}. Текущая скорость: ${this.speed}`);
  }

  public info(): void {
    console.log(
      `Марка: ${this.brand}, Модель: ${this.model}, Год выпуска: ${this.year}, Скорость: ${this.speed}`
    );
  }
}

class Car extends Vehicle {
  public fuelType: string;

  constructor(
    brand: string,
    model: string,
    year: number,
    fuelType: string,
    speed: number = 0
  ) {
    super(brand, model, year, speed);
    this.fuelType = fuelType;
  }

  public refuel(): void {
    console.log(`Заправка автомобиля на ${this.fuelType}`);
  }
}

class ElectricCar extends Car {
  private battery: number;

  constructor(
    brand: string,
    model: string,
    year: number,
    batteryLevel: number,
    speed: number = 0
  ) {
    super(brand, model, year, "Electric", speed);
    this.battery = batteryLevel;
  }

  public get batteryLevel(): number {
    return this.battery;
  }

  public set batteryLevel(level: number) {
    if (level < 0) {
      this.battery = 0;
    } else if (level > 100) {
      this.battery = 100;
    } else {
      this.battery = level;
    }
  }

  public charge(amount: number): void {
    console.log(`Зарядка батареи на ${amount}%...`);
    this.batteryLevel += amount;
    console.log(`Новый уровень заряда: ${this.batteryLevel}%`);
  }

  public refuel(): void {
    console.log("Электромобиль не заправляется топливом, его заряжают.");
  }
}
