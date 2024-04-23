import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

class GottaSnatchEmAll {

    static Set<String> newCollection(List<String> cards) {
        return new HashSet<>(cards);
    }

    static boolean addCard(String card, Set<String> collection) {
        return collection.add(card);
    }

    static boolean canTrade(Set<String> myCollection, Set<String> theirCollection) {
        if (myCollection.isEmpty())
            return false;

        if (theirCollection.isEmpty())
            return false;

        if (myCollection.containsAll(theirCollection)) {
            return false;
        }

        return !myCollection.equals(theirCollection);
    }

    static Set<String> commonCards(List<Set<String>> collections) {
        Set<String> theCommonCards = new HashSet<>(collections.get(0));

        collections.forEach((collection) -> {
            theCommonCards.retainAll(collection);
        });

        return theCommonCards;
    }

    static Set<String> allCards(List<Set<String>> collections) {
        return new HashSet<>(collections.stream().flatMap(Set::stream).collect(Collectors.toList()));
    }
}
