/**
 * Base class for all view models
 */
abstract class BaseViewModel {
    title: string;

    /**
     * Default constructor
     * @param title View title
     */
    protected constructor(title: string) {
        if (!title || title.length == 0)
            throw new Error("Argument title cannot be null or empty");

        this.title = title;
    }
}