class Badge {
    public String print(Integer id, String name, String department) {
        if (id == null) {
            return String.format("%s - %s", name, department != null ? department.toUpperCase() : "OWNER");
        }

        return String.format("[%s] - %s - %s", id, name, department != null ? department.toUpperCase() : "OWNER");
    }
}