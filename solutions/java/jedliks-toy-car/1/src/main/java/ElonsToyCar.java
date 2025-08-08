public class ElonsToyCar {
    private int meters;
    private int percentage;

    public ElonsToyCar() {
        this.meters = 0;
        this.percentage = 100;
    }

    public static ElonsToyCar buy() {
        return new ElonsToyCar();
    }

    public String distanceDisplay() {
        return String.format("Driven %d meters", this.meters);
    }

    public String batteryDisplay() {
        if (this.percentage <= 0) {
            return "Battery empty";
        }

        return String.format("Battery at %d%%", this.percentage);
    }

    public void drive() {
        if (this.percentage == 0) {
            return;
        }

        this.meters += 20;
        this.percentage--;
    }
}
