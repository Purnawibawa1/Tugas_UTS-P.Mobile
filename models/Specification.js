class Specification {
    constructor(
        id,
        categoriId,
        complexity,
        imageURL,
        // duration,
        ingredients,
        steps,
    ) {
        this.id=id,
        this.categoriId=categoriId,
        this.complexity=complexity,
        this.imageURL=imageURL,
        // this.duration=duration,
        this.ingredients=ingredients,
        this.steps=steps
    }
}

export default Specification