public class Twofer {
    public String twofer(String name) {
        return name != null ? "One for " + name + ", one for me." : twofer();
    }

    public String twofer() {
        return "One for you, one for me.";
    }
}
